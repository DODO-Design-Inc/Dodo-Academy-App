"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CallbackClient() {
  const search = useSearchParams();
  const reference = search.get("reference");

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (!reference) return;

    const verify = async () => {
      try {
        const res = await fetch(`/api/payments/verify?reference=${reference}`);
        const data = await res.json();

        setSuccess(data.success);
      } catch {
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [reference]);

  if (loading) return <p className="p-10">Verifying payment...</p>;

  return (
    <div className="flex">
      <div className="w-1/3 h-screen relative">
        <Image
          src="/academy/Image.jpeg"
          alt="image"
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center flex flex-col justify-center align-middle items-center w-2/3 h-screen bg-[#181E22]">
        <div className="my-auto text-[#FEFEFE]">
          {success ? (
            <>
              <h1 className="font-bold tracking-[-2%] leading-[140%] text-[64px]">
                Thank You!
              </h1>
              <p className=" font-normal w-[458px] mx-auto tracking-[-2%] leading-[140%] text-[24px] text-[#FEFEFE]">
                Your payment was processed successfully, we’ll share next steps
                to your email shortly.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-red-600 font-bold tracking-[-2%] leading-[140%] text-[64px]">
                Payment Failed ❌
              </h1>
              <p className=" font-normal tracking-[-2%] leading-[140%] text-[24px] text-[#FEFEFE]">
                Your payment was not successful, Please try again.
              </p>
            </>
          )}

          <p className="mt-4">Reference: {reference}</p>
          <button className="border rounded-md mt-4 p-3 w-[607px]">
            <Link href={"/"}>Go Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
