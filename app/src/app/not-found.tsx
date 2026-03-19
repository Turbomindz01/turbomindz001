import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 section-padding flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-7xl sm:text-8xl font-heading font-bold text-gold mb-4">404</h1>
          <p className="text-2xl sm:text-3xl font-heading text-warm-white mb-4">Page Not Found</p>
        </div>

        <p className="text-warm-white/70 text-lg mb-8 leading-relaxed">
          This scene doesn&apos;t exist in any of our 39 universes. The page you&apos;re looking for has
          wandered off to a dimension we haven&apos;t explored yet.
        </p>

        <div className="card-glass p-8 mb-8">
          <p className="text-warm-white/60 mb-4">
            <span className="text-gold font-mono">Status Code:</span> 404 Not Found
          </p>
          <p className="text-warm-white/50 text-sm">
            This universe is still being woven into the story. Check the navigation above or return home to explore
            Turbomindz.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-lg bg-gold text-rich-black font-semibold hover:bg-gold/80 transition-all duration-300 hover:shadow-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-3 rounded-lg border border-gold text-gold font-semibold hover:bg-gold/10 transition-all duration-300"
          >
            Explore Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
