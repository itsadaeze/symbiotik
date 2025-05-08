"use client";

import React from "react";
import * as icons from "../../../public/assets/icons";
import Image from "next/image";
import FooterLinks from "../ui/footerLinks";

const Footer = () => {
  return (
    <footer  className="bg-[#616060] px-[1rem] py-20 w-full md:px-[2rem] lg:px-8 ">
     <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start ">
      
        <div className="flex flex-col md:flex-row justify-between w-[50%]">
          <div className="flex flex-col gap-4">
            <h4 className="text-[#F1FFF1] font-semibold text-[16px] text-center md:text-start">COMPANY</h4>
            <FooterLinks linkClassName="text-[#F1FFF1]  font-medium text-[15px] hover:underline" />
          </div>
          <div className="flex flex-col gap-4 text-black text-sm mt-8 md:mt-0  items-center md:items-start">
            <h4 className="text-[#F1FFF1] font-semibold text-[16px] text-center md:text-start">CONTACT</h4>
            <p className="text-[#F1FFF1] font-medium text-[15px]">(+234) 903-342-3422</p>
            <p className="text-[#F1FFF1] font-medium text-[15px]">info@sybiotik.co</p>
            <p className="text-[#F1FFF1] font-medium text-[15px]">Somewhere in the world</p>
          </div>
        </div>

       
        <div className="flex flex-col-reverse md:flex-col gap-6  items-center md:items-start mt-8 md:mt-0">
          <div className="flex gap-4 ">
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <Image src={icons.whatsapp} alt="whatsapp" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src={icons.instagram} alt="instagram" width={24} height={24} />
            </a>
            <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src={icons.gmail} alt="gmail" width={24} height={24} />
            </a>
          </div>
          <div className="flex flex-col gap-4 text-black items-center md:items-end text-sm">
          <p className="text-[#F1FFF1] font-medium text-[15px]">Privacy Policy</p>
          <p className="text-[#F1FFF1] font-medium text-[15px]">Cookie Policy</p>
          <p className="text-[#F1FFF1] font-medium text-[15px]">Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
