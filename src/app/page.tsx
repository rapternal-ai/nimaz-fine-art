import Hero from "@/components/sections/Hero";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import AboutLegacy from "@/components/sections/AboutLegacy";
import AboutStory from "@/components/sections/AboutStory";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutLegacy />
      <AboutStory showHero={false} />
      <FeaturedWorks />
      <FinalCTA />
    </>
  );
}
