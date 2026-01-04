import React from 'react';
import { useParams, NavLink as RouterNavLink } from 'react-router-dom';
import { ARTWORKS } from '../constants';

const ArtworkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = ARTWORKS.find((a) => a.id === id);

  if (!artwork) {
    return (
      <div className="pt-24 pb-20 bg-light min-h-screen flex flex-col items-center justify-center text-dark">
        <h2 className="text-3xl font-bold mb-4">Artwork Not Found</h2>
        <p className="text-lg mb-8">The artwork you are looking for does not exist.</p>
        <RouterNavLink
          to="/gallery"
          className="inline-block px-6 py-2 border border-primary text-primary text-base font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
        >
          Back to Gallery
        </RouterNavLink>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-light min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-8">
          <RouterNavLink
            to="/gallery"
            className="inline-flex items-center text-primary hover:text-blue-700 transition-colors duration-300 text-lg font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Gallery
          </RouterNavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-auto object-cover"
            />
            {/* Optional: Add a subtle overlay for future interactions like zoom */}
            <div className="absolute inset-0 bg-dark opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
          </div>

          <div className="text-dark">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">{artwork.title}</h1>
            <p className="text-xl text-gray-700 mb-6 font-light">
              by <span className="font-semibold">{artwork.artist}</span>
            </p>

            <div className="mb-8 text-lg leading-relaxed">
              <p className="mb-4">{artwork.description}</p>
              <p>
                <strong>Year:</strong> {artwork.year}
              </p>
              <p>
                <strong>Medium:</strong> {artwork.medium}
              </p>
            </div>

            {/* Optional: Call to action like "Inquire about this piece" */}
            <RouterNavLink
              to="/contact"
              className="inline-block px-8 py-3 bg-primary text-white text-lg font-medium rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-md"
            >
              Inquire About This Piece
            </RouterNavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetailPage;