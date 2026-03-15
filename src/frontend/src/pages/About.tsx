import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Our Mission",
    desc: "To curate the world's finest furniture and electronics, making premium living attainable for modern households.",
  },
  {
    title: "Our Vision",
    desc: "A world where every home is a reflection of its owner — smart, beautiful, and built to last.",
  },
  {
    title: "Our Values",
    desc: "Quality over quantity. Innovation with purpose. Sustainability at every step. Service without compromise.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-400 text-sm tracking-widest uppercase mb-3">
          Our Story
        </p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
          Redefining How You
          <br />
          <span className="text-gradient-blue">Live & Work</span>
        </h1>
        <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-2xl">
          LUXE was founded on a simple belief: that premium design and
          cutting-edge technology should be accessible to everyone who values
          quality. We bridge the gap between luxury furniture and smart
          electronics.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 text-center border border-blue-500/10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/50 mb-8">
            Explore our curated collection of premium furniture and electronics.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-500 text-white font-semibold tracking-wide animate-glow-pulse hover:bg-blue-400 transition-all"
          >
            Shop Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
