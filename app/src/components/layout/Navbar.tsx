"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Wallet } from "lucide-react";
import { navigationItems } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-teal/80 backdrop-blur-lg border-b border-warm-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
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

          {/* Connect Wallet Button (Placeholder) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="btn-primary text-sm gap-2">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </button>
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
            <button className="btn-primary w-full text-sm gap-2 mt-4">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
