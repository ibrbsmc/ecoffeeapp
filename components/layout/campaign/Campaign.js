"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import campaignBg from "../../../public/images/campaign-3.jpg";
import { X, ArrowRight } from "lucide-react";

function Campaign() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full overflow-hidden h-20">
      {/* Arka Plan Görseli */}
      <Image
        src={campaignBg}
        alt="campaign"
        fill
        className="object-cover opacity-20"
        priority
      />
      {/* Koyu Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* İçerik */}
      <Link
        href="/menu"
        className="relative z-10 flex items-center justify-center h-full gap-2 group"
      >
        <span className="text-mauve-400 text-xs tracking-widest uppercase hidden sm:inline font-(family-name:--font-roboto)">
          Special Offer
        </span>

        <span className="w-px h-3 bg-mauve-600 hidden sm:inline" />

        <span className="font-(family-name:--font-merienda) text-mauve-100 text-xs sm:text-sm">
          30% off all coffees
        </span>

        <ArrowRight
          size={14}
          className="text-mauve-400 animate-bounce-x"
        />
      </Link>

      {/* Kapatma Butonu */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsVisible(false);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-mauve-600 hover:text-mauve-300 transition-colors duration-300 cursor-pointer"
        aria-label="Kampanyayı kapat"
      >
        <X size={14} />
      </button>
    </div>
  );
}

export default Campaign;