/**
 * Subscribe to live changes on marriage_requests and verified_marriages
 * via Supabase Realtime.
 *
 * Both tables are in the supabase_realtime publication
 * (see supabase/migrations/0001_initial_schema.sql).
 *
 * Usage:
 *   const { requests, marriages, isLive } = useMarriageRealtime({ wallet });
 */
'use client';

import { useEffect, useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';
import type {
  MarriageRequestRow,
  VerifiedMarriageRow,
} from '@/lib/supabase/types';

export interface UseMarriageRealtimeOptions {
  /** Optional wallet filter — only events involving this wallet bubble up. */
  wallet?: string | null;
}

export interface UseMarriageRealtimeResult {
  requests: MarriageRequestRow[];
  marriages: VerifiedMarriageRow[];
  isLive: boolean;
  error: string | null;
}

export function useMarriageRealtime(
  options: UseMarriageRealtimeOptions = {}
): UseMarriageRealtimeResult {
  const wallet = options.wallet?.toLowerCase() ?? null;
  const [requests, setRequests] = useState<MarriageRequestRow[]>([]);
  const [marriages, setMarriages] = useState<VerifiedMarriageRow[]>([]);
  const [isLive, setIsLive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) {
      setIsLive(false);
      return;
    }

    let cancelled = false;

    // ─── Initial hydration ─────────────────────────────
    (async () => {
      const reqQuery = client
        .from('marriage_requests')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
      const marQuery = client
        .from('verified_marriages')
        .select('*')
        .eq('is_active', true)
        .order('verified_at', { ascending: false })
        .limit(50);

      const [reqRes, marRes] = await Promise.all([reqQuery, marQuery]);

      if (cancelled) return;
      if (reqRes.error) setError(reqRes.error.message);
      if (marRes.error) setError(marRes.error.message);

      const reqRows = (reqRes.data ?? []).filter((r) =>
        wallet
          ? r.proposer_address.toLowerCase() === wallet ||
            r.partner_address.toLowerCase() === wallet
          : true
      );
      const marRows = (marRes.data ?? []).filter((r) =>
        wallet
          ? r.proposer_address.toLowerCase() === wallet ||
            r.partner_address.toLowerCase() === wallet
          : true
      );
      setRequests(reqRows);
      setMarriages(marRows);
    })();

    // ─── Live subscription ─────────────────────────────
    const channel = client
      .channel('marriage-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'marriage_requests' },
        (payload) => {
          if (cancelled) return;
          setRequests((prev) =>
            applyChange<MarriageRequestRow>(prev, payload, wallet, [
              'proposer_address',
              'partner_address',
            ])
          );
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'verified_marriages' },
        (payload) => {
          if (cancelled) return;
          setMarriages((prev) =>
            applyChange<VerifiedMarriageRow>(prev, payload, wallet, [
              'proposer_address',
              'partner_address',
            ])
          );
        }
      )
      .subscribe((status) => {
        if (cancelled) return;
        setIsLive(status === 'SUBSCRIBED');
      });

    return () => {
      cancelled = true;
      client.removeChannel(channel);
    };
  }, [wallet]);

  return { requests, marriages, isLive, error };
}

// ────────────────────────── helpers ────────────────────────────
type RealtimePayload<T> = {
  eventType: 'INSERT' | 'UPDATE' | 'DELETE';
  new: T | Record<string, never>;
  old: T | Record<string, never>;
};

function applyChange<T extends { id: string }>(
  prev: T[],
  payload: unknown,
  wallet: string | null,
  walletFields: (keyof T)[]
): T[] {
  const p = payload as RealtimePayload<T>;
  const involves = (row: T) => {
    if (!wallet) return true;
    return walletFields.some(
      (f) => String(row[f] ?? '').toLowerCase() === wallet
    );
  };

  if (p.eventType === 'DELETE') {
    const oldRow = p.old as T;
    return prev.filter((r) => r.id !== oldRow?.id);
  }
  const next = p.new as T;
  if (!next || !involves(next)) return prev;

  if (p.eventType === 'INSERT') {
    return [next, ...prev.filter((r) => r.id !== next.id)].slice(0, 50);
  }
  // UPDATE
  return prev.map((r) => (r.id === next.id ? next : r));
}
