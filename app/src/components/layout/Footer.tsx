import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-rich-black/50 border-t border-warm-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Motto */}
        <div className="text-center mb-10">
          <p className="text-warm-white/50 text-sm leading-relaxed font-body space-y-1">
            <span className="block">The NFT is the soul. The art is the body.</span>
            <span className="block">The community is the village. The story is the mirror.</span>
            <span className="block italic text-gold/60">The notebook was always open.</span>
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Gallery</Link></li>
              <li><Link href="/story" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Story</Link></li>
              <li><Link href="/marketplace" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Marketplace</Link></li>
              <li><Link href="/about" className="text-warm-white/60 hover:text-gold text-sm transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Community
            </h4>
            <ul className="space-y-2">
              <li><a href="https://discord.gg/turbomindz" target="_blank" rel="noopener noreferrer" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Discord</a></li>
              <li><a href="https://twitter.com/turbomindz" target="_blank" rel="noopener noreferrer" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Twitter/X</a></li>
              <li><a href="https://www.instagram.com/turbomindz" target="_blank" rel="noopener noreferrer" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Instagram</a></li>
              <li><a href="https://www.patreon.com/turbomindz" target="_blank" rel="noopener noreferrer" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Patreon</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              <li><a href="https://opensea.io/collection/turbomindz" target="_blank" rel="noopener noreferrer" className="text-warm-white/60 hover:text-gold text-sm transition-colors">OpenSea</a></li>
              <li><a href="https://ko-fi.com/turbomindz" target="_blank" rel="noopener noreferrer" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Ko-fi</a></li>
              <li><a href="https://turbomindz.gumroad.com" target="_blank" rel="noopener noreferrer" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Gumroad</a></li>
              <li><a href="#" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Printful</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Learn
            </h4>
            <ul className="space-y-2">
              <li><a href="https://medium.com/@turbomindz" target="_blank" rel="noopener noreferrer" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Medium</a></li>
              <li><a href="#" className="text-warm-white/60 hover:text-gold text-sm transition-colors">YouTube</a></li>
              <li><a href="#" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Pinterest</a></li>
              <li><Link href="/about" className="text-warm-white/60 hover:text-gold text-sm transition-colors">Philosophy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-white/40 text-xs">
            &copy; {new Date().getFullYear()} Turbomindz. All rights reserved. Built on Polygon.
          </p>
          <p className="text-gold/60 font-heading font-semibold text-sm tracking-wider">
            Create. Connect. Trade Fair.
          </p>
        </div>
      </div>
    </footer>
  );
}
