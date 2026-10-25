import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Eye, Heart, ShoppingBag, Filter, Clock, Flame } from 'lucide-react';

const NEW_DROPS_DATA = [
  {
    id: 'nw-1',
    name: 'Monolith Oversized Wool Trench',
    category: 'Outerwear',
    gender: 'Unisex',
    price: 890,
    tag: 'Just Dropped',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000',
    description: 'Constructed from heavy double-faced virgin wool with structured shoulders and an exaggerated storm flap.'
  },
  {
    id: 'nw-2',
    name: 'Asymmetric Silk Drape Gown',
    category: 'Haute Couture',
    gender: 'Women',
    price: 1450,
    tag: 'Runway Exclusive',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000',
    description: 'Hand-cut silk satin featuring fluid asymmetrical lines and an open back silhouette.'
  },
  {
    id: 'nw-3',
    name: 'Industrial Techwear Cargo Trousers',
    category: 'Streetwear',
    gender: 'Men',
    price: 420,
    tag: 'Limited Run',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=1000',
    description: 'Water-repellent Japanese nylon with multi-utility tactical strap detailing and adjustable hem cinches.'
  },
  {
    id: 'nw-4',
    name: 'Sculpted Calfskin Cylinder Bag',
    category: 'Accessories',
    gender: 'Unisex',
    price: 650,
    tag: 'Bestseller Drop',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000',
    description: 'Rigid structured leather cylinder fitted with matte gunmetal custom hardware and a detachable strap.'
  },
  {
    id: 'nw-5',
    name: 'Cashmere Ribbed Turtleneck Knit',
    category: 'Knitwear',
    gender: 'Men',
    price: 520,
    tag: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=1000',
    description: 'Pure 7-gauge Mongolian cashmere crafted for a relaxed, boxy drape with elongated sleeves.'
  },
  {
    id: 'nw-6',
    name: 'Vanguard Titanium Sunglasses',
    category: 'Eyewear',
    gender: 'Unisex',
    price: 380,
    tag: 'Limited Stock',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1000',
    description: 'Japanese titanium frame with gradient tinted UV400 lenses and custom laser-engraved core wire.'
  }
];

export default function NewIn() {
  const [filter, setFilter] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(null);

  const filteredItems = NEW_DROPS_DATA.filter(item => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-['Inter',sans-serif] selection:bg-neutral-800 selection:text-white pb-24">
      
      {/* 1. Hero Banner */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden border-b border-neutral-800/80">
        <div className="absolute inset-0 bg-cover bg-center opacity-45 scale-105 transition-transform duration-1000 hover:scale-100"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000')` }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent"></div>

        <div className="relative z-10 max-w-4xl text-center px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
            <Flame size={14} className="text-amber-400" />
            Seasonal Runway & Drop 04
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-white leading-tight">
            What's New / Latest Arrivals
          </h1>
          <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Uncompromising designs fresh from the atelier. Discover our newest iterations in tailoring, heavy outerwear, and artisanal accessories.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 sticky top-20 z-30 bg-[#080808]/90 backdrop-blur-xl border-b border-neutral-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-neutral-400">
            <Filter size={14} /> Filter Drop:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All', 'Outerwear', 'Haute Couture', 'Streetwear', 'Accessories', 'Knitwear', 'Eyewear'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
                  filter === cat 
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

      {/* 3. Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
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

                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => setQuickViewItem(item)}
                      className="w-full bg-white/95 backdrop-blur-md text-black py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-1 shadow-lg"
                    >
                      <Eye size={14} /> Quick View
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block">{item.category} • {item.gender}</span>
                      <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-white tracking-wide mt-1">{item.name}</h3>
                    </div>
                    <span className="text-lg font-light text-white">${item.price}</span>
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-neutral-900/60 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                  <Clock size={12} /> Limited Allocation Drop
                </span>
                <button className="text-xs font-bold uppercase tracking-widest text-white hover:text-amber-400 transition-colors flex items-center gap-1">
                  Acquire <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Quick View Modal */}
      {quickViewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl max-w-3xl w-full overflow-hidden relative grid grid-cols-1 md:grid-cols-2 shadow-2xl">
            <button 
              onClick={() => setQuickViewItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              ✕
            </button>

            <div className="h-full bg-neutral-900">
              <img src={quickViewItem.image} alt={quickViewItem.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-bold">{quickViewItem.tag}</span>
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold">{quickViewItem.name}</h3>
                <p className="text-2xl font-light text-white">${quickViewItem.price}</p>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{quickViewItem.description}</p>

                <div className="pt-2">
                  <label className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold block mb-2">Select Size</label>
                  <div className="flex gap-2">
                    {['S', 'M', 'L', 'XL'].map(sz => (
                      <button key={sz} className="w-10 h-10 rounded-xl border border-neutral-800 hover:border-white text-xs font-semibold flex items-center justify-center transition-all">
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full bg-white text-black py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Add To Shopping Bag
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}