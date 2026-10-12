export interface BusinessInfo {
  name: string;
  tagline: string;
  subTagline: string;
  address: string;
  addressFull: string;
  city: string;
  postalCode: string;
  phone: string;
  phoneRaw: string;
  hours: string;
  hoursDetail: string;
  priceRange: string;
  googleRating: number;
  reviewsCount: number;
  instagramUrl: string;
  instagramHandle: string;
  taplinkUrl: string;
  googleMapsUrl: string;
}

export const BUSINESS_DATA: BusinessInfo = {
  name: "Kafeavtomoyka",
  tagline: "Avtomobilingiz yuviladi. Siz esa dam olasiz.",
  subTagline: "Kafeavtomoyka — avtomoyka va kafeni bir joyda birlashtirgan qulay maskan. Mashinangiz bizda, vaqtingiz esa sizniki.",
  address: "Sahibqiron Temur ko‘chasi 241A",
  addressFull: "Sahibqiron Temur ko‘chasi 241A, 150100, Farg‘ona, O‘zbekiston",
  city: "Farg‘ona",
  postalCode: "150100",
  phone: "+998 99 999 06 66",
  phoneRaw: "+998999990666",
  hours: "Har kuni — 02:00 gacha",
  hoursDetail: "Har kuni ochiq. Taxminiy yopilish vaqti: 02:00",
  priceRange: "50 000 – 200 000 UZS / kishi",
  googleRating: 4.4,
  reviewsCount: 7,
  instagramUrl: "https://www.instagram.com/kafeavtomoyka/",
  instagramHandle: "@kafeavtomoyka",
  taplinkUrl: "http://taplink.cc/kafeavtomoyka",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sahibqiron+Temur+ko%CA%BBchasi+241A+Farg%CA%BBona+Kafeavtomoyka"
};

export interface AboutCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: "carwash",
    icon: "🚗",
    title: "Avtomoyka",
    description: "Mashinangizni toza va chiroyli holatda qabul qiling.",
    highlight: "Sifatli ko‘pik va nozik parvarish"
  },
  {
    id: "cafe",
    icon: "☕",
    title: "Qulay kafe",
    description: "Avtomobilingiz yuvilayotgan paytda qulay joyda dam oling.",
    highlight: "Shinam muhit va qulay kreslolar"
  },
  {
    id: "food",
    icon: "🍕",
    title: "Mazali taomlar",
    description: "Pizza, burger, hot-dog va boshqa taomlardan bahramand bo‘ling.",
    highlight: "Issiq, barra va to‘yimli taomlar"
  },
  {
    id: "hours",
    icon: "🌙",
    title: "Kechgacha ishlaymiz",
    description: "Kechki paytda ham tashrif buyurishingiz mumkin.",
    highlight: "Har kuni tungi soat 02:00 gacha"
  }
];

export interface ServiceItem {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "wash",
    number: "01",
    icon: "🚘",
    title: "Avtomobil yuvish",
    description: "Kuzovni sifatli aktiv ko‘pik, yuqori bosimli suv va maxsus vositalar bilan ko‘zgudek toza qilish.",
    features: ["Aktiv ko‘pikli yuvish", "Kuzovni quritish", "Disk va g‘ildiraklarni tozalash"]
  },
  {
    id: "detailing",
    number: "02",
    icon: "🧽",
    title: "Tozalash & Salonga qarov",
    description: "Salondagi chang va dog‘larni tozalash, kimyoviy tozalash, oynalarni artish va xushbo‘ylantirish.",
    features: ["Changyutkich bilan tozalash", "Panel va plastmassalarni jilolash", "Salonga xushbo‘y hid bag‘ishlash"]
  },
  {
    id: "lounge",
    number: "03",
    icon: "☕",
    title: "Kafeda dam olish",
    description: "Mashina kutish zerikarli bo‘lmasligi uchun Wi-Fi, konditsioner va qulay divanlarga ega zamonaviy zal.",
    features: ["Tezkor Wi-Fi", "Yumshoq kreslolar", "Konditsionerli shinam zal"]
  },
  {
    id: "menu",
    number: "04",
    icon: "🍕",
    title: "Ovqat va ichimliklar",
    description: "Issiq pizza, suvli gamburger, mazali hot-dog hamda tetiklashtiruvchi issiq va yaxna ichimliklar.",
    features: ["Pishirilgan yangi pizzalar", "Qarsildoq burger va hot-doglar", "Issiq kofe va yaxna ichimliklar"]
  },
  {
    id: "booking",
    number: "05",
    icon: "📱",
    title: "Telefon orqali bog‘lanish",
    description: "Navbatsiz kelish yoki taomlarni oldindan tayyorlatib qo‘yish uchun to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling.",
    features: ["+998 99 999 06 66", "Oldindan navbat olish", "Tezkor javob berish"]
  }
];

