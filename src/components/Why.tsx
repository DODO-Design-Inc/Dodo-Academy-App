import Link from "next/link";
import React from "react";

export const EnrollSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-normal text-center text-[#1E1E1E] mb-12 md:mb-16">
          Why should you enroll for this course?
        </h2>

        <div className="text-[#0F172A]">
          <div className="flex flex-col xl:flex-row gap-4 justify-center xl:items-stretch">
            <div className="flex flex-col gap-4">
              <div className="md:flex md:flex-row md:gap-4 md:justify-center">
                {/* CARD 1 */}
                <div className="flex flex-col justify-start items-center w-[355px] h-[278px] md:h-[350px] xl:h-[385px] md:w-[368px] xl:w-[427px] bg-[#F6F6F6] rounded-lg pt-10 xl:pt-[65px] text-center p-4 gap-2 mx-auto md:mx-0 mb-4 md:mb-0">
                  <div className="size-12 bg-[#E1E1E1] rounded-full flex items-center justify-center mx-auto mb-4 p-3">
                    <img
                      src="/academy/book.svg"
                      alt="Foundations Icon"
                      className="size-7"
                    />
                  </div>
                  <div className="font-medium text-base xl:text-2xl leading-[1.1] tracking-[0%] w-2/3 mx-auto">
                    Master the Foundations of Design Research
                  </div>
                  <p className="w-5/6 mx-auto mt-2.5 text-sm md:text-base xl:text-lg">
                    Build a strong understanding of research principles, ethics,
                    and methodologies within the design and innovation
                    landscape.
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="flex flex-col justify-start items-center w-[355px] h-[278px] md:h-[350px] xl:h-[385px] md:w-[368px] xl:w-[427px] bg-[#F6F6F6] rounded-lg pt-10 xl:pt-[65px] text-center p-4 gap-2 mx-auto md:mx-0">
                  <div className="size-12 bg-[#E1E1E1] rounded-full flex items-center justify-center mx-auto mb-4 p-3">
                    <img
                      src="/academy/user.svg"
                      alt="Foundations Icon"
                      className="size-7"
                    />
                  </div>
                  <div className="font-medium text-base xl:text-2xl leading-[1.1] tracking-[0%] w-2/3 mx-auto">
                    Lead and Collaborate Effectively in Design Projects
                  </div>
                  <p className="w-5/6 mx-auto mt-2.5 text-sm md:text-base xl:text-lg">
                    Confidently guide teams from client briefing through to
                    design execution.
                  </p>
                </div>
              </div>

              <div className="md:flex md:flex-row md:gap-4 md:justify-center">
                {/* CARD 3 */}
                <div className="flex flex-col justify-start items-center w-[355px] h-[278px] md:h-[350px] xl:h-[385px] md:w-[368px] xl:w-[427px] bg-[#F6F6F6] rounded-lg pt-10 xl:pt-[65px] text-center p-4 gap-2 mx-auto md:mx-0 mb-4 md:mb-0">
                  <div className="size-12 bg-[#E1E1E1] rounded-full flex items-center justify-center mx-auto mb-4 p-3">
                    <img
                      src="/academy/dart.svg"
                      alt="Foundations Icon"
                      className="size-7"
                    />
                  </div>
                  <div className="font-medium text-base xl:text-2xl leading-[1.1] tracking-[0%] w-2/3 mx-auto">
                    Align Research with Business and Client Goals
                  </div>
                  <p className="w-5/6 mx-auto mt-2.5 text-sm md:text-base xl:text-lg">
                    Strategically connect research purpose to client, business,
                    and organizational objectives, and select the most effective
                    research methods to achieve measurable impact.
                  </p>
                </div>

                {/* CARD 4 */}
                <div className="flex flex-col justify-start items-center w-[355px] h-[278px] md:h-[350px] xl:h-[385px] md:w-[368px] xl:w-[427px] bg-[#F6F6F6] rounded-lg pt-10 xl:pt-[65px] text-center p-4 gap-2 mx-auto md:mx-0 mb-4 md:mb-0">
                  <div className="size-12 bg-[#E1E1E1] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/academy/bulb.svg"
                      alt="Foundations Icon"
                      className="size-7"
                    />
                  </div>
                  <div className="font-medium text-base xl:text-2xl leading-[1.1] tracking-[0%] w-2/3 mx-auto">
                    Transform Insights into Impactful Solutions
                  </div>
                  <p className="w-5/6 mx-auto mt-2.5 text-sm md:text-base xl:text-lg">
                    Apply critical and creative thinking to analyze and
                    synthesize research findings, translating user insights into
                    culturally relevant and valuable design solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT/BOTTOM CARD */}
            <div className="w-[355px] md:w-[752px] xl:w-[427px] h-[350.75px] md:h-[383px] bg-[#F6F6F6] flex flex-col items-stretch xl:h-auto justify-center text-center rounded-lg mx-auto xl:mx-0 p-3 gap-2">
              <div className="size-10 bg-[#E1E1E1] rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/academy/chart.svg"
                  alt="Foundations Icon"
                  className="size-6"
                />
              </div>
              <h5 className="font-medium text-base  xl:text-2xl leading-[1.1] tracking-[0%] w-2/3 md:w-3/5 xl:w-2/3 mx-auto">
                Communicate Research Outcomes with Confidence
              </h5>
              <p className="w-5/6 md:w-4/5 xl:w-5/6 mx-auto mt-2.5 text-sm md:text-base xl:text-lg">
                {" "}
                Deliver actionable research findings to clients, stakeholders,
                and decision-makers in a clear, compelling and actionable
                manner, helping to highlight the strategic value of design
                within organizations.
              </p>
              <Link href="#pricing">
                <button className="bg-[#F1B130] text-[#1D2327] text-sm font-medium w-[300px] md:w-[358px] rounded-lg mx-auto py-[18px] mt-10 cursor-pointer hover:bg-amber-500 transition-colors duration-500">
                  ENROLL NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
