import Image from "next/image";
import Hero from "@/components/Hero";
import { EnrollSection } from "@/components/Why";
import WoIsThisFor from "@/components/Who";
import Start from "@/components/Start";
import Curriculum from "@/components/Curriculum";
import EarlyBird from "@/components/EarlyBird";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className=" bg-linear-to-l from-[#1B1F23] to-[#1B1F23]">
      <Hero />

      <div className="md:flex justify-center max-w-11/12 gap-10 mx-auto py-20">
        <section className="w-full md:w-1/2 bg-linear-to-l from-[#1B1F23] to-[#1B1F23]">
          <div className="container mx-auto max-w-7xl">
            <div className="text-[#F7F7F7] leading-normal md:leading-tight tracking-[-0.56px] md:tracking-[-1px] text-2xl md:text-[32px] xl:text-5xl font-normal w-full md:w-[410px] xl:w-[613px] fonthelvetica">
              Shaping the{" "}
              <span className="italic relative inline-block font-medium">
                Next Generation
                <div className="absolute left-0 w-[137.88] md:w-[200px] xl:w-[244.5px]  bottom-0 md:left-2 xl:left-5 h-[5.28px] md:h-[7.66px] xl:h-[9.36px] z-0">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 246 20"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.585938 14.5481C63.7654 7.36789 136.212 4.29063 203.586 5.56929C157.363 6.92664 107.039 7.55516 66.7951 14.5485C141.481 7.95843 167.459 3.89389 245.086 5.56598"
                      stroke="#F1B130"
                      strokeWidth="10.38"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </div>
              </span>{" "}
               of Design Leaders
            </div>
          </div>
        </section>
        <div className="w-full text-sm md:text-base leading-[1.4] xl:text-2xl flex flex-col justify-between text-[#F7F7F7]">
          <p className="mb-7 mt-8 md:mt-0 text">
          After years of practice across African contexts, we’ve seen a clear gap between what young professionals practise and what the industry demands. Product Designers, User Researchers, and Human-Centered Designers often struggle to translate research theory into actionable insights.
          </p>
          <p className="">
          This program bridges that gap, building strong research capability, critical thinking, and hands-on skills to help emerging designers deliver insights and solutions that create lasting value for users, clients, and communities.
          </p>
        </div>
      </div>

      <div className="h-10 relative">
        <Image src={"/academy/pattern.png"} fill alt={"image"} className=" object-cover" />
      </div>

      <EnrollSection/>
      <WoIsThisFor/>
      <Start/>
      <Curriculum/>
      <EarlyBird/>
      <Testimonials/>
      <FAQ/>
    </div>
  );
}