'use client';

import React, { useRef } from 'react';
import ServicesCard from './ui/servicescard';
import Button from './ui/Button';


// Sample data
const products = [
  { id: 1, imageSrc: '/assets/images/service1.png', title: 'Portable Solar Power Design & Installation',  },
  { id: 2, imageSrc: '/assets/images/service2.png', title: 'IoT & IIoT Device Integration' },
  { id: 3, imageSrc: '/assets/images/service3.png', title: 'Technical consulting' },
  { id: 4, imageSrc: '/assets/images/services4.png', title: 'PCB Design'},
  { id: 5, imageSrc: '/assets/images/services5.png', title: 'Automation Solutions'},
  { id: 6, imageSrc: '/assets/images/services6.png', title: 'Embedded Systems & Electronics Design' },
];

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (

    <section className=" bg-[#F5F5F5] px-[1rem] py-10  w-full md:px-[2rem] lg:px-8 ">
        <div className='max-w-[1400px] mx-auto'>
      <div className="flex justify-between w-1/2 flex-row items-center mb-4 ">
      <Button
          text="Products"
          textColor="text-[#1B1B26]"
          borderColor="border-1 border-[#000000]"
          className='font-[400] py-2 text-[#3A3846] text-[16px] lg:text-[20px]  '
          />
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
            ◀
          </button>
          <button onClick={() => scroll('right')} className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
            ▶
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex overflow-x-auto gap-7 mt-10 scrollbar-hide">
        {products.map((service) => (
          <ServicesCard
            key={service.id}
            imageSrc={service.imageSrc}
            title={service.title}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;
