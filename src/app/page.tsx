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
      <CardSlider />
      <CardMedia/>
      
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <Button className="ml-3 mt-3">Hello</Button>
      <Button className="ml-2">Submit</Button>
      <Button className="ml-2">Submit</Button>
    </div>
  )
}
