import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative text-white py-16 px-6 md:px-12 xl:px-24 overflow-hidden bg-no-repeat bg-cover bg-[#1B1F23]"
      style={{
        backgroundImage: "url('/academy/footer.svg')",
      }}
    >
      <div className="flex justify-between mb-12">
        <Link href={"/"} className="my-auto">
          <Image
            src={"/academy/LOGO.svg"}
            alt="logo"
            width={80}
            height={21.97}
            className=""
          />
        </Link>
        <Link href="#pricing" className="my-auto">
          <button className="bg-[#F1B130] text-black/90 w-[200px] py-3  rounded-lg cursor-pointer hover:bg-amber-500 transition-colors duration-500">
            ENROLL NOW!
          </button>
        </Link>
      </div>
      <div className="flex justify-between text-[20px xl:text-[32px] font-normal">
        <div className=" flex flex-col space-y-4">
          <Link href="/work" className="">
            Work
          </Link>
          <Link href="/about" className="">
            About us
          </Link>
          <Link href="/services" className="">
            Services
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>
          {/* <Link href="" className="">GEP Policy</Link> */}
          <div className="xl:hidden flex flex-col space-y-4">
            <Link href="mailto:hello@dododesign.africa" className="">
              hello@dododesign.africa
            </Link>
            <a
              href="https://chat.whatsapp.com/IVBFsQVcp1XIx9SJZjiLtZ?mode=ems_copy_c"
              target="_blank"
              className="text-[#F1B130]"
            >
              JOIN WHATSAPP COMMUNITY
            </a>
          </div>
        </div>
        <div className="hidden xl:flex flex-col justify-center space-y-4">
          <Link href="mailto:hello@dododesign.africa" className="">
            hello@dododesign.africa
          </Link>
          <a
            href="https://chat.whatsapp.com/IVBFsQVcp1XIx9SJZjiLtZ?mode=ems_copy_c"
            target="_blank"
            className="text-[#F1B130]"
          >
            JOIN WHATSAPP COMMUNITY
          </a>
        </div>
        <div className=" flex flex-col space-y-4">
          <Link href="https://www.linkedin.com/company/9197720" className="">
            LinkedIn
          </Link>
          <Link href="https://x.com/dodo_africa" className="">
            X
          </Link>
          <Link href="https://web.facebook.com/dodo.africa/" className="">
            Facebook
          </Link>
          <Link href="https://www.instagram.com/dodo.africa/" className="">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
