import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  Eye, 
  Check, 
  Filter, 
  Home, 
  Compass, 
  ShieldCheck, 
  ChevronRight, 
  X,
  Palette
} from 'lucide-react';

const DECOR_DATA = [
  {
    id: 'dl1',
    name: 'Monolith Travertine Sculpture Vase',
    category: 'Objects & Vases',
    tag: 'Bestseller',
    price: 450,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&q=80&w=1000',
    description: 'Honed natural Italian travertine stone carved into brutalist geometric silhouettes. Each piece features unique organic veining.',
    specifications: ['Natural Italian Travertine', 'Hand-Polished Finish', 'Waterproof Interior Seal', 'Anti-Scratch Felt Base'],
    finishes: ['Raw Travertine', 'Obsidian Stone']
  },
  {
    id: 'dl2',
    name: 'Atelier Smoked Cedar Scented Candle (1kg)',
    category: 'Home Fragrance',
    tag: 'Signature Object',
    price: 220,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1000',
    description: 'Triple-wick organic soy wax infused with smoked cedar, roasted birch, and black pepper in a custom concrete matte vessel.',
    specifications: ['120-Hour Burn Time', 'Organic Soy & Coconut Wax', 'Triple Cotton Wicks', 'Reusable Concrete Vessel'],
    finishes: ['Concrete Grey', 'Obsidian Black']
  },
  {
    id: 'dl3',
    name: 'Merino Wool & Cashmere Throw Blanket',
    category: 'Textiles',
    tag: 'Luxury Comfort',
    price: 580,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=1000',
    description: 'Woven in Biella, Italy using 70% extra-fine merino wool and 30% Mongolian cashmere with hand-knotted fringe edges.',
    specifications: ['70% Merino, 30% Cashmere', 'Dimensions: 140x200cm', 'Dry Clean Only', 'Made in Biella, Italy'],
    finishes: ['Charcoal Grey', 'Oatmeal', 'Camel']
  },
  {
    id: 'dl4',
    name: 'Murano Hand-Blown Glass Centerpiece',
    category: 'Glassware',
    tag: 'Limited Edition',
    price: 920,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1000',
    description: 'Mouth-blown by master glass artisans in Venice, Italy. Features swirling ribbons of smoked amber glass embedded within clear crystal.',
    specifications: ['Mouth-Blown Venice Crystal', 'Hand-Signed by Artisan', 'Unique Optical Distortion', 'Weight: 4.2 kg'],
    finishes: ['Smoked Amber', 'Midnight Blue']
  },
  {
    id: 'dl5',
    name: 'Brutalist Architectural Bookends (Pair)',
    category: 'Objects & Vases',
    tag: 'New Drop',
    price: 340,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000',
    description: 'Heavy cast brass and blackened steel bookends inspired by modernist brutalist architecture of the 1970s.',
    specifications: ['Solid Cast Brass & Steel', 'Felt Protected Bottom', 'Weight: 2.8kg per pair', 'Hand-Patinated Surface'],
    finishes: ['Brass & Steel', 'All-Black Steel']
  },
  {
    id: 'dl6',
    name: 'Minimalist Walnut Coffee Table Tray',
    category: 'Tableware',
    tag: 'Essential',
    price: 290,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=80&w=1000',
    description: 'Crafted from sustainable American black walnut with seamless mitered joints and brushed brass handle accents.',
    specifications: ['American Black Walnut', 'Brushed Brass Inlay', 'Satin Lacquer Coat', 'Dimensions: 50x30cm'],
    finishes: ['Dark Walnut', 'Bleached Ash']
  }
];

export default function DecorLifestylePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedFinish, setSelectedFinish] = useState('');

  // Filtering Logic
  const filteredProducts = DECOR_DATA.filter((item) => {
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
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000')` }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent"></div>

        <div className="relative z-10 max-w-4xl text-center px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
            <Home size={14} className="text-amber-400" />
            OFFGRID Home, Art & Interior Atelier
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-white leading-tight">
            Decor & Lifestyle
          </h1>
          <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Sculptural objects for the modern sanctuary. Travertine vases, mouth-blown Venetian glass, and tactile cashmere textiles.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 sticky top-20 z-30 bg-[#080808]/90 backdrop-blur-xl border-b border-neutral-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-500 mr-1 flex items-center gap-1">
              <Filter size={14} /> Sanctuary Section:
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All', 'Objects & Vases', 'Home Fragrance', 'Textiles', 'Glassware', 'Tableware'].map((cat) => (
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
            <Home size={48} className="mx-auto text-neutral-600 mb-4" />
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-neutral-300">No interior objects found</h3>
            <p className="text-xs text-neutral-500 mt-2">Try resetting your filter to explore our full lifestyle vault.</p>
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
                        onClick={() => { setQuickViewProduct(item); setSelectedFinish(item.finishes[0]); }}
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
                    <ShieldCheck size={14} /> Artisanal Certified
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

      {/* 4. Interior Philosophy Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-20">
        <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Palette size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Brutalism & Minimalism</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Objects designed with architectural integrity, celebrating raw stone, cast brass, and monolithic organic forms.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Compass size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Venetian & Biella Craft</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Collaborations with generational workshops across Murano, Italy and Biella to produce heirloom-grade interior accents.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Sparkles size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Sustainable Raw Materials</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Natural travertine stone, organic soy waxes, and cruelty-free Mongolian cashmere crafted for conscious living spaces.
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

                {/* Finish Selector */}
                <div className="pt-2">
                  <label className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold block mb-2">Select Finish / Material</label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.finishes.map(fin => (
                      <button 
                        key={fin} 
                        onClick={() => setSelectedFinish(fin)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
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
                  <h4 className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold mb-1.5">Specifications:</h4>
                  <ul className="space-y-1 text-xs text-neutral-400">
                    {quickViewProduct.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={12} className="text-amber-400" /> {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="w-full bg-white text-black py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Acquire {selectedFinish ? `(${selectedFinish})` : ''}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}