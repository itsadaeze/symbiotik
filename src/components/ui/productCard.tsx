"use client";

import React from "react";
import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  onViewDetails: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price, onViewDetails }) => {
  return (
    <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4 flex flex-col items-start text-left w-[350px] ">
              <div className="relative w-full h-60 mb-3">
                <Image src={imageSrc} alt={title} fill className="object-cover rounded-[20px] " />
              </div>
      <h3 className="text-[20px] font-semibold text-[#1B1B26] mb-1 text-left h-16">{title}</h3>
    
      <div className="flex justify-between w-full items-center ">
        <p className="text-[#1B1B26] font-semibold text-[24px] mb-3">{price}</p>
        <button
          onClick={onViewDetails}
          className="bg-[#0F7BFF] text-[16px] font-medium text-white px-4 py-2 rounded-[40px] hover:bg-blue-700 transition"
        > 
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
