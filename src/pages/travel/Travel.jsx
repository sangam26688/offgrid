import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  Eye, 
  Check, 
  Filter, 
  Compass, 
  Plane, 
  ShieldCheck, 
  ChevronRight, 
  X,
  Lock,
  Globe,
  ArrowUpRight,
  SlidersHorizontal
} from 'lucide-react';

import { TRAVEL_DATA, TRAVEL_CATEGORIES } from './TravelData.js';

export default function TravelPage({ brand = "OFFGRID" }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  // Filtering Logic
  const filteredProducts = TRAVEL_DATA.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(prev => prev.filter(i => i !== id));
      triggerToast("Removed from wishlist");
    } else {
      setWishlist(prev => [...prev, id]);
      triggerToast("Added to wishlist");
    }
  };

  const handleAddToCart = (item) => {
    triggerToast(`Added ${item.name} to your bag`);
    setQuickViewProduct(null);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Inter',sans-serif] selection:bg-neutral-200 selection:text-black pb-24">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[2000] bg-black text-white px-6 py-3.5 rounded-2xl shadow-2xl text-xs font-semibold tracking-wider uppercase flex items-center gap-2.5 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Travel Hero Banner (Cinematic Style matching Men/Women/Gifts/Kids/Jewelry/Decor/Beauty/NewIn) */}
      <section className="relative w-full h-[92vh] flex items-center justify-center px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2000"
            alt="OFFGRID Nomad & Voyager Atelier"
            className="w-full h-full object-cover object-center filter brightness-90 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 text-white pt-16">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase bg-white/10 border border-white/25 backdrop-blur-md px-5 py-2 rounded-full text-white">
            <Plane className="w-3.5 h-3.5 text-amber-300" /> {brand} Nomad & Voyager Atelier
          </span>

          <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02]">
            THE ART OF TRAVEL & LUGGAGE
          </h1>

          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Engineered for the modern global nomad. Aircraft-grade aluminum suitcases, Italian leather weekenders, and uncompromising in-flight essentials.
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] flex flex-col items-center gap-2">
          <span>Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent animate-bounce" />
        </div>
      </section>

      {/* 2. Interactive Finder Toolbar (Gifts Style Dropdown Filter) */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white/95 border border-neutral-200 backdrop-blur-xl rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={18} className="text-neutral-500" />
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-800">Refine Your Travel Gear</span>
            </div>
            <span className="text-xs text-neutral-500 font-medium">{filteredProducts.length} Travel Pieces Found</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500 mb-2 flex items-center gap-1">
                <Filter size={12} /> Travel Category
              </label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black transition-all cursor-pointer"
              >
                {TRAVEL_CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat === 'All' ? 'All Travel Categories' : cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Grid - Exactly 4 Compact Cards in 1 Row on Desktop */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-12 pt-16 pb-24">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 border border-neutral-200 rounded-2xl bg-neutral-50">
            <Compass size={48} className="mx-auto text-neutral-400 mb-4" />
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-neutral-800">No travel gear found</h3>
            <p className="text-xs text-neutral-500 mt-2">Try resetting your filter to explore our full voyage selection.</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-6 px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.map((item) => (
              <div 
                key={item.id}
                onClick={() => { setQuickViewProduct(item); setSelectedColor(item.colors[0]); }}
                className="group bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-400 transition-all duration-500 flex flex-col justify-between shadow-sm cursor-pointer"
              >
                <div>
                  {/* Image Container with Normal + Hover Effect & Compact Aspect Ratio */}
                  <div className="relative aspect-square overflow-hidden bg-neutral-100">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                    />
                    {item.hoverImage && (
                      <img 
                        src={item.hoverImage} 
                        alt={item.name} 
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 transform group-hover:scale-105"
                      />
                    )}
                    
                    <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-md border border-neutral-200 px-2.5 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-widest text-neutral-900 shadow-sm">
                      {item.tag}
                    </div>

                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(item.id); }}
                      className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center text-neutral-900 hover:bg-black hover:text-white transition-all cursor-pointer"
                    >
                      <Heart size={14} className={wishlist.includes(item.id) ? "fill-red-500 text-red-500" : ""} />
                    </button>

                    <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="w-full bg-black/90 backdrop-blur-md text-white py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-lg">
                        <Eye size={12} /> Quick View
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-500 block">{item.category}</span>
                        <h3 className="font-['Cormorant_Garamond',serif] text-lg font-semibold text-neutral-900 tracking-wide mt-0.5">{item.name}</h3>
                      </div>
                      <span className="text-sm font-light text-amber-600 font-mono">${item.price}</span>
                    </div>
                    <p className="text-[11px] text-neutral-600 line-clamp-2 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-4 py-3 border-t border-neutral-200 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                  <span className="text-[10px] text-amber-600 flex items-center gap-1">
                    <ShieldCheck size={12} /> Lifetime Warranty
                  </span>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 hover:text-amber-600 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Acquire <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Luxury Travel Features Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-amber-600 shadow-sm">
              <Lock size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">TSA Integrated Security</h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Every aluminum suitcase is equipped with recessed TSA-approved combination locks for seamless international customs clearance.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-amber-600 shadow-sm">
              <Globe size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Global Recovery Tag</h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Built-in unique identification serial allowing finders to securely connect with you if your luggage is misplaced anywhere worldwide.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-amber-600 shadow-sm">
              <Compass size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Aircraft-Grade Durability</h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Tested rigorously against heavy impact, temperature shifts, and rough tarmac handling to guarantee lifelong performance.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Quick View Modal */}
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
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-8 space-y-6 flex flex-col justify-between text-neutral-900">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-600 font-bold">{quickViewProduct.tag}</span>
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold">{quickViewProduct.name}</h3>
                <p className="text-2xl font-light text-neutral-900 font-mono">${quickViewProduct.price}</p>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">{quickViewProduct.description}</p>

                {/* Color Selector */}
                <div className="pt-2">
                  <label className="text-[11px] uppercase tracking-widest text-neutral-700 font-semibold block mb-2">Select Finish</label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.colors.map(col => (
                      <button 
                        key={col} 
                        onClick={() => setSelectedColor(col)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          selectedColor === col ? 'bg-black text-white border-black' : 'border-neutral-300 text-neutral-700 hover:border-black'
                        }`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="pt-2">
                  <h4 className="text-[11px] uppercase tracking-widest text-neutral-700 font-semibold mb-1.5">Key Specifications:</h4>
                  <ul className="space-y-1 text-xs text-neutral-600">
                    {quickViewProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={12} className="text-amber-600" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => handleAddToCart(quickViewProduct)}
                className="w-full bg-black text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <ShoppingBag size={16} /> Add {selectedColor ? `(${selectedColor})` : ''} To Bag
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}