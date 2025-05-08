"use client";

import React from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  price: string;
  features: string[];
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  price,
  features,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
      <div className="bg-[#F5F5F5] rounded-lg p-6  w-full max-w-[90%] md:max-w-[60%] relative">
        <div className="relative w-full h-70 mb-4">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] text-[#1B1B26] font-semibold mb-2">{title}</h2>
          <p className="text-[#1B1B26] font-normal text-[24px] mb-4">{price}</p>
        </div>

        <ul className="list-disc list-inside text-left mb-4 mt-4">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="bg-white absolute top-10 right-10 hover:bg-gray-300 flex justify-center items-center  active:bg-blue-400 w-7 h-7  text-black   focus:bg-blue-400  rounded-full focus:text-white transition-colors"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
