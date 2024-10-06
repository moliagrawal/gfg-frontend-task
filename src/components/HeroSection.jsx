import React from 'react';
import '../index.css';
import graphImage from '../assets/image.svg'; // Image
import HorizontalLine from '../assets/HorizontalLine.svg'; // Horizontal line SVG

const HeroSection = () => {
  return (
    <div className="flex flex-col items-start py-12 px-6 max-w-4xl mx-auto">
      {/* Top Announcement */}
      <div className="flex items-center mb-4">
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
          {/* Announcement Text */}
          <p className="text-gray-700 font-medium text-sm">
            Introducing an era of new and exciting game development
          </p>
          {/* Dot separator */}
          <span className="mx-2">•</span>
          {/* Read More Link */}
          <a href="#" className="text-gray-500 text-sm hover:text-gray-700 flex items-center">
            Read more →
          </a>
        </div>
      </div>

      {/* Title and Description */}
      <h1 className="text-4xl font-bold text-left mb-4">Access the full power of Python Game Development.</h1>
      <p className="text-xl text-gray-500 text-left mb-6 max-w-lg">
        The ultimate game dev workshop for Python enthusiasts. Learn, create, and innovate with the most versatile pl.
      </p>

      {/* Get Started Button */}
      <button className="px-6 py-3 bg-white text-black border-2 border-gray-300 rounded-full font-medium hover:bg-black hover:text-white transition duration-300">
        Get Started →
      </button>

      {/* Image and Horizontal Line */}
      <div className="w-full mt-8 relative">
        <img src={graphImage} alt="Graph" className="mx-auto w-4/5" /> {/* Increased image size */}

        {/* Horizontal Line SVG Sticking to the bottom */}
        <img src={HorizontalLine} alt="Horizontal Line" className="absolute left-0 right-0 bottom-0 w-full" />
      </div>
    </div>
  );
};

export default HeroSection;