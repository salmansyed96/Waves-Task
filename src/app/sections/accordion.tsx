"use client"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <div className="mb-11 pt-[130px]">
      <div
  className="bg-cover bg-no-repeat h-[900px] rounded-top-right-120"
  style={{ backgroundImage: 'url(/assets/Acoudin.png)' }} // Correct path to background image
>
<div className='ml-52 relative top-[90px]'>
  <h2 className="text-7xl font-bold font-futura text-white">
    FAQ’s
  </h2>
  <p className="text-xl mt-4 font-futura text-white">
    Let’s clear things up for you!
  </p>
</div>

        <div
          className="w-6/12 mx-auto p-4 bg-opacity-0 bg-white rounded-lg shadow-lg mt-10"
          style={{ position: 'relative', left: '291px',  top: '-60px',}} // Apply inline styles
        >
          <Accordion type="single" collapsible className="text-white">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center">
                <span className="text-xl font-bold mr-2 p-5">+</span>
                Lorem ipsum dolor sit amet consectetur. Platea lobortis eget gravida netus ?
                <span className="ml-auto" style={{ visibility: 'hidden' }}>
                  <ExpandMoreIcon /> {/* Hide default icon */}
                </span>
              </AccordionTrigger>
              <AccordionContent style={{ padding: '30px' }}>
              Lorem ipsum dolor sit amet consectetur. Pellentesque eu leo volutpat pellentesque massa ut tincidunt in adipiscing. Tristique ultrices viverra condimentum lorem phasellus proin in e gestas proin. Ut quis vehicula est diam sit. Nisi pulvinar turpis in ac a.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex items-center">
                <span className="text-xl font-bold mr-2 p-5">+</span>
                Lorem ipsum dolor sit amet consectetur. Platea lobortis eget gravida netus ?
                <span className="ml-auto" style={{ visibility: 'hidden' }}>
                  <ExpandMoreIcon /> {/* Hide default icon */}
                </span>
              </AccordionTrigger>
              <AccordionContent style={{ padding: '30px' }}>
              Lorem ipsum dolor sit amet consectetur. Pellentesque eu leo volutpat pellentesque massa ut tincidunt in adipiscing. Tristique ultrices viverra condimentum lorem phasellus proin in e gestas proin. Ut quis vehicula est diam sit. Nisi pulvinar turpis in ac a.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="flex items-center">
                <span className="text-xl font-bold mr-2 p-5">+</span>
                Lorem ipsum dolor sit amet consectetur. Platea lobortis eget gravida netus ?
                <span className="ml-auto" style={{ visibility: 'hidden' }}>
                  <ExpandMoreIcon /> {/* Hide default icon */}
                </span>
              </AccordionTrigger>
              <AccordionContent style={{ padding: '30px' }}>
              Lorem ipsum dolor sit amet consectetur. Pellentesque eu leo volutpat pellentesque massa ut tincidunt in adipiscing. Tristique ultrices viverra condimentum lorem phasellus proin in e gestas proin. Ut quis vehicula est diam sit. Nisi pulvinar turpis in ac a.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="flex items-center">
                <span className="text-xl font-bold mr-2 p-5">+</span>
                Lorem ipsum dolor sit amet consectetur. Platea lobortis eget gravida netus ?
                <span className="ml-auto" style={{ visibility: 'hidden' }}>
                  <ExpandMoreIcon /> {/* Hide default icon */}
                </span>
              </AccordionTrigger>
              <AccordionContent style={{ padding: '30px' }}>
              Lorem ipsum dolor sit amet consectetur. Pellentesque eu leo volutpat pellentesque massa ut tincidunt in adipiscing. Tristique ultrices viverra condimentum lorem phasellus proin in e gestas proin. Ut quis vehicula est diam sit. Nisi pulvinar turpis in ac a.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="flex items-center">
                <span className="text-xl font-bold mr-2 p-5">+</span>
                Lorem ipsum dolor sit amet consectetur. Platea lobortis eget gravida netus ?
                <span className="ml-auto" style={{ visibility: 'hidden' }}>
                  <ExpandMoreIcon /> {/* Hide default icon */}
                </span>
              </AccordionTrigger>
              <AccordionContent style={{ padding: '30px' }}>
              Lorem ipsum dolor sit amet consectetur. Pellentesque eu leo volutpat pellentesque massa ut tincidunt in adipiscing. Tristique ultrices viverra condimentum lorem phasellus proin in e gestas proin. Ut quis vehicula est diam sit. Nisi pulvinar turpis in ac a.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="flex items-center">
                <span className="text-xl font-bold mr-2 p-5">+</span>
                Lorem ipsum dolor sit amet consectetur. Platea lobortis eget gravida netus ?
                <span className="ml-auto" style={{ visibility: 'hidden' }}>
                  <ExpandMoreIcon /> {/* Hide default icon */}
                </span>
              </AccordionTrigger>
              <AccordionContent style={{ padding: '30px' }}>
              Lorem ipsum dolor sit amet consectetur. Pellentesque eu leo volutpat pellentesque massa ut tincidunt in adipiscing. Tristique ultrices viverra condimentum lorem phasellus proin in e gestas proin. Ut quis vehicula est diam sit. Nisi pulvinar turpis in ac a.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <button className='text-white underline mt-20 font-bold text-3xl ml-3 '>Read More</button>
        </div>
        
      </div>
    </div>
  )
}
