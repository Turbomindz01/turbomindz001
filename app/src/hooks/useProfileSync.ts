/**
 * Bridges the wallet store and the profile store with Supabase.
 *
 * - On wallet connect: ensures a Supabase profiles row exists for the wallet,
 *   then hydrates the local Zustand profile store from the DB row.
 * - On wallet disconnect: clears the local profile cache.
 * - When Supabase isn't configured, no-ops gracefully (mock/local-only mode).
 */
'use client';

import { useEffect, useRef } from 'react';
import { useWalletStore } from '@/lib/wallet-store';
import { useProfileStore } from '@/lib/profile-store';
import { ensureProfileExists } from '@/lib/supabase/queries/profile';
import { env } from '@/lib/env';
import type { ProfileRow } from '@/lib/supabase/types';

/** Map a DB row onto the existing local UserProfile shape. */
function hydrateLocalFromRow(row: ProfileRow) {
  return {
    username: row.username ?? '',
    bio: row.bio ?? '',
    avatarUrl: row.avatar_url ?? '',
    socialLinks: {
      twitter: row.twitter ?? '',
      discord: row.discord ?? '',
      opensea: row.opensea ?? '',
    },
    preferences: {
      emailNotifications: row.email_notifications,
      marketplaceAlerts: row.marketplace_alerts,
      privacyLevel: row.privacy_level,
    },
  };
}

export function useProfileSync(): { isSyncing: boolean; isConfigured: boolean } {
  const address = useWalletStore((s) => s.address);
  const isConnected = useWalletStore((s) => s.isConnected);
  const updateProfile = useProfileStore((s) => s.updateProfile);
  const updateSocialLinks = useProfileStore((s) => s.updateSocialLinks);
  const updatePreferences = useProfileStore((s) => s.updatePreferences);
  const resetProfile = useProfileStore((s) => s.resetProfile);

  const lastSyncedAddress = useRef<string | null>(null);
  const isSyncing = useRef(false);

  useEffect(() => {
    if (!env.isSupabaseConfigured) return;
    if (!isConnected || !address) {
      // Disconnect: clear local cache so next user starts fresh.
      if (lastSyncedAddress.current) {
        resetProfile();
        lastSyncedAddress.current = null;
      }
      return;
    }
    if (lastSyncedAddress.current === address) return;

    let cancelled = false;
    isSyncing.current = true;

    (async () => {
      const row = await ensureProfileExists(address);
      if (cancelled || !row) return;

      const hydrated = hydrateLocalFromRow(row);
      // Apply slice-by-slice to keep zustand actions atomic.
      updateProfile({
        username: hydrated.username,
        bio: hydrated.bio,
        avatarUrl: hydrated.avatarUrl,
      });
      updateSocialLinks(hydrated.socialLinks);
      updatePreferences(hydrated.preferences);
      lastSyncedAddress.current = address;
      isSyncing.current = false;
    })();

    return () => {
      cancelled = true;
    };
  }, [address, isConnected, updateProfile, updateSocialLinks, updatePreferences, resetProfile]);

  return {
    isSyncing: isSyncing.current,
    isConfigured: env.isSupabaseConfigured,
  };
}
