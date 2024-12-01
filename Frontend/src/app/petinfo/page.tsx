"use client";

import React, { useState } from "react";
import { IconButton, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const PetInfoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdoptClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-lightgray font-sans">
      {/* Pet Image and Name Banner */}
      <div className="w-full mb-1">
        <div className="w-full h-[400px] bg-black overflow-hidden">
          <img
            src="/image/petinfo-mainimage.png"
            alt="Rexar"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container p-6 justify-center">
        <div className="bg-[#2DC593] mb-8 text-white py-8 rounded-xl flex items-center justify-between px-8">
          <h1 className="text-4xl text-center font-normal flex-1">
            🐾 Meet <span className="text-white font-bold">Rexar! 🐾</span>
          </h1>
        </div>

        {/* Pet Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-semibold mb-3 text-darkgray text-opacity-80">
            REXAR
          </h2>
          <div className="w-full bg-darkgray bg-opacity-20 h-[2px] mb-3"></div>
          <div className="grid grid-cols-2 gap-2 text-gray-700 mb-5 text-opacity-80">
            <p>
              <strong className="font-semibold">Breed:</strong> Doberman
            </p>
            <p>
              <strong className="font-semibold">Shelter:</strong> Gora Manila
              Shelter
            </p>
            <p>
              <strong className="font-semibold">Age:</strong> Adult
            </p>
            <p>
              <strong className="font-semibold">Gender:</strong> Male
            </p>
            <p>
              <strong className="font-semibold">Size:</strong> Large
            </p>
          </div>
          <div className="w-full bg-darkgray bg-opacity-20 h-[2px] mb-3"></div>
          <h2 className="text-2xl font-semibold mb-3 text-darkgray text-opacity-80">
            ABOUT
          </h2>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-darkgray">
              OUR FRIEND
            </h3>
            <p className="text-gray-600 mb-4">
              Rexar is a loyal and friendly Doberman looking for a loving home.
              He enjoys playing fetch and is great with families. A gentle
              giant, Rexar loves cuddles and is eager to please his human
              companions.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-darkgray">HEALTH</h3>
            <p className="text-gray-600 mb-4">
              Rexar is in excellent health, fully vaccinated, and neutered. He
              receives regular checkups and is ready to transition into his
              forever home.
            </p>

            {/* Adoption Reminder */}
            <div className="flex items-center justify-start bg-[#FFEECC] text-gray-700 text-sm p-4 rounded-md mb-4">
              <ErrorOutlineOutlinedIcon
                fontSize="small"
                className="text-[#3BA07F] mr-2 h-8 w-8"
              />
              <p>
                Paws & Promises reminds its users to always adopt responsibly.
              </p>
            </div>

            {/* Adopt Button */}
            <div className="text-center text-white mt-4">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#F4CE14",
                  color: "#FFF",
                  fontWeight: "bold",
                  padding: "16px 32px",
                  fontSize: "26px",
                  width: "80%",
                  maxWidth: "1221px",
                }}
                className="rounded-lg"
                onClick={handleAdoptClick}
              >
                ADOPT REXAR 🐾
              </Button>
            </div>
          </div>
        </div>

        {/* Shelter Info and Map Section */}
        <div className="flex flex-col md:flex-row bg-white pl-2 rounded-xl shadow-lg mb-8">
          {/* Shelter Info */}
          <div className="flex flex-col justify-between flex-1 md:w-1/2 px-6 py-6 pb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-normal text-darkgray">
                Gora Manila Shelter
              </h2>
              <div className="flex justify-ar">
                <IconButton
                  aria-label="Facebook"
                  color="primary"
                  size="large"
                >
                  <FacebookOutlinedIcon className="text-primary h-12 w-12" />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  color="secondary"
                  size="large"
                >
                  <InstagramIcon className="text-primary h-12 w-12" />
                </IconButton>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-gray-800 flex items-center">
                  <LocationOnOutlinedIcon className="mr-3 h-8 w-8 text-primary" />
                  <span className="text-xl font-semibold">Location</span>
                </p>
                <p className="text-gray-600 ml-11 text-lg">Lorem Ipsum Dolor</p>
              </div>
              <div className="w-full bg-darkgray bg-opacity-20 h-[2px]"></div>
              <div>
                <p className="text-gray-800 flex items-center">
                  <PhoneOutlinedIcon className="mr-3 h-8 w-8 text-primary" />
                  <span className="text-xl font-semibold">Contact Number</span>
                </p>
                <p className="text-gray-600 ml-11 text-lg">09125928815</p>
              </div>
              <div className="w-full bg-darkgray bg-opacity-20 h-[2px]"></div>
              <div>
                <p className="text-gray-800 flex items-center">
                  <EmailOutlinedIcon className="mr-3 h-8 w-8 text-primary" />
                  <span className="text-xl font-semibold">Email</span>
                </p>
                <p className="text-gray-600 ml-11 text-lg">
                  goramanilashelter@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 md:w-1/2">
            <img
              src="/image/map-image.png"
              alt="Map showing Gora Manila Shelter"
              className="w-full h-full rounded-md shadow"
            />
          </div>
        </div>

        {/* Other Friends */}
        <div className="container p-6 justify-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#3BA07F]">
            Check out our other Friends!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white rounded-xl h-72 shadow-lg overflow-hidden"
              >
                <img
                  src="/image/default-image.png"
                  alt="Rexar"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-lg font-semibold text-gray-800 text-center">
                    Rexar
                  </p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center bg-[#2DC593] text-white rounded-lg shadow-lg p-6">
              <button className="text-lg font-bold text-white flex flex-col items-center">
                <span className="text-4xl">🐾</span>
                <span className="mt-2">Meet More Friends!</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg py-6 pl-6 pr-24 shadow-lg ">
            <h2 className="text-3xl font-normal mb-4 text-darkgray">
              Thank you for your submission!
            </h2>
            <p className="text-darkgray mb-6">
              Look forward to receiving an email from us!
            </p>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#3BA07F",
                color: "#FFF",
              }}
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetInfoPage;
