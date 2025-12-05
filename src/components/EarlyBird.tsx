"use client";
import { useEffect, useState } from "react";
import EnrollModal from "./EnrollModal";

export default function EarlyBird() {
  const [open, setOpen] = useState(false);

  // State for the countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target Date: Friday, Dec 19, 2025 at 11:59 AM
  const targetDate = new Date("2025-12-19T11:59:00").getTime();

  useEffect(() => {
    // Function to calculate time remaining
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        // Stop timer if expired
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Run immediately on mount
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section
      className="text-center bg-[#171D20] pb-20 text-[#FEFEFE] relative"
      id="pricing"
    >
      <div className="w-[185px] md:w-[214px] bg-[#B72321] absolute right-6 md:right-14 text-[#FEFEFE] py-8 px-2">
        <h2 className="text-sm md:text-xl">Course starts</h2>
        <h2 className="text-xl md:text-3xl font-semibold">26th January 2026</h2>
        <h2 className="text-xs md:text-lg italic leading-[0.9] mt-4">
          Classes will be live and on-demand
        </h2>
      </div>
      <div className="flex flex-col items-center pt-28">
        <p className="text-3xl md:text-4xl xl:text-5xl font-normal text-center leading-none md:leading-[100%] tracking-[-2px] mb-6 ">
          Early bird discount
        </p>
        <h1 className="text-[60px] md:text-[128px] xl:text-[150px] font-medium ">
          ₦55,000
        </h1>
        <h5 className=" text-[#FEFEFEE5]/90 text-[70px] relative">
          ₦75,000
          <span className="absolute border-2 border-[#ED421B] w-full left-0 top-1/2"></span>
        </h5>

        <div className="rounded-lg border-2 border-dashed border-[#FEFEFE7A]/48 bg-[#2026294A] w-[90%] max-w-[482px] py-6 px-4">
          <h5 className="text-[#848181] text-2xl">Offer expires in:</h5>
          <div className="flex justify-center flex-wrap gap-3 md:gap-5 text-[#F1B130] font-bold text-3xl md:text-4xl mt-3">
            <span className="min-w-[60px]">{timeLeft.days}d</span>
            {/* <span className="">:</span> */}
            <span className="min-w-[60px]">{timeLeft.hours}h</span>
            {/* <span className="">:</span> */}
            <span className="min-w-[60px]">{timeLeft.minutes}m</span>
            {/* <span className="">:</span> */}
            <span className="min-w-[60px]">{timeLeft.seconds}s</span>
          </div>
        </div>

        <h6 className="text-[#848181] text-2xl leading-none md:text-[32px] xl:text-[36px] md:leading-[1.3] tracking-[-2px]  mt-8">
          Includes portfolio and CV reviews*
        </h6>
        <h6 className="italic mb-8 md:mb-10 xl:mb-16 text-[#848181]">
          *Available upon request
        </h6>
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer py-4 font-medium text-xs md:text-sm leading-6 tracking-[0.5px]  bg-[#F1B130] text-black outline-0 rounded-lg w-[336px] md:w-[754px] xl:w-[805px] hover:bg-[#E2E3E3] hover:text-black transition-colors duration-500"
        >
          ENROLL NOW
        </button>

        <EnrollModal open={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  );
}
