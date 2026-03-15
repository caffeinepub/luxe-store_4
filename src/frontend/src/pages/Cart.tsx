import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalPrice,
    totalItems,
    clearCart,
  } = useCart();

  const shipping = totalPrice >= 500 ? 0 : 49;
  const total = totalPrice + shipping;

  const handleCheckout = () => {
    toast.success(
      "Order placed successfully! Thank you for shopping with LUXE.",
    );
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-6 flex items-center justify-center">
        <div data-ocid="cart.empty_state" className="text-center">
          <ShoppingBag size={64} className="text-white/20 mx-auto mb-6" />
          <h2 className="text-2xl font-display font-bold text-white mb-3">
            Your cart is empty
          </h2>
          <p className="text-white/40 mb-8">
            Discover our premium collection and find something you love.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-500 text-white font-semibold text-sm animate-glow-pulse hover:bg-blue-400 transition-all"
          >
            Start Shopping <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-display font-bold text-white">
            Your Cart
          </h1>
          <p className="text-white/40 text-sm mt-1">
            {totalItems} item{totalItems !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, idx) => (
              <div
                key={item.product.id}
                data-ocid={`cart.item.${idx + 1}`}
                className="glass-card rounded-2xl p-5 flex gap-5"
              >
                <div
                  className={`w-20 h-20 rounded-xl bg-gradient-to-br ${item.product.gradient} flex items-center justify-center text-3xl shrink-0`}
                >
                  {item.product.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-blue-400 mb-0.5">
                    {item.product.category}
                  </p>
                  <h3 className="text-white font-semibold text-sm md:text-base truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-white/60 font-bold mt-1">
                    ${item.product.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <button
                    type="button"
                    onClick={() => removeItem(item.product.id)}
                    data-ocid={`cart.delete_button.${idx + 1}`}
                    className="text-white/30 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                  <div className="flex items-center glass rounded-lg">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="px-2.5 py-1.5 text-white/60 hover:text-white transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-white font-semibold text-sm w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="px-2.5 py-1.5 text-white/60 hover:text-white transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <h3 className="text-white font-bold text-lg mb-6">
                Order Summary
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Subtotal</span>
                  <span className="text-white">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Shipping</span>
                  <span
                    className={shipping === 0 ? "text-green-400" : "text-white"}
                  >
                    {shipping === 0 ? "Free" : `$${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-white/30">
                    Free shipping on orders over $500
                  </p>
                )}
                <div className="border-t border-white/10 pt-3 flex justify-between">
                  <span className="text-white font-semibold">Total</span>
                  <span className="text-white font-bold text-lg">
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                data-ocid="cart.submit_button"
                className="w-full py-3.5 rounded-xl bg-blue-500 text-white font-semibold tracking-wide animate-glow-pulse hover:bg-blue-400 transition-all"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                className="block text-center text-white/40 hover:text-white/70 text-sm mt-4 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
