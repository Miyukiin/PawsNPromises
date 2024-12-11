"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import PetCard from "@/components/adopt/PetCard";
import { IconButton, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  API_BASE_URL,
  getPet,
  getPetImages,
  getRecommendedPets,
  getShelter,
} from "src/lib/utils";

interface Pet {
  id: number;
  name: string;
  animal: string;
  breed: string;
  age: string;
  size: string;
  gender: string;
  shelter_id: string;
  shelter_name: string;
  description: string;
  medical_description: string;
  imageSrc: string;
}

interface Shelter {
  id: number;
  name: string;
  contact_number: string;
  email: string;
  link: string;
}

const PetInfoPage = () => {
  // Catch slug
  const { id } = useParams();

  const [pet, setPet] = useState<Pet>();
  const [petImages, setPetImages] = useState<string[]>([]);
  const [shelter, setShelter] = useState<Shelter>();
  const [otherPets, setOtherPets] = useState<Pet[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdoptClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in" });

    // API Fetching
    getPet(Number(id)).then((data) => setPet(data));
    getRecommendedPets(Number(id)).then((data) => setOtherPets(data));

    return () => {
      AOS.refresh();
    };
  }, []);

  // Fetch images and shelter info
  useEffect(() => {
    if (pet) {
      getPetImages(Number(pet?.id)).then((data) => setPetImages(data));
      getShelter(Number(pet?.shelter_id)).then((data) => setShelter(data));
    }
  }, [pet]);

  return (
    <div className="flex flex-col min-h-screen items-center bg-lightgray font-sans">
      {/* Pet Image and Name Banner */}
      <div className="w-full mb-1">
        <div className="w-full h-[400px] bg-black overflow-hidden">
          <img
            src="/image/petinfo-mainimage.png"
            alt={pet?.name}
            className="object-cover w-full h-full"
            data-aos="fade-up"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container p-6 justify-center">
        <div className="bg-[#2DC593] mb-8 text-white py-8 rounded-xl flex items-center justify-between px-8">
          <h1
            className="text-4xl text-center font-normal flex-1"
            data-aos="zoom-in"
          >
            <img
              src="/image/paw.png"
              alt="Paw"
              className="inline-block w-12 h-12"
            />{" "}
            Meet <span className="text-white font-bold">{pet?.name}!</span>{" "}
            <img
              src="/image/paw.png"
              alt="Paw"
              className="inline-block w-12 h-12"
            />
          </h1>
        </div>

        {/* Pet Details Section */}
        <div
          className="bg-white p-6 rounded-xl shadow-lg mb-8"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-semibold mb-3 text-darkgray text-opacity-80">
            {pet?.name.toUpperCase()}
          </h2>
          <div className="w-full bg-darkgray bg-opacity-20 h-[2px] mb-3"></div>
          <div className="grid grid-cols-2 gap-2 text-gray-700 mb-5 text-opacity-80">
            <p>
              <strong className="font-semibold">Breed:</strong> {pet?.breed}
            </p>
            <p>
              <strong className="font-semibold">Shelter: </strong>
              {shelter?.name}
            </p>
            <p>
              <strong className="font-semibold">Age:</strong> {pet?.age}
            </p>
            <p>
              <strong className="font-semibold">Gender:</strong> {pet?.gender}
            </p>
            <p>
              <strong className="font-semibold">Size:</strong> {pet?.size}
            </p>
          </div>
          <div className="w-full bg-darkgray bg-opacity-20 h-[2px] mb-3"></div>
          <h2 className="text-2xl font-semibold mb-3 text-darkgray text-opacity-80">
            ABOUT
          </h2>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-darkgray">
              OUR PAW FRIEND
            </h3>
            <p className="text-gray-600 mb-4">{pet?.description}</p>
            <h3 className="text-xl font-semibold mb-2 text-darkgray">HEALTH</h3>
            <p className="text-gray-600 mb-4">{pet?.medical_description}</p>

            {/* Adoption Reminder */}
            <div
              className="flex items-center justify-start bg-[#FFEECC] text-gray-700 text-sm p-4 rounded-md mb-4"
              data-aos="fade-left"
            >
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
                  color: "#1E1E1E",
                  fontWeight: "bold",
                  padding: "16px 32px",
                  fontSize: "26px",
                  width: "100%",
                }}
                className="rounded-lg flex justify-center items-center space-x-4"
                onClick={handleAdoptClick}
                data-aos="fade-up"
              >
                <img
                  src="/image/paw2.png"
                  alt="Paw2"
                  className="inline-block w-8 h-8"
                />
                <span>ADOPT {pet?.name.toUpperCase()}</span>
                <img
                  src="/image/paw2.png"
                  alt="Paw2"
                  className="inline-block w-8 h-8"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Shelter Info and Map Section */}
        <div className="flex flex-col md:flex-row bg-white pl-2 rounded-xl shadow-lg mb-8">
          {/* Shelter Info */}
          <div
            className="flex flex-col justify-between flex-1 md:w-1/2 px-6 py-6 pb-12"
            data-aos="fade-right"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-normal text-darkgray">
                {shelter?.name}
              </h2>
              <div className="flex justify-ar">
                <IconButton aria-label="Facebook" color="primary" size="large">
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
                <p className="text-gray-600 ml-11 text-lg">
                  {shelter?.contact_number}
                </p>
              </div>
              <div className="w-full bg-darkgray bg-opacity-20 h-[2px]"></div>
              <div>
                <p className="text-gray-800 flex items-center">
                  <EmailOutlinedIcon className="mr-3 h-8 w-8 text-primary" />
                  <span className="text-xl font-semibold">Email</span>
                </p>
                <p className="text-gray-600 ml-11 text-lg">{shelter?.email}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 md:w-1/2" data-aos="fade-left">
            <img
              src="/image/map-image.png"
              alt="Map showing Gora Manila Shelter"
              className="w-full h-full rounded-md shadow"
            />
          </div>
        </div>

        {/* Other Pets Section */}
        <div className="text-center mt-8 mb-2">
          <h2
            className="text-3xl font-bold text-center mb-6 text-[#3BA07F]"
            data-aos="zoom-in"
          >
            Check out our other Paw Friends!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {otherPets.map((pet, index) => (
              <React.Fragment key={pet.id}>
                <Link href={`/petinfo/${pet.id}`} passHref>
                  <div data-aos="flip-left">
                    <PetCard
                      id={pet.id}
                      name={pet.name}
                      age={pet.age}
                      breed={pet.breed}
                      imageSrc={pet.imageSrc}
                    />
                  </div>
                </Link>

                {/* Add button next to the third pet card */}
                {index === 2 && (
                  <Link href={`/adopt`} passHref>
                    <div className="border rounded-3xl shadow-lg overflow-hidden bg-[#3BA07F] cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center p-6 col-span-1 md:col-span-1 lg:col-span-1 w-full sm:w-[95%] h-72">
                      <button className="text-lg font-bold text-white flex flex-col items-center w-full h-full justify-center">
                        <img
                          src="/image/paw.png"
                          alt="Paw Icon"
                          className="w-16 h-16"
                        />
                        <span className="mt-2">Meet More Paw Friends!</span>
                      </button>
                    </div>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetInfoPage;
