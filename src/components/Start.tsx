"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function () {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const pathName = usePathname();

  useEffect(() => {
    setSubmitted(false);
    setError("");
    setEmail("");
  }, [pathName]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    // Validate email
    if (!email.trim()) {
      setError("Please enter your email address");
      setSubmitting(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Subscription failed");
      }

      // Success - show thank you message
      setSubmitted(true);
      setEmail("");

      // Trigger download using a temporary link
      if (typeof window !== "undefined") {
        // Create an anchor element
        const link = document.createElement("a");
        
        // Set the href to your file
        link.href = "/academy/Processcards.pdf";
        
        // Add the download attribute to force download
        link.setAttribute("download", "Processcards.pdf");
        
        // Append link to the body, click it, and then remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      // --- END: THE FIX ---

    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-[336px] md:w-full mx-auto mt-18 xl:mt-30">
      <div className="md:hidden flex flex-col text-[#F7F7F7]">
        <h2 className="text-2xl font-normal leading-[100%] mb-4">
          To start your journey,{" "}
          <span className="text-[#F1B130] italic">
            access these free resources now
          </span>
        </h2>
        <div className="text-sm leading-[1.4] tracing-[-2%] mb-6">
          Download this free set of resources put together by our team from our
          years of work with global and local organisations across different
          industries. Think of it as a sneak preview; test the tools, see the
          impact, and unlock the full playbook in the course.
        </div>
        <div className="relative h-[318px] mb-10 rounded-md overflow-hidden">
          <Image
            src={"/academy/Freebie.png"}
            fill
            alt=""
            className="object-cover rounded-full"
          />
          <div className="absolute w-[268.83px] left-[22.34px] bottom-[29.34px] text-[#1E1E1E] pl-[14.8px] py-[10.72px] bg-white rounded-md">
            <h5 className="font-medium text-[21.45px] leading-[100%] mb-[3.57px]">
            Process card
            </h5>
            <p className="text-[8.94px] leading-[1.4] tracing-[-2%]">
            An end-to-end process guide for researchers and designers
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="w-full mb-8 xl:w-[610px] text-[#F7F7F7] text-center">
            <h5 className="font-medium text-[28.45px] xl:text-[46.3px] leading-[100%] mb-[3.57px]">
              Thank you for downloading!
            </h5>
            <p className="text-[8.61px] xl:text-[14px] leading-[1.4] tracing-[-2%]">
              Test the tools, see the impact, and unlock the full playbook in
              the course.
            </p>
          </div>
        ) : (
          <div className="mb-20 md:hidden">
            <form
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              onSubmit={handleSubmit}
              className="mc-field-group validate form w-full flex flex-col items-start md:items-center gap-3"
              target="_blank"
            >
              <div className="w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  disabled={submitting}
                  className="w-full bg-white py-5 rounded-sm placeholder:text-[#667085] px-[17.6px] text-black mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                {error && (
                  <p className="text-red-400 text-xs mb-2 px-[17.6px]">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#F1B130] py-4 text-center font-medium rounded-sm text-[#1D2327] w-full text-xs leading-[22.53px] tracking-[0.47px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F1B130]/90 transition-colors cursor-pointer"
              >
                {submitting ? "SUBMITTING..." : "DOWNLOAD YOUR FREE COPY"}
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="hidden md:flex justify-center gap-10 pb-[83px]">
        <div className="w-[335px] h-[334px] xl:w-[545px] xl:h-[409px] relative overflow-hidden rounded-md">
          <Image
            src={"/academy/Freebie.png"}
            alt="image"
            fill
            className="object-cover rounded-[7.13px] xl:rounded-[11.59px"
          />
          <div className="absolute w-[268.83px] xl:w-[415px] left-[22.34px] bottom-[29.34px] text-[#1E1E1E] pl-[14.8px] py-[10.72px] bg-white rounded-[4.9px] xl:rounded-lg">
            <h5 className="font-medium text-[28.45px] xl:text-[46.3px] leading-[100%] mb-[3.57px]">
            Process cards
            </h5>
            <p className="text-[8.61px] xl:text-[14px] leading-[1.4] tracing-[-2%]">
            An end-to-end process guide for researchers and designers
            </p>
          </div>
        </div>

        {submitted ? (
          <div className=" text-[#F7F7F7] flex flex-col justify-center">
            <h5 className="font-medium text-[28.45px] xl:text-[46.3px] leading-[100%] mb-[3.57px]">
              Thank you for downloading!
            </h5>
            <p className="text-[8.61px] xl:text-[14px] leading-[1.4] tracing-[-2%]">
              Test the tools, see the impact, and unlock the full playbook in
              the course.
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-between w-[420px] h-[340px] xl:w-[610px] xl:h-[400px] text-[#F7F7F7]">
            <h2 className="text-[32px] xl:text-5xl font-normal leading-[100%] tracking-[-2%]">
              To start your journey,{" "}
              <span className="text-[#F1B130] italic">
                access these free resources now
              </span>
            </h2>
            <div className="text-sm xl:text-lg leading-[1.4] tracking-[-2%] mb-6">
              Download this free set of resources put together by our team from
              our years of work with global and local organisations across
              different industries. Think of it as a sneak preview; test the
              tools, see the impact, and unlock the full playbook in the course.
            </div>

            <form
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              onSubmit={handleSubmit}
              className="mc-field-group validate form w-full flex flex-col items-start md:items-center gap-3"
              target="_blank"
            >
              <div className="w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  disabled={submitting}
                  className="w-full bg-white py-5 rounded-sm placeholder:text-[#667085] px-[17.6px] text-black mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                {error && (
                  <p className="text-red-400 text-xs mb-2 px-[17.6px]">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#F1B130] py-4 text-center font-medium rounded-sm text-[#1D2327] w-full text-sm xl:text-base leading-[22.53px] tracking-[0.47px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F1B130]/90 transition-colors cursor-pointer"
              >
                {submitting ? "SUBMITTING..." : "DOWNLOAD YOUR FREE COPY"}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
