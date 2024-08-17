"use client"; // Add this line to mark this component as a Client Component

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate: Date): TimeLeft {
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  return (
    <>
    
    <div className="  relative flex items-center justify-center w-full absolute z-10 -bottom-6 md:bottom-[3rem] px-4">
     
    <div
  className="bg-[url('/assets/hero3.png')] bg-cover bg-center bg-no-repeat relative w-full md:max-w-5xl flex justify-center py-4 md:px-6 rounded-md shadow-lg">
    {/* <img src="/assets/hero3.png" alt="empty" className="" /> */}
      <div className=" flex text-white rounded gap-12 p-4">

        <div className="mx-5 md:mx-10 flex items-center justify-center flex-col ml-[15%]">
          <span className="fontJost text-center text-white font-extrabold fontJost text-2xl md:text-6xl">{timeLeft.days}</span>
          <span className="text-center text-white font-extrabold fontJost text-sm md:text-3xl mt-4">Days</span>
        </div>

        <div className="mx-5 md:mx-10 flex items-center justify-center flex-col">
          <span className="text-center text-white font-extrabold fontJost text-2xl md:text-6xl">{timeLeft.hours}</span>
          <span className="text-center text-white font-extrabold fontJost text-sm md:text-3xl mt-4">Hours</span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <span className="text-center text-white font-extrabold fontJost text-2xl md:text-6xl">{timeLeft.minutes}</span>
          <span className="text-center text-white font-extrabold fontJost text-sm md:text-3xl mt-4">Minutes</span>
        </div>

        <div className="mx-5 md:mx-10 flex items-center justify-center flex-col">
          <span className="text-center text-white font-extrabold fontJost text-2xl md:text-6xl">{timeLeft.seconds}</span>
          <span className="text-center text-white font-extrabold fontJost text-sm md:text-3xl mt-4">Seconds</span>
        </div>
      </div>
    </div>
    </div>

    </>


  );
};

export default CountdownTimer;
