import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import GalleryCard from '../components/GalleryCard';
import { ARTWORKS, ARTIST_ABOUT } from '../constants';
import { NavLink as RouterNavLink } from 'react-router-dom';

const HomePage: React.FC = () => {
  // Select a few artworks to feature on the homepage
  const featuredArtworks = ARTWORKS.slice(0, 3);

  return (
    <div className="pt-0"> {/* Header is fixed, so content starts from top */}
      <HeroSection />

      {/* Artist Introduction */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SectionTitle
            title="A Visionary Artist"
            subtitle="Explore the unique world created through the brushstrokes of Jane Doe."
          />
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://picsum.photos/id/237/600/400" // Placeholder image for artist portrait
                alt="Artist Jane Doe"
                className="rounded-xl shadow-lg w-full h-auto max-w-md object-cover"
              />
            </div>
            <div className="md:w-1/2 text-dark">
              <p className="text-lg leading-relaxed mb-6">
                {ARTIST_ABOUT.split('\n')[0]} {/* First paragraph */}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {ARTIST_ABOUT.split('\n')[1]} {/* Second paragraph */}
              </p>
              <RouterNavLink
                to="/about"
                className="inline-block px-6 py-2 border border-primary text-primary text-base font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
              >
                Read More About Jane
              </RouterNavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Artworks"
            subtitle="A curated selection of recent and notable creations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtworks.map((artwork) => (
              <GalleryCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
          <div className="text-center mt-12">
            <RouterNavLink
              to="/gallery"
              className="inline-block px-8 py-3 bg-dark text-white text-lg font-medium rounded-full hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
            >
              View All Artworks
            </RouterNavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;