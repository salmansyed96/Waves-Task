"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"



export const Header = () => {
  return (
    <>
      <header className="absolute top-0 bg-transparent-full w-full">
        <div className="py-5">

          <div className="container">
            <div className="flex items-center justify-between">
              <div className="ml-11">
                <Image
                  src="/assets/logo.png"
                  alt="SaasLogo"
                  height={208}
                  width={200}
                />
              </div>
              <nav className="mr-200 flex gap-6 items-center">
                <Button className="bg-white text-black py-2 px-4 rounded-full border border-custom font-medium hover:font-bold  hover:bg-white">
                  About WAVES
                </Button>

                <a href="#" className="text-white hover:underline">Event Schedule</a>
                <a href="#" className="text-white hover:underline">Media</a>
                <a href="#" className="text-white hover:underline">FAQs</a>
                <a href="#" className="text-white hover:underline">Gallery</a>
                <a href="#" className="text-white hover:underline">Contact Us</a>
              </nav>
            </div>
          </div>
        </div>

      </header>

    </>
  );
};
