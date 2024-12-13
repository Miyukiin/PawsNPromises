import React from "react";

const Header: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mt-2 mb-0 bg-center w-full"
      style={{
        backgroundImage: "url('/image/home-header.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        height: "60vh", 
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center py-4 px-4 sm:py-6 sm:px-6 w-full">
        {/* Add any other content here */}
      </div>
    </div>
  );
};

export default Header;
