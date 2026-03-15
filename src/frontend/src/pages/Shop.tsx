import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : [],
  );
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState(initialSearch);
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (search.trim()) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    else list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return list;
  }, [selectedCategories, sort, search]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-2">
            All Products
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Shop
          </h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              data-ocid="shop.search_input"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-blue-400 transition-colors"
            />
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger
                data-ocid="shop.select"
                className="w-48 bg-white/5 border-white/10 text-white"
              >
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-[#12121a] border-white/10 text-white">
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
            <button
              type="button"
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 glass border border-white/10 rounded-xl text-white/70 hover:text-white text-sm transition-colors sm:hidden"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          <aside
            className={`w-56 shrink-0 ${filterOpen ? "block" : "hidden"} sm:block`}
          >
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-center gap-3">
                    <Checkbox
                      id={cat.name}
                      checked={selectedCategories.includes(cat.name)}
                      onCheckedChange={() => toggleCategory(cat.name)}
                      className="border-white/20 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                    <Label
                      htmlFor={cat.name}
                      className="text-white/60 text-sm cursor-pointer hover:text-white transition-colors"
                    >
                      {cat.name}
                    </Label>
                  </div>
                ))}
              </div>
              {selectedCategories.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelectedCategories([])}
                  className="mt-4 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          </aside>

          <div className="flex-1">
            <p className="text-white/40 text-sm mb-6">
              {filtered.length} products
            </p>
            {filtered.length === 0 ? (
              <div data-ocid="shop.empty_state" className="text-center py-20">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-white/50">
                  No products found. Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i + 1}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
