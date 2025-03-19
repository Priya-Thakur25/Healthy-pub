import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0.95);
  const location = useLocation();
  
  // Function to check if the path is active
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  // Effect for scroll opacity
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Start with high opacity, reduce as user scrolls (min 0.6)
      const newOpacity = Math.max(0.95 - (scrollY * 0.001), 0.6);
      setScrollOpacity(newOpacity);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgStyle = {
    backgroundColor: `rgba(17, 24, 39, ${scrollOpacity})` // gray-900 with dynamic opacity
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm border-b border-gray-800 top-0" style={bgStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="src\assets\HealthyPubLogo.png" alt="Logo" className="w-20 h-20" />
              {/* <span className="ml-2 text-xl font-bold">Healthy Pub</span> */}
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActivePath('/') ? 'text-sky-400' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${isActivePath('/products') ? 'text-sky-400' : 'text-gray-300 hover:text-white'}`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActivePath('/about') ? 'text-sky-400' : 'text-gray-300 hover:text-white'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActivePath('/contact') ? 'text-sky-400' : 'text-gray-300 hover:text-white'}`}
            >
              Contact
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-24 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50">
          <div className="px-2 pt-4 pb-3 space-y-3 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 transition-colors ${isActivePath('/') ? 'text-sky-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`block px-3 py-2 transition-colors ${isActivePath('/products') ? 'text-sky-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 transition-colors ${isActivePath('/about') ? 'text-sky-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 transition-colors ${isActivePath('/contact') ? 'text-sky-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}