export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  badge?: "NEW" | "TRENDING" | "SALE";
  description: string;
  featured: boolean;
  icon: string;
  gradient: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Aura Velvet Sofa",
    category: "Luxury Sofas",
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviewCount: 312,
    badge: "TRENDING",
    description:
      "Handcrafted with premium Italian velvet and solid oak legs. Designed for those who demand both elegance and comfort in their living space.",
    featured: true,
    icon: "🛋️",
    gradient: "from-purple-900/40 to-blue-900/40",
  },
  {
    id: "2",
    name: "Nova L-Shape Sectional",
    category: "Luxury Sofas",
    price: 3299,
    originalPrice: 3899,
    rating: 4.8,
    reviewCount: 198,
    badge: "NEW",
    description:
      "A statement sectional sofa with modular design and deep-seated comfort. Upholstered in stain-resistant performance fabric.",
    featured: true,
    icon: "🛋️",
    gradient: "from-indigo-900/40 to-purple-900/40",
  },
  {
    id: "3",
    name: 'Horizon 85" OLED TV',
    category: "Smart TVs",
    price: 4199,
    originalPrice: 4999,
    rating: 4.9,
    reviewCount: 547,
    badge: "TRENDING",
    description:
      "Ultra-thin OLED display with infinite contrast and AI-powered picture enhancement. The ultimate cinematic experience for your home.",
    featured: true,
    icon: "📺",
    gradient: "from-blue-900/40 to-cyan-900/40",
  },
  {
    id: "4",
    name: 'Lumex 65" 8K Display',
    category: "Smart TVs",
    price: 2799,
    originalPrice: 3299,
    rating: 4.7,
    reviewCount: 423,
    badge: "SALE",
    description:
      "Crystal-clear 8K resolution with Dolby Vision and Atmos. Smart home integration ready with voice control built in.",
    featured: true,
    icon: "📺",
    gradient: "from-cyan-900/40 to-teal-900/40",
  },
  {
    id: "5",
    name: "CloudRest King Platform Bed",
    category: "Beds",
    price: 1899,
    originalPrice: 2299,
    rating: 4.8,
    reviewCount: 267,
    badge: "NEW",
    description:
      "Low-profile platform bed with integrated USB charging and LED ambient lighting. Crafted from solid walnut with a hand-rubbed finish.",
    featured: true,
    icon: "🛏️",
    gradient: "from-amber-900/40 to-orange-900/40",
  },
  {
    id: "6",
    name: "Serenity Floating Bed",
    category: "Beds",
    price: 2299,
    originalPrice: 2699,
    rating: 4.9,
    reviewCount: 189,
    badge: "TRENDING",
    description:
      "Architecturally stunning floating bed frame with hidden LED strips creating a hovering illusion. The centerpiece of any luxury bedroom.",
    featured: true,
    icon: "🛏️",
    gradient: "from-rose-900/40 to-pink-900/40",
  },
  {
    id: "7",
    name: "Apex Pro 16 Laptop",
    category: "Laptops",
    price: 2199,
    originalPrice: 2599,
    rating: 4.8,
    reviewCount: 634,
    badge: "NEW",
    description:
      "Professional-grade laptop with M3 Ultra chip, 32GB RAM, and an XDR display. Built for creators who refuse to compromise.",
    featured: false,
    icon: "💻",
    gradient: "from-slate-900/60 to-blue-900/40",
  },
  {
    id: "8",
    name: "ZenBook Ultra Slim",
    category: "Laptops",
    price: 1699,
    originalPrice: 1999,
    rating: 4.7,
    reviewCount: 511,
    badge: "SALE",
    description:
      "Impossibly thin at 9.9mm, yet powerfully equipped with the latest processor and all-day battery life.",
    featured: false,
    icon: "💻",
    gradient: "from-gray-900/60 to-slate-900/40",
  },
  {
    id: "9",
    name: "Executive Command Desk",
    category: "Office Furniture",
    price: 1299,
    originalPrice: 1599,
    rating: 4.7,
    reviewCount: 156,
    badge: "NEW",
    description:
      "A commanding executive desk with integrated cable management and wireless charging pad. Your throne for peak productivity.",
    featured: false,
    icon: "🪑",
    gradient: "from-emerald-900/40 to-teal-900/40",
  },
  {
    id: "10",
    name: "ErgoFlow Standing Desk",
    category: "Office Furniture",
    price: 899,
    originalPrice: 1099,
    rating: 4.6,
    reviewCount: 342,
    badge: "SALE",
    description:
      "Electric height-adjustable standing desk with memory presets and anti-collision technology. Transform your work posture.",
    featured: false,
    icon: "🪑",
    gradient: "from-green-900/40 to-emerald-900/40",
  },
  {
    id: "11",
    name: "CoolMax Smart Refrigerator",
    category: "Home Appliances",
    price: 2999,
    originalPrice: 3499,
    rating: 4.8,
    reviewCount: 287,
    badge: "TRENDING",
    description:
      'AI-powered refrigerator with internal cameras, smart inventory tracking, and a 32" touchscreen interface for recipes and ordering.',
    featured: false,
    icon: "🏠",
    gradient: "from-sky-900/40 to-blue-900/40",
  },
  {
    id: "12",
    name: "BrewMaster Coffee System",
    category: "Home Appliances",
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviewCount: 892,
    badge: "NEW",
    description:
      "Barista-grade coffee machine with built-in grinder, milk frother, and app connectivity. Every cup, perfected.",
    featured: false,
    icon: "☕",
    gradient: "from-yellow-900/40 to-amber-900/40",
  },
];

