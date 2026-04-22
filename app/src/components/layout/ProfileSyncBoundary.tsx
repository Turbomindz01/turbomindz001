'use client';

import { useProfileSync } from '@/hooks/useProfileSync';

/**
 * Headless component — runs the profile-sync hook in the React tree.
 * Renders nothing. Mounted once at the root layout so wallet → Supabase
 * profile hydration is global.
 */
export function ProfileSyncBoundary(): null {
  useProfileSync();
  return null;
}
