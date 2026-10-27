import React, { useState } from 'react';
import {
  ShoppingBag,
  X,
  Plus,
  ArrowRight,
  Eye,
  Heart,
  ChevronRight,
  Check,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  Truck,
  Filter,
  SlidersHorizontal,
  ArrowUpRight
} from 'lucide-react';

import { WOMEN_PRODUCTS, WOMEN_CATEGORIES, WOMEN_LOOKBOOK } from './WomenData.js';

export default function WomenPage({ brand = "OFFGRID" }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartCount, setCartCount] = useState(2);
  const [wishlist, setWishlist] = useState([1, 4]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
      triggerToast("Removed from wishlist");
    } else {
      setWishlist([...wishlist, id]);
      triggerToast("Added to wishlist");
    }
  };

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
    triggerToast(`Added ${product.name} to your bag`);
    setQuickViewProduct(null);
  };

  const filteredProducts =
    activeCategory === "All"
      ? WOMEN_PRODUCTS
      : WOMEN_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Inter',sans-serif] selection:bg-neutral-200 selection:text-black pb-24">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[2000] bg-black text-white px-6 py-3.5 rounded-2xl shadow-2xl text-xs font-semibold tracking-wider uppercase flex items-center gap-2.5 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

     

      {/* 3. Product Grid - Exactly 4 Compact Cards in 1 Row on Desktop */}
      <section id="products" className="max-w-[1500px] mx-auto  lg:px-12 py-15">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-8 mb-12">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">
                    Curated Selection
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-['Cormorant_Garamond',serif] font-bold tracking-tight mt-2">
                    WOMEN'S ESSENTIAL CATALOGUE
                  </h2>
                </div>
      
                {/* Category Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-6 md:mt-0 scrollbar-none">
                  {WOMEN_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                        activeCategory === cat
                          ? "bg-black text-white shadow-md"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
      
              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative flex flex-col justify-between bg-white border border-neutral-100 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Product Image Wrapper */}
                    <div className="relative w-full h-[420px] bg-neutral-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-top transition-opacity duration-700 group-hover:opacity-0"
                      />
                      <img
                        src={product.hoverImage}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-700 group-hover:opacity-100 transform group-hover:scale-105"
                      />
      
                      {/* Badge */}
                      {product.tag && (
                        <span className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                          {product.tag}
                        </span>
                      )}
      
                      {/* Wishlist Button */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 backdrop-blur-md shadow-md text-black hover:bg-black hover:text-white transition-all cursor-pointer"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            wishlist.includes(product.id) ? "fill-red-600 text-red-600" : ""
                          }`}
                        />
                      </button>
      
                      {/* Quick Action Overlay */}
                      <div className="absolute inset-x-4 bottom-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <button
                          onClick={() => setQuickViewProduct(product)}
                          className="flex-1 bg-white/90 backdrop-blur-md text-black py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all cursor-pointer shadow-lg"
                        >
                          <Eye className="w-3.5 h-3.5" /> Quick View
                        </button>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="p-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition-all cursor-pointer shadow-lg"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
      
                    {/* Product Info */}
                    <div className="p-5 flex flex-col gap-2">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                          {product.category}
                        </span>
                        <div className="flex gap-1">
                          {product.colors.map((c, i) => (
                            <span
                              key={i}
                              className="w-2.5 h-2.5 rounded-full border border-neutral-300"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                      </div>
      
                      <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-neutral-900 group-hover:text-black">
                        {product.name}
                      </h3>
      
                      <div className="flex items-center gap-3 pt-1">
                        <span className="text-sm font-bold text-black">{product.price}</span>
                        {product.oldPrice && (
                          <span className="text-xs text-neutral-400 line-through">
                            {product.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

      {/* 6. Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white border border-neutral-200 rounded-3xl max-w-3xl w-full overflow-hidden relative grid grid-cols-1 md:grid-cols-2 shadow-2xl">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="h-[400px] md:h-full bg-neutral-100">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-8 space-y-6 flex flex-col justify-between text-neutral-900">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-600 font-bold">
                  {quickViewProduct.category}
                </span>
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold">
                  {quickViewProduct.name}
                </h3>
                <div className="flex items-center gap-3">
                  <p className="text-2xl font-light text-neutral-900 font-mono">{quickViewProduct.price}</p>
                  {quickViewProduct.oldPrice && (
                    <span className="text-sm text-neutral-400 line-through font-mono">{quickViewProduct.oldPrice}</span>
                  )}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  {quickViewProduct.description}
                </p>

                {/* Size Selector */}
                <div className="pt-2">
                  <label className="text-[11px] uppercase tracking-widest text-neutral-700 font-semibold block mb-2">
                    Select Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          selectedSize === s
                            ? "bg-black text-white border-black"
                            : "border-neutral-300 text-neutral-700 hover:border-black"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(quickViewProduct)}
                className="w-full bg-black text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <ShoppingBag size={16} /> Add {selectedSize ? `(${selectedSize})` : ''} To Bag
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}