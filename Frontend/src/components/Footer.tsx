'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#048C68] text-white flex justify-center items-center py-8 px-6 w-full">
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} Paws and Promises. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;