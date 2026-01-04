import { Artwork, NavLink } from './types';

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'Abstract Harmony',
    artist: 'Jane Doe',
    year: 2023,
    medium: 'Oil on Canvas',
    description: 'A vibrant exploration of color and form, capturing the essence of movement and emotion. This piece invites viewers to reflect on the delicate balance within chaos.',
    imageUrl: 'https://picsum.photos/id/1018/800/600',
  },
  {
    id: '2',
    title: 'Urban Serenity',
    artist: 'Jane Doe',
    year: 2022,
    medium: 'Acrylic on Wood',
    description: 'A serene depiction of urban landscapes, blending sharp architectural lines with soft, ethereal skies, creating a moment of peace amidst city life.',
    imageUrl: 'https://picsum.photos/id/1025/800/600',
  },
  {
    id: '3',
    title: 'Forest Whispers',
    artist: 'Jane Doe',
    year: 2024,
    medium: 'Mixed Media',
    description: 'An immersive piece that captures the hushed beauty of an ancient forest, where light filters through leaves and unseen life thrives. Textured layers evoke the depth and mystery of nature.',
    imageUrl: 'https://picsum.photos/id/103/800/600',
  },
  {
    id: '4',
    title: 'Ocean\'s Embrace',
    artist: 'Jane Doe',
    year: 2023,
    medium: 'Watercolor',
    description: 'Fluid watercolors depict the gentle yet powerful embrace of the ocean, with waves crashing softly on the shore under a vast, open sky. A calming and contemplative piece.',
    imageUrl: 'https://picsum.photos/id/1043/800/600',
  },
  {
    id: '5',
    title: 'Desert Bloom',
    artist: 'Jane Doe',
    year: 2021,
    medium: 'Oil Pastels',
    description: 'Inspired by the resilience of life in arid landscapes, this piece highlights a lone flower blooming in the harsh desert. Its vibrant colors symbolize hope and endurance.',
    imageUrl: 'https://picsum.photos/id/1053/800/600',
  },
  {
    id: '6',
    title: 'Celestial Dance',
    artist: 'Jane Doe',
    year: 2024,
    medium: 'Digital Painting',
    description: 'A cosmic ballet of stars and nebulae, digitally rendered to explore the infinite wonders of the universe. Swirling colors and luminous forms create a sense of awe and wonder.',
    imageUrl: 'https://picsum.photos/id/1068/800/600',
  },
  {
    id: '7',
    title: 'Mountain Majesty',
    artist: 'Jane Doe',
    year: 2022,
    medium: 'Gouache',
    description: 'Capturing the grandeur of towering peaks and crisp alpine air, this gouache painting emphasizes the raw power and silent strength of mountain ranges. The interplay of light and shadow defines its contours.',
    imageUrl: 'https://picsum.photos/id/1070/800/600',
  },
  {
    id: '8',
    title: 'River\'s Flow',
    artist: 'Jane Doe',
    year: 2023,
    medium: 'Ink Wash',
    description: 'Dynamic ink washes illustrate the continuous flow of a river, symbolizing change and perseverance. The monochromatic palette highlights the texture and movement of water.',
    imageUrl: 'https://picsum.photos/id/1084/800/600',
  },
  {
    id: '9',
    title: 'Quiet Orchard',
    artist: 'Jane Doe',
    year: 2024,
    medium: 'Soft Pastels',
    description: 'A tranquil scene from a quiet orchard, bathed in soft morning light. The pastels bring a delicate, almost ethereal quality to the fruit trees and gentle shadows.',
    imageUrl: 'https://picsum.photos/id/108/800/600',
  },
  {
    id: '10',
    title: 'Winter\'s Embrace',
    artist: 'Jane Doe',
    year: 2023,
    medium: 'Oil on Canvas',
    description: 'A cold, yet comforting depiction of a winter landscape, where snow-covered trees stand in peaceful solitude. The muted color palette evokes the quiet beauty of the season.',
    imageUrl: 'https://picsum.photos/id/109/800/600',
  },
];

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const ARTIST_NAME = 'Jane Doe';
export const ARTIST_TAGLINE = 'Painting Dreams, One Stroke at a Time.';
export const ARTIST_ABOUT = `Jane Doe is an acclaimed contemporary artist renowned for her captivating ability to transform everyday moments into profound visual narratives. Born in a small coastal town, Jane developed an early fascination with the interplay of light and shadow, a recurring motif in her work. Her artistic journey began with classical training at the prestigious Royal Academy of Art, where she honed her technical prowess before branching into abstract expressionism.

Her portfolio spans a diverse range of mediums, including oil, acrylic, and mixed media, each chosen to best convey the intricate emotions and stories she seeks to tell. Jane's work is characterized by its bold use of color, dynamic compositions, and a unique blend of realism and abstraction, inviting viewers to delve deeper into their own perceptions.

Jane's art has been exhibited in galleries across major cities worldwide, earning her numerous awards and a dedicated following among collectors and critics alike. She believes art should be a dialogue, a mirror reflecting the human experience, and a window to imaginative possibilities.`;
export const ARTIST_CONTACT_EMAIL = 'info@janedoeart.com';
export const ARTIST_CONTACT_PHONE = '+1 (555) 123-4567';
export const ARTIST_SOCIAL_LINKS = {
  instagram: 'https://instagram.com/janedoeart',
  twitter: 'https://twitter.com/janedoeart',
  facebook: 'https://facebook.com/janedoeart',
};
