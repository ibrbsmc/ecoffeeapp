import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/container";
import { ArrowLeft } from "lucide-react";
import { getProductBySlug } from "@/lib/getProducts";
import AddToCartButton from "@/components/AddToCartButton";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  // Ürün bulunamazsa gösterilecek fallback title
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  // Ürün bulunursa istenilen formatta title dönüyoruz
  return {
    title: `${product.name}`,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const discountedPrice = (product.price * 0.7).toFixed(2);

  return (
    <div className="text-mauve-100 font-(family-name:--font-roboto)">
      <Container>
        <section className="py-16 sm:py-24">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-mauve-400 text-sm mb-10 hover:text-mauve-100 transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            <span className="leading-none">Back to Menu</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center rounded-2xl border border-mauve-800/50 p-8">
              <Image
                src={product.image}
                alt={product.name}
                width={320}
                height={320}
                quality={100}
                className="object-contain w-auto h-auto"
              />
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-mauve-400">
                  Product Detail
                </span>
                <h1 className="font-(family-name:--font-merienda) text-3xl sm:text-4xl font-bold mt-2">
                  {product.name}
                </h1>
                <div className="w-12 h-px bg-mauve-600 mt-8" />
              </div>

              <p className="text-mauve-400 text-sm leading-relaxed">
                {product.longDescription}
              </p>

              <div className="flex items-center gap-3">
                <span className="text-mauve-600 text-base line-through">
                  €{product.price.toFixed(2)}
                </span>
                <span className="text-mauve-100 font-bold text-2xl">
                  €{discountedPrice}
                </span>
                <span className="text-xs text-mauve-400 border border-mauve-700 rounded-full px-2 py-0.5">
                  30% OFF
                </span>
              </div>

              <AddToCartButton
                product={{
                  name: product.name,
                  slug: product.slug,
                  price: product.price,
                  image: product.image,
                }}
              />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}