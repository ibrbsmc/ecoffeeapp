"use client";

import React from "react";
import FeatureSection from "./featureSection";
import DrinkSection from "./drinkSection";
import Carousel from "@/components/Carousel";

export default function Hero({ drinks, foods, brewAtHome }) {
  return (
    <div className="flex flex-col">
      <Carousel />

      <div className="py-12 border-b border-mauve-800/30">
        <FeatureSection />
      </div>

      <div className="py-12">
        <DrinkSection
          drinks={drinks}
          foods={foods}
          brewAtHome={brewAtHome}
        />
      </div>
    </div>
  );
}