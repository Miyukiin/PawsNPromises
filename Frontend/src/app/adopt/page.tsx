"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import PetCard from "@/components/adopt/PetCard";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Select, MenuItem, InputBase, Button, IconButton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { getPets } from "src/lib/utils";

interface Pet {
  id: number;
  name: string;
  age: string;
  breed: string;
  imageSrc: string;
}

const AdoptPage = () => {
  const [sortOption, setSortOption] = useState("ALPHABETICAL");
  const [page, setPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState([
    { label: "Breed:", value: "Labrador" },
    { label: "Age:", value: "Adult" },
  ]);

  const [pets, setPets] = useState<Pet[]>([]);

  const handleClearFilter = (filter: { label: string; value: string }) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in" });

    // API Fetching
    getPets().then((data) => {
      setPets(data);
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  // Sort pets
  useEffect(() => {
    setPets((prevPets) => {
      const sortedPets = prevPets.sort((a, b) => {
        // Define the age order
        const ageOrder = ["Puppy", "Young", "Adult", "Senior"];

        // Sort based on the selected option ngl idk why this needs to be !==
        return sortOption !== "ALPHABETICAL"
          ? a.name.localeCompare(b.name)
          : ageOrder.indexOf(a.age) - ageOrder.indexOf(b.age);
      });
      return sortedPets;
    });
  }, [sortOption]);

  return (
    <div className="flex flex-col mt-2 min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col sm:flex-row">
        {/* Left Sidebar - Filters */}
        <aside
          className={`${isSidebarOpen ? "block" : "hidden"} sm:block w-full sm:w-1/6 bg-lightgray px-4 py-12 border-b sm:border-r drop-shadow-2xl border-gray-300`}
          data-aos="fade-left"
        >
          {/* Filter Section */}
          {["Animal", "Breed", "Age", "Size", "Gender", "Shelter"].map(
            (filter) => (
              <div className="mb-4" key={filter} data-aos="fade-up">
                <h3 className="text-sm text-darkgray text-opacity-60 font-semibold">
                  {filter}
                </h3>
                <div className="relative">
                  <select className="w-full font-semibold border rounded-xl p-3 mt-1 text-tertiary text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-tertiary">
                    <option>{filter === "Animal" ? "Dog" : "Option 1"}</option>
                    <option>Option 2</option>
                  </select>
                  <ExpandMoreOutlinedIcon
                    className="absolute right-3 top-3 text-tertiary"
                    fontSize="small"
                  />
                </div>
              </div>
            ),
          )}
        </aside>

        {/* Right Sidebar - Applied Filters and Results */}
        <main className="w-full sm:w-5/6 p-6 sm:p-6 bg-lightgray flex flex-col items-center">
          <button
            className="sm:hidden bg-tertiary text-white px-4 py-2 rounded-lg mb-2 block mx-auto"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Filters"
          >
            {isSidebarOpen ? "Hide Filter Options" : "Show Filter Options"}
          </button>

          {/* Filters Applied Section */}
          <div className="mt-2 mb-2 w-full text-center" data-aos="fade-up">
            <div className="flex justify-center items-center mt-2 mb-2">
              <h2 className="text-base font-normal">Filters Applied</h2>
            </div>
            <div className="flex justify-center items-center mt-2 space-x-2 flex-wrap">
              {activeFilters.map((filter) => (
                <div
                  key={filter.label}
                  className="flex items-center bg-tertiary text-white px-3 py-1 rounded-xl"
                  data-aos="fade-in"
                >
                  <span className="text-sm font-medium mr-2">
                    {filter.label}
                  </span>
                  <span className="text-sm font-medium mr-2">
                    {filter.value}
                  </span>
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
                    aria-label={`Remove ${filter.label} filter`}
                    onClick={() => handleClearFilter(filter)}
                  >
                    <CancelOutlinedIcon fontSize="medium" />
                  </IconButton>
                </div>
              ))}

              <button
                className="text-sm text-tertiary font-medium underline ml-auto sm:ml-0 sm:text-center w-full sm:w-auto mt-4 sm:mt-0 sm:mb-0"
                aria-label="Clear All Filters"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Sort and Search Section */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 w-full"
            data-aos="fade-up"
          >
            <div className="relative flex items-center border rounded-xl px-4 py-2 sm:w-2/6 bg-white bg-opacity-50">
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
            <div className="relative flex items-center border rounded-xl px-4 py-3 sm:w-1/2 bg-white bg-opacity-50">
              <InputBase
                placeholder="Search for paw friends..."
                className="flex-grow outline-none text-gray-600"
                inputProps={{ "aria-label": "search" }}
              />
              <div className="flex items-center justify-center">
                <SearchIcon className="text-tertiary" />
              </div>
            </div>
          </div>

          {/* Pet Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full justify-center">
            {pets &&
              pets.map((pet) => (
                <Link href={`/petinfo`} key={pet.id}>
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
              ))}
          </div>

          {/* Pagination Section */}
          <div className="flex justify-center items-center mt-6 gap-4 w-full">
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

            <Button
              variant="contained"
              style={{
                backgroundColor: "#3BA07F",
                color: "#FFF",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "0.75rem",
              }}
              disabled={true}
              aria-label="Go to previous page"
            >
              ← Back
            </Button>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#3BA07F",
                color: "#FFF",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "0.75rem",
              }}
              disabled={true}
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
