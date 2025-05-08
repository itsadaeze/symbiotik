'use client'

import Image from "next/image";
import React from "react"
import * as images from '../../public/assets/images'
import * as icons from '../../public/assets/icons'
import Button from "./ui/Button";
import TitleDescription from "./ui/titleDescription";

const WhyChooseUs = () => {
    return(
        <div id="whyus" className="bg-[#E7F2FF] px-[1rem] py-10 md:py-20 w-full md:px-[2rem] lg:px-8 ">
            <div className="max-w-[1400px] mx-auto flex flex-col ">
                <div className="flex flex-col lg:flex-row items-center lg:items-start ">
                    <div className="flex flex-col justify-between items-center lg:items-start">
                    
                        <div className="flex flex-col items-center lg:items-start">
                            <Button
                            text="Why Choose Us"
                            textColor="text-[#1B1B26]"
                            borderColor="border-1 border-[#000000]"
                            className='font-[400] py-2 text-[#3A3846] text-[16px] lg:text-[20px]  '
                            />
                           <h3 className="text-[28px] lg:text-[48px] font-semibold lg:tracking-tight lg:leading-15 w-[90%] lg:w-[73%] mt-6 text-center lg:text-start">Innovative tech tailored to your needs, built with precision and purpose.</h3>
                        </div>
                        <div className=" flex flex-col mt-10 lg:mt-10   px-1 items-center lg:items-start gap-5 w-[90%] ">
                            <TitleDescription
                            image={icons.whyusicon}
                            title="Expertise"
                            description="Our team has deep domain knowledge in embedded systems, IoT, and automation."
                            titleClassName="text-[#1B1B26] text-center text-[20px] lg:text-left "
                             descriptionClassName="text-[#3A3846]  text-[13px] text-center lg:text-left"
                            className = 'flex flex-col lg:flex-row gap-5 items-center lg:items-start'
                            imageClassName= 'w-15'
                            />
                            <TitleDescription
                            image={icons.whyusicon}
                            title="Customization"
                            description="We provide tailor-made solutions to fit your unique business needs."
                           titleClassName="text-[#1B1B26] text-center text-[20px] lg:text-left "
                             descriptionClassName="text-[#3A3846]  text-[13px] text-center lg:text-left"
                            className = 'flex flex-col lg:flex-row gap-5 items-center lg:items-start'
                               imageClassName= 'w-15'
                            />
                             <TitleDescription
                            image={icons.whyusicon}
                            title="Security"
                            description=" We prioritize secure data communication and storage in all our solutions."
                             titleClassName="text-[#1B1B26] text-center text-[20px] lg:text-left "
                             descriptionClassName="text-[#3A3846]  text-[13px] text-center lg:text-left"
                            className = 'flex flex-col lg:flex-row gap-5 items-center lg:items-start'
                               imageClassName= 'w-15'
                            />
                               <TitleDescription
                            image={icons.whyusicon}
                            title="Scalability"
                            description=" Our solutions grow with your business, ensuring long-term viability"
                            titleClassName="text-[#1B1B26] text-center text-[20px] lg:text-left "
                             descriptionClassName="text-[#3A3846]  text-[13px] text-center lg:text-left"
                            className = 'flex flex-col lg:flex-row gap-5 items-center lg:items-start'
                               imageClassName= 'w-15'
                            />
                               <TitleDescription
                            image={icons.whyusicon}
                            title="Support"
                            description=" From consultation to deployment and maintenance, we’re with you every step of the way."
                            titleClassName="text-[#1B1B26] text-center text-[20px] lg:text-left "
                             descriptionClassName="text-[#3A3846]  text-[13px] text-center lg:text-left"
                            className = 'flex flex-col lg:flex-row gap-5 items-center lg:items-start'
                               imageClassName= 'w-15'
                            />
                            
                        </div>
                </div>
                <div className="w-[100%] ">
                    <Image src={images.whyus1} alt="aboutus_image"  className=" w-full mt-7 lg:mt-0" />
                    <div className="flex gap-5 mt-5  ">
                            <Image src={images.whyus2} alt="whyus2" className="w-1/2"/>
                            <Image src={images.whyus3} alt="whyus2" className="w-1/2"/>
                    </div>
                </div>
         </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;