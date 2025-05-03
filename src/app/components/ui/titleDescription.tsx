'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const TitleDescription: React.FC<CardProps> = ({
  image,
  title,
  description,
  className = '',
  imageClassName = '',
  titleClassName = '',
  descriptionClassName = '',
}) => {
  return (
    <div className={` ${className}`}>
      
        <Image
          src={image}
          alt={title}
          className={`w-10 ${imageClassName}`}
          width={500}
          height={300}
        />
      <div className=" ">
        <h2 className={`text-[20px] md:text-[24px] font-semibold mb-2 text-[#1B1B26] ${titleClassName}`}>{title}</h2>
        <p className={`text-[#3A3846] text-[16px] md:text-[18px]  ${descriptionClassName}`}>{description}</p>
      </div>
    </div>
  );
};

export default TitleDescription;
