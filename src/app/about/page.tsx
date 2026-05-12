import { Metadata } from 'next';
import TamuProfile from '@/components/sections/TamuProfile';
import ArtistSpotlight from '@/components/sections/ArtistSpotlight';
import AboutStory from '@/components/sections/AboutStory';

export const metadata: Metadata = {
  title: 'About | Nimaz Fine Art',
  description: 'Learn about Tamu Rembert, Nimaz Fine Art, and the multi-generational artistic legacy behind the company.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <TamuProfile />
      <ArtistSpotlight />
      <AboutStory
        showHero={false}
        showMissionVision={false}
        showArtOfLeather={false}
      />
    </div>
  );
}
