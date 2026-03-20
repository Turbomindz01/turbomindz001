'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useProfileStore } from '@/lib/profile-store';

export function ProfilePreferences() {
  const { profile, updatePreferences } = useProfileStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-12 bg-warm-white/5 rounded-lg" />
        ))}
      </div>
    );
  }

  const toggleClass =
    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-rich-black';
  const toggleDotClass =
    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Email Notifications */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-warm-white/5 border border-warm-white/10">
        <div>
          <h4 className="text-warm-white font-medium text-sm">Email Notifications</h4>
          <p className="text-warm-white/40 text-xs mt-0.5">
            Receive the Odyssey Dispatch and community updates
          </p>
        </div>
        <button
          role="switch"
          aria-checked={profile.preferences.emailNotifications}
          onClick={() =>
            updatePreferences({ emailNotifications: !profile.preferences.emailNotifications })
          }
          className={`${toggleClass} ${
            profile.preferences.emailNotifications ? 'bg-gold' : 'bg-warm-white/20'
          }`}
        >
          <span
            className={`${toggleDotClass} ${
              profile.preferences.emailNotifications ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Marketplace Alerts */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-warm-white/5 border border-warm-white/10">
        <div>
          <h4 className="text-warm-white font-medium text-sm">Marketplace Alerts</h4>
          <p className="text-warm-white/40 text-xs mt-0.5">
            Get notified about new listings, price changes, and trades
          </p>
        </div>
        <button
          role="switch"
          aria-checked={profile.preferences.marketplaceAlerts}
          onClick={() =>
            updatePreferences({ marketplaceAlerts: !profile.preferences.marketplaceAlerts })
          }
          className={`${toggleClass} ${
            profile.preferences.marketplaceAlerts ? 'bg-gold' : 'bg-warm-white/20'
          }`}
        >
          <span
            className={`${toggleDotClass} ${
              profile.preferences.marketplaceAlerts ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Privacy Level */}
      <div className="p-4 rounded-lg bg-warm-white/5 border border-warm-white/10">
        <div className="mb-3">
          <h4 className="text-warm-white font-medium text-sm">Privacy Level</h4>
          <p className="text-warm-white/40 text-xs mt-0.5">
            Control who can see your profile and collection
          </p>
        </div>
        <div className="flex gap-2">
          {(['public', 'friends', 'private'] as const).map((level) => (
            <button
              key={level}
              onClick={() => updatePreferences({ privacyLevel: level })}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                profile.preferences.privacyLevel === level
                  ? 'bg-gold text-rich-black'
                  : 'bg-warm-white/5 text-warm-white/60 hover:bg-warm-white/10 hover:text-warm-white border border-warm-white/10'
              }`}
            >
              {level === 'public' && '🌍 '}
              {level === 'friends' && '👥 '}
              {level === 'private' && '🔒 '}
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Status indicator */}
      <p className="text-warm-white/30 text-xs text-right">
        Preferences auto-save to local storage
      </p>
    </motion.div>
  );
}
