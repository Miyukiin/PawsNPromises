// app/about/page.tsx

import React from "react";
import IntroSection from "@/components/about/IntroSection";
import AdoptImageSection from "@/components/about/AdoptImageSection";
import VolunteerFormSection from "@/components/VolunteerFormSection";

const AboutPage: React.FC = () => {
  return (
    <>
      <IntroSection />
      <div className="bg-[#1E1E1E] w-full flex flex-col items-center justify-start min-h-screen">
        <AdoptImageSection />
        <VolunteerFormSection />
      </div>
    </>
  );
};

export default AboutPage;
