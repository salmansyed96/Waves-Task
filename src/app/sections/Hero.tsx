"use client"
import Image from 'next/image';
import { Header } from './Header';

export const Hero = () => {

  return (
    <section className="relative w-full h-[1312px] ">
      <img className='w-10000' src="/assets/Heroimg.png" alt="emty" />
      <img className='bg-pink' src="/assets/Heroimgtext.png" alt="emty" />
      <Header />
      <div className="absolute bottom-20 left-0 w-full text-white p-4 flex flex-col justify-center items-center gap-10">
        <h1 className="text-6xl font-semibold text-center">20th-24th November, 2024
          <br />
          <span>Goa, India</span>
        </h1>
        <Image src="/assets/scroll.png" alt="empty" width={200} height={200}/>
      </div>

    </section>
  );
};
