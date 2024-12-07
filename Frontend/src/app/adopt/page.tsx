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
import { getPets, getStatic } from "src/lib/utils";

interface Pet {
  id: number;
  name: string;
  animal: string;
  breed: string;
  age: string;
  size: string;
  gender: string;
  shelter: string;
  imageSrc: string;
}

interface Filter {
  label: string;
  value: string;
}

interface FilterDropdownProps {
  label: string;
  options: string[];
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  filter,
  setFilter,
}) => {
  return (
    <div className="mb-4" key={label} data-aos="fade-up">
      <h3 className="text-sm text-darkgray text-opacity-60 font-semibold">
        {label}
      </h3>
      <div className="relative">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full font-semibold border rounded-xl p-3 mt-1 text-tertiary text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-tertiary"
        >
          <option value="all">All</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ExpandMoreOutlinedIcon
          className="absolute right-3 top-3 text-tertiary"
          fontSize="small"
        />
      </div>
    </div>
  );
};

const AdoptPage = () => {
  const [sortOption, setSortOption] = useState("ALPHABETICAL");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);

  // Page States
  const [pets, setPets] = useState<Pet[]>([]);
  const [displayedPets, setDisplayedPets] = useState<Pet[]>([]); // For search filter
  const pageLimit = 5; // Number of pets to display per page
  const pages = Math.ceil(displayedPets.length / pageLimit);

  // Filter States
  const [animalFilter, setAnimalFilter] = useState("all");
  const [breedFilter, setBreedFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");
  const [sizeFilter, setSizeFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");
  const [shelterFilter, setShelterFilter] = useState("all");

  const [animalFilterOptions, setAnimalFilterOptions] = useState([]);
  const [breedFilterOptions, setBreedFilterOptions] = useState([]);
  const [ageFilterOptions, setAgeFilterOptions] = useState([]);
  const [sizeFilterOptions, setSizeFilterOptions] = useState([]);
  const [genderFilterOptions, setGenderFilterOptions] = useState([]);
  const [shelterFilterOptions, setShelterFilterOptions] = useState([]);

  const filters = [
    {
      name: "Animal",
      options: animalFilterOptions,
      filter: animalFilter,
      setFilter: setAnimalFilter,
    },
    {
      name: "Breed",
      options: breedFilterOptions,
      filter: breedFilter,
      setFilter: setBreedFilter,
    },
    {
      name: "Age",
      options: ageFilterOptions,
      filter: ageFilter,
      setFilter: setAgeFilter,
    },
    {
      name: "Size",
      options: sizeFilterOptions,
      filter: sizeFilter,
      setFilter: setSizeFilter,
    },
    {
      name: "Gender",
      options: genderFilterOptions,
      filter: genderFilter,
      setFilter: setGenderFilter,
    },
    {
      name: "Shelter",
      options: shelterFilterOptions,
      filter: shelterFilter,
      setFilter: setShelterFilter,
    },
  ];

  const handleClearFilter = (filter: { label: string; value: string }) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  // On mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in" });

    // Fetch pets
    getPets().then((data) => {
      const sortedPets = data.sort((a: Pet, b: Pet) =>
        a.name.localeCompare(b.name),
      );
      setPets(sortedPets);
      setDisplayedPets(sortedPets);
    });

    // Fetch filters
    getStatic("animals").then((data) => setAnimalFilterOptions(data));
    getStatic("breeds").then((data) => setBreedFilterOptions(data));
    getStatic("ages").then((data) => setAgeFilterOptions(data));
    getStatic("sizes").then((data) => setSizeFilterOptions(data));
    getStatic("genders").then((data) => setGenderFilterOptions(data));
    getStatic("shelters").then((data) => setShelterFilterOptions(data));

    return () => {
      AOS.refresh();
    };
  }, []);

  // Sort pets
  useEffect(() => {
    setDisplayedPets((prevPets) => {
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
  }, [sortOption, searchTerm]);

  // Search pets
  useEffect(() => {
    const filteredPets = pets.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setDisplayedPets(filteredPets);
  }, [searchTerm]);

  // Filter pets
  useEffect(
    () => {
      // Update filter tags
      const activeFilters = filters.map((filter) => {
        if (filter.filter !== "all") {
          return {
            label: filter.name,
            value: filter.filter,
          };
        }
      });
      setActiveFilters(activeFilters.filter((f) => f !== undefined));

      // Filter pets
      const filteredPets = pets.filter((pet) => {
        return (
          (animalFilter === "all" || pet.animal === animalFilter) &&
          (breedFilter === "all" || pet.breed === breedFilter) &&
          (ageFilter === "all" || pet.age === ageFilter) &&
          (sizeFilter === "all" || pet.size === sizeFilter) &&
          (genderFilter === "all" || pet.gender === genderFilter) &&
          (shelterFilter === "all" || pet.shelter === shelterFilter)
        );
      });
      setDisplayedPets(filteredPets);
    },
    filters.map((filter) => filter.filter),
  );

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
          {filters.map((filter) => (
            <FilterDropdown
              key={filter.name}
              label={filter.name}
              options={filter.options}
              filter={filter.filter}
              setFilter={filter.setFilter}
            />
          ))}
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
                onClick={() => filters.map((filter) => filter.setFilter("all"))}
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
            {displayedPets &&
              displayedPets
                .slice(
                  // Paginate
                  (page - 1) * pageLimit,
                  (page - 1) * pageLimit + pageLimit,
                )
                .map((pet) => (
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
                {Array.from({ length: pages }, (_, i) => (
                  <MenuItem key={i} value={i + 1}>
                    Page {i + 1} of {pages}
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
                // Styling for disabled
                pointerEvents: page === 1 ? "none" : "auto",
                opacity: page === 1 ? 0.75 : 1,
              }}
              disabled={page === 1}
              aria-label="Go to previous page"
              onClick={() => {
                setPage((prev) => Math.max(prev - 1, 1));
              }}
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
                // Styling for disabled
                pointerEvents: page === pages ? "none" : "auto",
                opacity: page === pages ? 0.75 : 1,
              }}
              disabled={page === pages}
              aria-label="Go to next page"
              onClick={() => {
                setPage((prev) => Math.min(prev + 1, pages));
              }}
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
