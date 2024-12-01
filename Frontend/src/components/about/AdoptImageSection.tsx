// src/components/about/AdoptImageSection.tsx

import React from "react";

const AdoptImageSection: React.FC = () => {
  return (
    <div className="relative max-w-3xl mt-2 mb-12 px-4">
      <img
        src="/image/about-info.png"
        alt="Adopt a Stray, Adopt to Stay"
        className="w-full h-auto"
      />
    </div>
  );
};

export default AdoptImageSection;
