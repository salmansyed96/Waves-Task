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
    <div className="relative flex justify-center">
    <div className="absolute top-[-45px]">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500  flex text-white rounded gap-12 p-4">
        <div className="flex flex-col justify-center items-center">
          <span className="text-4xl">{timeLeft.days}</span>
          <span className="">Days</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-4xl">{timeLeft.hours}</span>
          <span className="">Hours</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-4xl">{timeLeft.minutes}</span>
          <span className="">Minutes</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-4xl">{timeLeft.seconds}</span>
          <span className="">Seconds</span>
        </div>
      </div>
    </div>
    </div>


  );
};

export default CountdownTimer;
