import { HeroSection } from "./components/home/HeroSection";
import { FeaturedProperties } from "./components/home/FeaturedProperties";
import { Neighborhoods } from "./components/home/Neighborhoods";
import { EngagingContent } from "./components/home/EngagingContent";
import { HotDeals } from "./components/home/HotDeals";
import BlogSection from "./components/home/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <Neighborhoods />
      <BlogSection />
      <EngagingContent />
      {/* <HotDeals /> */}
    </>
  );
}
