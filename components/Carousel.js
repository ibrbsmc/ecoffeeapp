"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import carousel1 from "../public/images/carousel-1.jpg";
import carousel2 from "../public/images/carousel-2.jpg";
import carousel3 from "../public/images/carousel-3.jpg";
import carousel4 from "../public/images/carousel-4.jpg";
import carousel5 from "../public/images/carousel-5.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    src: carousel1,
    alt: "Freshly Roasted Coffee",
    title: "Freshly Roasted Excellence",
    description:
      "Carefully selected beans are roasted to reveal rich aroma and character, creating a balanced cup inspired by the traditions of world coffee culture.",
  },
  {
    src: carousel2,
    alt: "Premium Coffee Beans",
    title: "Premium Beans, Perfect Taste",
    description:
      "From the first sip to the final drop, our coffee delivers smooth flavor and depth, crafted from premium beans and roasted with care for a refined taste.",
  },
  {
    src: carousel3,
    alt: "Art of Coffee",
    title: "The Art of Coffee Crafting",
    description:
      "Expertly prepared and thoughtfully blended, our coffee highlights the artistry of brewing while bringing out balanced flavors from carefully chosen beans.",
  },
  {
    src: carousel4,
    alt: "Coffee Moments",
    title: "More Than Just Coffee",
    description:
      "Coffee is more than a drink, it’s a moment to pause and connect, bringing warmth, inspiration, and comfort to every part of your day.",
  },
  {
    src: carousel5,
    alt: "Coffee Tradition",
    title: "Tradition Meets Modern Flavor",
    description:
      "Sourced responsibly and roasted to perfection, our coffee celebrates the rich traditions of coffee culture while embracing modern craftsmanship.",
  },
];

export default function Carousel() {
  return (
    <div className="group">
      {/* global css'te olan style için */}
      <Swiper
        navigation={true}
        pagination={false}
        mousewheel={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper carousel-custom w-full h-70 sm:h-100 2xl:h-120 mt-2"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              {...(index === 0 && { priority: true })}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-12 right-16 sm:right-20">
              <span className="inline-block px-3 py-1 mb-2 text-xs uppercase text-mauve-50 mask-radial-from-neutral-50 border border-white rounded-full font-(family-name:--font-roboto)">
                Our Collection
              </span>

              <h2 className="text-mauve-100 mask-radial-at-center mask-b-from-40% text-lg sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-3 font-(family-name:--font-roboto)">
                {slide.title}
              </h2>

              <p className="hidden sm:block text-mauve-50 text-sm md:text-base max-w-xl font-(family-name:--font-roboto)">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
