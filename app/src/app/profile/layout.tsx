import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile — Turbomindz",
  description:
    "Manage your Turbomindz wallet, view your NFT collection, and track your philosophical journey.",
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return children;
}
