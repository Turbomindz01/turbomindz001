# Supabase — Turbomindz schema & migrations

This directory holds the canonical SQL for the Turbomindz database. Apply it
manually via the Supabase SQL Editor, or use the Supabase CLI for repeatable
migrations.

## One-time setup

1. Create a project at <https://app.supabase.com>.
2. **Settings → API**, copy three values into `app/.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL` = Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `anon` `public` key
   - `SUPABASE_SERVICE_ROLE_KEY` = `service_role` `secret` key (server-only)
3. **SQL Editor → New query**, paste `migrations/0001_initial_schema.sql`, run.
4. **SQL Editor → New query**, paste `seed.sql`, run. Loads themes + characters.
5. Restart `npm run dev`. The wallet → profile sync will activate automatically.

## Auth model

We do **not** use Supabase Auth. Wallet auth is provided by thirdweb. RLS is
configured for read-mostly public access. All writes flow through Next.js API
routes that verify the caller's wallet signature, then use the
`SUPABASE_SERVICE_ROLE_KEY` to perform privileged inserts/updates.

## Realtime

`marriage_requests` and `verified_marriages` are added to the
`supabase_realtime` publication so the app can subscribe to live status
changes.

## Regenerating types

After schema changes, regenerate `src/lib/supabase/types.ts`:

```bash
npx supabase login
npx supabase gen types typescript --project-id <ref> --schema public > ../src/lib/supabase/types.ts
```
