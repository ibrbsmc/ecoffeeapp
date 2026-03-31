import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { ArrowRight } from "lucide-react";
import { getProductsByCategory } from "@/lib/getProducts";
import MenuContent from "./_components/MenuContent";

export const metadata = {
  title: "Menu",
};

// Server component olarak tanımlanır, bu sayede Firestore'dan veri çekme işlemi sunucu tarafında gerçekleşir ve sayfa hızlıca render edilir.
export default async function MenuPage() {
  // Firestore'dan tüm kategorileri çek
  const drinks = await getProductsByCategory("drinks");
  const foods = await getProductsByCategory("foods");
  const brewAtHome = await getProductsByCategory("brewAtHome");

  return (
    <div className="text-mauve-100 font-(family-name:--font-roboto)">
      {/*  HERO  */}
      <section className="relative w-full h-72 sm:h-96 mt-2 overflow-hidden">
        <Image
          src="/images/carousel-1.jpg"
          alt="Our Menu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block px-3 py-1 mb-3 text-xs uppercase tracking-widest text-mauve-300 border border-mauve-600 rounded-full">
            Our Menu
          </span>
          <h1 className="font-(family-name:--font-merienda) text-3xl sm:text-5xl font-bold text-mauve-100">
            Explore Our Menu
          </h1>
          <p className="mt-3 text-mauve-400 text-sm sm:text-base max-w-lg">
            Carefully crafted drinks, fresh bites, and everything you need to
            brew the perfect cup at home.
          </p>
        </div>
      </section>

      {/*  KATEGORİ SEKMELERİ + ÜRÜN KARTLARI  */}
      <Container>
        <section className="py-16 sm:py-12">
          <MenuContent drinks={drinks} foods={foods} brewAtHome={brewAtHome} />
        </section>
      </Container>

      {/*  CTA  */}
      <section className="relative w-full h-64 sm:h-80 overflow-hidden">
        <Image
          src="/images/carousel-5.jpg"
          alt="Visit us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div data-aos="fade-up" className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-(family-name:--font-merienda) text-2xl sm:text-3xl font-bold mb-3">
            Can&apos;t Decide?
          </h2>
          <p className="text-mauve-400 text-sm max-w-md mb-6">
            Visit us and let our baristas help you find your perfect cup.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-mauve-100 text-black px-5 py-2.5 rounded-md text-sm font-(family-name:--font-merienda) hover:bg-mauve-300 transition-colors duration-300"
          >
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}