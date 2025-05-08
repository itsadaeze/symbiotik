
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import * as icons from '../../../public/assets/icons'
import NavLinks from '../ui/navLinks';

import Button from '../ui/Button';


const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isXIcon, setIsXIcon] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setShowMenu((prev) => !prev);
    setIsXIcon((prev) => !prev);
  };

  const closeMenu = (): void => {
    setShowMenu(false);
    setIsXIcon(false);
  };

  return (
    <nav className="bg-[#FFFFFF] px-[1rem] py-4.5 w-full md:px-[2rem] lg:px-8 fixed top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="">
          <Image src={icons.logo} alt="logo" width={80} height={80} />
        </div>

       
        <div className="hidden md:flex space-x-[4rem]">
          <NavLinks />
        </div>

     
        <div className="hidden md:block">
        <Button
        text="Contact Us"
        textColor="text-white"
        bgColor="bg-[#0F7BFF]"
        borderColor="border border-[#0F7BFF]"
        hoverBgColor="hover:bg-[#1c2837]"
        />
        </div>

 
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isXIcon ? (
              <div className="w-[78px] h-8 bg-neutral-200 rounded-[100px] flex justify-center items-center">
                <span className="text-gray-950 text-sm font-bold">X</span>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <Image src={icons.menu} alt="menu" width={30} height={30} />
              </div>
            )}
          </button>
        </div>

    
        {showMenu && (
          <div className="lg:hidden fixed flex flex-col inset-y-0 right-0 z-50 bg-[#060A14] mt-[4rem] shadow-lg w-full h-screen p-4">
            <NavLinks onClick={closeMenu} isMobile />
            <Button  text="Contact Us"
            textColor="text-white"
            bgColor="bg-[#0F7BFF]"
           borderColor="border border-[#0F7BFF]"
           hoverBgColor="hover:bg-[#1c2837]" className="mt-10 w-2/5" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
