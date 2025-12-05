"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "CURRICULUM", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "PRICING", href: "#" },
  ];
  return (
    <nav className="relative">
      <div className="flex justify-between px-[60px] bg-[#171D20]">
        <Image
          src={"/academy/LOGO.svg"}
          alt="logo"
          width={80}
          height={21.97}
          className="py-[42px]"
        />

        <div className="hidden lg:flex justify-between text-white my-auto">
          <div className="flex justify-between">
            <Link
              href="#curriculum"
              className="w-[136px] py-[18px] text-center"
            >
              CURRICULUM
            </Link>
            <Link href="#faq" className="w-[136px] py-[18px] text-center">
              FAQs
            </Link>
            {/* <Link href="#pricing" className="w-[136px] py-[18px] text-center">
              PRICING
            </Link> */}

            <a
              href="https://chat.whatsapp.com/IVBFsQVcp1XIx9SJZjiLtZ?mode=ems_copy_c"
              target="_blank"
              className="w-[290px] py-[18px] text-center"
            >
              JOIN WHATSAPP COMMUNITY
            </a>
          </div>
          <Link href="#pricing">
            <button className="bg-[#F1B130] text-black/90 w-[250px] py-[18px]  rounded-lg cursor-pointer hover:bg-amber-500 transition-colors duration-500">
              ENROLL NOW!
            </button>
          </Link>
        </div>

        <div className="flex gap-2.5 lg:hidden justify-between">
          <div className="my-auto text-white cursor-pointer transition-all duration-500">
            {isMobileMenuOpen ? (
              <svg
                className="size-8 my-auto"
                onClick={toggleMobileMenu}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className="size-8 my-auto"
                onClick={toggleMobileMenu}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            )}
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute flex justify-end bg-transparent w-full">
          <div className="bg-[#171D20] w-[291px] flex flex-col">
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              href="#pricing"
              className="my-auto px-[22px] text-sm font-semibold text-white py-5 hover:bg-[#333] transition-colors duration-500"
            >
              ENROLL NOW
            </Link>
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              href="#curriculum"
              className="my-auto px-[22px] text-sm font-semibold text-white py-5 hover:bg-[#333] transition-colors duration-500"
            >
              CURRICULUM
            </Link>
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              href="#faq"
              className="my-auto px-[22px] text-sm font-semibold text-white py-5 hover:bg-[#333] transition-colors duration-500"
            >
              FAQs
            </Link>
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              href="#pricing"
              className="my-auto px-[22px] text-sm font-semibold text-white py-5 hover:bg-[#333] transition-colors duration-500"
            >
              Pricing
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
