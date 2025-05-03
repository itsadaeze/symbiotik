'use client';

import React from 'react';
import Button from './ui/Button';

const HeroContainer = () => {
  return (
    <div 
      className="text-white h-[90vh] md:h-screen  flex flex-col justify-center items-center text-center p-4"
      style={{ backgroundImage: "url('/assets/images/herobg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-[36px] md:text-[56px] font-semibold mb-4 w-[80%] md:w-2/3">
        Innovative Power and Automation Solutions.
      </h1>
      <p className="text-[16px] md:text-[20px] mb-6 font-[400] w-[90%] md:w-[60%] tracking-wide">
        Harnessing Sustainable Energy with Portable Solar Inverters, Automatic Changeover Switches, and Advanced Automation Devices
      </p>
      <Button
        text="View Products"
        textColor="text-[#1B1B26]"
        bgColor="bg-white"
        hoverBgColor="hover:bg-[#1c2837]"
        className='font-[500] py-3'
      />
    </div>
  );
};

export default HeroContainer;
