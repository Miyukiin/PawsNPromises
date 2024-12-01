// src/components/about/IntroSection.tsx

import React from "react";

const IntroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center py-4 px-6 bg-gray-100 flex-grow">
      <div className="flex flex-col md:flex-row items-center justify-center py-8 px-6 bg-gray-100 w-full max-w-6xl">
        {/* Image Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-3">
          <img
            src="/image/pawsnpromises-logo.png"
            alt="Paws and Promises Logo"
            className="w-48 h-48 md:w-[442px] md:h-[394px]"
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold text-tertiary mb-6 md:mb-4 tracking-wide">
            We are Paws and <br /> Promises
          </h1>
          <p className="text-[#379777] text-base md:text-xl mb-4 text-justify leading-relaxed tracking-wider">
            Paws and Promises bridges the gap between adoption shelters and pet
            lovers, offering a platform for fur parents to connect, volunteer, and
            adopt.
          </p>
          <p className="text-[#379777] text-base md:text-xl text-justify leading-relaxed tracking-wider">
            Our mission is to provide loving homes for stray animals, bringing
            joy to both pets and their new families—one stray at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
