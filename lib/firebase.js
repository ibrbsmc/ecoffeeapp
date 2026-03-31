import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase console'dan ayarlar
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firestore veritabanı bağlantısı
// Diğer dosyalarda "db" olarak import edilecek
const db = getFirestore(app);

export { db };