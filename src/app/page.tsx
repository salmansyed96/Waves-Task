import { Hero } from "@/app/sections/Hero";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./sections/Countdown";
import { About } from "./sections/ABout_Waves";
import { Verticals } from "./sections/Verticals";
import { Cards } from "./sections/Cards";
import { CarouselSize } from "./sections/CarouselSize";
import HorizontalScroll from "./sections/HorizontalScroll";

import CardMedia from "./sections/Card";
import CardSlider from "@/components/ui/Card Slider Component";
import Activities from "./sections/Activities";
import JoinWAVES from "./sections/JoinWAVES";
import NewsUpdate from "./sections/News&Updates";
import { Accordion } from "@radix-ui/react-accordion";
import StaticAccordion, { AccordionDemo } from "./sections/accordion";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Media from "./sections/media";
import ContactForm from "./sections/Contact";
import BoutiqueHotelWebsite from "./sections/test-card";
// import CardSlider from "@/components/ui/Card Slider Component";


export default function page() {
  return (
    <div>
      <Hero />
      <CountdownTimer targetDate={new Date('2024-08-30T00:00:00')} />
      <About/>
      <Verticals/>
      <Cards/>
      {/* <CarouselSize/> */}
      <HorizontalScroll/>
      <Activities/>
      <BoutiqueHotelWebsite/>
      <JoinWAVES/>
      
      <NewsUpdate/>
      <AccordionDemo/>
      <Gallery/>
      <Media/>
      <ContactForm/>
      

      
      
      
      <Footer/>
    </div>
  )
}
