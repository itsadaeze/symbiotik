'use client';

import React from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#product' },
  { label: 'Blog', href: '/blog' },
];

interface FooterLinksProps {
  className?: string;
  linkClassName?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ className = '', linkClassName = '' }) => {
  return (
    <div className={`flex flex-col gap-4 items-center md:items-start   ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`text-[#F1FFF1]  hover:text-[black] transition-colors text-sm ${linkClassName}`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
