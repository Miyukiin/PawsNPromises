import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const VolunteerFormSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div
      className="bg-tertiary w-full max-w-4xl mx-auto rounded-lg p-6 md:p-8 mb-16 mt-16"
      data-aos="fade-up"
    >
      <h2
        className="text-white text-1xl md:text-3xl font-bold mb-6 text-center"
        data-aos="fade-up"
      >
        WANT TO MAKE A PAWTASTIC DIFFERENCE? <br />
        <span className="text-4xl md:text-6xl font-extrabold">BE A VOLUNTEER TODAY</span>
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Name */}
        <div data-aos="fade-right">
          <label className="text-white text-sm mb-2 block">First Name:</label>
          <input
            type="text"
            className="w-full p-3 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Last Name */}
        <div data-aos="fade-right" data-aos-delay="200">
          <label className="text-white text-sm mb-2 block">Last Name:</label>
          <input
            type="text"
            className="w-full p-3 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Age */}
        <div data-aos="fade-left" data-aos-delay="400">
          <label className="text-white text-sm mb-2 block">Age:</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Email Address */}
        <div className="md:col-span-2" data-aos="fade-left" data-aos-delay="600">
          <label className="text-white text-sm mb-2 block">Email Address:</label>
          <input
            type="email"
            className="w-full p-3 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Contact Number */}
        <div data-aos="fade-right" data-aos-delay="800">
          <label className="text-white text-sm mb-2 block">Contact Number:</label>
          <input
            type="tel"
            className="w-full p-3 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-3" data-aos="fade-left" data-aos-delay="1000">
          <label className="text-white text-sm block">Address:</label>
          <input
            type="text"
            className="w-full p-3 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-3 text-center" data-aos="fade-up" data-aos-delay="1200">
          <button
            type="submit"
            className="bg-white text-tertiary font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in hover:bg-gray-100 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerFormSection;