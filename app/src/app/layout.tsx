import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turbomindz — Philosophical Art NFTs",
  description:
    "888 scenes of philosophical art exploring humanity's greatest ideas through claymation. 4 characters. 39 universes. 9 themes. Create. Connect. Trade Fair.",
  keywords: [
    "Turbomindz",
    "philosophical art",
    "NFT",
    "claymation",
    "Polygon",
    "philosophy",
    "digital art",
    "phygital",
  ],
  openGraph: {
    title: "Turbomindz — Philosophical Art NFTs",
    description:
      "888 scenes exploring humanity's greatest ideas through claymation art on Polygon.",
    url: "https://turbomindz.com",
    siteName: "Turbomindz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turbomindz — Philosophical Art NFTs",
    description:
      "888 scenes exploring humanity's greatest ideas through claymation art.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
