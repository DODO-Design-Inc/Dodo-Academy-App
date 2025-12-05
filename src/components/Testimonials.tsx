"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";

gsap.registerPlugin(Draggable);

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const draggableInstance = useRef<Draggable[] | null>(null);
  const isDraggingRef = useRef(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const contentWidth = scrollRef.current.scrollWidth / 2;

    // Infinite scroll tween (only for cards)
    tweenRef.current = gsap.to(scrollRef.current, {
      x: -contentWidth,
      duration: 50,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const xNum = parseFloat(x);
          return (xNum % contentWidth) + "px";
        },
      },
    });

    // Draggable functionality
    draggableInstance.current = Draggable.create(scrollRef.current, {
      type: "x",
      inertia: true,
      edgeResistance: 0.8,
      bounds: containerRef.current,
      onDragStart: () => {
        isDraggingRef.current = true;
        tweenRef.current?.pause();
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      },
      onRelease: () => {
        // Resume the animation after a short pause
        resumeTimeoutRef.current = setTimeout(() => {
          isDraggingRef.current = false;
          if (!isDraggingRef.current) tweenRef.current?.play();
        }, 1500);
      },
    });

    return () => {
      tweenRef.current?.kill();
      draggableInstance.current?.forEach((d) => d.kill());
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const testimonials = [
    {
      text: "I enjoyed the collaboration with team mates and sharing of ideas. One of the things I enjoyed was embracing ambiguity and finally arriving at a solution I am now proud of.",
      name: "Maria Unawu, Design Researcher",
      image: "/academy/Maria.png",
    },
    {
      text: "The past 6 weeks have been the most intense and impactful weeks I've had in my career since 2023...My expectations and goals were met and even surpassed.",
      name: "Ayobami Owoade, Product Designer",
      image: "/academy/Ayobami.png",
    },
    {
      text: "I love how organised this program is. [Prior to the program] I struggled with not having a proper guidance when it had to do with User Research. I would say I can boldly apply for a UX Designer Job now.",
      name: "Mariam Yusuf, Product Designer",
      image: "/academy/Mariam.png",
    },
    {
      text: "It provided me with experience and knowledge that I couldn't learn from other online courses I did. One of the [other] things that stood out for me was working under a mentor and [with a] team.",
      name: "Bunmi Bakare, Product Designer",
      image: "/academy/Bunmi.png",
    },
  ];

  return (
    <section className="bg-[#F7F7F7] py-20 overflow-hidden">
      {/* Title stays static */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-[32px] xl:text-[48px] leading-[100%] tracking-[-1px] font-normal text-[#1E1E1E]">
          Hear what past <br /> students had to say
        </h2>
      </div>

      {/* Scrolling container */}
      <div ref={containerRef} className="relative overflow-hidden px-6">
        <div
          ref={scrollRef}
          className="flex gap-6 w-max will-change-transform"
        >
          {/* Duplicate array for seamless looping */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="shrink-0 w-[334px] md:w-[440px] xl:w-[557px] bg-white rounded-[22.51px] px-8 py-10 flex flex-col justify-between"
            >
              <p className="text-[#1E1E1E] text-sm md:text-[20px] leading-[120%] tracking-[0.1px] font-medium mb-6">
                {item.text}
              </p>
              <div className="flex gap-4">
                <div className="relative size-[60px] rounded-full overflow-hidden">
                  <Image src={item.image} fill alt={item.name} />
                </div>
                <p className="text-[#616569] text-base leading-[120%] tracking-[-0.75px] font-normal my-auto">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
