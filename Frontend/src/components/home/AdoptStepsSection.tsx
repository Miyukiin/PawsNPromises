
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AdoptStepsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 flex-grow px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center py-8 px-6 bg-gray-100 w-full max-w-full">
        {/* Text Section */}
        <div
          className="flex-grow text-center md:text-left md:mr-4 mb-2 md:mb-0"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-tertiary mb-2 md:mb-3 tracking-wide">
            Interested in Adopting?
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tertiary mb-6 md:mb-8 tracking-wide">
            Make a Paw Friend in Four Easy Steps!
          </h1>

          <p
            className="text-[#379777] text-base sm:text-lg md:text-xl mb-2 text-justify leading-relaxed tracking-wider flex flex-col md:flex-row items-center justify-center md:justify-start"
            data-aos="fade-up"
          >
            <span className="inline-block aspect-square w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#379777] text-white text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center mb-2 md:mb-0 md:mr-4">
              1
            </span>
            Click a Friend’s Adoption Button
          </p>
          <p
            className="text-[#379777] text-base sm:text-lg md:text-xl mb-2 text-justify leading-relaxed tracking-wider flex flex-col md:flex-row items-center justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="inline-block aspect-square w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#379777] text-white text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center mb-2 md:mb-0 md:mr-4">
              2
            </span>
            Fill out the Adoption Application Form
          </p>
          <p
            className="text-[#379777] text-base sm:text-lg md:text-xl mb-2 text-justify leading-relaxed tracking-wider flex flex-col md:flex-row items-center justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="inline-block aspect-square w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#379777] text-white text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center mb-2 md:mb-0 md:mr-4">
              3
            </span>
            Take an Interview with Us
          </p>
          <p
            className="text-[#379777] text-base sm:text-lg md:text-xl mb-8 text-justify leading-relaxed tracking-wider flex flex-col md:flex-row items-center justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="inline-block aspect-square w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#379777] text-white text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center mb-2 md:mb-0 md:mr-4">
              4
            </span>
            Visit the Shelter and bring home your new Paw Friend!
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 mb-2 md:mb-0" data-aos="fade-left">
          <img
            src="/image/pawsnpromises-logo.png"
            alt="Paws and Promises Logo"
            className="w-full max-w-[442px] h-auto mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AdoptStepsSection;
