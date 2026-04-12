import Hero from "@/components/sections/Hero";
import ArtistSpotlight from "@/components/sections/ArtistSpotlight";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import AboutLegacy from "@/components/sections/AboutLegacy";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ArtistSpotlight />
      <FeaturedWorks />
      <AboutLegacy />
      <Process />
      <Services />
      <FinalCTA />
    </>
  );
}
