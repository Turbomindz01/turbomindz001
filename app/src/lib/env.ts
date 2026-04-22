/**
 * Centralized environment variable access with development-friendly warnings.
 * Server-only secrets MUST NOT be imported from client components.
 */

const isServer = typeof window === 'undefined';

function readPublic(name: string, fallback = ''): string {
  // NEXT_PUBLIC_* vars are inlined at build time and safe on the client.
  const value = process.env[name];
  if (!value || value === 'your-client-id-here' || value === 'placeholder') {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`[env] ${name} is not configured. Some features may be disabled.`);
    }
    return fallback;
  }
  return value;
}

function readServer(name: string, fallback = ''): string {
  if (!isServer) {
    throw new Error(`[env] ${name} is server-only and cannot be read in the browser.`);
  }
  const value = process.env[name];
  if (!value) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`[env] ${name} is not configured. Server features may be disabled.`);
    }
    return fallback;
  }
  return value;
}

export const env = {
  // ─── Public (client-safe) ─────────────────────────
  thirdwebClientId: readPublic('NEXT_PUBLIC_THIRDWEB_CLIENT_ID', 'placeholder'),
  supabaseUrl: readPublic('NEXT_PUBLIC_SUPABASE_URL'),
  supabaseAnonKey: readPublic('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
  appUrl: readPublic('NEXT_PUBLIC_APP_URL', 'http://localhost:3000'),

  // ─── Feature flags derived from configuration ─────
  get isSupabaseConfigured() {
    return Boolean(this.supabaseUrl && this.supabaseAnonKey);
  },
  get isThirdwebConfigured() {
    return this.thirdwebClientId !== 'placeholder';
  },
};

/** Server-only env. Import only from server components or API routes. */
export const serverEnv = {
  get supabaseServiceRoleKey() {
    return readServer('SUPABASE_SERVICE_ROLE_KEY');
  },
  get openseaApiKey() {
    return readServer('OPENSEA_API_KEY');
  },
  get pinataApiKey() {
    return readServer('PINATA_API_KEY');
  },
  get pinataSecretApiKey() {
    return readServer('PINATA_SECRET_API_KEY');
  },
  get buttondownApiKey() {
    return readServer('BUTTONDOWN_API_KEY');
  },
};
