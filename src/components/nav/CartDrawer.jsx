import React from "react";
import { X, Trash2, ShoppingBag } from "lucide-react";

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
}) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0,
  );

  return (
    <div className="fixed inset-0 z-[2000] flex justify-end bg-black/60 backdrop-blur-md transition-opacity">
      <div className="h-full w-full sm:w-[420px] bg-white text-neutral-900 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
        <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} />
            <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold">
              Your Shopping Bag
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 my-6 space-y-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 text-neutral-400 text-xs uppercase tracking-wider">
              Your bag is currently empty
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-center border-b border-neutral-100 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-20 object-cover rounded-lg bg-neutral-100"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-xs">{item.name}</h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    ${item.price} x {item.quantity || 1}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-neutral-400 hover:text-red-600 cursor-pointer p-2"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-neutral-200 pt-4 space-y-4">
          <div className="flex justify-between text-sm font-bold">
            <span>Subtotal</span>
            <span>${totalPrice}</span>
          </div>
          <button
            onClick={() => alert("Proceeding to secure checkout...")}
            className="w-full bg-black text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all cursor-pointer shadow-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
