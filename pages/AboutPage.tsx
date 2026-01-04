import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { ARTIST_ABOUT, ARTIST_NAME } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-light min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <SectionTitle
          title={`About ${ARTIST_NAME}`}
          subtitle="Discover the journey and philosophy behind the art."
        />

        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl text-dark leading-relaxed">
          <div className="flex flex-col md:flex-row items-center md:items-start mb-8 gap-8">
            <img
              src="https://picsum.photos/id/1005/300/300" // Another placeholder image for artist
              alt={`${ARTIST_NAME} Portrait`}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">The Artist's Journey</h3>
              <p className="mb-4 text-lg">
                {ARTIST_ABOUT.split('\n\n')[0]}
              </p>
              <p className="text-lg">
                {ARTIST_ABOUT.split('\n\n')[1]}
              </p>
            </div>
          </div>
          <p className="mb-4 text-lg">
            {ARTIST_ABOUT.split('\n\n')[2]}
          </p>
          <p className="mb-4 text-lg">
            {ARTIST_ABOUT.split('\n\n')[3]}
          </p>
          <p className="text-lg italic text-gray-600">
            "Art should be a dialogue, a mirror reflecting the human experience, and a window to imaginative possibilities."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;