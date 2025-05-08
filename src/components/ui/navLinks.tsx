'use client';

import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#service' },
  { label: 'Products', href: '#product' },
];

interface NavLinksProps {
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick, isMobile = false }) => {
  return (
    <>
      {navLinks.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          onClick={onClick}
          className={`${
            isMobile
              ? 'text-white text-base py-2 mt-10'
              : 'text-[#333333] relative group font-medium text-[16px] hover:text-black'
          }`}
        >
          {label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