export interface MenuCategoryItem {
  id: string;
  category: "pizza" | "hotdog" | "burger" | "drinks" | "other";
  categoryLabel: string;
  icon: string;
  title: string;
  description: string;
  image: string;
}

export const MENU_CATEGORIES: MenuCategoryItem[] = [
  {
    id: "cat-pizza",
    category: "pizza",
    categoryLabel: "Pizza",
    icon: "🍕",
    title: "Mazali Pizzalar",
    description: "Issiq, yangi pishirilgan xamir va mo‘l pishloqli nozik pizza navlari.",
    image: "/src/assets/images/food_gourmet_pizza_1790825374679.jpg"
  },
  {
    id: "cat-burger",
    category: "burger",
    categoryLabel: "Gamburger",
    icon: "🍔",
    title: "Suvli Gamburgerlar",
    description: "Yumshoq briosh noni, qovurilgan suvli kotlet va maxsus mualliflik sousi bilan.",
    image: "/src/assets/images/food_craft_burger_1790825385727.jpg"
  },
  {
    id: "cat-hotdog",
    category: "hotdog",
    categoryLabel: "Hot-dog",
    icon: "🌭",
    title: "Qarsildoq Hot-doglar",
    description: "Maxsus sosiska, qarsildoq sabzavotlar va mazali sousli qulay tezkor taom.",
    image: "/src/assets/images/food_premium_hotdog_1790825399773.jpg"
  },
  {
    id: "cat-drinks",
    category: "drinks",
    categoryLabel: "Ichimliklar",
    icon: "🥤",
    title: "Ichimliklar & Kofe",
    description: "Xushbo‘y espresso, qahva turlari, choylar hamda sovitilgan tetiklantiruvchi ichimliklar.",
    image: "/src/assets/images/drinks_refreshment_1790825410636.jpg"
  },
  {
    id: "cat-other",
    category: "other",
    categoryLabel: "Boshqa taomlar",
    icon: "🍽️",
    title: "Boshqa Taomlar & Gazaklar",
    description: "Qovurilgan kartoshka fri, yengil gazaklar va kafemizning maxsus takliflari.",
    image: "/src/assets/images/cafe_lounge_interior_1790825363612.jpg"
  }
];

export interface GalleryItem {
  id: string;
  category: "all" | "carwash" | "cafe" | "food" | "pizza" | "burger" | "hotdog";
  title: string;
  categoryLabel: string;
  image: string;
  aspect: "landscape" | "portrait" | "square";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "carwash",
    title: "Premium avtomobil yuvish va detailing",
    categoryLabel: "Avtomoyka",
    image: "/src/assets/images/carwash_detailing_1790825351287.jpg",
    aspect: "landscape"
  },
  {
    id: "g2",
    category: "cafe",
    title: "Qulay va shinam kafe dam olish zali",
    categoryLabel: "Kafe",
    image: "/src/assets/images/cafe_lounge_interior_1790825363612.jpg",
    aspect: "landscape"
  },
  {
    id: "g3",
    category: "pizza",
    title: "Issiq pishirilgan mazali pizza",
    categoryLabel: "Pizza",
    image: "/src/assets/images/food_gourmet_pizza_1790825374679.jpg",
    aspect: "landscape"
  },
  {
    id: "g4",
    category: "burger",
    title: "Gamburger va maxsus qarsildoq fri",
    categoryLabel: "Burger",
    image: "/src/assets/images/food_craft_burger_1790825385727.jpg",
    aspect: "landscape"
  },
  {
    id: "g5",
    category: "hotdog",
    title: "Maxsus sousli qarsildoq hot-dog",
    categoryLabel: "Hot-dog",
    image: "/src/assets/images/food_premium_hotdog_1790825399773.jpg",
    aspect: "landscape"
  },
  {
    id: "g6",
    category: "cafe",
    title: "Tungi fasad va zamonaviy majmua",
    categoryLabel: "Kafe",
    image: "/src/assets/images/hero_carwash_cafe_1790825338888.jpg",
    aspect: "landscape"
  }
];

export const REVIEWS_DATA = {
  averageRating: 4.4,
  totalReviews: 7,
  platform: "Google",
  quote: "Juda qulay va shinam joy. Taomlari ham mazali.",
  features: [
    "Mashinangiz toza yuviladi",
    "Kafeda kutish juda maroqli",
    "Xushmuomala xodimlar",
    "Tungi 02:00 gacha xizmat"
  ]
};
