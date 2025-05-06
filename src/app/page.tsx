
import AboutUs from "./components/aboutus";
import HeroContainer from "./components/hero";
import ProductSection from "./components/services";
import Testimonial from "./components/testimonials";
import WhyChooseUs from "./components/whyus";



export default function Home() {
  return (
   <div className="">
    <HeroContainer/>
    <AboutUs/>
    <ProductSection/>
    <WhyChooseUs/>
    <Testimonial />

   </div>
  );
}
