'use client'
import Image from "next/image";
import React from "react";
import * as images from './../../../public/assets/images';
import * as icons from './../../../public/assets/icons';
import Button from "./ui/Button";
import TitleDescription from "./ui/titleDescription";

const AboutUs = () => {
    return(
        <div id="aboutus" className="bg-[#FFFFFF] px-[1rem] py-10 md:py-20 w-full md:px-[2rem] lg:px-8 ">
        <div className="max-w-[1400px] mx-auto flex flex-col  ">
         <div className="flex flex-col-reverse lg:flex-row justify-between gap-[10%] items-center lg:items-start">
            <Image src={images.aboutus_image} alt="aboutus_image"  className=" w-full mt-7 lg:mt-0" />
            <div className="flex flex-col items-center lg:items-start">
                <Button
                 text="About Us"
                 textColor="text-[#1B1B26]"
                 bgColor="bg-white"
                 borderColor="border-1 border-[#000000]"
                 className='font-[400] py-2 text-[#3A3846] text-[16px] lg:text-[20px]  '
                />
                <p className="text-[#000000] font-[400] text-[20px] lg:text-[24px] mt-5  w-[90%] text-center lg:text-left">Symbiotik Innovations is an innovative enterprise dedicated to providing cutting-edge solutions in renewable energy and automation. We specialize in the production of portable solar inverters, automatic changeover switches, advanced automation devices.</p>
            </div>
         </div>
         <div>

         <div className=" flex flex-col md:flex-row   px-1 items-center  mt-10">
         <TitleDescription
        image={icons.about_icon}
        title="Renewable Energy"
        description="State-of-the-art solar solutions for sustainable power generation"
        titleClassName="text-[#1B1B26] mt-3 md:mt-5"
         descriptionClassName="text-[#3A3846] w-[70%] text-[18px]"
        className = ''
         />
            <TitleDescription
        image={icons.about_icon}
        title="Innovation"
        description="Cutting-edge solutions that drive technological advancement"
        titleClassName="text-[#1B1B26] mt-3 md:mt-5"
         descriptionClassName="text-[#3A3846] w-[80%] text-[18px]"
         className = ''
         />
            <TitleDescription
        image={icons.about_icon}
        title="Automation"
        description="Smart automation systems for enhanced control and efficiency"
        titleClassName="text-[#1B1B26] mt-3 md:mt-5"
        descriptionClassName="text-[#3A3846] w-[90%] text-[18px]"
         className = ''
         />

         </div>
         </div>
        </div>    
        </div>
    )
}
export default AboutUs;