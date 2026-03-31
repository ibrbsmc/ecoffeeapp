"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import Container from "@/components/container";

const tabStyle =
  "border-0 border-b-2 border-white rounded-none bg-transparent text-mauve-400 hover:text-white transition-colors duration-200 data-[state=active]:text-white data-[state=active]:bg-transparent";

const SwiperCarousel = ({ items }) => (
  <div className="group w-full mt-6 relative isolate">
    <Swiper
      slidesPerView={3}
      spaceBetween={24}
      loop
      grabCursor
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      modules={[Navigation, Autoplay]}
      className="w-full"
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <Link
            href={`/menu/${item.slug}`}
            className="group/card h-56 flex items-center justify-center rounded-xl overflow-hidden relative bg-[#292929]"
          >
          <Image
            src={item.image}
            width={200}
            height={200}
            alt={item.name}
            className="object-contain w-auto h-auto"
            quality={100}
          />

            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-mauve-100 font-(family-name:--font-merienda)">
                {item.name}
              </span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const DrinkSection = ({ drinks, foods, brewAtHome }) => {
  return (
    <section className="w-full font-(family-name:--font-roboto)">
      <Container>
        {/* Başlık */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-mauve-100 font-(family-name:--font-merienda)">
            What We Offer
          </h2>
          <p className="mt-2 text-mauve-400 text-sm max-w-md mx-auto">
            Explore our carefully crafted drinks, fresh bites, and more.
          </p>
        </div>

        {/* Sekmeler + Carousel */}
        <Tabs defaultValue="drinks" className="w-full font-(family-name:--font-roboto)">
          <div className="flex justify-center mt-4">
            <TabsList className="bg-transparent gap-4 justify-center">
              <TabsTrigger value="drinks" className={tabStyle}>Drinks</TabsTrigger>
              <TabsTrigger value="food" className={tabStyle}>Food</TabsTrigger>
              <TabsTrigger value="brew" className={tabStyle}>Brew at Home</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="drinks">
            {drinks.length > 0 ? (
              <SwiperCarousel items={drinks} />
            ) : (
              <p className="text-mauve-400 text-center mt-8">Coming soon...</p>
            )}
          </TabsContent>

          <TabsContent value="food">
            {foods.length > 0 ? (
              <SwiperCarousel items={foods} />
            ) : (
              <p className="text-mauve-400 text-center mt-8">Coming soon...</p>
            )}
          </TabsContent>

          <TabsContent value="brew">
            {brewAtHome.length > 0 ? (
              <SwiperCarousel items={brewAtHome} />
            ) : (
              <p className="text-mauve-400 text-center mt-8">Coming soon...</p>
            )}
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
};

export default DrinkSection;