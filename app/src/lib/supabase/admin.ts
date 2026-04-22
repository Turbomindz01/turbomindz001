/**
 * Server-side Supabase admin client (service role key).
 * NEVER import from a Client Component or any code shipped to the browser.
 *
 * Used by Next.js API routes that have already verified the caller's
 * wallet signature.
 */
import 'server-only';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { env, serverEnv } from '@/lib/env';
import type { Database } from './types';

let cached: SupabaseClient<Database> | null = null;

export function getSupabaseAdminClient(): SupabaseClient<Database> {
  if (cached) return cached;

  if (!env.supabaseUrl) {
    throw new Error('[supabase admin] NEXT_PUBLIC_SUPABASE_URL is not set.');
  }
  const serviceRoleKey = serverEnv.supabaseServiceRoleKey;
  if (!serviceRoleKey) {
    throw new Error('[supabase admin] SUPABASE_SERVICE_ROLE_KEY is not set.');
  }

  cached = createClient<Database>(env.supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  return cached;
}
