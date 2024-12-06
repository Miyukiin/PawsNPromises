// src/components/about/AdoptImageSection.tsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AdoptImageSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true, });
  }, []);

  return (
    <div className="relative max-w-3xl px-1 mt-[-10px]">
      <img
        src="/image/about-info.png"
        alt="Adopt a Stray, Adopt to Stay"
        className="w-full h-auto"
        data-aos="fade-up"
      />
    </div>
  );
};

export default AdoptImageSection;
