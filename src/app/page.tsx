import { Hero } from "@/app/sections/Hero";
import CountdownTimer from "./sections/Countdown";
import { About } from "./sections/ABout_Waves";
import { Verticals } from "./sections/Verticals";
import { Cards } from "./sections/Cards";
import HorizontalScroll from "./sections/HorizontalScroll";
import Activities from "./sections/Activities";
import JoinWAVES from "./sections/JoinWAVES";
import NewsUpdate from "./sections/News&Updates";
import { AccordionDemo } from "./sections/accordion";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Media from "./sections/media";
import ContactForm from "./sections/Contact";



export default function page() {
  return (
    <div>
      <Hero />
      <CountdownTimer targetDate={new Date('2024-08-30T00:00:00')} />
      <About />
      <Verticals />
      <Cards />
      {/* <CarouselSize/> */}
      <HorizontalScroll />
      <Activities />
      <JoinWAVES />
      <NewsUpdate />
      <AccordionDemo />
      <Gallery />
      <Media />
      <ContactForm />
      <Footer />
    </div>
  )
}
