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

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, title, price, features }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <div className="relative w-full h-48 mb-4">
          <Image src={imageSrc} alt={title} fill className="object-cover rounded-md" />
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-blue-600 font-semibold text-lg mb-4">{price}</p>

        <ul className="list-disc list-inside text-left mb-4">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded transition w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
