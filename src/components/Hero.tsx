
export default function Hero() {

  return (
    <div className='bg-linear-to-l from-[#1B1F23] to-[#1B1F23] text-white'>
        <div className="pt-[60px] md:pt-[120px]">
            <div className="text-center">
                <h2 className="text-4xl w-[335px] tracking-normal md:text-5xl md:w-[655px] md:tracking-[-1.1px] xl:w-[900px] xl:text-[64px] xl:tracking-[-2px] mx-auto font-medium mb-4 md:mb-[13.2px] lg:mb-6">Gain Mastery in User-Centered and Design Research</h2>
                <h5 className="text-sm w-[335px] tracking-[-2%] md:text-base md:w-[564px] md:tracking-[-2%] xl:w-[603px] xl:text-lg xl:tracking-[2%] mx-auto font-normal">A hands-on course for Product and Human-Centered Design professionals who want to sharpen their research skills, apply world-class methods, and design solutions that truly meet local and global needs.</h5>
            </div>
        </div>
        
        <div className="w-full h-fit md:h-[430.19px] xl:h-[781px] relative mt-10 md:mt-[66.1px] lg:mt-[120px] overflow-hidden">
            <video src="/videos/dodo-landing-page.mp4" playsInline muted controls={false} autoPlay loop className="w-full object-cover"></video>
        </div>
    </div>
  )
}