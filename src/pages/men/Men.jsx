import React, { useState, useEffect } from "react";
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
  Truck
} from "lucide-react";

// Mock Data for Men's Collection
import { CATEGORIES, PRODUCTS } from './Men';

// const PRODUCTS = [
//   {
//     id: 1,
//     name: "Oversized Wool Trench Coat",
//     category: "Outerwear",
//     price: "$480",
//     oldPrice: "$560",
//     tag: "Best Seller",
//     image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
//     hoverImage: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=800",
//     colors: ["#1C1917", "#44403C", "#78716C"],
//     sizes: ["S", "M", "L", "XL"]
//   },
//   {
//     id: 2,
//     name: "Architectural Leather Bomber",
//     category: "Outerwear",
//     price: "$620",
//     tag: "New Arrival",
//     image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800",
//     hoverImage: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=800",
//     colors: ["#09090B", "#27272A"],
//     sizes: ["M", "L", "XL"]
//   },
//   {
//     id: 3,
//     name: "Monochrome Tailored Blazer",
//     category: "Tailoring",
//     price: "$390",
//     oldPrice: "$450",
//     tag: "Limited",
//     image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
//     hoverImage: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=800",
//     colors: ["#111827", "#374151"],
//     sizes: ["S", "M", "L"]
//   },
//   {
//     id: 4,
//     name: "Heavyweight Heavy-Rib Hoodie",
//     category: "Streetwear",
//     price: "$180",
//     tag: "Essential",
//     image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
//     hoverImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=800",
//     colors: ["#18181B", "#D4D4D8", "#A1A1AA"],
//     sizes: ["S", "M", "L", "XL", "XXL"]
//   },
//   {
//     id: 5,
//     name: "Relaxed Pleated Trousers",
//     category: "Tailoring",
//     price: "$240",
//     tag: "Popular",
//     image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=800",
//     hoverImage: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800",
//     colors: ["#1C1917", "#52525B"],
//     sizes: ["30", "32", "34", "36"]
//   },
//   {
//     id: 6,
//     name: "Merino Wool Turtle Neck",
//     category: "Knitwear",
//     price: "$210",
//     tag: "Winter Core",
//     image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
//     hoverImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800",
//     colors: ["#0F172A", "#475569", "#94A3B8"],
//     sizes: ["S", "M", "L", "XL"]
//   },
//   {
//     id: 7,
//     name: "Minimal Utility Overshirt",
//     category: "Streetwear",
//     price: "$260",
//     tag: "New",
//     image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
//     hoverImage: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800",
//     colors: ["#262626", "#525252"],
//     sizes: ["M", "L", "XL"]
//   },
//   {
//     id: 8,
//     name: "Sculptured Leather Duffel Bag",
//     category: "Accessories",
//     price: "$510",
//     tag: "Iconic",
//     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
//     hoverImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
//     colors: ["#000000", "#3F3F46"],
//     sizes: ["One Size"]
//   }
// ];

// const LOOKBOOK_ITEMS = [
//   {
//     title: "Urban Minimalist",
//     subtitle: "Edition 01 / Winter 26",
//     img: "https://images.unsplash.com/photo-1490578474895-699bc4e2cf59?auto=format&fit=crop&q=80&w=1200",
//     itemCount: "4 Pieces"
//   },
//   {
//     title: "Architectural Tailoring",
//     subtitle: "Edition 02 / Formal Tech",
//     img: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=80&w=1200",
//     itemCount: "3 Pieces"
//   },
//   {
//     title: "Off-Duty Monolith",
//     subtitle: "Edition 03 / Streetwear",
//     img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1200",
//     itemCount: "5 Pieces"
//   }
// ];

