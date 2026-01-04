export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  description: string;
  imageUrl: string;
}

export interface NavLink {
  name: string;
  path: string;
}