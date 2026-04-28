"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle2, AlertCircle } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { MembershipGate } from "@/components/ui/MembershipGate";

const HOW_IT_WORKS = [
  { icon: "🎴", title: "Own an NFT", desc: "You must hold a Turbomindz NFT in your connected wallet. The NFT is the soul." },
  { icon: "🖼️", title: "Create or Acquire Art", desc: "Pair it with an original physical artwork — oil, acrylic, mixed media, or any fine art medium." },
  { icon: "📸", title: "Photograph It", desc: "Capture 6 required angles: Front, Back, Top, Bottom, Left, Right — plus optional detail shots." },
  { icon: "📬", title: "Submit Your Request", desc: "Fill out the marriage form below. Include dimensions, medium, artist name, and NFT token ID." },
  { icon: "🔍", title: "Founder Verifies", desc: "Every submission is personally reviewed for completeness and quality. Response within 72 hours." },
  { icon: "⛓️", title: "Recorded On-Chain", desc: "Once approved, the marriage is recorded. The NFT's metadata updates. The union is permanent." },
];

const PHOTO_REQUIREMENTS = [
  { angle: "Front", required: true, why: "Primary artwork face — the most important shot." },
  { angle: "Back", required: true, why: "Reveals canvas backing, signature, and provenance marks." },
  { angle: "Top", required: true, why: "Shows edge finish and frame quality." },
  { angle: "Bottom", required: true, why: "Shows edge finish and any artist stamps." },
  { angle: "Left Side", required: true, why: "Confirms depth and medium thickness." },
  { angle: "Right Side", required: true, why: "Confirms depth and frame consistency." },
  { angle: "Detail Shot 1", required: false, why: "Close-up of texture, brushwork, or signature." },
  { angle: "Detail Shot 2", required: false, why: "Any secondary detail worth preserving." },
];

type FormStep = "form" | "submitting" | "success" | "error";

