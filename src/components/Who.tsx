import Image from "next/image";

export default function WoIsThisFor() {
  return (
    <section className="bg-[#F7F7F7] pb-10 md:pb-[90px] text-[#1E1E1E]">
      <div className="pb-[16.38px] w-[334px] md:w-full mx-auto pt-10 xl:flex xl:justify-between xl:px-26 2xl:px-44">
        <div className=" text-center mb-6 mt-4 md:mt-8 text-2xl md:text-[32px] xl:text-5xl md:tracking-[-2%] font-normal xl:h-auto xl:flex flex-col justify-center">Who is this for?</div>
        <div className="xl:flex xl:justify-end">
          <div className="relative mx-auto xl:mx-0 flex justify-end md:w-fit">
            <div className="bg-[#F3DEB4] w-[324px] md:absolute h-[212px] md:w-[457.35px] md:h-[301.11px] xl:w-[710px] xl:h-[503px] rounded-[6.65px] xl:rounded-2xl xl:top-1/12 xl:left-14 mt-[6.62px] left-6 top-3"></div>
            <p className="text-sm leading-[1.4] tracking-[3%] py-[11px] shadow-xs absolute z-20 text-[#1E1E1E] left-1/2 w-[358px] rounded top-1/3 bg-white px-[18.5px] mb-2 hidden md:block xl:top-5 xl:-left-48 xl:text-lg xl:w-[428px] xl:rounded-lg">
              <span className="font-medium">
                User Researchers and Product Designers
              </span>
              , from early-career to mid-level professionals who want to deepen
              their mastery of design and user research.
            </p>

            <p className="text-sm leading-[1.4] tracking-[3%] py-[11px] shadow-xs absolute z-20 text-[#1E1E1E] right-3/5 w-[358px] rounded -bottom-1/4 bg-white px-[18.5px] mb-2 hidden md:block xl:-right-16 xl:top-56 xl:h-fit xl:text-lg xl:w-[428px] xl:rounded-lg">
              <span className="font-medium">
                Design and Research Professionals{" "}
              </span>
              working in tech, finance, health, education, or public service,
              and are seeking to gain the tools to uncover insights and create
              solutions that drive meaningful change in African and global
              contexts.
            </p>

            <p className="text-sm leading-[1.4] tracking-[3%] py-[11px] shadow-xs absolute z-20 text-[#1E1E1E] left-1/2 w-[358px] rounded -bottom-1/5 xl:bottom-0 bg-white px-[18.5px] mb-2 hidden md:block xl:-left-48 xl:text-lg xl:w-[428px] xl:rounded-lg">
              <span className="font-medium">
                Freelance Designers and Researchers{" "}
              </span>
              who are looking to refine their research practice and deliver
              stronger, results-driven outcomes for their clients.
            </p>
            <div className="w-[327px] h-[211px] md:w-[462.14px] md:h-[304.1px] xl:w-[722px] xl:h-[508px] absolute md:relative md:mx-auto left-0">
              <Image
                src={"/academy/Image.jpeg"}
                alt="image"
                fill
                className="rounded-[6.65px] xl:rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="md:hidden mt-4 text-[#1E1E1E]">
          <p className="text-sm leading-[1.4] tracking-[3%] py-[11px] shadow-xs shadow-[#EAECF0] bg-white px-[18.5px] mb-2">
            <span className="font-medium">
              User Researchers and Product Designers
            </span>
            , from early-career to mid-level professionals who want to deepen
            their mastery of design and user research.
          </p>

          <p className="text-sm leading-[1.4] tracking-[3%] py-[11px] shadow-xs shadow-[#EAECF0] bg-white px-[18.5px] mb-2">
            <span className="font-medium">Design and Research Professionals</span>
            working in tech, finance, health, education, or public service, and
            are seeking to gain the tools to uncover insights and create
            solutions that drive meaningful change in African and global
            contexts.
          </p>

          <p className="text-sm leading-[1.4] tracking-[3%] py-[11px] shadow-xs shadow-[#EAECF0] bg-white px-[18.5px]">
            <span className="font-medium">
              Freelance Designers and Researchers
            </span>
            who are looking to refine their research practice and deliver
            stronger, results-driven outcomes for their clients.
          </p>
        </div>
      </div>
    </section>
  );
}
