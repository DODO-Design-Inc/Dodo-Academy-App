import Image from "next/image";
import React from "react";

export default function Curriculum() {
  return (
    <section className="xl:mt-20 pt-20 bg-white text-[#1E1E1E] border-b border-white" id="curriculum">
      <div className="text-center">
        <h1 className="w-[222px] md:w-full mx-auto text-2xl md:text-[32px] xl:text-5xl font-normal leading-[100%] tracking-[-0.5px] mb-6">
          Complete course curriculum
        </h1>
        <p className="w-[326px] xl:w-[413px] mx-auto text-sm xl:text-lg leading-[1.4] tracking-[-2%]">
          This user research course has been created and validated by experts in
          Design and User Research.
        </p>
      </div>

      <div className="flex justify-center mt-8 xl:mt-16 pb-10 md:pb-16 xl:pb-[158px]">
        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              week: "WEEK 1",
              title: "Foundational Principles of User and Design Research",
              width: "w-[309px]",
            },
            {
              week: "WEEK 2",
              title: "Core Research Methods for Generating Actionable Insights",
              width: "w-[377px]",
            },
            {
              week: "WEEK 3",
              title:
                "The Role of Research in Product Design and Human-Centered Design",
              width: "w-[429px]",
            },
            {
              week: "WEEK 4",
              title: "Analysis and Synthesis Techniques for Design Impact",
              width: "w-[374px]",
            },
            {
              week: "WEEK 5",
              title:
                "Learning Through Prototyping, Testing, and Iterative Design",
              width: "w-[370px]",
            },
            {
              week: "WEEK 6",
              title:
                "Storytelling, Communicating Insights and Influencing Stakeholders",
              width: "w-[450px]",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] pt-10 pb-[42px] pl-[38.5px] rounded w-[334px] md:w-[368px] xl:w-[649px]"
            >
              <h5 className="md:text-xs xl:text-lg leading-[1.4] md:tracking-[-3%] xl:tracking-[-2%] font-medium text-[#616569] mb-2 ">
                {item.week}
              </h5>
              <p
                className={`font-medium text-sm md:text-base max-w-[297px] xl:max-w-[429px] xl:text-[25px] leading-[1.23] tracking-[-0.02em] text-[#1E1E1E] ${item.width}`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative bg-[#FFF2D7A1] md:h-[268px] h-[169.9px] xl:h-[316px] pt-[63px] pl-4 md:pl-[67px] pb-10 w-[335px] md:w-[752px] xl:w-[1314px] mx-auto mb-10 xl:mb-20 bg-no-repeat bg-cover flex flex-col justify-center"
        style={{
          backgroundImage: 'url("/academy/bg.svg")',
        }}
      >
        <h2 className="text-base md:text-4xl xl:text-[52px] leading-[1.4] tracking-[-2%] font-bold mb-2 italic">PLUS BONUS PACKAGE</h2>
        <ul className="list-disc pl-4 w-44 md:w-full">
          <li className="leading-[1.4] tracking-[-2%] text-sm md:text-base xl:text-[32px] font-normal text-[#1E1E1E]">1-on-1 Portfolio and CV review sessions</li>
          <li className="leading-[1.4] tracking-[-2%] text-sm md:text-base xl:text-[32px] font-normal text-[#1E1E1E]">Free worksheets</li>
        </ul>

        <div className="absolute -right-7 md:right-0 bottom-0 md:-bottom-4 xl:-top-35 size-[183px] md:size-[306px] xl:size-[550px]">
          <Image
            src="/academy/Gift.png"
            alt="Gift"
            fill
            className=""
          />
        </div>
      </div>
    </section>
  );
}
