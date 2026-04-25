export interface GalleryArtwork {
  id: number;
  title: string;
  artist: string;
  year: string;
  medium: string;
  dimensions: string;
  image: string;
  category: string;
  available: boolean;
}

export const galleryArtworks: GalleryArtwork[] = [
  {
    id: 1,
    title: 'Chain Gang',
    artist: 'Winfred Sr',
    year: '2008',
    medium: 'Carved and dyed leather',
    dimensions: '30" x 40"',
    image: '/images/artists/winfred_sr/chain_gang_2008.webp',
    category: 'narrative',
    available: false,
  },
  {
    id: 2,
    title: 'Chain Gang Picking Cotton',
    artist: 'Winfred Sr',
    year: '2011',
    medium: 'Carved and dyed leather',
    dimensions: '36" x 48"',
    image: '/images/artists/winfred_sr/chain_gang_picking_cotton_2011.webp',
    category: 'narrative',
    available: false,
  },
  {
    id: 3,
    title: 'All Me 2',
    artist: 'Winfred Sr',
    year: '2005',
    medium: 'Carved and dyed leather',
    dimensions: '24" x 36"',
    image: '/images/artists/winfred_sr/All_Me_2_2005.webp',
    category: 'portrait',
    available: false,
  },
  {
    id: 4,
    title: 'Angry Inmates',
    artist: 'Winfred Sr',
    year: '2007',
    medium: 'Carved and dyed leather',
    dimensions: '28" x 42"',
    image: '/images/artists/winfred_sr/angry_inmates_2007.webp',
    category: 'narrative',
    available: false,
  },
  {
    id: 5,
    title: 'The Deputy',
    artist: 'Winfred Sr',
    year: '2001',
    medium: 'Carved and dyed leather',
    dimensions: '26" x 38"',
    image: '/images/artists/winfred_sr/the_deputy_2001.webp',
    category: 'portrait',
    available: false,
  },
  {
    id: 7,
    title: 'Looking for My Mother',
    artist: 'Winfred Sr',
    year: '2019',
    medium: 'Carved and dyed leather',
    dimensions: '24" x 32"',
    image: '/images/artists/winfred_sr/Looking_for_My_Mother_2019.webp',
    category: 'narrative',
    available: false,
  },
];
