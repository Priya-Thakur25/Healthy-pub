import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Youtube, Send, MessageCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [message, setMessage] = useState('');
  const location = useLocation();
  
  const isActivePath = (path) => {
    return location.pathname === path;
  };
  
  const sendMessage = () => {
    const phoneNumber = '+918755372900';
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };
  
  return (
    <footer className="footer-gradient pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <img src="src/assets/HealthyPubLogo.png" alt="Healthy Pub Logo" className="w-20 h-20" />
              <span className="ml-2 text-xl font-bold text-white enhanced-glow">
                Healthy Pub
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner in fitness and nutrition.
            </p>
            <p className="text-gray-400 text-sm">
              Inspiring healthier lives every day.
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className={`text-gray-300 hover:text-white transition-colors flex items-center ${isActivePath('/') ? 'text-sky-400' : ''}`}
                >
                  <span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`text-gray-300 hover:text-white transition-colors flex items-center ${isActivePath('/products') ? 'text-sky-400' : ''}`}
                >
                  <span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`text-gray-300 hover:text-white transition-colors flex items-center ${isActivePath('/about') ? 'text-sky-400' : ''}`}
                >
                  <span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`text-gray-300 hover:text-white transition-colors flex items-center ${isActivePath('/contact') ? 'text-sky-400' : ''}`}
                >
                  <span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Connect With Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/healthypub24?igsh=ZXlmc2lxNjZndmI2"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2 text-gray-400 group-hover:text-pink-500">
                    <Instagram size={18} />
                  </div>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@sagarsnapshots?si=drzVKnCEfjNkC8ly"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2 text-gray-400 group-hover:text-red-500">
                    <Youtube size={18} />
                  </div>
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/FgtdKMnB1K9KogCg0WTvPI"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2 text-gray-400 group-hover:text-green-500">
                    <MessageCircle size={18} />
                  </div>
                  WhatsApp Group
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Offeronsupplementshealthypub"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2 text-gray-400 group-hover:text-blue-500">
                    <Send size={18} />
                  </div>
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          
          {/* WhatsApp Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Quick Support
            </h3>
            <p className="text-gray-300 mb-4">
              Send us a message directly on WhatsApp for immediate assistance.
            </p>
            <div>
              <textarea
                className="bg-gray-700 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-500 mb-3 resize-none border border-gray-600"
                rows="3"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={sendMessage}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors w-full flex items-center justify-center space-x-2"
              >
                <span>Send to WhatsApp</span>
                <Send size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 <span className="text-white">Healthy Pub</span>. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/TermsAndServices" className="text-gray-400 hover:text-white text-sm">Terms And Services</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}