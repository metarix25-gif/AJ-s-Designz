import React from 'react';
import { Artwork } from '../types';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface GalleryCardProps {
  artwork: Artwork;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ artwork }) => {
  return (
    <RouterNavLink
      to={`/gallery/${artwork.id}`}
      className="group block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className="w-full h-72 object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-1">{artwork.title}</h3>
          <p className="text-sm font-light">{artwork.artist}, {artwork.year}</p>
        </div>
      </div>
      {/* Visible overlay for title on mobile/smaller screens where hover might not apply */}
      <div className="absolute bottom-0 left-0 right-0 bg-dark bg-opacity-80 p-3 md:hidden">
        <h3 className="text-lg font-semibold text-white truncate">{artwork.title}</h3>
        <p className="text-sm text-gray-300 truncate">{artwork.artist}, {artwork.year}</p>
      </div>
    </RouterNavLink>
  );
};

export default GalleryCard;