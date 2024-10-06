import React from 'react';
import bl from '../assets/bl.svg';
import bru from '../assets/bru.svg';
import brd from '../assets/brd.svg';

const AboutImages = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:gap-2"> 
      <div className="lg:w-md flex justify-center">
        <img src={bl} alt="Large Image" className="w-full max-w-md lg:max-w-full" />
      </div>

      <div className="lg:w-1/2 grid grid-rows-2 gap-2"> 
        <div className="flex justify-center">
          <img src={bru} alt="Chart Image" className="w-full max-w-lg lg:max-w-md" /> 
        </div>
        <div className="flex justify-center">
          <img src={brd} alt="Smiley Image" className="w-full max-w-lg lg:max-w-md" /> 
        </div>
      </div>
    </div>
  );
};

export default AboutImages;