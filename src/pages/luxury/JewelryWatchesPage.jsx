import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  Eye, 
  Check, 
  Filter, 
  Watch, 
  Gem, 
  ShieldCheck, 
  ChevronRight, 
  X,
  Crown,
  ArrowUpRight
} from 'lucide-react';

const JEWELRY_WATCHES_DATA = [
  {
    id: 'jw1',
    name: 'Monolith Chronograph Automatic',
    category: 'Timepieces',
    material: '18k Yellow Gold & Sapphire Crystal',
    price: 4800,
    tag: 'Masterpiece',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1000',
    description: 'Swiss-automatic movement housed in an 18k yellow-gold case with an anti-reflective sapphire crystal dial and black alligator leather strap.',
    specifications: ['Swiss Automatic Caliber', '50m Water Resistance', 'Alligator Leather Strap', '42mm Case Diameter'],
    finishes: ['Yellow Gold', 'Rose Gold', 'Stealth Steel']
  },
  {
    id: 'jw2',
    name: 'Eternity Diamond Tennis Bracelet',
    category: 'Fine Jewelry',
    material: 'Platinum & VVS Diamonds',
    price: 6500,
    tag: 'High Jewelry',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000',
    description: 'Hand-set flawless VVS conflict-free diamonds totaling 5.2 carats, mounted securely in solid platinum with custom box clasp.',
    specifications: ['5.2 Total Carat Weight', 'VVS1 Clarity, D Color', 'Solid Platinum Setting', 'Secure Dual-Lock Clasp'],
    finishes: ['Platinum', '18k White Gold']
  },
  {
    id: 'jw3',
    name: 'Atelier Minimalist Signet Ring',
    category: 'Rings',
    material: 'Solid 18k Gold',
    price: 1250,
    tag: 'Bestseller',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1000',
    description: 'Architectural flat-top signet ring featuring brushed matte gold finish and polished bevel edges. Custom engraving available.',
    specifications: ['Solid 18k Yellow Gold', 'Brushed Matte Finish', 'Hand-Polished Edges', 'Comfort Fit Interior'],
    finishes: ['Yellow Gold', 'White Gold']
  },
  {
    id: 'jw4',
    name: 'Celestial Diamond Pendant Necklace',
    category: 'Necklaces',
    material: '18k White Gold & Solitaire Diamond',
    price: 2900,
    tag: 'Exquisite',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
    description: 'Floating 1.0 carat solitaire diamond suspended on an ultra-fine 18k white gold cable chain with adjustable length.',
    specifications: ['1.0 Carat Solitaire', '18k White Gold Chain', 'Adjustable 16-18 Inch Length', 'GIA Certified Diamond'],
    finishes: ['White Gold', 'Yellow Gold']
  },
  {
    id: 'jw5',
    name: 'Vanguard Skeleton Tourbillon',
    category: 'Timepieces',
    material: 'Titanium & Skeleton Dial',
    price: 9800,
    tag: 'Limited Edition',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    description: 'Open-worked skeleton dial revealing intricate hand-wound mechanical complications, crafted in lightweight aerospace grade titanium.',
    specifications: ['Manual-Winding Tourbillon', 'Aerospace Titanium Case', 'Sapphire Display Back', '72-Hour Power Reserve'],
    finishes: ['Titanium Matte', 'Black DLC']
  },
  {
    id: 'jw6',
    name: 'Architectural Geometric Cufflinks',
    category: 'Accessories',
    material: 'Sterling Silver & Onyx Inlay',
    price: 450,
    tag: 'Classic',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
    description: 'Sleek geometric cufflinks crafted from heavy 925 sterling silver accented with genuine black polished onyx stone inlay.',
    specifications: ['925 Sterling Silver', 'Natural Black Onyx', 'Bullet-Back Closure', 'Hand-Engraved Logo'],
    finishes: ['Silver & Onyx', 'Gold & Mother of Pearl']
  }
];

