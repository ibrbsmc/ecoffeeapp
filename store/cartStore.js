import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      // Sepetteki ürünler
      cart: [],

      // Sepete ürün ekle
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),

      // Bir ürünün tüm kopyalarını sil (slug'a göre)
      removeAllOfProduct: (slug) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.slug !== slug),
        })),

      // Sepeti tamamen boşalt
      clearCart: () => set({ cart: [] }),

      // Aynı ürünleri grupla — slug'a göre birleştir
      // Örnek: 3 tane Latte varsa → { ...latte, quantity: 3 }
      getGroupedCart: () => {
        const cart = get().cart;
        const grouped = [];

        for (let i = 0; i < cart.length; i++) {
          const existing = grouped.find((g) => g.slug === cart[i].slug);

          if (existing) {
            existing.quantity = existing.quantity + 1;
          } else {
            grouped.push({ ...cart[i], quantity: 1 });
          }
        }

        return grouped;
      },

      // Toplam fiyatı hesapla (%30 indirimli)
      getTotalPrice: () => {
        const cart = get().cart;
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
          total = total + cart[i].price * 0.7;
        }
        return total.toFixed(2);
      },
    }),
    {
      name: "coffee-app-cart",
    }
  )
);

export default useCartStore;