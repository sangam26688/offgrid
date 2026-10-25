import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  Eye, 
  Check, 
  Filter, 
  Compass, 
  Briefcase, 
  Plane, 
  ShieldCheck, 
  ChevronRight, 
  X,
  Lock,
  Globe
} from 'lucide-react';

const TRAVEL_DATA = [
  {
    id: 't1',
    name: 'Monolith Aluminum Carry-On Spinner',
    category: 'Suitcases',
    tag: 'Bestseller',
    price: 950,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&q=80&w=1000',
    description: 'Aircraft-grade anodized aluminum hard-shell suitcase featuring 360-degree silent spinner wheels and TSA-approved dual combination locks.',
    features: ['Polycarbonate & Aluminum Alloy', 'TSA Approved Locks', 'Silent Spinner Wheels', 'Compression Pad System'],
    colors: ['Matte Black', 'Titanium Silver', 'Champagne Gold']
  },
  {
    id: 't2',
    name: 'Atelier Full-Grain Leather Weekender',
    category: 'Duffels & Totes',
    tag: 'Signature Drop',
    price: 780,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    description: 'Supple Italian calfskin duffel bag designed to fit overhead compartments with a dedicated padded laptop sleeve and waterproof shoe compartment.',
    features: ['100% Italian Calfskin', 'Dedicated Shoe Compartment', 'Removable Shoulder Strap', 'Brass Hardware'],
    colors: ['Espresso Brown', 'Obsidian Black']
  },
  {
    id: 't3',
    name: 'Nomad Passport & Card Holder Vault',
    category: 'Travel Accessories',
    tag: 'Essential',
    price: 220,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000',
    description: 'RFID-blocking textured leather passport wallet with dedicated slots for boarding passes, currency, and frequent flyer cards.',
    features: ['RFID Blocking Shield', 'Nappa Leather Lining', 'Boarding Pass Pocket', 'Gold Foiled Branding'],
    colors: ['Midnight Navy', 'Charcoal', 'Burgundy']
  },
  {
    id: 't4',
    name: 'Vanguard Checked Trunk (Large)',
    category: 'Suitcases',
    tag: 'Limited Edition',
    price: 1250,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1565026057447-bcbe0e653a72?auto=format&fit=crop&q=80&w=1000',
    description: 'Extra-capacity checked trunk engineered for extended journeys, featuring deep packing compartments and laundry bags.',
    features: ['95L Capacity', 'Reinforced Corner Guards', 'Included Laundry Bags', 'Lifetime Guarantee'],
    colors: ['Matte Black', 'Olive Drab']
  },
  {
    id: 't5',
    name: 'Cashmere Flight Wrap & Eye Mask',
    category: 'In-Flight Comfort',
    tag: 'Luxury Comfort',
    price: 420,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000',
    description: 'Envelope yourself in 100% pure Mongolian cashmere during long-haul flights. Includes matching blackout silk eye mask.',
    features: ['Grade-A Cashmere', 'Silk Eye Mask Included', 'Compact Travel Pouch', 'Hypoallergenic'],
    colors: ['Oatmeal', 'Heather Grey']
  },
  {
    id: 't6',
    name: 'Tech-Kit Cable & Device Organizer',
    category: 'Travel Accessories',
    tag: 'Popular',
    price: 180,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=1000',
    description: 'Structured water-resistant nylon pouch with elastic loops, mesh pockets, and magnetic closure for all your charging cables and power banks.',
    features: ['Water-Resistant Nylon', 'YKK Aquaguard Zippers', 'Custom Elastic Loops', 'Compact Modular Layout'],
    colors: ['Stealth Black', 'Alpine Green']
  }
];

