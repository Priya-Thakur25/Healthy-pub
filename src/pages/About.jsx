import React from 'react';
import { Award, Target, Users2, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16 bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1605296867424-35fc25c9212a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Story</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded in 2025, Healthy Pub has been at the forefront of sports nutrition,
              delivering premium supplements to athletes worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg bg-gray-700 text-center">
              <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Quality First</h3>
              <p className="text-gray-300">Premium ingredients, rigorous testing, exceptional results</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-700 text-center">
              <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Innovation</h3>
              <p className="text-gray-300">Cutting-edge formulas backed by science</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-700 text-center">
              <Users2 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Community</h3>
              <p className="text-gray-300">Supporting athletes in achieving their goals</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-700 text-center">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Reliability</h3>
              <p className="text-gray-300">Consistent quality you can count on</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                position: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sarah Johnson",
                position: "Head of Research",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Mike Williams",
                position: "Product Development",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-gray-300">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}