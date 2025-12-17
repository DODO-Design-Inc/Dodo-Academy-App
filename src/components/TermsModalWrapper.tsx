"use client";

import { useEffect, useState } from "react";
import TermsModal from "./TermsModal";

export default function TermsModalWrapper() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 5 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return <TermsModal open={showModal} onClose={() => setShowModal(false)} />;
}

