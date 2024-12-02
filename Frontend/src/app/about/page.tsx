// app/about/page.tsx

import React from "react";
import IntroSection from "@/components/about/IntroSection";
import AdoptImageSection from "@/components/about/AdoptImageSection";
import VolunteerFormSection from "@/components/VolunteerFormSection";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Top section with white background */}
      <div className="flex-1 bg-white flex items-center justify-center">
        <IntroSection />
      </div>

      {/* Bottom section with dark background */}
      <div className="flex-1 bg-[#1E1E1E] flex items-center justify-center">
        {/* Wrapping the sections to ensure both are centered */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl">
          <AdoptImageSection />
          <VolunteerFormSection />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
