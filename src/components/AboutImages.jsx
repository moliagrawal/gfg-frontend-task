import React from 'react';
import bl from '../assets/bl.svg';
import bru from '../assets/bru.svg';
import brd from '../assets/brd.svg';

const AboutImages = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
      {/* Large Image on the Left */}
      <div className="lg:w-1/2 flex justify-center">
        <img src={bl} alt="Large Image" className="w-full max-w-md lg:max-w-full" />
      </div>

      {/* Two Smaller Images on the Right */}
      <div className="lg:w-1/2 grid grid-rows-2 gap-4">
        <div className="flex justify-center">
          <img src={bru} alt="Chart Image" className="w-full max-w-md lg:max-w-sm" />
        </div>
        <div className="flex justify-center">
          <img src={brd} alt="Smiley Image" className="w-full max-w-md lg:max-w-sm" />
        </div>
      </div>
    </div>
  );
};

export default AboutImages;