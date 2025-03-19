import React, { useState } from 'react';
import { ShoppingCart, Star, Filter, SlidersHorizontal, MessageSquare, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";

export default function Products() {
  // Replace with your WhatsApp number including country code
  const whatsappNumber = "+918755372900";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const products = [
    {
      name: "Performance Whey",
      category: "Protein",
      price: "₹59.99",
      rating: 5,
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Premium whey protein isolate for maximum muscle recovery and growth."
    },
    {
      name: "Pre-Workout Elite",
      category: "Pre-Workout",
      price: "₹49.99",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Advanced pre-workout formula for enhanced energy and focus."
    },
    {
      name: "BCAA Complex",
      category: "Amino Acids",
      price: "₹39.99",
      rating: 5,
      image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Essential amino acids for muscle preservation and recovery."
    },
    {
      name: "Mass Gainer Pro",
      category: "Protein",
      price: "₹64.99",
      rating: 4,
      image: "https://images.unsplash.com/photo-1612532774276-cfa70ca7d651?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "High-calorie protein blend for muscle mass gain."
    },
    {
      name: "Creatine Monohydrate",
      category: "Performance",
      price: "₹29.99",
      rating: 5,
      image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Pure creatine monohydrate for strength and power."
    },
    {
      name: "Omega-3 Ultra",
      category: "Health",
      price: "₹34.99",
      rating: 4,
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "High-quality fish oil for heart and joint health."
    }
  ];

  // Define all categories (including those without products yet)
  const categories = [
    "All", 
    "Protein", 
    "Gainer", 
    "BCAA", 
    "EAA", 
    "Creatine", 
    "Pre-Workout", 
    "Multi Vitamin", 
    "Fish Oil", 
    "Liver Support", 
    "Peanut Butter"
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // WhatsApp button click handler
  const handleWhatsAppClick = (productName) => {
    const message = encodeURIComponent(`I'm interested in ${productName}. Can you provide more information?`);
    window.open(`${whatsappUrl}?text=${message}`, "_blank");
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSidebarOpen(false); // Close mobile sidebar after selection
  };

  return (
    <div className="pt-16 bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-gray-300">Premium supplements for your fitness journey</p>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-md"
          >
            <Filter className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar for Desktop */}
        <div className="hidden lg:block w-64 bg-gray-800 min-h-screen p-6 flex-shrink-0">
          <h3 className="text-xl text-white font-bold mb-6 flex items-center">
            <Filter className="w-5 h-5 mr-2" /> Categories
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <motion.div
                key={category}
                className="relative cursor-pointer p-3 rounded-lg"
                initial={false}
                animate={{
                  backgroundColor: category === selectedCategory ? "rgba(59, 130, 246, 0.2)" : "transparent",
                  color: category === selectedCategory ? "rgb(255, 255, 255)" : "rgb(156, 163, 175)",
                }}
                onClick={() => handleCategorySelect(category)}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              >
                <span className="relative z-10">{category}</span>
                {category === selectedCategory && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"
                    layoutId="sidebarIndicator"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 p-6 lg:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl text-white font-bold flex items-center">
                  <Filter className="w-5 h-5 mr-2" /> Categories
                </h3>
                <button 
                  onClick={() => setSidebarOpen(false)} 
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <motion.div
                    key={category}
                    className="relative cursor-pointer p-3 rounded-lg"
                    initial={false}
                    animate={{
                      backgroundColor: category === selectedCategory ? "rgba(59, 130, 246, 0.2)" : "transparent",
                      color: category === selectedCategory ? "rgb(255, 255, 255)" : "rgb(156, 163, 175)",
                    }}
                    onClick={() => handleCategorySelect(category)}
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  >
                    <span className="relative z-10">{category}</span>
                    {category === selectedCategory && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"
                        layoutId="mobileSidebarIndicator"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Current Category Display */}
            <div className="mb-8 flex items-center">
              <h2 className="text-2xl font-bold text-white">
                {selectedCategory === "All" ? "All Products" : selectedCategory}
              </h2>
              <span className="ml-3 bg-blue-600 text-xs px-2 py-1 rounded-full text-white">
                {filteredProducts.length} items
              </span>
            </div>
            
            {/* Products Grid with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <motion.div 
                      key={product.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-white">{product.name}</h3>
                          <span className="bg-blue-600 text-sm px-2 py-1 rounded">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < product.rating ? 'text-yellow-500 fill-current' : 'text-gray-600'}`}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-white">{product.price}</span>
                          <button
                            onClick={() => handleWhatsAppClick(product.name)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 active:scale-95"
                          >
                            <MessageSquare className="w-5 h-5 transition-all duration-300 group-hover:animate-pulse" />
                            <span className="transition-all duration-300 group-hover:font-bold">
                              Order Now
                            </span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                    <SlidersHorizontal className="w-16 h-16 text-gray-600 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
                    <p className="text-gray-400">We don't have any products in this category yet. Check back soon!</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}