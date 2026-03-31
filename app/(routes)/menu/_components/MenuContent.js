"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import useCartStore from "@/store/cartStore";

export default function MenuContent({ drinks, foods, brewAtHome }) {
  // Hangi kategori seçili?
  const [activeCategory, setActiveCategory] = useState("drinks");

  // Zustand'dan addToCart fonksiyonunu al
  const addToCart = useCartStore((state) => state.addToCart);

  // Seçili kategoriye göre ürünleri getir
  function getItems() {
    if (activeCategory === "drinks") return drinks;
    if (activeCategory === "foods") return foods;
    if (activeCategory === "brewAtHome") return brewAtHome;
    return [];
  }

  // %30 indirimli fiyatı hesapla
  function getDiscountedPrice(price) {
    return (price * 0.7).toFixed(2);
  }

  // Sepete ekle + toast göster
  function handleAddToCart(item) {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  }

  const activeItems = getItems();

  return (
    <div className="font-(family-name:--font-merienda)">
      {/* Sekmeler */}
      <div className="flex justify-center gap-6 mb-12">
        <button
          onClick={() => setActiveCategory("drinks")}
          className={`text-sm pb-2 border-b-2 transition-colors duration-300 cursor-pointer
            ${activeCategory === "drinks"
              ? "text-mauve-100 border-mauve-100"
              : "text-mauve-500 border-transparent hover:text-mauve-300"
            }`}
        >
          Drinks
        </button>

        <button
          onClick={() => setActiveCategory("foods")}
          className={`text-sm pb-2 border-b-2 transition-colors duration-300 cursor-pointer
            ${activeCategory === "foods"
              ? "text-mauve-100 border-mauve-100"
              : "text-mauve-500 border-transparent hover:text-mauve-300"
            }`}
        >
          Food
        </button>

        <button
          onClick={() => setActiveCategory("brewAtHome")}
          className={`text-sm pb-2 border-b-2 transition-colors duration-300 cursor-pointer
            ${activeCategory === "brewAtHome"
              ? "text-mauve-100 border-mauve-100"
              : "text-mauve-500 border-transparent hover:text-mauve-300"
            }`}
        >
          Brew at Home
        </button>
      </div>

      {/* Ürün Grid */}
      {activeItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeItems.map((item, index) => (
            <div
              key={item.slug}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group rounded-2xl border border-mauve-800/50 p-5 flex flex-col items-center text-center hover:border-mauve-600 transition-colors duration-300"
            >
              {/* Üst kısım : tıklayınca detay sayfasına git */}
              <Link href={`/menu/${item.slug}`} className="flex flex-col items-center">
                <div className="w-40 h-40 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                    quality={100}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-(family-name:--font-merienda) text-base font-bold">
                  {item.name}
                </h3>
                <p className="text-mauve-500 text-xs mt-1">
                  {item.description}
                </p>
              </Link>

              {/* Fiyat + Sepete Ekle */}
              <div className="flex items-center justify-between w-full mt-4 pt-4 border-t border-mauve-800/50">
                <div className="flex items-center gap-2">
                  <span className="text-mauve-600 text-xs line-through">
                    €{item.price.toFixed(2)}
                  </span>
                  <span className="text-mauve-300 font-bold text-sm">
                    €{getDiscountedPrice(item.price)}
                  </span>
                </div>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex items-center gap-1.5 text-xs text-mauve-400 hover:text-mauve-100 transition-colors duration-300 cursor-pointer"
                >
                  <ShoppingCart size={14} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-mauve-400 text-center mt-8 text-sm italic">Coming soon...</p>
      )}
    </div>
  );
}