import { ArrowLeft, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

const STARS = [0, 1, 2, 3, 4];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-4">😕</p>
          <p className="text-white/50 mb-4">Product not found.</p>
          <Link to="/shop" className="text-blue-400 hover:text-blue-300">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  const discount = Math.round(
    (1 - product.price / product.originalPrice) * 100,
  );

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addItem(product);
    toast.success(`${qty}x ${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div
            className={`relative rounded-3xl overflow-hidden h-80 md:h-[480px] bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
          >
            <span className="text-[8rem] filter drop-shadow-2xl">
              {product.icon}
            </span>
            {product.badge && (
              <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {product.badge}
              </span>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              {STARS.map((s) => (
                <Star
                  key={s}
                  size={16}
                  className={
                    s < Math.floor(product.rating)
                      ? "text-amber-400 fill-amber-400"
                      : "text-white/20"
                  }
                />
              ))}
              <span className="text-white/50 text-sm ml-1">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-white">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-lg text-white/30 line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
              <span className="text-sm font-semibold px-2.5 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                -{discount}%
              </span>
            </div>

            <p className="text-white/50 text-base leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center glass-card rounded-xl">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-3 text-white/60 hover:text-white transition-colors"
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value={qty}
                  onChange={(e) =>
                    setQty(Math.max(1, Number.parseInt(e.target.value) || 1))
                  }
                  data-ocid="product.input"
                  className="w-12 text-center bg-transparent text-white font-semibold text-base focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="p-3 text-white/60 hover:text-white transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                data-ocid="product.button"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-500 text-white font-semibold tracking-wide animate-glow-pulse hover:bg-blue-400 transition-all"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>

            <div className="glass-card rounded-xl p-4 text-sm text-white/50">
              Free delivery on orders over $500 · 30-day returns · 2-year
              warranty
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i + 1} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
