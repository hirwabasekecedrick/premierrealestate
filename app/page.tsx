import { HeroSection } from "./components/home/HeroSection";
import { FeaturedProperties } from "./components/home/FeaturedProperties";
import { Neighborhoods } from "./components/home/Neighborhoods";
import { EngagingContent } from "./components/home/EngagingContent";
import { TrustIndicators } from "./components/home/TrustIndicators";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <Neighborhoods />
      <EngagingContent />
      <TrustIndicators />
    </>
  );
}
