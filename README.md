# Coffee App

Coffee App, kahve odaklı bir vitrin ve menü uygulamasıdır.
Kullanıcılar ana sayfada ürünleri inceleyebilir, menü sayfasından kategori ve ürün detaylarına gidebilir, iletişim formu üzerinden mesaj gönderebilir.

## Kullanım Amacı

- Kahve ürünlerini modern bir arayüzde sergilemek
- Menü ve ürün detaylarını tek bir akışta sunmak
- İletişim formu ile ziyaretçi mesajlarını almak

## Teknolojiler

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Firebase Firestore
- Zustand
- Resend

## Kurulum

1. Depoyu klonlayın:

```bash
git clone <repo-url>
cd coffee-app
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Ortam değişkenlerini ayarlayın (Bkz. Ortam Değişkenleri).

4. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

5. Tarayıcıda açın:

```text
http://localhost:3000
```

## Ortam Değişkenleri

Projenin iletişim formu ve veritabanı bağlantılarının çalışması için kök dizinde bir .env.local dosyası oluşturun ve aşağıdaki değişkenleri kendi hesap bilgilerinize göre doldurun:

```env
# Resend API (İletişim Formu İçin)
RESEND_API_KEY=your_resend_api_key

# Firebase Yapılandırması (Veritabanı İçin)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

## Komutlar

```bash
npm run dev     # geliştirme ortamı
npm run build   # production build
npm run start   # production başlatma
npm run lint    # eslint kontrolü
```

## Proje Yapısı

```text
app/                  # sayfalar, route grupları ve API route'lar
components/           # ortak bileşenler ve UI parçaları
lib/                  # Firebase ve veri çekme yardımcıları
store/                # Zustand store yapısı
public/images/        # görseller
```
