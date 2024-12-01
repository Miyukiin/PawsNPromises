'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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
      className={` font-medium ${
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
  return (
    <header className="w-full bg-white shadow-header px-8 py-2">
      <div className="flex justify-between gap-x-12  items-center pr-32  pl-4 py-4">
        {/* Leftmost Logo */}
        <div className="flex items-center ">
          <Link href="/home">
            <Image
              src="/image/header-pawsnpromises.png"
              alt="Paws and Promises Logo"
              width={350}
              height={120}
              priority
            />
          </Link>
        </div>

        {/* Navigation Buttons */}
        <nav className="flex items-center gap-8 text-lg">
          <NavLink href="/home" label="Home" />
          <NavLink href="/adopt" label="Adopt" />
          <NavLink href="/about" label="About Us" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
