"use client";

import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import PetCard from "@/components/adopt/PetCard"; // Import the PetCard component
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"; // Close icon for filters
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined"; // Custom dropdown arrow icon
import SearchIcon from "@mui/icons-material/Search"; // Search icon
import { Select, MenuItem, InputBase, Button, IconButton } from "@mui/material"; // Material-UI components for dropdown

const AdoptPage = () => {
  const [sortOption, setSortOption] = useState("ALPHABETICAL"); // State for sorting
  const [page, setPage] = useState(1); // State for current page

  // Sample data for pets
  const pets = [
    {
      id: 1,
      name: "Rexar",
      type: "Puppy",
      breed: "Doberman",
      imageSrc: "/image/default-image.png",
    },
    {
      id: 2,
      name: "Bella",
      type: "Adult",
      breed: "Labrador",
      imageSrc: "/image/default-image.png",
    },

    {
      id: 4,
      name: "Luna",
      type: "Puppy",
      breed: "Bulldog",
      imageSrc: "/image/default-image.png",
    },
    {
      id: 5,
      name: "Charlie",
      type: "Adult",
      breed: "Beagle",
      imageSrc: "/image/default-image.png",
    },
    {
      id: 6,
      name: "Lucy",
      type: "Senior",
      breed: "Poodle",
      imageSrc: "/image/default-image.png",
    },
    // Add more pet objects as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Sidebar - Filters */}
        <aside className="w-1/4 bg-lightgray px-4 py-14 border-r drop-shadow-2xl border-gray-300">
          {/* Filter Section */}
          {["Animal", "Breed", "Age", "Size", "Gender", "Shelter"].map((filter) => (
            <div className="mb-4" key={filter}>
              <h3 className="text-sm text-darkgray text-opacity-60 font-semibold">{filter}</h3>
              <div className="relative">
                <select className="w-full font-semibold border rounded-xl p-3 mt-1 text-tertiary text-sm appearance-none">
                  <option>{filter === "Animal" ? "Dog" : "Option 1"}</option>
                  <option>Option 2</option>
                </select>
                <ExpandMoreOutlinedIcon
                  className="absolute right-3 top-3 text-tertiary"
                  fontSize="small"
                />
              </div>
            </div>
          ))}
        </aside>

        {/* Right Sidebar - Applied Filters and Results */}
        <main className="w-3/4 p-6 bg-lightgray">
          {/* Filters Applied Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-normal">Filters Applied</h2>
            </div>
            <div className="flex items-end mt-2 space-x-2">
              <div className="flex items-center bg-tertiary text-white px-3 py-1 rounded-xl">
                <span className="text-sm font-medium mr-2">Breed</span>
                <IconButton
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #3BA07F",
                    color: "#3BA07F",
                    fontSize: "0.75rem",
                    width: "24px",
                    height: "24px",
                    padding: "2px",
                  }}
                  aria-label="Remove Breed filter"
                >
                  <CancelOutlinedIcon fontSize="medium" />
                </IconButton>
              </div>
              <div className="flex items-center bg-tertiary text-white px-3 py-1 rounded-xl">
                <span className="text-sm font-medium mr-2">Age</span>
                <IconButton
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #3BA07F",
                    color: "#3BA07F",
                    fontSize: "0.75rem",
                    width: "24px",
                    height: "24px",
                    padding: "2px",
                  }}
                  aria-label="Remove Age filter"
                >
                  <CancelOutlinedIcon fontSize="medium" />
                </IconButton>
              </div>
              <button
                className="text-sm text-tertiary font-medium underline ml-auto"
                aria-label="Clear All Filters"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Sort and Search Section */}
          <div className="flex items-end justify-between mb-6 gap-4">
            {/* Sort by Dropdown */}
            <div className="relative flex items-center border rounded-xl px-4 py-2 w-2/6 bg-white bg-opacity-50">
              <div className="flex flex-col w-full">
                <span className="text-gray-600 text-sm">Sort by</span>
                <Select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  variant="standard"
                  disableUnderline
                  className="font-bold text-tertiary w-full"
                  IconComponent={ExpandMoreOutlinedIcon}
                >
                  <MenuItem value="ALPHABETICAL">ALPHABETICAL</MenuItem>
                  <MenuItem value="AGE">AGE</MenuItem>
                </Select>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative flex items-center border rounded-xl px-4 py-[19px] w-1/2 bg-white bg-opacity-50">
              <InputBase
                placeholder="Search..."
                className="flex-grow outline-none text-gray-600"
                inputProps={{ "aria-label": "search" }}
              />
              <div className="flex items-center justify-center">
                <SearchIcon className="text-tertiary" />
              </div>
            </div>
          </div>

          {/* Pet Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pets.map((pet) => (
              <Link href={`/petinfo`} key={pet.id}>
                <PetCard
                  id={pet.id}
                  name={pet.name}
                  type={pet.type}
                  breed={pet.breed}
                  imageSrc={pet.imageSrc}
                />
              </Link>
            ))}
          </div>

          {/* Pagination Section */}
          <div className="flex justify-end items-center mt-6 gap-4">
            {/* Page Dropdown */}
            <div className="relative font-semibold flex items-center border rounded-xl px-3 py-1 w-40 text-tertiary bg-white bg-opacity-50">
              <Select
                value={page}
                onChange={(e) => setPage(Number(e.target.value))}
                variant="standard"
                disableUnderline
                className="font-medium text-tertiary w-full"
                IconComponent={ExpandMoreOutlinedIcon}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <MenuItem key={i} value={i + 1}>
                    Page {i + 1} of 5
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* Back Button */}
            <Button
              variant="contained"
              style={{
                backgroundColor: "#3BA07F",
                color: "#FFF",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "0.75rem",
              }}
              disabled={true} // Disabled for now
              aria-label="Go to previous page"
            >
              ← Back
            </Button>

            {/* Next Button */}
            <Button
              variant="contained"
              style={{
                backgroundColor: "#3BA07F",
                color: "#FFF",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "0.75rem",
              }}
              disabled={true} // Disabled for now
              aria-label="Go to next page"
            >
              Next →
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdoptPage;
