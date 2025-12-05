"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUp } from "lucide-react";



export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
  
    // Show button when page is scrolled down
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 flex items-center gap-2 px-4 py-2 rounded-lg border border-[#F7F7F7] z-20 
          bg-[#171D20] text-white text-sm font-medium shadow-lg transition-all duration-300
          hover:bg-[#333] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
      >
        Back To Top
        <ArrowUp className="w-5 h-5" />
      </button>
    );
  }

export default function FAQ() {
  const faqs = [
    {
      question: "Who is this course designed for?",
      answer:
        "This course is built for recent graduates, IT students, job seekers, and young professionals who want to strengthen their UX and user research skills. Even if you’re just starting out or switching careers, you’ll find the content practical and beginner-friendly.",
    },
    {
      question: "Do I need prior experience in UX or research?",
      answer:
        "No, you don’t need prior UX research experience. We’ll start with the basics and gradually move into advanced, industry-relevant methods. If you already have some design knowledge, this course will help you add the missing research skills that recruiters value.",
    },
    {
      question: "How will this course help me get a job?",
      answer:
        "We focus on what employers look for: real-world projects, strong portfolios, and clear research-to-design thinking. By the end of the course, you’ll have a research-backed portfolio project, a refined CV/resume with measurable UX/research impact, and interview preparation to confidently talk about your work.",
    },
    {
      question:
        "What makes this course different from free YouTube tutorials or other design bootcamps?",
      answer:
        "Unlike most tutorials that focus only on visual design or theory, our course emphasizes hands-on user research and its link to product design. You’ll work on real projects, receive mentorship, and graduate with portfolio-ready work, not just certificates.",
    },
    {
      question: "Will I get a certificate after completing the course?",
      answer:
        "Yes! You’ll receive a recognized certificate upon successful completion. More importantly, you’ll have tangible work and skills to showcase, which matter most to recruiters.",
    },
    {
      question: "How long is the course, and what is the time commitment?",
      answer:
        "The course is designed to be flexible for busy learners. Sessions are spread across 2 months, with structured learning plus guided assignments.",
    },
    {
      question: "Is the course online or in-person?",
      answer:
        "The course is online. This means you can join from anywhere, but still interact directly with instructors, peers, and mentors in real time.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-linear-to-l from-[#1B1F23] to-[#1B1F23] py-20" id="faq">
      <div className="max-w-[1063px] mx-auto px-6">
        <h2 className="text-[40px] leading-[1.1] tracking-[-0.02em] font-medium text-[#F7F7F7] text-center mb-14">
          Some frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#3F3F3F45] border border-[#3F3F3F45] rounded-lg overflow-hidden transition-all"
              >
                {/* Header */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className="text-sm  xl:text-[20px] font-medium text-[#F7F7F7] leading-normal tracking-[-2%]">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#F7F7F7]" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-[#F7F7F7]  text-sm xl:text-lg leading-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      <ScrollToTop/>
    </section>
  );
}
