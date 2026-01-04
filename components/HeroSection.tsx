import React from 'react';
import { ARTIST_TAGLINE, ARTIST_NAME } from '../constants';
import { NavLink as RouterNavLink } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(https://picsum.photos/id/1015/1600/900)`, // Large hero image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-dark opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 tracking-tight">
          {ARTIST_NAME}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 max-w-2xl mx-auto">
          {ARTIST_TAGLINE}
        </p>
        <RouterNavLink
          to="/gallery"
          className="inline-block px-8 py-3 bg-primary text-white text-lg font-medium rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
        >
          Explore Gallery
        </RouterNavLink>
      </div>
    </section>
  );
};

export default HeroSection;