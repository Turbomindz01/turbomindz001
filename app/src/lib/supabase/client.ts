/**
 * Browser-side Supabase client (anon key).
 * Safe to import from Client Components.
 *
 * Returns `null` when Supabase is not configured — callers must handle
 * the unconfigured state and fall back to mock data.
 */
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { env } from '@/lib/env';
import type { Database } from './types';

let cached: SupabaseClient<Database> | null = null;

export function getSupabaseBrowserClient(): SupabaseClient<Database> | null {
  if (!env.isSupabaseConfigured) return null;
  if (cached) return cached;

  cached = createClient<Database>(env.supabaseUrl, env.supabaseAnonKey, {
    auth: {
      // We use thirdweb wallet auth, not Supabase Auth.
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    realtime: {
      params: { eventsPerSecond: 5 },
    },
  });

  return cached;
}

/** Convenience: returns the client or throws a clear error. Use in code paths
 *  that require Supabase (e.g. live data pages). */
export function requireSupabaseBrowserClient(): SupabaseClient<Database> {
  const client = getSupabaseBrowserClient();
  if (!client) {
    throw new Error(
      '[supabase] Browser client requested but env is not configured. ' +
        'Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.'
    );
  }
  return client;
}
