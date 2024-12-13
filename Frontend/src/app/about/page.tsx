"use client";

import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import IntroSection from "@/components/about/IntroSection";
import AdoptImageSection from "@/components/about/AdoptImageSection";
import VolunteerFormSection from "@/components/VolunteerFormSection";

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Initialize AOS only once when the component is mounted.
    AOS.init({ duration: 1000, once: true, easing: "ease-in" });

    // Optionally, refresh AOS on component unmount or page navigation.
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex-1 bg-white flex items-center justify-center">
          <IntroSection />
        </div>
  
        <div className="flex-1 bg-[#1E1E1E] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full max-w-4xl">
            <AdoptImageSection />
            <div className="flex-1 bg-[#1E1E1E] flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <VolunteerFormSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;