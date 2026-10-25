import React, { useState, useEffect } from "react";
import { Plus, ShoppingBag, User, Search, Menu, X, ChevronRight, Phone, MessageCircle, ShieldCheck, Sparkles, Gem, Watch, Crown, Filter, ArrowUpRight, Heart, Eye, Check } from "lucide-react";
import { ALL_PRODUCTS, CATEGORIES, BRAND_NAME } from "./data";
// import API from "../api.js"; // Apne backend API service ka path check kar liyo

export function GlassButton({ icon: IconComponent, children, pill, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-2 bg-transparent border-0 text-inherit cursor-pointer font-['Inter',sans-serif] font-semibold text-xs uppercase tracking-wider px-3.5 py-2.5 rounded-full transition-all duration-300 hover:bg-black/10 active:scale-95 focus-visible:outline-2 focus-visible:outline-current ${
        pill ? "bg-black/5 border border-black/10 rounded-full px-5 py-2.5" : ""
      } ${className}`}
      {...props}
    >
      {IconComponent && <IconComponent className="w-4 h-4 stroke-[1.8]" />}
      {children && <span className="max-sm:hidden">{children}</span>}
    </button>
  );
}

export function GlassInput(props) {
  return (
    <input
      className="w-full px-5 py-3.5 rounded-2xl font-medium text-sm font-['Inter',sans-serif] bg-black/5 border border-black/10 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
      {...props}
    />
  );
}

export function AuthModal({ isOpen, onClose }) {
  const [authMode, setAuthMode] = useState('select');
  const [phoneNumber, setPhoneNumber] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white border border-neutral-200 rounded-3xl max-w-md w-full p-8 relative space-y-6 shadow-2xl text-neutral-900">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-black cursor-pointer">
          <X size={20} />
        </button>

        <div className="text-center space-y-2 pt-2">
          <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-light tracking-wider uppercase">
            Welcome to {BRAND_NAME}
          </h3>
          <p className="text-xs text-neutral-500 font-light">
            Sign in or create an account for private VIP access.
          </p>
        </div>

        {authMode === 'select' ? (
          <div className="space-y-4 pt-2">
            <button 
              onClick={() => alert("Google Sign-In triggered!")}
              className="w-full bg-black text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Continue with Google
            </button>

            <button 
              onClick={() => setAuthMode('phone')}
              className="w-full bg-neutral-100 border border-neutral-200 text-neutral-900 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone size={14} className="text-amber-600" /> Continue with Phone Number
            </button>
          </div>
        ) : (
          <div className="space-y-4 pt-2">
            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
                Enter Mobile Number
              </label>
              <div className="flex gap-2">
                <span className="bg-neutral-100 border border-neutral-200 rounded-xl px-3 py-3 text-xs flex items-center text-neutral-700">
                  +91
                </span>
                <input 
                  type="tel"
                  placeholder="98765 43210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-neutral-100 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-neutral-900 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <button 
              onClick={() => alert(`OTP sent to ${phoneNumber}`)}
              className="w-full bg-black text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all cursor-pointer shadow-lg"
            >
              Send Verification OTP
            </button>

            <button 
              onClick={() => setAuthMode('select')}
              className="w-full text-center text-xs text-neutral-500 hover:text-black pt-2 cursor-pointer uppercase tracking-wider"
            >
              Back to Social Logins
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white border border-neutral-200 rounded-3xl max-w-xl w-full p-8 sm:p-12 relative shadow-2xl text-neutral-900 space-y-8">
        <button onClick={onClose} className="absolute top-6 right-6 text-neutral-500 hover:text-black cursor-pointer">
          <X size={20} />
        </button>

        <div className="space-y-2">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light tracking-[0.15em] uppercase text-neutral-900">
            Contact Us
          </h2>
          <div className="w-12 h-[1px] bg-amber-600"></div>
        </div>

        <div className="space-y-6 text-sm">
          <div className="flex items-center gap-2 text-neutral-900 font-semibold">
            <Phone size={16} className="text-amber-600" />
            <a href="tel:+919876543210" className="hover:underline tracking-wide">Call Us +91 98765 43210</a>
          </div>
          <div className="flex items-center gap-2 text-neutral-900 font-semibold">
            <MessageCircle size={16} className="text-amber-600" />
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:underline tracking-wide">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppLayout({ cartCount = 2 }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // 👉 Backend data states
  const [products, setProducts] = useState(ALL_PRODUCTS);
  const [loading, setLoading] = useState(false);

  // 🚀 Fetch products from Backend API (`/api/products`)
  useEffect(() => {
    const fetchBackendProducts = async () => {
      try {
        setLoading(true);
        const { data } = await API.get('/products');
        if (data && data.length > 0) {
          // Backend data ko local format ke sath map karna
          const formattedProducts = data.map(item => ({
            id: item._id,
            name: item.name,
            category: item.category || "General",
            price: `₹${item.price}`,
            image: item.images?.[0] || "https://via.placeholder.com/400",
            description: item.description,
            tag: item.stock > 0 ? "In Stock" : "Sold Out",
            specifications: ["Authentic Offgrid Product", "Premium Build Quality"]
          }));
          setProducts(formattedProducts);
        }
      } catch (err) {
        console.log("Backend offline or empty, using local mock data:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBackendProducts();
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
      triggerToast("Removed from wishlist");
    } else {
      setWishlist([...wishlist, id]);
      triggerToast("Added to wishlist");
    }
  };

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category?.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Inter',sans-serif] pb-24">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[2000] bg-black text-white px-6 py-3.5 rounded-2xl shadow-2xl text-xs font-semibold tracking-wider uppercase flex items-center gap-2.5 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Category Filter Bar */}
      <section className="pt-12 pb-8 max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-neutral-200 pb-8">
          <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-neutral-500">
            <Filter size={14} /> Explore Catalog ({filteredProducts.length} items):
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-black text-white font-bold shadow-md' 
                    : 'bg-neutral-100 border border-neutral-200 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-12 pt-6">
        {loading ? (
          <div className="text-center py-20 text-neutral-400 uppercase tracking-widest text-xs">Loading collection from backend...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <div 
                key={item.id}
                onClick={() => setQuickViewProduct(item)}
                className="group bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 transition-all duration-500 flex flex-col justify-between shadow-sm cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {item.tag && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-neutral-200 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-neutral-900 shadow-sm">
                        {item.tag}
                      </div>
                    )}

                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(item.id); }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center text-neutral-900 hover:bg-black hover:text-white transition-all cursor-pointer"
                    >
                      <Heart size={16} className={wishlist.includes(item.id) ? "fill-red-500 text-red-500" : ""} />
                    </button>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 block">{item.category}</span>
                        <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-neutral-900 tracking-wide mt-1">{item.name}</h3>
                      </div>
                      <span className="text-lg font-light text-amber-600 font-mono">{item.price}</span>
                    </div>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-neutral-200 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                  <span className="text-[11px] text-amber-600 flex items-center gap-1">
                    <ShieldCheck size={14} /> Authenticity Guaranteed
                  </span>
                  <button 
                    onClick={() => triggerToast(`Added ${item.name} to bag`)}
                    className="text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-amber-600 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Acquire <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white border border-neutral-200 rounded-3xl max-w-4xl w-full overflow-hidden relative grid grid-cols-1 md:grid-cols-2 shadow-2xl">
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
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-600 font-bold">{quickViewProduct.category}</span>
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold">{quickViewProduct.name}</h3>
                <p className="text-3xl font-light text-amber-600 font-mono">{quickViewProduct.price}</p>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">{quickViewProduct.description}</p>

                {quickViewProduct.specifications && (
                  <div className="pt-2 space-y-2 border-t border-neutral-200">
                    <h4 className="text-[11px] uppercase tracking-widest font-semibold text-neutral-500">Specifications:</h4>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {quickViewProduct.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check size={12} className="text-amber-600" /> {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button 
                onClick={() => { triggerToast(`Added ${quickViewProduct.name} to bag`); setQuickViewProduct(null); }}
                className="w-full bg-black text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <ShoppingBag size={16} /> Acquire Item ({quickViewProduct.price})
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}