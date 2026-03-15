import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";

const STARS = [0, 1, 2, 3, 4];

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 1 }: Props) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  const badgeColors: Record<string, string> = {
    NEW: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    TRENDING: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    SALE: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  };

  const discount = Math.round(
    (1 - product.price / product.originalPrice) * 100,
  );

  return (
    <Link
      to={`/product/${product.id}`}
      data-ocid={`products.item.${index}`}
      className="block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="glass-card rounded-2xl overflow-hidden product-card-hover cursor-pointer">
        {/* Product Image Placeholder */}
        <div
          className={`relative h-52 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
        >
          <span className="text-6xl filter drop-shadow-lg">{product.icon}</span>
          {product.badge && (
            <span
              className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColors[product.badge]}`}
            >
              {product.badge}
            </span>
          )}
          <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
            -{discount}%
          </span>
          {/* Add to Cart overlay */}
          <div
            className={`absolute inset-0 bg-black/40 flex items-end justify-center pb-4 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          >
            <button
              type="button"
              onClick={handleAddToCart}
              data-ocid={`products.card.button.${index}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500 text-white text-sm font-semibold glow-blue hover:bg-blue-400 transition-all"
            >
              <Plus size={16} />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <p className="text-xs text-blue-400/80 font-medium tracking-wider uppercase mb-1">
            {product.category}
          </p>
          <h3 className="text-white font-semibold text-base leading-snug mb-3 line-clamp-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            {STARS.map((s) => (
              <Star
                key={s}
                size={12}
                className={
                  s < Math.floor(product.rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-white/20"
                }
              />
            ))}
            <span className="text-xs text-white/40 ml-1">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-sm text-white/30 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
