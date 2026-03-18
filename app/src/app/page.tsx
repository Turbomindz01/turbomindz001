import { Hero } from "@/components/sections/Hero";
import { PhilosophyFocus } from "@/components/sections/PhilosophyFocus";
import { CommunityHub } from "@/components/sections/CommunityHub";
import { PhygicalMarketplace } from "@/components/sections/PhygicalMarketplace";
import { FeaturedNFTs } from "@/components/sections/FeaturedNFTs";
import { CharacterShowcase } from "@/components/sections/CharacterShowcase";
import { ThemesTable } from "@/components/sections/ThemesTable";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";

export default function Home() {
  return (
    <>
      <Hero />
      <PhilosophyFocus />
      <CommunityHub />
      <PhygicalMarketplace />
      <FeaturedNFTs />
      <CharacterShowcase />
      <ThemesTable />
      <NewsletterSignup />
    </>
  );
}
