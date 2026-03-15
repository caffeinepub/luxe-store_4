import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-display font-bold text-white">
                LUXE
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-400" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Where premium furniture meets cutting-edge technology. Elevate
              your living space with designs built for the modern era.
            </p>
          </div>
          <div>
            <h4 className="text-white/80 font-semibold mb-4 text-sm tracking-wider uppercase">
              Shop
            </h4>
            <ul className="space-y-2">
              {[
                "Luxury Sofas",
                "Smart TVs",
                "Beds",
                "Laptops",
                "Office Furniture",
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    to="/shop"
                    className="text-white/40 hover:text-white/80 text-sm transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/80 font-semibold mb-4 text-sm tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Shop", to: "/shop" },
                { label: "Categories", to: "/categories" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/40 hover:text-white/80 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 LUXE Store. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Premium Furniture & Electronics
          </p>
        </div>
      </div>
    </footer>
  );
}
