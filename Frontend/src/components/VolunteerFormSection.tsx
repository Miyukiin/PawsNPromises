// src/components/VolunteerFormSection.tsx

import React from "react";

const VolunteerFormSection: React.FC = () => {
  return (
    <div className="bg-tertiary w-full max-w-4xl rounded-lg p-8 mb-16">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
        WANT TO MAKE A DIFFERENCE? <br /> VOLUNTEER TODAY
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Name */}
        <div className="col-span-1">
          <label className="text-white text-sm mb-2 block">First Name:</label>
          <input
            type="text"
            className="w-full p-2 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none"
          />
        </div>

        {/* Last Name */}
        <div className="col-span-1">
          <label className="text-white text-sm mb-2 block">Last Name:</label>
          <input
            type="text"
            className="w-full p-2 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none"
          />
        </div>

        {/* Age */}
        <div className="col-span-1">
          <label className="text-white text-sm mb-2 block">Age:</label>
          <input
            type="number"
            className="w-full p-2 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none"
          />
        </div>

        {/* Email Address and Contact Number */}
        <div className="col-span-2 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-white text-sm mb-2 block">Email Address:</label>
            <input
              type="email"
              className="w-full p-2 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label className="text-white text-sm mb-2 block">Contact Number:</label>
            <input
              type="tel"
              className="w-full p-2 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Address */}
        <div className="col-span-3">
          <label className="text-white text-sm mb-2 block">Address:</label>
          <input
            type="text"
            className="w-full p-2 border-2 border-white bg-tertiary text-white rounded-md focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-3 text-center mt-4">
          <button
            type="submit"
            className="bg-white text-tertiary font-bold py-2 px-6 rounded-full hover:bg-gray-100"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerFormSection;