function MarriageForm() {
  const [step, setStep] = useState<FormStep>("form");
  const [form, setForm] = useState({
    nftTokenId: "",
    artTitle: "",
    medium: "",
    dimensions: "",
    yearCreated: "",
    artistName: "",
    description: "",
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("submitting");
    // Stub: real submission via Supabase in MP4.
    await new Promise((r) => setTimeout(r, 2000));
    setStep("success");
  };

  if (step === "submitting") {
    return (
      <div className="flex flex-col items-center py-16 gap-4">
        <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        <p className="font-heading font-semibold text-warm-white text-lg">Submitting Your Request…</p>
        <p className="text-warm-white/50 text-sm">Uploading photos and recording your submission.</p>
      </div>
    );
  }

  if (step === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center py-16 gap-4 text-center"
      >
        <CheckCircle2 className="w-16 h-16 text-emerald-400" />
        <h3 className="font-heading font-bold text-warm-white text-2xl">Request Submitted</h3>
        <p className="text-warm-white/60 max-w-md leading-relaxed">
          Your marriage request has been received. The founder will review your submission within 72 hours. You&apos;ll be notified via your linked email or Discord when it&apos;s approved.
        </p>
        <p className="text-gold font-semibold text-sm mt-2">The ceremony begins. ✨</p>
      </motion.div>
    );
  }

  if (step === "error") {
    return (
      <div className="flex flex-col items-center py-16 gap-4 text-center">
        <AlertCircle className="w-12 h-12 text-red-400" />
        <h3 className="font-heading font-bold text-warm-white text-xl">Submission Failed</h3>
        <p className="text-warm-white/60 text-sm">Please try again or contact us on Discord.</p>
        <button onClick={() => setStep("form")} className="px-6 py-2.5 rounded-xl bg-gold text-rich-black font-semibold text-sm">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* NFT Token ID */}
      <div>
        <label className="block text-warm-white/70 text-sm font-semibold mb-2" htmlFor="nftTokenId">
          NFT Token ID <span className="text-gold">*</span>
        </label>
        <input
          id="nftTokenId"
          type="text"
          required
          placeholder="e.g. 42"
          value={form.nftTokenId}
          onChange={update("nftTokenId")}
          className="w-full px-4 py-3 rounded-xl bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-gold/50 text-sm"
        />
        <p className="text-warm-white/30 text-xs mt-1">Find this on your OpenSea NFT page.</p>
      </div>

      {/* Art title + medium */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-warm-white/70 text-sm font-semibold mb-2" htmlFor="artTitle">
            Art Piece Title <span className="text-gold">*</span>
          </label>
          <input id="artTitle" type="text" required placeholder="e.g. Chained Shadows" value={form.artTitle} onChange={update("artTitle")}
            className="w-full px-4 py-3 rounded-xl bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-gold/50 text-sm" />
        </div>
        <div>
          <label className="block text-warm-white/70 text-sm font-semibold mb-2" htmlFor="medium">
            Medium / Materials <span className="text-gold">*</span>
          </label>
          <input id="medium" type="text" required placeholder="e.g. Oil on linen" value={form.medium} onChange={update("medium")}
            className="w-full px-4 py-3 rounded-xl bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-gold/50 text-sm" />
        </div>
      </div>

      {/* Dimensions + year */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-warm-white/70 text-sm font-semibold mb-2" htmlFor="dimensions">
            Dimensions (H × W × D) <span className="text-gold">*</span>
          </label>
          <input id="dimensions" type="text" required placeholder="e.g. 60 × 80 × 2 cm" value={form.dimensions} onChange={update("dimensions")}
            className="w-full px-4 py-3 rounded-xl bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-gold/50 text-sm" />
        </div>
        <div>
          <label className="block text-warm-white/70 text-sm font-semibold mb-2" htmlFor="yearCreated">
            Year Created
          </label>
          <input id="yearCreated" type="number" placeholder="e.g. 2024" value={form.yearCreated} onChange={update("yearCreated")}
            className="w-full px-4 py-3 rounded-xl bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-gold/50 text-sm" />
        </div>
      </div>

      {/* Artist name */}
      <div>
        <label className="block text-warm-white/70 text-sm font-semibold mb-2" htmlFor="artistName">
          Artist Name
        </label>
        <input id="artistName" type="text" placeholder="Leave blank for 'Unknown'" value={form.artistName} onChange={update("artistName")}
          className="w-full px-4 py-3 rounded-xl bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-gold/50 text-sm" />
      </div>

      {/* Description */}
      <div>
        <label className="block text-warm-white/70 text-sm font-semibold mb-2" htmlFor="description">
          Description <span className="text-gold">*</span>
          <span className="text-warm-white/30 font-normal ml-1">(max 200 words)</span>
        </label>
        <textarea
          id="description"
          required
          rows={5}
          placeholder="Describe the artwork, its meaning, and why it belongs with this NFT scene…"
          value={form.description}
          onChange={update("description")}
          className="w-full px-4 py-3 rounded-xl bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-gold/50 text-sm resize-none"
        />
      </div>

      {/* Photo upload */}
      <div>
        <label className="block text-warm-white/70 text-sm font-semibold mb-2">
          Artwork Photos <span className="text-gold">*</span>
          <span className="text-warm-white/30 font-normal ml-1">(min 6 required angles)</span>
        </label>
        <label
          htmlFor="photos"
          className="flex flex-col items-center justify-center w-full h-36 rounded-xl border-2 border-dashed border-warm-white/20 hover:border-gold/50 bg-warm-white/5 cursor-pointer transition-colors group"
        >
          <Upload className="w-8 h-8 text-warm-white/30 group-hover:text-gold transition-colors mb-2" />
          <p className="text-warm-white/50 text-sm group-hover:text-warm-white/70 transition-colors">
            {files ? `${files.length} file(s) selected` : "Click to upload photos"}
          </p>
          <p className="text-warm-white/30 text-xs mt-1">JPG, PNG, HEIF — max 10MB each</p>
          <input
            id="photos"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => setFiles(e.target.files)}
            required
          />
        </label>
      </div>

      {/* Marriage fee notice */}
      <div className="card-glass p-5 border border-gold/20">
        <div className="flex items-start gap-4">
          <span className="text-2xl shrink-0">💛</span>
          <div>
            <h4 className="font-semibold text-warm-white text-sm mb-1">$20 Ceremony Fee (0.01 ETH equivalent in MATIC)</h4>
            <p className="text-warm-white/50 text-xs leading-relaxed">
              The fee covers verification time, on-chain registration, and metadata update. Think of it as a ceremony fee, not a transaction cost. It is charged after approval — not on submission.
            </p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-gold text-rich-black font-semibold text-base hover:bg-gold/90 transition-colors"
      >
        Submit Marriage Request
      </button>
      <p className="text-warm-white/30 text-xs text-center">
        By submitting, you confirm you own both the NFT and the physical artwork.
      </p>
    </form>
  );
}

export default function MarriagePage() {
  return (
    <div className="min-h-screen pt-8 section-padding">
      <div className="container-narrow max-w-3xl">
        <div className="mb-8">
          <Breadcrumbs items={[{ label: "Marriage", href: "/marriage" }]} />
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-gold font-mono text-xs uppercase tracking-widest mb-3">The Phygital Union</p>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-warm-white mb-4">
            Marry Your NFT to the Physical World
          </h1>
          <p className="text-warm-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            The NFT is the soul. The art is the body. The marriage makes them inseparable — a permanent phygital union recorded on-chain.
          </p>
        </div>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="font-heading font-bold text-warm-white text-2xl mb-8">How the Ceremony Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.title} className="card-glass p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="text-lg">{step.icon}</span>
                </div>
                <div>
                  <p className="text-gold/60 font-mono text-[10px] mb-0.5">STEP 0{i + 1}</p>
                  <h3 className="font-semibold text-warm-white text-sm mb-1">{step.title}</h3>
                  <p className="text-warm-white/50 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo requirements */}
        <section className="mb-16">
          <h2 className="font-heading font-bold text-warm-white text-2xl mb-4">Photo Requirements</h2>
          <p className="text-warm-white/50 text-sm mb-6">
            Every angle serves the permanent record. These photos become part of the married NFT&apos;s metadata and appear in the marketplace card flip.
          </p>
          <div className="space-y-2">
            {PHOTO_REQUIREMENTS.map((req) => (
              <div key={req.angle} className="flex items-center gap-4 p-3 rounded-lg bg-warm-white/5 border border-warm-white/10">
                <span className={`text-xs font-mono font-bold shrink-0 w-20 ${req.required ? "text-gold" : "text-warm-white/40"}`}>
                  {req.required ? "REQUIRED" : "OPTIONAL"}
                </span>
                <span className="text-warm-white/80 text-sm font-semibold w-28 shrink-0">{req.angle}</span>
                <span className="text-warm-white/50 text-xs">{req.why}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Form — gated to NFT holders */}
        <section className="mb-8">
          <h2 className="font-heading font-bold text-warm-white text-2xl mb-2">Submit Your Request</h2>
          <p className="text-warm-white/50 text-sm mb-8">
            Only NFT holders may submit marriage requests. Connect the wallet that holds your Turbomindz scene.
          </p>
          <MembershipGate>
            <div className="card-glass p-8">
              <MarriageForm />
            </div>
          </MembershipGate>
        </section>
      </div>
    </div>
  );
}
