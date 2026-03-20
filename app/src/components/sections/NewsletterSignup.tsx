"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — will connect to Buttondown API
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="card-glass max-w-2xl mx-auto p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-warm-white mb-3">
            The Odyssey Dispatch
          </h2>
          <p className="text-warm-white/60 mb-2">
            A weekly letter from Cosmo — new scenes, hidden patterns, philosophical sparks, and the occasional
            terrible space pun.
          </p>
          <p className="text-gold/60 text-sm italic mb-8">
            Free. No spam. Unsubscribe anytime.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-gold">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Welcome aboard, traveler. Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 px-4 py-3 rounded-xl bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                required
              />
              <button type="submit" className="btn-primary gap-2 whitespace-nowrap">
                <Send className="w-4 h-4" />
                Join the Odyssey
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