export const categories = [
  {
    name: "Luxury Sofas",
    icon: "🛋️",
    count: 2,
    gradient: "from-purple-600/20 to-blue-600/20",
    border: "border-purple-500/20",
  },
  {
    name: "Smart TVs",
    icon: "📺",
    count: 2,
    gradient: "from-blue-600/20 to-cyan-600/20",
    border: "border-blue-500/20",
  },
  {
    name: "Beds",
    icon: "🛏️",
    count: 2,
    gradient: "from-amber-600/20 to-rose-600/20",
    border: "border-amber-500/20",
  },
  {
    name: "Laptops",
    icon: "💻",
    count: 2,
    gradient: "from-slate-600/20 to-blue-600/20",
    border: "border-slate-500/20",
  },
  {
    name: "Office Furniture",
    icon: "🪑",
    count: 2,
    gradient: "from-emerald-600/20 to-teal-600/20",
    border: "border-emerald-500/20",
  },
  {
    name: "Home Appliances",
    icon: "🏠",
    count: 2,
    gradient: "from-sky-600/20 to-indigo-600/20",
    border: "border-sky-500/20",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sophia Martinez",
    location: "New York, USA",
    rating: 5,
    comment:
      "Absolutely stunning quality. The Aura Velvet Sofa transformed my living room completely. The craftsmanship is on a different level.",
    initials: "SM",
  },
  {
    id: 2,
    name: "James Chen",
    location: "San Francisco, USA",
    rating: 5,
    comment:
      "The Horizon OLED TV is mind-blowing. Picture quality is unreal and the smart features integrate perfectly with my home system.",
    initials: "JC",
  },
  {
    id: 3,
    name: "Amara Okafor",
    location: "London, UK",
    rating: 5,
    comment:
      "Fast delivery, perfect packaging, and the floating bed is exactly as pictured. LUXE truly delivers on its premium promise.",
    initials: "AO",
  },
  {
    id: 4,
    name: "Lucas Fontaine",
    location: "Paris, France",
    rating: 5,
    comment:
      "The BrewMaster makes my morning ritual feel like a five-star hotel experience. Worth every penny. Will be ordering more.",
    initials: "LF",
  },
];
