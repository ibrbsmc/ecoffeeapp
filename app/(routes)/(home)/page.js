import Hero from "./_components/hero";
import { getProductsByCategory } from "@/lib/getProducts";

export default async function Home() {
  const drinks = await getProductsByCategory("drinks");
  const foods = await getProductsByCategory("foods");
  const brewAtHome = await getProductsByCategory("brewAtHome");

  return (
    <Hero
      drinks={drinks}
      foods={foods}
      brewAtHome={brewAtHome}
    />
  );
}