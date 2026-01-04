import React from 'react';
import SectionTitle from '../components/SectionTitle';
import GalleryCard from '../components/GalleryCard';
import { ARTWORKS } from '../constants';

const GalleryPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-secondary min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="The Collection"
          subtitle="Explore a diverse range of captivating artworks by Jane Doe."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ARTWORKS.map((artwork) => (
            <GalleryCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;