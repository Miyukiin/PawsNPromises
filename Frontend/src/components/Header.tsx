'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'react-feather'; // Icons for the hamburger menu

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname()?.replace(/\/$/, '') || '/';
  const normalizedHref = href === '/' ? '/' : href.replace(/\/$/, '');

  const isActive = pathname === normalizedHref;

  return (
    <Link
      href={href}
      className={`font-medium ${
        isActive
          ? 'text-primary font-semibold underline decoration-2 underline-offset-[8px]'
          : 'text-black hover:font-bold hover:text-primary'
      }`}
    >
      {label}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center px-4 py-4 md:px-12">
        {/* Leftmost Logo */}
        <div className="flex items-center">
          <Link href="/home">
            <Image
              src="/image/header-pawsnpromises.png"
              alt="Paws and Promises Logo"
              width={300} 
              height={120}
              priority
              className="w-auto h-auto max-w-[200px] md:max-w-[350px]"
            />
          </Link>
        </div>

        {/* Navigation Buttons on Large Screens */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <NavLink href="/home" label="Home" />
          <NavLink href="/adopt" label="Adopt" />
          <NavLink href="/about" label="About Us" />
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-16 right-4 bg-white shadow-lg py-4 px-6 rounded-lg z-20`}
      >
        <div className="flex flex-col items-end gap-4">
          <NavLink href="/home" label="Home" />
          <NavLink href="/adopt" label="Adopt" />
          <NavLink href="/about" label="About Us" />
        </div>
      </div>
    </header>
  );
};

export default Header;
