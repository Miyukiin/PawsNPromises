// src/components/about/AdoptImageSection.tsx

import React from "react";

const AdoptImageSection: React.FC = () => {
  return (
    <div className="relative max-w-2xl mb-4 px-1 mt-[-30px]">
      <img
        src="/image/about-info.png"
        alt="Adopt a Stray, Adopt to Stay"
        className="w-full h-auto"
      />
    </div>
  );
};

export default AdoptImageSection;