export default function Men() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartCount, setCartCount] = useState(2);
  const [wishlist, setWishlist] = useState([1, 4]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  // Handle scroll header transformation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#111111] font-['Inter',sans-serif] selection:bg-black selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[2000] bg-black text-white px-5 py-3 rounded-full shadow-2xl text-xs font-semibold tracking-wider uppercase flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 5. HERO LANDING SECTION */}
      <section id="home" className="relative w-full h-[92vh] flex items-center justify-center px-6 lg:px-20 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000"
            alt="OFFGRID Men's Collection"
            className="w-full h-full object-cover object-top filter brightness-90 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 text-white pt-16">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Autumn / Winter 2026 Men's Drop
          </span>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-['Cormorant_Garamond',serif] font-bold tracking-tight leading-[1.02]">
            RAW ARCHITECTURE & TAILORING
          </h1>

          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Designed for the modern vanguard. Sculptural coats, heavyweight streetwear, and uncompromised silhouettes crafted with precision.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#products"
              className="bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-all duration-300 cursor-pointer shadow-xl no-underline"
            >
              Shop Men's Collection
            </a>
            <a
              href="#lookbook"
              className="border border-white text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-pointer no-underline"
            >
              View Lookbook
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] flex flex-col items-center gap-2">
          <span>Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent animate-bounce" />
        </div>
      </section>

      {/* 6. PERKS BANNER */}
      <section className="bg-neutral-900 text-white py-6 border-b border-neutral-800">
        <div className="max-w-[1500px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <Truck className="w-5 h-5 text-neutral-400" />
            <span className="text-xs font-semibold tracking-wider uppercase">Express Global Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-neutral-400" />
            <span className="text-xs font-semibold tracking-wider uppercase">Authentic Italian Fabrics</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <RefreshCw className="w-5 h-5 text-neutral-400" />
            <span className="text-xs font-semibold tracking-wider uppercase">30-Day Complimentary Returns</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 text-neutral-400" />
            <span className="text-xs font-semibold tracking-wider uppercase">Exclusive FW/26 Packaging</span>
          </div>
        </div>
      </section>

      {/* 7. CATEGORY FILTER & PRODUCTS SECTION */}
      <section id="products" className="max-w-[1500px] mx-auto px-6 lg:px-12 py-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-8 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">
              Curated Selection
            </span>
            <h2 className="text-3xl sm:text-5xl font-['Cormorant_Garamond',serif] font-bold tracking-tight mt-2">
              MEN'S ESSENTIAL CATALOGUE
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-6 md:mt-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
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

      {/* 8. EDITORIAL LOOKBOOK GALLERY SECTION */}
      <section id="lookbook" className="bg-neutral-900 text-white py-24 px-6 lg:px-12">
        <div className="max-w-[1500px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">
                FW/26 Editorial
              </span>
              <h2 className="text-4xl sm:text-6xl font-['Cormorant_Garamond',serif] font-bold tracking-tight mt-2">
                THE MEN'S LOOKBOOK
              </h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-md mt-4 md:mt-0 font-light leading-relaxed">
              Explore curated outfits styled for urban landscapes, cold climates, and high-stakes formal aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LOOKBOOK_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-[520px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
                    {item.subtitle}
                  </span>
                  <h3 className="text-3xl font-['Cormorant_Garamond',serif] font-bold mb-4">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs uppercase font-bold tracking-widest border-t border-white/20 pt-4">
                    <span>{item.itemCount}</span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                      Shop Look <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-white text-black rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-[400px] md:h-[500px] bg-neutral-100">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-neutral-400">
                  {quickViewProduct.category}
                </span>
                <h2 className="text-3xl font-['Cormorant_Garamond',serif] font-bold mt-1">
                  {quickViewProduct.name}
                </h2>
                <p className="text-xl font-bold mt-2">{quickViewProduct.price}</p>
                <p className="text-xs text-neutral-500 mt-4 leading-relaxed">
                  Engineered with premium Japanese cotton and structured shoulder cuts. Designed for maximum versatility in cold urban environments.
                </p>

                {/* Size Selector */}
                <div className="mt-6">
                  <label className="text-xs font-bold uppercase tracking-wider block mb-2">
                    Select Size
                  </label>
                  <div className="flex gap-2">
                    {quickViewProduct.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`w-10 h-10 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                          selectedSize === s
                            ? "bg-black text-white border-black"
                            : "border-neutral-300 hover:border-black"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleAddToCart(quickViewProduct)}
                  className="w-full bg-black text-white py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-neutral-800 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Add To Bag
                </button>
                <p className="text-[10px] text-center text-neutral-400 uppercase tracking-wider">
                  Free Shipping & Returns Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 10. LUXURY GEN-Z FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12 px-6 lg:px-20 border-t border-neutral-800">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-bold tracking-[0.25em] uppercase">
              OFFGRID
            </h2>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Architectural Menswear & Luxury Vanguard Atelier. Redefine your style standard.
            </p>
          </div>

          {/* Nav Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-neutral-400">
              Men's Departments
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {["Outerwear & Coats", "Tailored Suits", "Knitwear & Sweaters", "Streetwear & Hoodies", "Footwear & Accessories"].map(
                (item) => (
                  <li key={item}>
                    <a href="#products" className="hover:text-white transition-colors no-underline">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Concierge */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-neutral-400">
              Client Service
            </h4>
            <div className="space-y-2 text-xs text-neutral-300">
              <p>concierge@offgrid.studio</p>
              <p>+91 (800) 990-OFFGRID</p>
              <p className="text-neutral-500 pt-2">Paris / Tokyo / New Delhi</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-neutral-400">
              Private Access
            </h4>
            <p className="text-xs text-neutral-400">
              Receive early invitations to limited Men's drops and editorial releases.
            </p>
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-full p-1.5">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-transparent px-4 py-2 text-xs text-white focus:outline-none placeholder:text-neutral-600"
              />
              <button
                onClick={() => triggerToast("Subscribed to OFFGRID Private Access")}
                className="bg-white text-black p-2.5 rounded-full hover:bg-neutral-200 transition-all cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-[1500px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 tracking-wider">
          <p>© {new Date().getFullYear()} OFFGRID MENSWEAR INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-neutral-300 no-underline">Privacy Policy</a>
            <a href="#terms" className="hover:text-neutral-300 no-underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}