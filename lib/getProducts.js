// Firestore'dan ürün çekmek için yardımcı fonksiyonlar
// Bu dosya sayesinde her sayfada aynı kodu tekrar yazmıyoruz

import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

// Kategoriye göre ürünleri getir
// Örnek: getProductsByCategory("drinks") → tüm içecekleri döndürür
export async function getProductsByCategory(category) {
  // "products" koleksiyonuna git
  const ref = collection(db, "products");

  // Sadece bu kategoridekileri filtrele
  const q = query(ref, where("category", "==", category));

  // Firestore'dan verileri al
  const snapshot = await getDocs(q);

  // Gelen verileri normal bir diziye çevir
  const products = [];
  snapshot.forEach((doc) => {
    products.push(doc.data());
  });

  return products;
}

// Slug'a göre tek bir ürün getir
// Örnek: getProductBySlug("latte") → Latte ürününü döndürür
// Detay sayfasında kullanılıyor
export async function getProductBySlug(slug) {
  // "products" koleksiyonuna git
  const ref = collection(db, "products");

  // Slug'ı eşleşen ürünü bul
  const q = query(ref, where("slug", "==", slug));

  // Firestore'dan verileri al
  const snapshot = await getDocs(q);

  // Ürün bulunamazsa null döndür
  if (snapshot.empty) {
    return null;
  }

  // İlk eşleşen ürünü döndür
  return snapshot.docs[0].data();
}