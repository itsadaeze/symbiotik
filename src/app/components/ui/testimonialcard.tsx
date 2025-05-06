


"use client";

import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  imageSrc: string;
  title: string;
  className?: string;
  icon: string;
  description: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  title,
  className,
  icon,
  description,
}) => {
  return (
    <div className={`w-[55%] bg-[#0E70E8] border border-[#0E70E8] rounded-[12px] flex-shrink-0 ${className}`}>
      <div className="w-full h-[300px] px-5 py-4 flex flex-col justify-between">
        
        <p className="text-[20px] font-[400] text-white w-[90%] text-start mt-4">{description}</p>

      
        <div className="flex gap-3 items-center mt-4">
          <div className="relative w-[50px] h-[50px]">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-white text-[20px] font-[400]">{title}</p>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="relative w-4 h-4">
                  <Image
                    src={icon}
                    alt={`rating-${idx}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

