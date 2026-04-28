"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: "🔭",
    title: "Browse",
    description: "Explore 888 philosophical scenes across 39 universes. No account needed.",
  },
  {
    number: "02",
    icon: "💍",
    title: "Collect",
    description: "Purchase any scene on Polygon via your wallet or OpenSea. The NFT is your key.",
  },
  {
    number: "03",
    icon: "🏛",
    title: "Enter",
    description: "Link your wallet to create your account and unlock the forum, marketplace, and community.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function MembershipExplainer() {
  return (
    <section className="section-padding bg-gradient-to-b from-rich-black to-philosophy-dark/30">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold font-mono text-xs uppercase tracking-widest mb-3">
            How to Join the Village
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-warm-white mb-4">
            The NFT is Your Membership
          </h2>
          <p className="text-warm-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            No separate sign-up. No application. Own any Turbomindz scene and the Village is yours.
          </p>
        </div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative card-glass p-8 text-center"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-10 right-0 translate-x-1/2 w-6 h-px bg-gold/30 z-10" />
              )}

              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <p className="text-gold/50 font-mono text-xs mb-1">{step.number}</p>
              <h3 className="font-heading font-bold text-warm-white text-lg mb-2">{step.title}</h3>
              <p className="text-warm-white/55 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/gallery"
            className="btn-primary px-8 py-3 text-sm font-semibold"
          >
            Browse the Collection
          </Link>
          <Link
            href="/about"
            className="btn-secondary px-8 py-3 text-sm font-semibold"
          >
            Learn More
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-warm-white/10 pt-8">
          {[
            { value: "888", label: "Scenes" },
            { value: "39", label: "Universes" },
            { value: "9", label: "Themes" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading font-bold text-gold text-2xl sm:text-3xl">{stat.value}</p>
              <p className="text-warm-white/40 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
