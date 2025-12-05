"use client";

import React, { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function EnrollModal({ open, onClose }: Props) {
  if (!open) return null;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const amountNGN = 55000;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!agree) return alert("Please agree to the terms");

    setLoading(true);

    try {
      const resp = await fetch("/api/payments/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          // amount: amountNGN,
        }),
      });

      const data = await resp.json();

      if (!resp.ok) {
        alert(data.message || "Payment initialization failed");
        setLoading(false);
        return;
      }

      window.location.href = data.authorization_url;
    } catch (err: any) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Reusable styles for the floating label logic
  const inputClass =
    "block py-2.5 px-0 w-full text-sm text-[#34393E] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 peer";
  const labelClass =
    "peer-focus:font-medium absolute text-sm text-[#34393E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <div className="fixed inset-0 z-50 flex justify-start items-start p-4">
      <div className="absolute inset-0 bg-black opacity-60" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white text-[#34393E] p-8 rounded-lg text-left mx-auto my-auto">
        <h2 className="text-3xl mb-8">Enroll for this course</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6 mb-10">
            {/* First Name */}
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name="firstName"
                className={inputClass}
                placeholder=" "
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label className={labelClass}>FIRST NAME *</label>
            </div>

            {/* Last Name */}
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name="lastName"
                className={inputClass}
                placeholder=" "
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label className={labelClass}>LAST NAME *</label>
            </div>
          </div>

          {/* Email */}
          <div className="relative z-0 w-full group mb-10">
            <input
              type="email"
              name="email"
              className={inputClass}
              placeholder=" "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={labelClass}>EMAIL ADDRESS *</label>
          </div>

          {/* Phone */}
          <div className="relative z-0 w-full group mb-10">
            <input
              type="tel"
              name="phone"
              className={inputClass}
              placeholder=" "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label className={labelClass}>PHONE NUMBER</label>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 mt-4">
            <input
              type="checkbox"
              className="w-5 h-5 accent-yellow-400 mt-0.5 cursor-pointer"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span className="text-lg text-gray-700 leading-tight">
              I agree to DODO collecting my personal information in order to
              receive updates and communications.
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#F1B130] font-semibold rounded-md hover:bg-yellow-500 transition-colors mt-6"
            disabled={loading}
          >
            {loading ? "Processing..." : `PAY NGN${amountNGN.toLocaleString()}`}
          </button>
        </form>
      </div>
    </div>
  );
}
