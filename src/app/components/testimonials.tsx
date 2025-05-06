import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import * as icons from '../../../public/assets/icons'

const Testimonial = () => {
    return(
        <section className=" bg-[#0F7BFF] px-[1rem] py-10  w-full md:px-[2rem] lg:px-8 ">
            <div className='max-w-[1400px] mx-auto'>
             <div className="w-1/3 ">
             <Button
            text="Testimonials"
            textColor="text-[#1B1B26]"
            borderColor="border-1 border-[#FFFFFF]"
            className='font-[400] py-2 text-[white] text-[16px] lg:text-[20px]  '
            />
            <p className="font-[600] text-[56px] text-white leading-15 mt-5">Our Customers Testimonials</p>

            <div>
                <Image src={icons.rating} alt="rating" />
                <p>45 Reviews</p>
            </div>
            <div>
                <div>
                    <p>12K</p>
                    <p>Customers</p>
                </div>
                <div>
                    <p>23K+</p>
                    <p>Services Completed</p>
                </div>
            </div>
             </div>
            </div>
        </section>
    )
}

export default Testimonial