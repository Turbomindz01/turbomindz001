import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Turbomindz",
  description:
    "Browse 888 philosophical art NFT scenes across 39 universes. Filter by theme, character, and search by title or philosopher.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
