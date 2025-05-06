"use client";

import React, { useState } from "react";
import ProductCard from "./ui/productCard";
import Modal from "./ui/modal";
import Button from "./ui/Button";


const products = [
  {
    id: 1,
    imageSrc: "/assets/images/product1.jpg",
    title: "Smart Watch",
    price: "$99",
    features: ["Heart Rate Monitor", "Bluetooth", "Water Resistant"],
  },
  {
    id: 2,
    imageSrc: "/assets/images/product2.jpg",
    title: "Wireless Headphones",
    price: "$199",
    features: ["Noise Cancelling", "20hr Battery", "Bluetooth 5.0"],
  },
  {
    id: 3,
    imageSrc: "/assets/images/product3.jpg",
    title: "Smartphone",
    price: "$799",
    features: ["128GB Storage", "OLED Display", "5G Support"],
  },
];

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<null | typeof products[0]>(null);

  return (
    <section className="py-12 bg-gray-100">
     <div className='max-w-[1400px] mx-auto'>
      <div className="flex justify-center items-center ">
     <Button
          text="Our Products"
          textColor="text-[#1B1B26]"
          borderColor="border-1 border-[#000000]"
          className='font-[400] py-2 text-[#3A3846] text-[16px] lg:text-[20px]  '
          />
          </div>
           <p className='text-[18px] font-[400] text-[#3A3846] text-center mt-7'> Explore our growing range of innovative, user-friendly electronics built to simplify life and optimize energy usage.</p>
        <div className="flex flex-wrap justify-center gap-6 mt-15">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              price={product.price}
              onViewDetails={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          imageSrc={selectedProduct.imageSrc}
          title={selectedProduct.title}
          price={selectedProduct.price}
          features={selectedProduct.features}
        />
      )}
    </section>
  );
};

export default ProductSection;
