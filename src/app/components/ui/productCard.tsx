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
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center w-64">
      <div className="relative w-full h-40 mb-3">
        <Image src={imageSrc} alt={title} fill className="object-cover rounded-md" />
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-blue-600 font-bold text-xl mb-3">{price}</p>
      <button
        onClick={onViewDetails}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
