"use client";

import React, { useState } from "react";
import ProductCard from "./ui/productCard";
import Modal from "./ui/modal";
import Button from "./ui/Button";


const products = [
  {
    id: 1,
    imageSrc: "/assets/images/product.png",
    title: "500W Solar Power Solution",
    price: "₦4,999",
    features: ["Designed an efficient off-grid solar power system for remote areas.", "Integrated battery storage and energy management for optimal performance."],
  },
  {
    id: 2,
    imageSrc: "/assets/images/product2.png",
    title: "Automatic Changeover Switch",
    price: "₦4,999",
    features: ["Developed an intelligent power transfer system for seamless switching between power sources.", "Ensured safety, reliability, and automation using embedded control algorithms."],
  },
  {
    id: 3,
    imageSrc: "/assets/images/product3.png",
    title: "IIoT Smart Meter Gateway",
    price: "₦4,999",
    features: ["Implemented a smart metering system with real-time data acquisition.", "Enabled remote monitoring and energy analytics for industrial applications."],
  },
  {
    id: 4,
    imageSrc: "/assets/images/product2.png",
    title: "Liquid Level Monitoring System",
    price: "₦4,999",
    features: ["Engineered a real-time liquid level monitoring system for industrial and agricultural applications.", "Provided alerts, automated control, and remote access through an intuitive dashboard."],
  },
  {
    id: 5,
    imageSrc: "/assets/images/product3.png",
    title: "Home Automation System",
    price: "₦4,999",
    features: ["Designed a comprehensive home automation solution for smart living.", "Integrated lighting, security, and appliance control using IoT technology."],
  },
];

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<null | typeof products[0]>(null);

  return (
    <section className="py-12 bg-white">
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
           <div className="flex flex-wrap justify-center gap-6 mt-10">
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
