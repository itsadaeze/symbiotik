


'use client';

import React from 'react';
import Image from 'next/image';

interface ServicesCardProps {
  imageSrc: string;
  title: string;
  className?: string;
}

const ServiceCard: React.FC<ServicesCardProps> = ({ imageSrc, title,  className }) => {
  return (
    <div className={` w-64 flex-shrink-0 ${className}`}>
      
      <div className="relative w-full h-[346px] px-1.5 ">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-lg object-cover w-full "
        />
        
        <div className="absolute bottom-4 bg-white flex flex-col w-[95%] h-[84px] justify-center items-start px-4 rounded-lg mx-auto ">
        <h3 className="text-[16px] lg:text-[20px] font-[400] mt-2">{title}</h3>
        </div>
      </div>

    
    </div>
  );
};

export default ServiceCard;