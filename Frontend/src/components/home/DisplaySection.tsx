
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DisplaySection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center bg-[#379777] flex-grow"
      data-aos="fade-up" 
    >
      <div className="flex flex-col md:flex-row items-center justify-center py-4 px-4 sm:py-6 sm:px-6 bg-[#379777] w-full">
        <div
          className="flex-shrink-0 mt-0 mb-2 md:mt-2 md:mb-2 mx-auto md:mx-0 w-full"
          data-aos="zoom-in"
        >
          <img
            src="/image/home-display.png"
            alt="Paws and Promises Logo"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplaySection;
