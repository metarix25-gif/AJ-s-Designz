import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink as RouterNavLink } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ArtworkDetailPage from './pages/ArtworkDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <main className="flex-grow"> {/* Flex-grow to push footer to bottom */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/:id" element={<ArtworkDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback for unknown routes */}
            <Route path="*" element={
              <div className="pt-24 pb-20 bg-light min-h-screen flex flex-col items-center justify-center text-dark">
                <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
                <p className="text-lg mb-8">Oops! The page you're looking for doesn't exist.</p>
                {/* Fix: Added import for RouterNavLink */}
                <RouterNavLink
                  to="/"
                  className="inline-block px-6 py-2 border border-primary text-primary text-base font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
                >
                  Go to Home
                </RouterNavLink>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};

export default App;