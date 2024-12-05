// src/components/about/IntroSection.tsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IntroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true, });
  }, []);

  return (
    <div className="flex flex-col items-start justify-center mt-2 bg-gray-100 flex-grow">
      <div className="flex flex-col md:flex-row items-center justify-center py-8 px-6 bg-gray-100 w-full max-w-full">
        {/* Image Section */}
        <div
          className="flex-shrink-0 mt-2 mb-4 md:mt-4 md:mb-4 mx-auto md:mx-0"
          data-aos="fade-right" 
        >
          <img
            src="/image/pawsnpromises-logo.png"
            alt="Paws and Promises Logo"
            className="w-48 h-48 md:w-[442px] md:h-[394px]"
          />
        </div>

        {/* Text Section */}
        <div
          className="flex-grow text-center md:text-left md:mr-8"
          data-aos="fade-left"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-tertiary mb-6 md:mb-4 tracking-wide">
            We are Paws and Promises
          </h1>
          <p className="text-[#379777] text-base md:text-xl mb-4 text-justify leading-relaxed tracking-wider">
            Paws and Promises connects adoption shelters with compassionate pet lovers, offering a platform for fur parents to adopt, volunteer, and support animals in need. We strive to create a community where people can make a difference by giving strays a chance at a better life through adoption and volunteer work.
          </p>
          <p className="text-[#379777] text-base md:text-xl text-justify leading-relaxed tracking-wider">
            Our mission is to provide loving homes for homeless animals, ensuring they find care and companionship. By partnering with shelters, we help rescue strays and bring joy to both pets and their new families—one adoption at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
