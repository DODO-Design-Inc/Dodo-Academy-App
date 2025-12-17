"use client";


type Props = {
  open: boolean;
  onClose: () => void;
};

export default function TermsModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#161E24] opacity-60"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-[770px] max-h-[63vh] bg-white text-[#34393E] py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-12 rounded-lg text-left flex flex-col">
        {/* Title */}
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold mb-4 md:mb-6 text-[#34393E] leading-[120%] tracking-[-3%]">
          DDA School of Research – <br /> Terms & Conditions{" "}
        </h2>

        {/* Content */}
        <div className="relative flex-1 overflow-y-auto pr-1 space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg leading-[120%] tracking-[-3%] pb-6">
          <div>
            <h3 className="font-semibold text-base md:text-lg">Acceptance</h3>
            <p>
              By enrolling in any programme offered by DDA School of Research
              (DODO Design Ltd), you agree to these Terms and Conditions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">
              Access & Payment
            </h3>
            <p>
              Full payment is required before access to any course materials,
              live sessions, or community platforms is granted.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">
              No Refunds Policy
            </h3>
            <p>
              All payments are final. Once access is granted, whether or not the
              course is started, attended, or completed, no refunds, credits, or
              transfers will be issued under any circumstances. This applies to
              all learners, including those based in West Africa and
              internationally.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">
              Intellectual Property
            </h3>
            <p>
              All course materials remain the intellectual property of DODO
              Design Ltd and are provided for personal learning use only.
              Redistribution or commercial use is prohibited.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">
              Changes & Availability
            </h3>
            <p>
              We reserve the right to update course content, schedules, or
              delivery formats as needed. Such changes do not qualify for
              refunds.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">
              Governing Law
            </h3>
            <p>
              These Terms shall be governed and are applicable by the laws of
              the Federal Republic of Nigeria.
            </p>
          </div>

          <div className="pb-2">
            <h3 className="font-semibold text-base md:text-lg">Contact</h3>
            <p>hello@dododesign.africa</p>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-2 pt-1">
          <button
            onClick={onClose}
            className="bg-[#F1B130] hover:bg-yellow-500 text-[#34393E] font-semibold px-4 py-4 cursor-pointer rounded-md transition-colors w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
