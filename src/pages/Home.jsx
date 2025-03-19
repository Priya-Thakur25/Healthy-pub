import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { ArrowRight, Dumbbell, MessageSquare, Star, TrendingUp, Users } from 'lucide-react';
import Typed from "typed.js";

export default function Home() {
  const typedRef = useRef();
  
  // Replace with your WhatsApp number including country code
  const whatsappNumber = "+918755372900";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const typed = new Typed(typedRef.current,{
      strings:["The Supplement store", " Trusted by Athletes", " by Sagar Rajpoot"],
      typeSpeed:50,
      backSpeed:50,
      loop:true,
    });
    return () => typed.destroy();
  },[]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // WhatsApp button click handler
  const handleWhatsAppClick = (productName) => {
    const message = encodeURIComponent(`I'm interested in ${productName}. Can you provide more information?`);
    window.open(`${whatsappUrl}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 "> 
          Healthy Pub{" "}
          <span ref={typedRef} className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600'></span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Premium and Top Quality supplements for athletes
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            Shop Now <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in p-6 rounded-lg bg-gray-700 transform hover:scale-105 transition-all duration-300">
              <Dumbbell className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-300">Only the finest ingredients, tested and verified</p>
            </div>
            <div className="fade-in p-6 rounded-lg bg-gray-700 transform hover:scale-105 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-gray-300">Scientifically backed formulations</p>
            </div>
            <div className="fade-in p-6 rounded-lg bg-gray-700 transform hover:scale-105 transition-all duration-300">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Trusted</h3>
              <p className="text-gray-300">Loved by athletes worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Performance Whey",
                price: "₹ 59.99",
                image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                name: "Pre-Workout Elite",
                price: "₹ 49.99",
                image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                name: "BCAA Complex",
                price: "₹ 39.99",
                image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            ].map((product, index) => (
              <div key={index} className="fade-in bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <button 
                      onClick={() => handleWhatsAppClick(product.name)}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95"
                    >
                      <MessageSquare className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}