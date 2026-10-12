# 🚗 Kafeavtomoyka – Rasmiy Vebsayt

Farg‘ona shahridagi **Kafeavtomoyka** uchun zamonaviy, premium va sotuvga yo‘naltirilgan professional vebsayt.

> **Asosiy g‘oya:** “Avtomobilingiz yuviladi. Siz esa dam olasiz.”

---

## 📌 Biznes Ma'lumotlari

- **Nomi:** Kafeavtomoyka
- **Manzil:** Sahibqiron Temur ko‘chasi 241A, 150100, Farg‘ona, O‘zbekiston
- **Telefon:** +998 99 999 06 66
- **Ish vaqti:** Har kuni ochiq (02:00 gacha)
- **O‘rtacha narx:** 50 000 – 200 000 UZS / kishi
- **Google reyting:** ⭐ 4.4 / 5 (7 ta sharh)
- **Instagram:** [@kafeavtomoyka](https://www.instagram.com/kafeavtomoyka/)
- **Menyu:** [Taplink Menyu](http://taplink.cc/kafeavtomoyka)

---

## 🚀 Loyihani Kompyuterda Ishga Tushirish

### Talablar:
- [Node.js](https://nodejs.org/) (18 yoki undan yuqori versiya)
- npm (Node.js bilan birga keladi)

### 1. Bog‘liqliklarni o‘rnatish:
```bash
npm install
```

### 2. Dasturchi rejimida ishga tushirish (Local server):
```bash
npm run dev
```
Brauzerda ochiladi: `http://localhost:3000` yoki `http://localhost:5173`

### 3. Production uchun tayyor fayllarni yig‘ish (Build):
```bash
npm run build
```
Tayyor fayllar `dist/` papkasida hosil bo‘ladi.

---

## 🌐 Serverga / Hostingga Joylash

`dist/` papkasidagi tayyor HTML, CSS, JS fayllarni quyidagi istalgan xizmatga bepul yoki o‘z serveringizga yuklashingiz mumkin:
- **Vercel** (`vercel deploy`)
- **Netlify** (Drag & drop `dist` folder)
- **GitHub Pages**
- **cPanel / Apache / Nginx** web-serveringizning `public_html` papkasiga.

---

## 📁 Loyiha Tuzilmasi

```
kafeavtomoyka/
├── dist/                   # Production uchun tayyor statik fayllar (HTML, CSS, JS)
├── public/                 # Statik resurslar va ZIP arxivi
│   └── kafeavtomoyka-website.zip
├── src/
│   ├── assets/images/      # Sifatli avtomoyka, kafe va taomlar rasmlari
│   ├── components/         # React komponentlari:
│   │   ├── Navbar.tsx      # Qotib turuvchi yuqori menyu va mobil hamburger
│   │   ├── Hero.tsx        # Bosh sarlavha va asosiy CTA tugmalari
│   │   ├── About.tsx       # 4 ta premium afzallik kartalari
│   │   ├── Services.tsx    # 5 ta asosiy xizmatlar bo‘limi
│   │   ├── MenuSection.tsx # Kategoriya bo‘yicha menyu va Taplink havolasi
│   │   ├── Gallery.tsx     # Suratlar galereyasi va Lightbox
│   │   ├── Reviews.tsx     # Google 4.4 reytingi va sharhlar
│   │   ├── CtaSection.tsx  # Sotuvga undovchi maxsus blok
│   │   ├── Contact.tsx     # Manzil, telefon va Google Maps xaritasi
│   │   ├── Footer.tsx      # Pastki ma'lumotlar paneli
│   │   ├── QuickBookingModal.tsx # Navbatsiz yozilish modali
│   │   └── MobileQuickCall.tsx   # Mobil ekran uchun tezkor qo‘ng‘iroq paneli
│   ├── data/
│   │   └── businessData.ts # Barcha matnlar va biznes ma'lumotlari
│   ├── App.tsx             # Asosiy sahifa
│   ├── index.css           # Tailwind CSS va dizayn qoidalari
│   └── main.tsx            # Dastur kirish nuqtasi
├── index.html              # SEO va Schema.org sozlangan HTML shablon
├── package.json            # Loyiha paketlari
├── tsconfig.json           # TypeScript sozlamalari
└── vite.config.ts          # Vite yig‘uvchi konfiguratsiyasi
```
