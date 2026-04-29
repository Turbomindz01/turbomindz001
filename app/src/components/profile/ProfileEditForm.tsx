'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useActiveAccount } from 'thirdweb/react';
import { useProfileStore } from '@/lib/profile-store';
import { signAuthNonce } from '@/lib/auth/sign-message';
import { env } from '@/lib/env';

type SaveState = 'idle' | 'signing' | 'saving' | 'saved' | 'error';

export function ProfileEditForm() {
  const account = useActiveAccount();
  const { profile, lastSaved, updateProfile, updateSocialLinks } = useProfileStore();
  const [formState, setFormState] = useState(profile);
  const [save, setSave] = useState<SaveState>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Sync form state when store changes externally (e.g. profile-sync hook)
  useEffect(() => {
    setFormState(profile);
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Local-only optimistic update (always)
    updateProfile({
      username: formState.username,
      bio: formState.bio,
      avatarUrl: formState.avatarUrl,
    });
    updateSocialLinks(formState.socialLinks);

    // If Supabase isn't configured, we're done (local-only mode).
    if (!env.isSupabaseConfigured) {
      setSave('saved');
      setTimeout(() => setSave('idle'), 3000);
      return;
    }

    // Otherwise persist to Supabase via signed API call.
    if (!account) {
      setErrorMsg('Connect your wallet to save to the cloud.');
      setSave('error');
      setTimeout(() => setSave('idle'), 4000);
      return;
    }

    try {
      setSave('signing');
      const signed = await signAuthNonce(account);

      setSave('saving');
      const res = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...signed,
          updates: {
            username: formState.username,
            bio: formState.bio,
            avatar_url: formState.avatarUrl,
            twitter: formState.socialLinks.twitter,
            discord: formState.socialLinks.discord,
            opensea: formState.socialLinks.opensea,
            email_notifications: formState.preferences.emailNotifications,
            marketplace_alerts: formState.preferences.marketplaceAlerts,
            privacy_level: formState.preferences.privacyLevel,
          },
        }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }

      setSave('saved');
      setTimeout(() => setSave('idle'), 3000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Save failed');
      setSave('error');
      setTimeout(() => setSave('idle'), 4000);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-sm';

  const buttonLabel: Record<SaveState, string> = {
    idle: 'Save Profile',
    signing: 'Sign in your wallet…',
    saving: 'Saving…',
    saved: 'Saved ✓',
    error: 'Try again',
  };
  const buttonDisabled = save === 'signing' || save === 'saving';

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Avatar & Username */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="username" className="block text-warm-white/60 text-sm mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={formState.username}
            onChange={(e) => setFormState((s) => ({ ...s, username: e.target.value }))}
            placeholder="Enter your display name"
            maxLength={32}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="avatarUrl" className="block text-warm-white/60 text-sm mb-2">
            Avatar URL
          </label>
          <input
            id="avatarUrl"
            type="url"
            value={formState.avatarUrl}
            onChange={(e) => setFormState((s) => ({ ...s, avatarUrl: e.target.value }))}
            placeholder="https://example.com/avatar.png"
            className={inputClass}
          />
        </div>
      </div>

      {/* Bio */}
      <div>
        <label htmlFor="bio" className="block text-warm-white/60 text-sm mb-2">
          Bio
        </label>
        <textarea
          id="bio"
          value={formState.bio}
          onChange={(e) => setFormState((s) => ({ ...s, bio: e.target.value }))}
          placeholder="Tell the community about your philosophical journey..."
          maxLength={280}
          rows={3}
          className={`${inputClass} resize-none`}
        />
        <p className="text-warm-white/30 text-xs mt-1 text-right">
          {formState.bio.length}/280
        </p>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-warm-white font-semibold mb-4 text-sm uppercase tracking-wider">
          Social Links
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="twitter" className="block text-warm-white/60 text-xs mb-1.5">
              Twitter / X
            </label>
            <input
              id="twitter"
              type="text"
              value={formState.socialLinks.twitter}
              onChange={(e) =>
                setFormState((s) => ({
                  ...s,
                  socialLinks: { ...s.socialLinks, twitter: e.target.value },
                }))
              }
              placeholder="@handle"
              maxLength={64}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="discord" className="block text-warm-white/60 text-xs mb-1.5">
              Discord
            </label>
            <input
              id="discord"
              type="text"
              value={formState.socialLinks.discord}
              onChange={(e) =>
                setFormState((s) => ({
                  ...s,
                  socialLinks: { ...s.socialLinks, discord: e.target.value },
                }))
              }
              placeholder="username#0000"
              maxLength={64}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="opensea" className="block text-warm-white/60 text-xs mb-1.5">
              OpenSea
            </label>
            <input
              id="opensea"
              type="text"
              value={formState.socialLinks.opensea}
              onChange={(e) =>
                setFormState((s) => ({
                  ...s,
                  socialLinks: { ...s.socialLinks, opensea: e.target.value },
                }))
              }
              placeholder="opensea.io/username"
              maxLength={128}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={buttonDisabled}
          className="px-6 py-3 bg-gold text-rich-black font-semibold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {buttonLabel[save]}
        </button>
        {save === 'saved' && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-green-400 text-sm font-medium"
          >
            ✓ {env.isSupabaseConfigured ? 'Saved to cloud' : 'Saved locally'}
          </motion.span>
        )}
        {save === 'error' && errorMsg && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-red-400 text-sm font-medium max-w-md"
          >
            {errorMsg}
          </motion.span>
        )}
        {save === 'idle' && lastSaved && (
          <span className="text-warm-white/30 text-xs">
            Last saved {new Date(lastSaved).toLocaleTimeString()}
          </span>
        )}
      </div>
    </motion.form>
  );
}
