"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/lib/data";
import { WalletButton } from "@/components/ui/WalletButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-teal/80 backdrop-blur-lg border-b border-warm-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Turbomindz home">
            <span className="text-2xl font-heading font-bold text-gold group-hover:text-yellow-400 transition-colors">
              TURBOMINDZ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-warm-white/70 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/profile"
              className="text-warm-white/70 hover:text-gold transition-colors text-sm font-medium"
            >
              Profile
            </Link>
            <WalletButton />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-warm-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-deep-teal/95 backdrop-blur-lg border-b border-warm-white/10">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-warm-white/80 hover:text-gold transition-colors text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/profile"
              className="block text-warm-white/80 hover:text-gold transition-colors text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <div className="pt-4 border-t border-warm-white/10">
              <WalletButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
