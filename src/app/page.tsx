
import AboutUs from "./components/aboutus";
import BlogSection from "./components/blog";

import HeroContainer from "./components/hero";
import ProductSection from "./components/product";
import ServicesSection from "./components/services";

import Testimonial from "./components/testimonials";

import WhyChooseUs from "./components/whyus";



export default function Home() {
  return (
   <div className="">
    <HeroContainer/>
    <AboutUs/>
    <ServicesSection />
    <WhyChooseUs/>
    <Testimonial />
    <ProductSection/>
    <BlogSection />
   </div>
  );
}
