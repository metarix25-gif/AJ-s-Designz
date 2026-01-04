import React from 'react';
import { ARTIST_NAME, ARTIST_SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <p className="text-sm md:text-base mb-4">
          &copy; {currentYear} {ARTIST_NAME}. All rights reserved.
        </p>
        <div className="flex space-x-6 mb-4">
          {ARTIST_SOCIAL_LINKS.instagram && (
            <a
              href={ARTIST_SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C8.868 2 8.441 2.016 7.151 2.072 5.861 2.129 5.087 2.391 4.316 2.684 3.548 2.978 2.978 3.548 2.684 4.316 2.391 5.087 2.129 5.861 2.072 7.151 2.016 8.441 2 8.868 2 12c0 3.132.016 3.559.072 4.849.057 1.29.319 2.064.612 2.836.294.768.864 1.339 1.632 1.632.772.293 1.545.555 2.836.612 1.29.057 1.717.072 4.849.072s3.559-.016 4.849-.072c1.29-.057 2.064-.319 2.836-.612.768-.294 1.339-.864 1.632-1.632.293-.772.555-1.545.612-2.836.057-1.29.072-1.717.072-4.849s-.016-3.559-.072-4.849c-.057-1.29-.319-2.064-.612-2.836-.294-.768-.864-1.339-1.632-1.632-.772-.293-1.545-.555-2.836-.612C15.559 2.016 15.132 2 12 2zm0 1.63c3.124 0 3.491.011 4.706.065 1.173.054 1.83.276 2.222.42.42.152.668.35.86.542.192.192.39.44.542.86.144.392.366 1.049.42 2.222.054 1.215.065 1.582.065 4.706s-.011 3.491-.065 4.706c-.054 1.173-.276 1.83-.42 2.222-.152.42-.35.668-.542.86-.192.192-.44.39-.86.542-.392.144-1.049.366-2.222.42-1.215.054-1.582.065-4.706.065s-3.491-.011-4.706-.065c-1.173-.054-1.83-.276-2.222-.42-.42-.152-.668-.35-.86-.542-.192-.192-.39-.44-.542-.86-.144-.392-.366-1.049-.42-2.222-.054-1.215-.065-1.582-.065-4.706s.011-3.491.065-4.706c.054-1.173.276-1.83.42-2.222.152-.42.35-.668.542-.86.192-.192.44-.39.86-.542.392-.144 1.049-.366 2.222-.42 1.215-.054 1.582-.065 4.706-.065zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 1.63c1.868 0 3.37 1.502 3.37 3.37s-1.502 3.37-3.37 3.37-3.37-1.502-3.37-3.37 1.502-3.37 3.37-3.37zm5.558-4.71a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
          {ARTIST_SOCIAL_LINKS.twitter && (
            <a
              href={ARTIST_SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.273 4.117 4.117 0 001.27 5.467A4.09 4.09 0 01.8 10.054V10c0 1.104.375 2.129 1.028 2.994-.74-.023-1.396-.226-1.99-.519-.002.013-.002.026-.002.039a4.102 4.102 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.12 4.12 0 003.834 2.85A8.233 8.233 0 012 18.173a11.68 11.68 0 006.29 1.879"
                />
              </svg>
            </a>
          )}
          {ARTIST_SOCIAL_LINKS.facebook && (
            <a
              href={ARTIST_SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;