'use client';

import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#0F7BFF] border text-[16px] border-[#0F7BFF] text-white px-6 py-2 rounded-full flex items-center gap-1 hover:bg-[#1c2837] transition-all duration-300 ${className}`}
    >
      Contact Us
    </button>
  );
};

export default ContactButton;
