"use client";  

import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import IntroSection from "@/components/about/IntroSection";
import AdoptImageSection from "@/components/about/AdoptImageSection";
import VolunteerFormSection from "@/components/VolunteerFormSection";

const AboutPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,  
      once: false,    
      easing: "ease-in-out", 
      offset: 200,     
      delay: 100,      
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div 
        className="flex-1 bg-white flex items-center justify-center" 
        data-aos="fade-up"
      >
        <IntroSection />
      </div>

      <div 
        className="flex-1 bg-[#1E1E1E] flex items-center justify-center" 
        data-aos="fade-down" 
      >
        <div className="flex flex-col items-center justify-center w-full max-w-4xl">
          <AdoptImageSection />          
          <div data-aos="fade-up">
            <VolunteerFormSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage