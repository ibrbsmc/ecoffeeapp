"use client";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import useCartStore from "@/store/cartStore";

export default function CartSheet() {
  // Zustand'dan her şeyi al
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const removeAllOfProduct = useCartStore((state) => state.removeAllOfProduct);
  const getGroupedCart = useCartStore((state) => state.getGroupedCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const groupedCart = getGroupedCart();

  return (
    <Sheet>
      {/* Sepet butonu : mobilde sadece ikon, masaüstünde ikon + Cart yazısı */}
      <SheetTrigger asChild>
        <button className="cart-button bg-mauve-100 text-black px-2 py-1.5 md:px-3 md:py-1 rounded-md flex items-center cursor-pointer relative">
          <ShoppingCart size={14} />
          <span className="hidden md:inline ml-2 text-sm">Cart</span>
          <span className="absolute -top-2 -right-2 bg-mauve-400 text-mauve-100 rounded-full text-xs flex items-center justify-center w-4 h-4">
            {cart.length}
          </span>
        </button>
      </SheetTrigger>

      {/* Sağdan açılan panel */}
      <SheetContent
        side="right"
        className="bg-[#1a1a1a] border-mauve-800 text-mauve-100 flex flex-col font-(family-name:--font-roboto)"
      >
        <SheetHeader>
          <SheetTitle className="text-mauve-100 font-(family-name:--font-merienda)">
            Your Cart
          </SheetTitle>
          <SheetDescription className="text-mauve-500">
            {cart.length === 0
              ? "Your cart is empty."
              : `${cart.length} item(s) in your cart.`}
          </SheetDescription>
        </SheetHeader>

        {/* Ürün listesi */}
        <div className="flex-1 overflow-y-auto px-4">
          {groupedCart.map((item) => (
            <div
              key={item.slug}
              className="flex items-center gap-3 py-3 border-b border-mauve-800/50"
            >
              {/* Ürün resmi */}
              <div className="w-14 h-14 shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  quality={100}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Ürün bilgisi */}
              <div className="flex-1">
                <p className="text-sm font-bold">{item.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-mauve-500">
                    {item.quantity}x
                  </span>
                  <span className="text-xs text-mauve-400">
                    €{(item.price * 0.7 * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Sil butonu */}
              <button
                onClick={() => removeAllOfProduct(item.slug)}
                className="text-mauve-600 hover:text-red-400 transition-colors duration-300 cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Toplam + Sepeti boşalt */}
        {cart.length > 0 && (
          <SheetFooter className="border-t border-mauve-800/50">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-mauve-400">Total</span>
              <span className="text-lg font-bold text-mauve-100">
                €{getTotalPrice()}
              </span>
            </div>

            <button
              onClick={clearCart}
              className="w-full bg-mauve-100 text-black py-2.5 rounded-md text-sm font-(family-name:--font-merienda) hover:bg-mauve-300 transition-colors duration-300 cursor-pointer"
            >
              Clear Cart
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}