export default function Travel() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');

  // Filtering Logic
  const filteredProducts = TRAVEL_DATA.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-['Inter',sans-serif] selection:bg-neutral-800 selection:text-white pb-24">
      
      {/* 1. Travel Hero Banner */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden border-b border-neutral-800/80">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000 hover:scale-100"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2000')` }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent"></div>

        <div className="relative z-10 max-w-4xl text-center px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
            <Plane size={14} className="text-amber-400" />
            OFFGRID Nomad & Voyager Atelier
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-white leading-tight">
            The Art of Travel & Luggage
          </h1>
          <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Engineered for the modern global nomad. Aircraft-grade aluminum suitcases, Italian leather weekenders, and uncompromising in-flight essentials.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 sticky top-20 z-30 bg-[#080808]/90 backdrop-blur-xl border-b border-neutral-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-500 mr-1 flex items-center gap-1">
              <Filter size={14} /> Travel Category:
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All', 'Suitcases', 'Duffels & Totes', 'Travel Accessories', 'In-Flight Comfort'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                    ? 'bg-white text-black font-bold shadow-lg' 
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 border border-neutral-900 rounded-2xl bg-neutral-950">
            <Compass size={48} className="mx-auto text-neutral-600 mb-4" />
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-neutral-300">No travel gear found</h3>
            <p className="text-xs text-neutral-500 mt-2">Try resetting your filter to explore our full voyage selection.</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-6 px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-all"
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-amber-300">
                      {item.tag}
                    </div>

                    {/* Wishlist Button */}
                    <button 
                      onClick={() => toggleWishlist(item.id)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    >
                      <Heart size={16} className={wishlist.includes(item.id) ? "fill-red-500 text-red-500" : ""} />
                    </button>

                    {/* Quick View Button */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={() => { setQuickViewProduct(item); setSelectedColor(item.colors[0]); }}
                        className="w-full bg-white/95 backdrop-blur-md text-black py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-1 shadow-lg"
                      >
                        <Eye size={14} /> Quick View
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block">{item.category}</span>
                        <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-white tracking-wide mt-1">{item.name}</h3>
                      </div>
                      <span className="text-lg font-light text-white">${item.price}</span>
                    </div>
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-neutral-900/60 flex items-center justify-between">
                  <span className="text-[11px] text-amber-400 flex items-center gap-1">
                    <ShieldCheck size={14} /> Lifetime Warranty
                  </span>
                  <button className="text-xs font-bold uppercase tracking-widest text-white hover:text-amber-400 transition-colors flex items-center gap-1">
                    Acquire <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Luxury Travel Features Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-20">
        <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Lock size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">TSA Integrated Security</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Every aluminum suitcase is equipped with recessed TSA-approved combination locks for seamless international customs clearance.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Globe size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Global Recovery Tag</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Built-in unique identification serial allowing finders to securely connect with you if your luggage is misplaced anywhere worldwide.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Compass size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Aircraft-Grade Durability</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Tested rigorously against heavy impact, temperature shifts, and rough tarmac handling to guarantee lifelong performance.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl max-w-3xl w-full overflow-hidden relative grid grid-cols-1 md:grid-cols-2 shadow-2xl">
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <X size={18} />
            </button>

            <div className="h-full bg-neutral-900">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-bold">{quickViewProduct.tag}</span>
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold">{quickViewProduct.name}</h3>
                <p className="text-2xl font-light text-white">${quickViewProduct.price}</p>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{quickViewProduct.description}</p>

                {/* Color Selector */}
                <div className="pt-2">
                  <label className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold block mb-2">Select Finish</label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.colors.map(col => (
                      <button 
                        key={col} 
                        onClick={() => setSelectedColor(col)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          selectedColor === col ? 'bg-white text-black border-white' : 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                        }`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="pt-2">
                  <h4 className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold mb-1.5">Key Specifications:</h4>
                  <ul className="space-y-1 text-xs text-neutral-400">
                    {quickViewProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={12} className="text-amber-400" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="w-full bg-white text-black py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Add {selectedColor ? `(${selectedColor})` : ''} To Bag
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}