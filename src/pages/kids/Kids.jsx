import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  Eye, 
  Check, 
  Filter, 
  Smile, 
  Baby, 
  Shirt, 
  Footprints,
  Star,
  ShieldCheck,
  ChevronRight,
  X
} from 'lucide-react';

const KIDS_DATA = [
  {
    id: 'k1',
    name: 'Petit Cashmere Hoodie & Jogger Set',
    category: 'Baby (0-24M)',
    ageGroup: 'Baby',
    price: 320,
    tag: 'Bestseller',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000',
    description: 'Ultra-soft 100% Mongolian cashmere knit lounge set crafted for maximum skin sensitivity and thermal comfort.',
    sizes: ['3M', '6M', '12M', '18M', '24M'],
    colors: ['Cream', 'Soft Slate', 'Blush']
  },
  {
    id: 'k2',
    name: 'Miniature Monolith Double Trench',
    category: 'Outerwear',
    ageGroup: 'Kids',
    price: 540,
    tag: 'Runway Mini',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=1000',
    description: 'Scaled-down edition of our signature wool trench coat, featuring storm flap detailing and adjustable belt.',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: ['Camel', 'Obsidian']
  },
  {
    id: 'k3',
    name: 'Junior Calfskin High-Top Boots',
    category: 'Footwear',
    ageGroup: 'Kids',
    price: 280,
    tag: 'New Drop',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=1000',
    description: 'Italian full-grain calfskin mini sneakers with side zip access for easy wear and lightweight rubber cupsole.',
    sizes: ['24 EU', '26 EU', '28 EU', '30 EU', '32 EU'],
    colors: ['Mono Black', 'Off-White']
  },
  {
    id: 'k4',
    name: 'Organic Silk Sleep & Swaddle Gift Set',
    category: 'Baby (0-24M)',
    ageGroup: 'Baby',
    price: 240,
    tag: 'Gift Set',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000',
    description: 'Includes 2x Mulberry silk pillowswaddles, hypoallergenic organic cotton sleepsuit, and keepsake box.',
    sizes: ['0-3M', '3-6M', '6-12M'],
    colors: ['Ivory']
  },
  {
    id: 'k5',
    name: 'Junior Structured Wool Blazer',
    category: 'Tailoring',
    ageGroup: 'Kids',
    price: 460,
    tag: 'Bespoke Mini',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&q=80&w=1000',
    description: 'Tailored for young gentlemen and ladies, featuring peak lapels, silk lining, and horns buttons.',
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
    colors: ['Navy', 'Charcoal']
  },
  {
    id: 'k6',
    name: 'Petit Logo Embroidered Sweatshirt',
    category: 'Streetwear',
    ageGroup: 'Kids',
    price: 190,
    tag: 'Popular',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=1000',
    description: 'Heavyweight organic French terry cotton with tone-on-tone high-density OFFGRID chest embroidery.',
    sizes: ['2Y', '4Y', '6Y', '8Y', '10Y', '12Y'],
    colors: ['Heather Grey', 'Black', 'Sand']
  }
];

export default function Kids() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAge, setSelectedAge] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  // Filtering Logic
  const filteredProducts = KIDS_DATA.filter((item) => {
    const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchAge = selectedAge === 'All' || item.ageGroup === selectedAge;
    return matchCat && matchAge;
  });

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-['Inter',sans-serif] selection:bg-neutral-800 selection:text-white pb-24">
      
      {/* 1. Kids Hero Banner */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden border-b border-neutral-800/80">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000 hover:scale-100"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&q=80&w=2000')` }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent"></div>

        <div className="relative z-10 max-w-4xl text-center px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-200">
            <Smile size={14} className="text-amber-400" />
            OFFGRID Petit & Junior Atelier
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-white leading-tight">
            Miniature Luxury Collection
          </h1>
          <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Uncompromising quality scaled down for the next generation. Pure cashmere, organic cottons, and bespoke mini tailoring.
          </p>
        </div>
      </section>

      {/* 2. Age Group & Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 sticky top-20 z-30 bg-[#080808]/90 backdrop-blur-xl border-b border-neutral-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          
          {/* Age Pills */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-500 mr-2 flex items-center gap-1">
              <Baby size={14} /> Age Group:
            </span>
            {['All', 'Baby', 'Kids'].map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                  selectedAge === age 
                    ? 'bg-amber-400 text-black font-bold shadow-lg' 
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {age === 'Baby' ? 'Baby (0-24M)' : age === 'Kids' ? 'Junior (2-12Y)' : 'All Ages'}
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-500 mr-1 flex items-center gap-1">
              <Filter size={14} /> Category:
            </span>
            {['All', 'Outerwear', 'Tailoring', 'Streetwear', 'Footwear', 'Baby (0-24M)'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
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
            <Smile size={48} className="mx-auto text-neutral-600 mb-4" />
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-neutral-300">No products match your selection</h3>
            <p className="text-xs text-neutral-500 mt-2">Try switching filters to discover other junior collections.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSelectedAge('All'); }}
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
                        onClick={() => { setQuickViewProduct(item); setSelectedSize(item.sizes[0]); }}
                        className="w-full bg-white/95 backdrop-blur-md text-black py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-1 shadow-lg"
                      >
                        <Eye size={14} /> Quick View
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block">{item.category} • {item.ageGroup}</span>
                        <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-white tracking-wide mt-1">{item.name}</h3>
                      </div>
                      <span className="text-lg font-light text-white">${item.price}</span>
                    </div>
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light">{item.description}</p>
                    
                    {/* Size Preview */}
                    <div className="flex items-center gap-1.5 pt-2">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500">Sizes:</span>
                      <div className="flex flex-wrap gap-1">
                        {item.sizes.map(sz => (
                          <span key={sz} className="text-[10px] px-2 py-0.5 bg-neutral-900 border border-neutral-800 rounded text-neutral-300">
                            {sz}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-neutral-900/60 flex items-center justify-between">
                  <span className="text-[11px] text-amber-400 flex items-center gap-1">
                    <Star size={12} className="fill-amber-400" /> {item.rating} (Hypoallergenic)
                  </span>
                  <button className="text-xs font-bold uppercase tracking-widest text-white hover:text-amber-400 transition-colors flex items-center gap-1">
                    Add To Bag <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Luxury Kids Care & Safety Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-20">
        <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">OEKO-TEX® Certified</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Every fabric used in our Petit collection is 100% free from harmful chemicals and certified skin-safe for newborns.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Sparkles size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Ultra-Soft Mongolian Cashmere</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Ethically sourced Grade-A cashmere designed to offer gentle warmth without overheating or irritation.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Footprints size={20} />
            </div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Growth-Adaptive Fit</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Engineered with expandable cuffs and elasticated waistbands to grow comfortably alongside your child.
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

                {/* Size Selector */}
                <div className="pt-2">
                  <label className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold block mb-2">Available Sizes</label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.sizes.map(sz => (
                      <button 
                        key={sz} 
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          selectedSize === sz ? 'bg-white text-black border-white' : 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full bg-white text-black py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Add {selectedSize ? `(${selectedSize})` : ''} To Bag
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}