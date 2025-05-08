"use client";

import React, { useRef } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import * as icons from "../../public/assets/icons";
import TestimonialCard from "./ui/testimonialcard";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const testimonies = [
  {
    id: 1,
    imageSrc: "/assets/images/avartar.png",
    title: "Chika O.",
    description:
      "“I needed a plumber urgently and found one in 5 minutes! So easy to use.”",
    icon: "/assets/icons/rating.svg",
  },
  {
    id: 2,
    imageSrc: "/assets/images/avartar.png",
    title: "Ashley Cooper",
    description:
      "I really like the system at this management, i love recommending this software to you guys",
    icon: "/assets/icons/rating.svg",
  },
  {
    id: 3,
    imageSrc: "/assets/images/avartar.png",
    title: "Chika O.",
    description:
      "“I needed a plumber urgently and found one in 5 minutes! So easy to use.”",
    icon: "/assets/icons/rating.svg",
  },
  {
    id: 4,
    imageSrc: "/assets/images/avartar.png",
    title: "Ashley Cooper",
    description:
      "I really like the system at this management, i love recommending this software to you guys",
    icon: "/assets/icons/rating.svg",
  },
];

const Testimonial = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className=" bg-[#0F7BFF] px-[1rem] py-10  w-full md:px-[2rem] lg:px-8 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center  ">
          <div className="w-full md:w-[70%] flex flex-col items-center md:items-start">
            <Button
              text="Testimonials"
              textColor="text-[#1B1B26]"
              borderColor="border-1 border-[#FFFFFF]"
              className="font-[400] py-2 text-[white] text-[16px] lg:text-[20px]  "
            />
            <p className="font-[600] text-[36px] text-center md:text-left lg:text-[56px] text-white leading-15 mt-5">
              Our Customers Testimonials
            </p>

            <div className="flex gap-2 justify-center md:justify-start">
              <div className="flex gap-1">
                <Image src={icons.rating} alt="rating" className="w-4" />
                <Image src={icons.rating} alt="rating" className="w-4" />
                <Image src={icons.rating} alt="rating" className="w-4" />
                <Image src={icons.rating} alt="rating" className="w-4" />
                <Image src={icons.rating} alt="rating" className="w-4" />
              </div>
              <p className="text-white font-[400] text-[20px]">45 Reviews</p>
            </div>
            <div className="flex gap-10 md:gap-5 mt-3 text-white ">
              <div>
                <p className="text-[36px] font-[700] ">12K</p>
                <p className="text-[18px] font-[400]">Customers</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-[36px] font-[700] ">23K+</p>
                <p className="text-[18px] font-[400] ">Services Completed</p>
              </div>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-7 mt-10 scrollbar-hide w-[90%]"
          >
            {testimonies.map((testimony) => (
              <TestimonialCard
                key={testimony.id}
                imageSrc={testimony.imageSrc}
                title={testimony.title}
                description={testimony.description}
                icon={testimony.icon}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-4 mx-auto w-[10%] mt-8">
          <button
            onClick={() => scroll("left")}
            className="bg-gray-200 hover:bg-gray-300 active:bg-blue-400 text-black   focus:bg-blue-400 p-2 rounded-full focus:text-white transition-colors"
          >
            <IoIosArrowRoundBack />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-gray-200 hover:bg-gray-300 active:bg-blue-400  text-black   focus:bg-blue-400 p-2 rounded-full focus:text-white transition-colors"
          >
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
