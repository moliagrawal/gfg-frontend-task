import React from 'react';
import AboutText from './AboutText';
import AboutImages from './AboutImages';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <AboutText />
      </div>

      <div className="w-full max-w-6xl mt-12">
        <AboutImages />
      </div>
    </div>
  );
};

export default About;
