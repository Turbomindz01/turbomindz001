'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen pt-24 section-padding flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-7xl sm:text-8xl font-heading font-bold text-gold mb-4">500</h1>
          <p className="text-2xl sm:text-3xl font-heading text-warm-white mb-4">Server Error</p>
        </div>

        <p className="text-warm-white/70 text-lg mb-8 leading-relaxed">
          The Fade has arrived. Something in the universe has shifted, and we&apos;re unable to render this view.
          Our team of philosophers and engineers is investigating the disturbance.
        </p>

        <div className="card-glass p-8 mb-8">
          <p className="text-warm-white/60 mb-4">
            <span className="text-gold font-mono">Status Code:</span> 500 Internal Server Error
          </p>
          {error.digest && (
            <p className="text-warm-white/50 text-sm font-mono mb-2">
              <span className="text-gold/60">Error ID:</span> {error.digest}
            </p>
          )}
          <p className="text-warm-white/50 text-sm">
            We&apos;ve logged this error and will work to restore balance. Try refreshing the page or returning
            home.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-3 rounded-lg bg-gold text-rich-black font-semibold hover:bg-gold/80 transition-all duration-300 hover:shadow-lg"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-8 py-3 rounded-lg border border-gold text-gold font-semibold hover:bg-gold/10 transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