export default function JewelryWatchesPage({ brand = "OFFGRID" }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(2);
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedFinish, setSelectedFinish] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const filteredProducts = JEWELRY_WATCHES_DATA.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(i => i !== id));
      triggerToast("Removed from wishlist");
    } else {
      setWishlist([...wishlist, id]);
      triggerToast("Added to wishlist");
    }
  };

  const handleAddToCart = (item) => {
    setCartCount(prev => prev + 1);
    triggerToast(`Added ${item.name} to your bag`);
    setQuickViewProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-['Inter',sans-serif] selection:bg-neutral-800 selection:text-white pb-24">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[2000] bg-white text-black px-6 py-3.5 rounded-2xl shadow-2xl text-xs font-semibold tracking-wider uppercase flex items-center gap-2.5 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Hero Banner (No Navbar) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-neutral-800/80">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000 hover:scale-100"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=2000')` }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent"></div>

        <div className="relative z-10 max-w-4xl text-center px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
            <Gem size={14} className="text-amber-400" />
            {brand} Fine Jewelry & Horology Atelier
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-white leading-tight">
            Jewelry & Timepieces
          </h1>
          <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Masterpieces of precision and enduring elegance. Swiss automatic timepieces, certified diamonds, and solid 18k gold creations.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-12 pt-12 pb-8">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-neutral-800 pb-8">
          <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-neutral-400">
            <Filter size={14} /> Collection:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {['All', 'Timepieces', 'Fine Jewelry', 'Rings', 'Necklaces', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-white text-black font-bold shadow-lg' 
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Grid with Hover Effects */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-12 pt-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 border border-neutral-900 rounded-2xl bg-neutral-950">
            <Watch size={48} className="mx-auto text-neutral-600 mb-4" />
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-neutral-300">No pieces found</h3>
            <p className="text-xs text-neutral-500 mt-2">Try resetting your filter to explore our full horology vault.</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-6 px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <div 
                key={item.id}
                className="group bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-500 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover object-top transition-opacity duration-700 group-hover:opacity-0"
                    />
                    <img 
                      src={item.hoverImage} 
                      alt={item.name} 
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-700 group-hover:opacity-100 transform group-hover:scale-105"
                    />
                    
                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-amber-300">
                      {item.tag}
                    </div>

                    {/* Wishlist Button */}
                    <button 
                      onClick={() => toggleWishlist(item.id)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                    >
                      <Heart size={16} className={wishlist.includes(item.id) ? "fill-red-500 text-red-500" : ""} />
                    </button>

                    {/* Quick View Button */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={() => { setQuickViewProduct(item); setSelectedFinish(item.finishes[0]); }}
                        className="w-full bg-white/95 backdrop-blur-md text-black py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-1 shadow-lg cursor-pointer"
                      >
                        <Eye size={14} /> Quick View
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block">{item.category} • {item.material}</span>
                        <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-white tracking-wide mt-1">{item.name}</h3>
                      </div>
                      <span className="text-lg font-light text-white">${item.price.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-neutral-900/60 flex items-center justify-between">
                  <span className="text-[11px] text-amber-400 flex items-center gap-1">
                    <ShieldCheck size={14} /> Certified Authenticity
                  </span>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="text-xs font-bold uppercase tracking-widest text-white hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Acquire <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Luxury Horology & Craftsmanship Banner */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-12 pt-24">
        <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Crown size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Solid 18k Precious Metals</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Every ring, pendant, and timepiece bezel is cast from solid 18k yellow, white, or rose gold with certified hallmarks.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Watch size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Swiss Mechanical Movements</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Our horology pieces house high-frequency Swiss automatic and manual movements assembled by master horologists.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Gem size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Conflict-Free GIA Diamonds</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Rigidly sourced VVS to VS clarity diamonds adhering strictly to Kimberley Process certification standards.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl max-w-3xl w-full overflow-hidden relative grid grid-cols-1 md:grid-cols-2 shadow-2xl">
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="h-[400px] md:h-full bg-neutral-900">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-bold">{quickViewProduct.tag}</span>
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold">{quickViewProduct.name}</h3>
                <p className="text-2xl font-light text-white">${quickViewProduct.price.toLocaleString()}</p>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{quickViewProduct.description}</p>

                {/* Finish / Material Selector */}
                <div className="pt-2">
                  <label className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold block mb-2">Select Variant / Finish</label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.finishes.map(fin => (
                      <button 
                        key={fin} 
                        onClick={() => setSelectedFinish(fin)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          selectedFinish === fin ? 'bg-white text-black border-white' : 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                        }`}
                      >
                        {fin}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specifications List */}
                <div className="pt-2">
                  <h4 className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold mb-1.5">Piece Specifications:</h4>
                  <ul className="space-y-1 text-xs text-neutral-400">
                    {quickViewProduct.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={12} className="text-amber-400" /> {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => handleAddToCart(quickViewProduct)}
                className="w-full bg-white text-black py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <ShoppingBag size={16} /> Acquire {selectedFinish ? `(${selectedFinish})` : ''}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}