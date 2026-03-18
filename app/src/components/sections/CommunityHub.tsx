"use client";

import { MessageCircle, Users, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

export function CommunityHub() {
  return (
    <section className="section-padding bg-gradient-to-b from-deep-teal/20 to-philosophy-dark/40">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-warm-white mb-4">
            The Community Is Everything
          </h2>
          <p className="text-warm-white/70 max-w-2xl mx-auto text-lg">
            Turbomindz thrives on <span className="text-gold font-semibold">witnessed trading</span>, 
            <span className="text-gold font-semibold"> transparent deal-making</span>, and 
            <span className="text-gold font-semibold"> passionate community discussion</span>.
          </p>
        </div>

        {/* Four community pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="card-glass-hover p-6 text-center group">
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <MessageCircle className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-heading font-semibold text-warm-white text-lg mb-2">Marketplace Forum</h3>
            <p className="text-warm-white/60 text-sm">Discuss trades, share interpretations, and build relationships</p>
          </div>

          <div className="card-glass-hover p-6 text-center group">
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <Users className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-heading font-semibold text-warm-white text-lg mb-2">Community Governance</h3>
            <p className="text-warm-white/60 text-sm">Collectors vote on new features and thematic directions</p>
          </div>

          <div className="card-glass-hover p-6 text-center group">
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <TrendingUp className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-heading font-semibold text-warm-white text-lg mb-2">Witnessed Economy</h3>
            <p className="text-warm-white/60 text-sm">All trading is public and transparent on Polygon blockchain</p>
          </div>

          <div className="card-glass-hover p-6 text-center group">
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <Award className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-heading font-semibold text-warm-white text-lg mb-2">Creator Rewards</h3>
            <p className="text-warm-white/60 text-sm">Fair artist splits and recurring royalties for all trades</p>
          </div>
        </div>

        {/* Featured community content */}
        <div className="bg-gold/5 border border-gold/20 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-warm-white text-2xl mb-4">Join Our Discord</h3>
              <p className="text-warm-white/70 mb-6">
                Connect with fellow philosophers, collectors, and artists. Share your interpretations, 
                discuss trading strategies, and participate in weekly philosophical salons.
              </p>
              <a href="https://discord.gg/turbomindz" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex gap-2">
                <Users className="w-5 h-5" />
                Join Discord
              </a>
            </div>
            <div>
              <h3 className="font-heading font-bold text-warm-white text-2xl mb-4">Marketplace Forum</h3>
              <p className="text-warm-white/70 mb-6">
                Transparent deal-making, thematic discussions, and community decisions about future 
                universes. Every transaction verified on-chain. Every voice valued.
              </p>
              <a href="/marketplace" className="btn-secondary inline-flex gap-2">
                <MessageCircle className="w-5 h-5" />
                Visit Forum
              </a>
            </div>
          </div>
        </div>

        {/* Community stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-wisdom-bronze/10 border border-wisdom-bronze/20 rounded-lg p-6">
            <p className="text-3xl font-heading font-bold text-gold mb-2">150+</p>
            <p className="text-warm-white/70">NFTs Already Trading</p>
          </div>
          <div className="bg-wisdom-bronze/10 border border-wisdom-bronze/20 rounded-lg p-6">
            <p className="text-3xl font-heading font-bold text-gold mb-2">39</p>
            <p className="text-warm-white/70">Unique Universes</p>
          </div>
          <div className="bg-wisdom-bronze/10 border border-wisdom-bronze/20 rounded-lg p-6">
            <p className="text-3xl font-heading font-bold text-gold mb-2">∞</p>
            <p className="text-warm-white/70">Community Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}
