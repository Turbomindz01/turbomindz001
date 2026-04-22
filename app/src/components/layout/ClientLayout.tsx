'use client';

import { ThirdwebProvider } from 'thirdweb/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProfileSyncBoundary } from '@/components/layout/ProfileSyncBoundary';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      <ProfileSyncBoundary />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThirdwebProvider>
  );
}
