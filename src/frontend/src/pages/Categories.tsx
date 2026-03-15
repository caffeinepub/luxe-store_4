import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../data/products";

export default function Categories() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-2">
            All Categories
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
            Categories
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              key={cat.name}
              data-ocid={`categories.item.${i + 1}`}
              className={`glass-card rounded-2xl p-8 border ${cat.border} category-card-hover group`}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-3xl mb-6`}
              >
                {cat.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{cat.name}</h3>
              <p className="text-white/40 text-sm mb-4">
                {cat.count} premium products
              </p>
              <div className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                Shop Now <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
