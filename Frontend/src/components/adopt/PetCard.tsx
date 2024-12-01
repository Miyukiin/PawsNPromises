"use client";

import React from "react";

interface PetCardProps {
  id: number;
  name: string;
  type: string;
  breed: string;
  imageSrc: string;
}

const PetCard: React.FC<PetCardProps> = ({ id, name, type, breed, imageSrc }) => {
  return (
    <div
      className="border rounded-3xl shadow-lg overflow-hidden bg-white cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ width: "95%" }}
    >
      <div className="relative">
        <img
          src={imageSrc}
          alt={`${name} the ${breed}`}
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="py-4 text-center">
        <h3 className="text-lg font-bold text-tertiary">{name}</h3>
        <p className="text-[13px] text-gray-600">
          {type} | {breed}
        </p>
      </div>
    </div>
  );
};

export default PetCard;
