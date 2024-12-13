"use client";  

import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";
import Header from "@/components/home/Header";
import PawSection from "@/components/home/PawSection";
import DisplaySection from "@/components/home/DisplaySection";
import AdoptStepsSection from "@/components/home/AdoptStepsSection";
import VolunteerFormSection from "@/components/VolunteerFormSection";

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Initialize AOS only once when the component is mounted
    AOS.init({ duration: 1000, once: true, easing: "ease-in" });

    // Optionally, refresh AOS on component unmount or page navigation.
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden"> {/* Prevent horizontal scroll */}
      <div className="flex-1 flex items-center justify-center">
        <Header />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <PawSection />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <DisplaySection />
      </div>
      <div className="flex-1 bg-white flex items-center justify-center">
        <AdoptStepsSection />
      </div>
      <div className="flex-1 bg-[#1E1E1E] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <VolunteerFormSection />
      </div>
    </div>
  );
};

export default AboutPage;