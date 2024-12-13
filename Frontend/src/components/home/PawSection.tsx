
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PetCard from "@/components/adopt/PetCard";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { getFeaturedPets } from "src/lib/utils";
import { Pet } from "@/components/adopt/AdoptPageContent";

interface SearchData {
  searchStringQuery: string,
  searchTypeQuery: string,
}

const PawSection = () => {
  const [featuredPets, setFeaturedPets] = useState<Pet[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchData, setSearchData] = useState<SearchData>({
    searchStringQuery: "",
    searchTypeQuery: "",
  });
  const router = useRouter()

  const handleAdoptClick = () => {
    setIsModalOpen(true);
  };  

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchData.searchStringQuery;
    router.push(`/adopt?petName=${query}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const newValue = e.target.value
    setSearchData((prev) => ({ ...prev, searchStringQuery: newValue }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
    const newValue = e.currentTarget.value;
    setSearchData((prev) => ({ ...prev, searchTypeQuery: newValue }));
    const query = newValue;
    router.push(`/adopt?petType=${query}`);
  };

  const otherPets = featuredPets.map((pet: Pet) => ({
    id: pet.id,
    name: pet.name,
    age: pet.age,
    breed: pet.breed,
    imageSrc: pet.imageSrc,
  }));
  
  useEffect(() => {
    const fetchFeaturedPets = async () => {
      try {
        const featured_pets = await getFeaturedPets();
        setFeaturedPets(featured_pets); 
      } catch (error) {
        console.error("Failed to fetch featured pets:", error);
      }
    };
  
    fetchFeaturedPets();
    AOS.init({ duration: 1000, once: false });
  }, []);
  

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 flex-grow mt-2 px-4 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <div className="text-center mt-24 mt-[-380px]">
        <h1
          className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 inline-flex items-center justify-center"
          data-aos="fade-up"
        >
          Find your new paw friend
          <img src="/image/paw.png" alt="Paw Icon" className="w-12 h-12 ml-2" />
        </h1>

        <h2
          className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-medium text-white mt-2"
          data-aos="fade-up"
        >
          Browse pets from our library of over 200+ paw friends!
        </h2>

        <div className="flex justify-center mt-8">
          <div
            className="relative flex items-center border rounded-xl px-4 py-3 sm:w-1/2 bg-white shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <form
              className="flex items-center justify-center w-full"
              onSubmit={handleOnSubmit}
            >
              <InputBase
                name="searchQuery"
                placeholder="Search for paw friends..."
                className="flex-grow outline-none text-gray-600"
                value={searchData.searchStringQuery}
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
              />
              <div className="flex items-center justify-center">
                <SearchIcon className="text-tertiary" />
              </div>
            </form>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleClick}
            value="Dog"
            className="bg-[#3BA07F] text-white font-medium py-4 px-8 text-xl rounded-lg mx-2 flex flex-col items-center justify-center hover:scale-110 transform transition-all duration-300"
          >
            <img src="image/dog.png" alt="Dog" className="mb-2 w-16 h-16 object-contain" />
            Dogs
          </button>
          <button
            onClick={handleClick}
            value="Cat"
            className="bg-[#3BA07F] text-white font-medium py-4 px-8 text-lg rounded-lg mx-2 flex flex-col items-center justify-center hover:scale-110 transform transition-all duration-300"
          >
            <img src="image/cat.png" alt="Cat" className="mb-2 w-16 h-16 object-contain" />
            Cats
          </button>
        </div>
      </div>

      {/* Paw Friends Section */}
      <div className="text-center mt-4 mb-2">
        <h2 className="text-3xl font-bold text-center mt-8 mb-8 text-[#3BA07F]" data-aos="zoom-in">
          PAW FRIENDS FOR ADOPTION!
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {otherPets.map((pet, index) => (
            <React.Fragment key={pet.id}>
              <Link href={`/petinfo/${pet.id}`} key={pet.id}>
                <div data-aos="flip-left">
                  <PetCard
                    name={pet.name}
                    age={pet.age}
                    breed={pet.breed}
                    imageSrc={pet.imageSrc}
                  />
                </div>
              </Link>

              {index === 2 && (
                <Link href={`/adopt`} passHref>
                  <div
                    className="border rounded-3xl shadow-lg overflow-hidden bg-[#3BA07F] cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center p-6 col-span-1 md:col-span-1 lg:col-span-1 w-full sm:w-[95%] h-72"
                  >
                    <button className="text-lg font-bold text-white flex flex-col items-center w-full h-full justify-center">
                      <img src="/image/paw.png" alt="Paw Icon" className="w-16 h-16" />
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
  );
};

export default PawSection;
