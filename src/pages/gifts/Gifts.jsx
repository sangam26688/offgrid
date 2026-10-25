import React, { useState } from 'react';
import { 
  Gift, 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  SlidersHorizontal, 
  Eye, 
  Check, 
  ChevronRight, 
  Search, 
  Package, 
  X, 
  Edit3, 
  Crown,
  Calendar,
  User,
  ShieldCheck
} from 'lucide-react';

// Import GIFT_DATA from gifts.js
import { Gifts } from './Gifts.js';

export default function GiftsPage() {
  // State variables
  const [selectedRecipient, setSelectedRecipient] = useState('All');
  const [selectedOccasion, setSelectedOccasion] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Packaging Customizer States
  const [ribbonColor, setRibbonColor] = useState('Obsidian Black');
  const [sealStyle, setSealStyle] = useState('Gold Monogram');
  const [noteMessage, setNoteMessage] = useState('With love and highest compliments.');
  const [recipientName, setRecipientName] = useState('Alexander');

  // Filter Logic
  const filteredGifts = GIFT_DATA.filter((item) => {
    const matchRecipient = selectedRecipient === 'All' || item.category === selectedRecipient;
    const matchOccasion = selectedOccasion === 'All' || item.occasion === selectedOccasion;
    const matchPrice = selectedPrice === 'All' || item.priceTier === selectedPrice;
    return matchRecipient && matchOccasion && matchPrice;
  });

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Inter',sans-serif] selection:bg-neutral-200 selection:text-black pb-20">
      
      {/* 1. Header Hero Banner */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-cover bg-center  scale-105 transition-transform duration-1000 hover:scale-100"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=2000')` }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>

        <div className="relative z-10 max-w-4xl text-center px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 backdrop-blur-md border border-black/10 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
            <Sparkles size={14} className="text-amber-600" />
            OFFGRID Curated Luxury Gifting
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-neutral-900 leading-tight">
            The Art of Extraordinary Giving
          </h1>
          <p className="text-neutral-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Explore bespoke gift boxes, limited-edition timepieces, and hand-wrapped artisanal sets crafted for those who appreciate true luxury.
          </p>
          
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsQuizOpen(true)}
              className="bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-xl hover:scale-105 cursor-pointer"
            >
              <Gift size={16} /> Launch Gift Finder Quiz
            </button>
            <a 
              href="#customizer"
              className="bg-neutral-100 text-neutral-900 border border-neutral-300 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all flex items-center gap-2"
            >
              <Edit3 size={16} /> Customize Packaging
            </a>
          </div>
        </div>
      </section>

      {/* 2. Interactive Finder Toolbar */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white/95 border border-neutral-200 backdrop-blur-xl rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={18} className="text-neutral-500" />
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-neutral-800">Refine Your Selection</span>
            </div>
            <span className="text-xs text-neutral-500 font-medium">{filteredGifts.length} Luxurious Gifts Found</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Recipient Filter */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500 mb-2 flex items-center gap-1">
                <User size={12} /> Recipient
              </label>
              <select 
                value={selectedRecipient} 
                onChange={(e) => setSelectedRecipient(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black transition-all cursor-pointer"
              >
                <option value="All">All Recipients</option>
                <option value="For Him">For Him</option>
                <option value="For Her">For Her</option>
                <option value="Couples">Couples</option>
                <option value="Executive">Executive & Corporate</option>
                <option value="Travel">Travel</option>
              </select>
            </div>

            {/* Occasion Filter */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500 mb-2 flex items-center gap-1">
                <Calendar size={12} /> Occasion
              </label>
              <select 
                value={selectedOccasion} 
                onChange={(e) => setSelectedOccasion(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black transition-all cursor-pointer"
              >
                <option value="All">All Occasions</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Birthday">Birthday</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate">Corporate & Milestone</option>
              </select>
            </div>

            {/* Price Tier Filter */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500 mb-2 flex items-center gap-1">
                <Crown size={12} /> Price Range
              </label>
              <select 
                value={selectedPrice} 
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-black transition-all cursor-pointer"
              >
                <option value="All">All Budgets</option>
                <option value="Under 300">Under $300</option>
                <option value="300-500">$300 - $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000+">$1,000+</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Gift Collection Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        {filteredGifts.length === 0 ? (
          <div className="text-center py-24 border border-neutral-200 rounded-2xl bg-neutral-50">
            <Gift size={48} className="mx-auto text-neutral-400 mb-4" />
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-neutral-800">No matching gifts found</h3>
            <p className="text-xs text-neutral-500 mt-2">Try resetting your filters to explore our full gifting vault.</p>
            <button 
              onClick={() => { setSelectedRecipient('All'); setSelectedOccasion('All'); setSelectedPrice('All'); }}
              className="mt-6 px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGifts.map((gift) => (
              <div 
                key={gift.id}
                className="group bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 transition-all duration-500 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                    <img 
                      src={gift.image} 
                      alt={gift.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-neutral-200 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-neutral-900 shadow-sm">
                      {gift.tag}
                    </div>

                    <button 
                      onClick={() => toggleWishlist(gift.id)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center text-neutral-900 hover:bg-black hover:text-white transition-all cursor-pointer"
                    >
                      <Heart size={16} className={wishlist.includes(gift.id) ? "fill-red-500 text-red-500" : ""} />
                    </button>

                    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                      <button 
                        onClick={() => setQuickViewProduct(gift)}
                        className="flex-1 bg-black/90 backdrop-blur-md text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-black transition-all flex items-center justify-center gap-1 shadow-lg cursor-pointer"
                      >
                        <Eye size={14} /> Quick View
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 block">{gift.category} • {gift.occasion}</span>
                        <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-neutral-900 tracking-wide mt-1">{gift.name}</h3>
                      </div>
                      <span className="text-lg font-light text-neutral-900 font-mono">${gift.price}</span>
                    </div>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-light">{gift.description}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                    <Package size={12} /> Complimentary Luxe Wrapping
                  </span>
                  <button className="text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-amber-600 transition-colors flex items-center gap-1 cursor-pointer">
                    Add To Cart <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Bespoke Packaging & Gift Personalization Section */}
      <section id="customizer" className="bg-neutral-50 border-y border-neutral-200 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600 shadow-sm">
              <Crown size={12} /> Signature Packaging Studio
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light tracking-wide text-neutral-900">
              Personalize Your Gift Experience
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed font-light">
              Every OFFGRID order comes in our matte black magnetic vault box. Tailor the finishing touches with gold wax seals, silk ribbons, and a hand-typed message.
            </p>

            <div className="space-y-5 pt-4">
              {/* Ribbon Selection */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-neutral-700 font-semibold mb-2">1. Select Ribbon Satin Color</label>
                <div className="flex gap-3">
                  {['Obsidian Black', 'Champagne Gold', 'Crimson Silk'].map((color) => (
                    <button 
                      key={color} 
                      onClick={() => setRibbonColor(color)}
                      className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                        ribbonColor === color ? 'border-black bg-black text-white' : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seal Selection */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-neutral-700 font-semibold mb-2">2. Choose Wax Seal Emblem</label>
                <div className="flex gap-3">
                  {['Gold Monogram', 'Obsidian Crest', 'Silver Emblem'].map((seal) => (
                    <button 
                      key={seal} 
                      onClick={() => setSealStyle(seal)}
                      className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                        sealStyle === seal ? 'border-black bg-black text-white' : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      {seal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Note Generator */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-[0.2em] text-neutral-700 font-semibold">3. Personalized Gift Note</label>
                <input 
                  type="text" 
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Recipient Name"
                  className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-black"
                />
                <textarea 
                  rows={3}
                  value={noteMessage}
                  onChange={(e) => setNoteMessage(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-xl p-4 text-xs text-neutral-900 focus:outline-none focus:border-black resize-none"
                  placeholder="Type your gift card message here..."
                />
              </div>
            </div>
          </div>

          {/* Real-time Preview Card */}
          <div className="lg:col-span-6 bg-white border border-neutral-200 rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-500">Live Card Preview</span>
              <ShieldCheck size={18} className="text-amber-600" />
            </div>

            <div className="bg-neutral-900 text-white border border-neutral-800 p-8 rounded-2xl shadow-inner space-y-6 font-serif">
              <div className="flex justify-between items-center text-xs text-neutral-400 font-sans tracking-widest uppercase">
                <span>OFFGRID ATELIER</span>
                <span>{ribbonColor} Ribbon</span>
              </div>
              <div className="space-y-2">
                <p className="text-amber-200 text-sm tracking-wide font-light">Dearest {recipientName || 'Recipient'},</p>
                <p className="text-neutral-300 text-base leading-relaxed italic font-light">"{noteMessage || 'Your message preview will appear here...'}"</p>
              </div>
              <div className="pt-4 border-t border-neutral-800 flex justify-between items-center font-sans text-[11px] text-neutral-400">
                <span>SEAL: {sealStyle.toUpperCase()}</span>
                <span className="tracking-widest font-semibold">OFFGRID VIP</span>
              </div>
            </div>

            <div className="text-center pt-2">
              <p className="text-xs text-neutral-500 font-light">This customized card and premium wax-sealed packaging will be added to your order at no extra charge.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white border border-neutral-200 rounded-3xl max-w-3xl w-full overflow-hidden relative grid grid-cols-1 md:grid-cols-2 shadow-2xl">
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="h-full bg-neutral-100">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-8 space-y-6 flex flex-col justify-between text-neutral-900">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-600 font-bold">{quickViewProduct.tag}</span>
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold">{quickViewProduct.name}</h3>
                <p className="text-2xl font-light text-neutral-900 font-mono">${quickViewProduct.price}</p>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">{quickViewProduct.description}</p>

                <div className="pt-4 space-y-2">
                  <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-700">Set Includes:</h4>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {quickViewProduct.includes.map((inc, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check size={12} className="text-amber-600" /> {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all cursor-pointer shadow-lg">
                Add To Shopping Bag
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Interactive Gift Finder Quiz Modal */}
      {isQuizOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white border border-neutral-200 rounded-3xl max-w-lg w-full p-8 relative space-y-6 text-center shadow-2xl text-neutral-900">
            <button 
              onClick={() => setIsQuizOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mx-auto">
              <Sparkles size={24} />
            </div>

            <div className="space-y-2">
              <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold">Concierge Gift Wizard</h3>
              <p className="text-xs text-neutral-500">Select target recipient to instantly filter our 20+ vault items.</p>
            </div>

            <div className="space-y-3 text-left">
              <label className="text-xs uppercase tracking-wider text-neutral-700 font-semibold block">Who is this gift intended for?</label>
              <div className="grid grid-cols-2 gap-2">
                {['For Him', 'For Her', 'Couples', 'Executive', 'Travel'].map(r => (
                  <button 
                    key={r}
                    onClick={() => { setSelectedRecipient(r); setIsQuizOpen(false); }}
                    className="p-3 bg-neutral-100 border border-neutral-200 hover:border-black rounded-xl text-xs text-neutral-800 text-center transition-all cursor-pointer"
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}