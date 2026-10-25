import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  Eye, 
  Check, 
  Filter, 
  Flame, 
  ShieldCheck, 
  ChevronRight, 
  X,
  Droplet,
  Sun
} from 'lucide-react';

const BEAUTY_DATA = [
  {
    id: 'bm1',
    name: 'Noir Velvet Extrait de Parfum (100ml)',
    category: 'Fragrances',
    subCategory: 'Extrait de Parfum',
    price: 340,
    tag: 'Signature Fragrance',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000',
    description: 'A dark, hypnotic blend of black amber, smoked oud, Bulgarian rose, and raw vanilla bean crafted in Grasse.',
    notes: { top: 'Black Pepper, Bergamot', heart: 'Bulgarian Rose, Smoked Iris', base: 'Oud, Leather, Black Amber' },
    shades: ['100ml Bottle', '50ml Travel Atomizer']
  },
  {
    id: 'bm2',
    name: 'Monolith Velvet Matte Lipstick',
    category: 'Makeup',
    subCategory: 'Lips',
    price: 68,
    tag: 'Bestseller',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=1000',
    description: 'Weightless pigment-rich velvet matte formula infused with hyaluronic spheres and botanical oils for 12-hour hydration.',
    notes: { finish: 'Velvet Soft Matte', longevity: '12-Hour Wear', formula: 'Infused with Jojoba Oil' },
    shades: ['Obsidian Red 01', 'Nude Satin 02', 'Crimson Velvet 03', 'Plum Noir 04']
  },
  {
    id: 'bm3',
    name: 'Soleil D\'Or Luminous Highlighter',
    category: 'Makeup',
    subCategory: 'Face & Complexion',
    price: 85,
    tag: 'New Drop',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    description: 'Ultra-refined micro-milled pearl powder compact that delivers an ethereal glass-skin glow with light-reflecting crystals.',
    notes: { texture: 'Silk Press Powder', effect: 'Dimensional Dewy Glow' },
    shades: ['Champagne Gold', 'Rose Quartz', 'Bronze Amber']
  },
  {
    id: 'bm4',
    name: 'Santal & Smoked Leather Elixir',
    category: 'Fragrances',
    subCategory: 'Eau de Parfum',
    price: 290,
    tag: 'Haute Parfumerie',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1000',
    description: 'Dry Australian sandalwood paired with crushed cardamom, cedarwood, and Tuscan leather notes.',
    notes: { top: 'Cardamom, Violet Leaves', heart: 'Papyrus, Iris', base: 'Sandalwood, Tuscan Leather' },
    shades: ['100ml Bottle', 'Discovery Set']
  },
  {
    id: 'bm5',
    name: 'L\'Ombre Quad Eyeshadow Palette',
    category: 'Makeup',
    subCategory: 'Eyes',
    price: 110,
    tag: 'Limited Edition',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1000',
    description: '4 high-pigment eyeshadows combining buttery mattes, molten metallics, and sparkling topper shades in a magnetic gold compact.',
    notes: { texture: 'Multi-Dimensional Powders', duration: 'Crease-Resistant All Day' },
    shades: ['Smokey Quartz', 'Sunset Bronze', 'Midnight Velvet']
  },
  {
    id: 'bm6',
    name: 'Radiance Botanical Face Oil (30ml)',
    category: 'Skincare Prep',
    subCategory: 'Face & Complexion',
    price: 160,
    tag: 'Cult Classic',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1608248597369-02c3498877e8?auto=format&fit=crop&q=80&w=1000',
    description: '22 cold-pressed active botanicals designed to prime skin before makeup application and restore night luminosity.',
    notes: { actives: 'Rosehip, Marula, Bakuchiol', absorption: 'Fast-Absorbing Dry Oil' },
    shades: ['30ml Glass Dropper']
  }
];

export default function Fragrance() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedShade, setSelectedShade] = useState('');

  // Filtering Logic
  const filteredProducts = BEAUTY_DATA.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-['Inter',sans-serif] selection:bg-neutral-800 selection:text-white pb-24">
      
      {/* 1. Hero Banner */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden border-b border-neutral-800/80">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000 hover:scale-100"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=2000')` }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent"></div>

        <div className="relative z-10 max-w-4xl text-center px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
            <Droplet size={14} className="text-amber-400" />
            OFFGRID Beauty & Parfumerie Vault
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-white leading-tight">
            Fragrances & Makeup
          </h1>
          <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Immerse in haute perfumery and couture makeup. Rare floral extractions, weightless velvet pigments, and skin-illuminating elixirs.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 sticky top-20 z-30 bg-[#080808]/90 backdrop-blur-xl border-b border-neutral-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-500 mr-1 flex items-center gap-1">
              <Filter size={14} /> Vault Section:
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All', 'Fragrances', 'Makeup', 'Skincare Prep'].map((cat) => (
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
            <Droplet size={48} className="mx-auto text-neutral-600 mb-4" />
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-neutral-300">No beauty items found</h3>
            <p className="text-xs text-neutral-500 mt-2">Try resetting your filter to explore our full beauty vault.</p>
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
                        onClick={() => { setQuickViewProduct(item); setSelectedShade(item.shades[0]); }}
                        className="w-full bg-white/95 backdrop-blur-md text-black py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-1 shadow-lg"
                      >
                        <Eye size={14} /> Quick View
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block">{item.category} • {item.subCategory}</span>
                        <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-white tracking-wide mt-1">{item.name}</h3>
                      </div>
                      <span className="text-lg font-light text-white">${item.price}</span>
                    </div>
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-neutral-900/60 flex items-center justify-between">
                  <span className="text-[11px] text-amber-400 flex items-center gap-1">
                    <ShieldCheck size={14} /> Cruelty-Free & Dermatologist Approved
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

      {/* 4. Luxury Parfumerie & Beauty Philosophy */}
      <section className="max-w-7xl mx-auto px-6 pt-20">
        <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Flame size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Grasse Haute Parfumerie</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Every fragrance concentrated at 25%+ Extrait level, hand-blended in Grasse using natural essential extractions.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Sun size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Clean Couture Pigments</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Formulated without parabens, phthalates, or synthetic fragrances. Safe for sensitive skin and eyes.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Sparkles size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Refillable Heavy Glass Cases</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Encased in weighted, custom-molded glass and magnetic brass compacts designed for refillable long-term use.
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

                {/* Shade / Size Selector */}
                <div className="pt-2">
                  <label className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold block mb-2">Select Shade / Size</label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.shades.map(shd => (
                      <button 
                        key={shd} 
                        onClick={() => setSelectedShade(shd)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          selectedShade === shd ? 'bg-white text-black border-white' : 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                        }`}
                      >
                        {shd}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes / Formula breakdown */}
                {quickViewProduct.notes && (
                  <div className="pt-2 border-t border-neutral-900">
                    <h4 className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold mb-1.5">Olfactory / Formula Pyramid:</h4>
                    <div className="space-y-1 text-xs text-neutral-400">
                      {Object.entries(quickViewProduct.notes).map(([k, v]) => (
                        <p key={k} className="flex items-center gap-1.5">
                          <Check size={12} className="text-amber-400" /> <span className="capitalize font-semibold text-neutral-300">{k}:</span> {v}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="w-full bg-white text-black py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Add {selectedShade ? `(${selectedShade})` : ''} To Bag
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}