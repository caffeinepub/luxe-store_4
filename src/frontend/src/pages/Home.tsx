import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Shield,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { categories, products, testimonials } from "../data/products";
import { useScrollReveal } from "../hooks/useScrollReveal";

const STARS = [0, 1, 2, 3, 4];

function useCounter(target: number, trigger: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

const galleryItems = [
  {
    label: "Living Room",
    gradient: "from-purple-900/60 to-blue-900/60",
    icon: "🛋️",
  },
  {
    label: "Home Office",
    gradient: "from-slate-900/60 to-blue-900/60",
    icon: "💻",
  },
  { label: "Bedroom", gradient: "from-amber-900/60 to-rose-900/60", icon: "🛏️" },
  {
    label: "Entertainment",
    gradient: "from-blue-900/60 to-cyan-900/60",
    icon: "📺",
  },
  {
    label: "Kitchen",
    gradient: "from-emerald-900/60 to-teal-900/60",
    icon: "🏠",
  },
  {
    label: "Dining Room",
    gradient: "from-rose-900/60 to-pink-900/60",
    icon: "🍽️",
  },
];

const smartFeatures = [
  {
    icon: "🔗",
    title: "Smart Home Integration",
    desc: "Connect everything seamlessly",
  },
  { icon: "💎", title: "Premium Materials", desc: "Built to last a lifetime" },
  { icon: "✦", title: "Expert Curation", desc: "Handpicked by design experts" },
  {
    icon: "🎨",
    title: "Free Design Consult",
    desc: "Personalized style guidance",
  },
];

export default function Home() {
  useScrollReveal();
  const [statsVisible, setStatsVisible] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setReviewIndex((i) => (i + 1) % testimonials.length),
      4000,
    );
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = products.filter((p) => p.featured);

  const p500 = useCounter(500, statsVisible, 2000);
  const p50k = useCounter(50000, statsVisible, 2000);
  const p48 = useCounter(48, statsVisible, 1500);
  const p5 = useCounter(5, statsVisible, 1000);

  const stats = [
    {
      icon: <Shield size={24} />,
      value: `${p500}+`,
      label: "Premium Products",
      color: "text-blue-400",
    },
    {
      icon: <Star size={24} />,
      value: `${p50k.toLocaleString()}+`,
      label: "Happy Customers",
      color: "text-purple-400",
    },
    {
      icon: <Truck size={24} />,
      value: `${p48}hr`,
      label: "Fast Delivery",
      color: "text-amber-400",
    },
    {
      icon: <Zap size={24} />,
      value: `${p5}-Star`,
      label: "Rated Service",
      color: "text-green-400",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center hero-bg overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[10%] animate-float opacity-20">
            <div className="glass-card rounded-2xl p-4 w-40">
              <div className="text-3xl mb-2">🛋️</div>
              <div className="h-2 bg-white/20 rounded mb-1" />
              <div className="h-2 bg-white/10 rounded w-2/3" />
            </div>
          </div>
          <div
            className="absolute top-1/2 right-[5%] animate-float2 opacity-15"
            style={{ animationDelay: "1s" }}
          >
            <div className="glass-card rounded-2xl p-4 w-36">
              <div className="text-3xl mb-2">📺</div>
              <div className="h-2 bg-white/20 rounded mb-1" />
              <div className="h-2 bg-white/10 rounded w-3/4" />
            </div>
          </div>
          <div
            className="absolute bottom-1/3 right-[15%] animate-float opacity-10"
            style={{ animationDelay: "2s" }}
          >
            <div className="glass-card rounded-2xl p-4 w-32">
              <div className="text-3xl mb-2">💻</div>
              <div className="h-2 bg-white/20 rounded mb-1" />
              <div className="h-2 bg-white/10 rounded w-1/2" />
            </div>
          </div>
          <div className="absolute top-20 left-1/3 w-96 h-96 rounded-full bg-blue-600/5 blur-[100px]" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-purple-600/5 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-400 text-xs font-medium tracking-widest uppercase mb-8">
              <Zap size={12} />
              Premium Furniture & Electronics
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-4">
              Upgrade Your
              <br />
              <span className="text-gradient-blue">Lifestyle</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 mb-4 leading-relaxed">
              Smart Furniture & Technology
            </p>
            <p className="text-base text-white/40 mb-10 max-w-xl leading-relaxed">
              Discover premium furniture and cutting-edge electronics crafted
              for the modern home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-500 text-white font-semibold text-sm tracking-wide animate-glow-pulse hover:bg-blue-400 transition-all glow-blue-hover"
              >
                Explore Products
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/categories"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/20 text-white/80 font-semibold text-sm tracking-wide hover:bg-white/10 transition-all"
              >
                View Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 scroll-reveal">
            <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Browse
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Shop by Category
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <Link
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                key={cat.name}
                data-ocid={`categories.item.${i + 1}`}
                className={`glass-card rounded-2xl p-6 md:p-8 border ${cat.border} category-card-hover scroll-reveal`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-2xl mb-4`}
                >
                  {cat.icon}
                </div>
                <h3 className="text-white font-semibold text-base md:text-lg mb-1">
                  {cat.name}
                </h3>
                <p className="text-white/40 text-sm">{cat.count} products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div className="scroll-reveal">
              <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">
                Popular Picks
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Trending Now
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <div
                key={product.id}
                className="scroll-reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <ProductCard product={product} index={i + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Living */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">
                The LUXE Lifestyle
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Smart Living
                <br />
                <span className="text-gradient-blue">Starts Here</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                We believe your home should reflect who you are. Our curated
                collection blends beautiful design with intelligent technology
                for spaces that inspire.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
              >
                Our Story <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 scroll-reveal">
              {smartFeatures.map((item) => (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-5 group hover:border-blue-500/20 transition-all"
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-black/30" ref={statsRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 md:p-8 text-center scroll-reveal"
              >
                <div className={`flex justify-center mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div
                  className={`text-3xl md:text-4xl font-bold font-display mb-2 ${stat.color}`}
                >
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 scroll-reveal">
            <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              What Our Customers Say
            </h2>
          </div>
          <div data-ocid="reviews.panel" className="relative">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                testimonials[reviewIndex],
                testimonials[(reviewIndex + 1) % testimonials.length],
              ].map((t) => (
                <div
                  key={t.id}
                  className="glass-card rounded-2xl p-7 scroll-reveal"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {STARS.map((s) => (
                      <Star
                        key={s}
                        size={14}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-5 italic">
                    "{t.comment}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-white font-bold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{t.name}</p>
                      <p className="text-white/40 text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={() =>
                  setReviewIndex(
                    (i) => (i - 1 + testimonials.length) % testimonials.length,
                  )
                }
                className="p-2 rounded-full glass border border-white/10 text-white/60 hover:text-white hover:border-blue-500/30 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setReviewIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === reviewIndex ? "bg-blue-400 w-6" : "bg-white/20"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() =>
                  setReviewIndex((i) => (i + 1) % testimonials.length)
                }
                className="p-2 rounded-full glass border border-white/10 text-white/60 hover:text-white hover:border-blue-500/30 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 scroll-reveal">
            <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Inspiration
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Inspired Living
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                className={`relative rounded-2xl overflow-hidden h-48 md:h-64 bg-gradient-to-br ${item.gradient} group cursor-pointer scroll-reveal`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {item.icon}
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold tracking-wider">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center scroll-reveal">
          <div
            className="glass-card rounded-3xl p-10 md:p-14 border border-blue-500/10"
            style={{ boxShadow: "0 0 60px oklch(65% 0.22 250 / 0.08)" }}
          >
            <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Newsletter
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-white/50 text-sm mb-8">
              Get exclusive deals, new arrivals, and design inspiration
              delivered to your inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                (e.target as HTMLFormElement).reset();
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                required
                data-ocid="newsletter.input"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button
                type="submit"
                data-ocid="newsletter.submit_button"
                className="px-7 py-3 rounded-full bg-blue-500 text-white font-semibold text-sm tracking-wide animate-glow-pulse hover:bg-blue-400 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
