
import React from "react";

const Header: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mt-2 sm:mt-6 mb-0 bg-center"
      style={{
        backgroundImage: "url('/image/home-header.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "60vh",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center py-4 px-4 sm:py-6 sm:px-6 w-full">
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          div {
            background-size: contain !important;
            background-repeat: no-repeat;
            background-position: top !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;