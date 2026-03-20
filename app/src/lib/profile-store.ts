import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProfile } from '@/types';

const DEFAULT_PROFILE: UserProfile = {
  username: '',
  bio: '',
  avatarUrl: '',
  socialLinks: {
    twitter: '',
    discord: '',
    opensea: '',
  },
  preferences: {
    emailNotifications: true,
    marketplaceAlerts: true,
    privacyLevel: 'public',
  },
};

export interface ProfileState {
  profile: UserProfile;
  hasEdited: boolean;
  lastSaved: number | null;

  updateProfile: (updates: Partial<UserProfile>) => void;
  updateSocialLinks: (links: Partial<UserProfile['socialLinks']>) => void;
  updatePreferences: (prefs: Partial<UserProfile['preferences']>) => void;
  resetProfile: () => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: DEFAULT_PROFILE,
      hasEdited: false,
      lastSaved: null,

      updateProfile: (updates) =>
        set((state) => ({
          profile: { ...state.profile, ...updates },
          hasEdited: true,
          lastSaved: Date.now(),
        })),

      updateSocialLinks: (links) =>
        set((state) => ({
          profile: {
            ...state.profile,
            socialLinks: { ...state.profile.socialLinks, ...links },
          },
          hasEdited: true,
          lastSaved: Date.now(),
        })),

      updatePreferences: (prefs) =>
        set((state) => ({
          profile: {
            ...state.profile,
            preferences: { ...state.profile.preferences, ...prefs },
          },
          hasEdited: true,
          lastSaved: Date.now(),
        })),

      resetProfile: () =>
        set({
          profile: DEFAULT_PROFILE,
          hasEdited: false,
          lastSaved: null,
        }),
    }),
    {
      name: 'turbomindz-profile',
    }
  )
);
