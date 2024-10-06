import React from 'react';

const AboutText = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-4 text-left">About PyHack</h1>
      <p className="text-lg text-gray-600 mb-6 text-left">
        PyHack is a dynamic, community-driven workshop <br /> designed to teach game development using Python.
      </p>
      <a
        href="#learn-more"
        className="inline-flex items-center text-lg text-gray-800 font-semibold hover:text-gray-600 underline decoration-gray-300 underline-offset-8"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
};

export default AboutText;
