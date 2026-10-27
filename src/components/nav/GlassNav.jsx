import React, { useState, useEffect } from "react";
import { Plus, ShoppingBag, User, Search, Menu } from "lucide-react";
import MenuPage from "./Menu.jsx";
import ContactPage from "./Contact.jsx";
import CartDrawer from "./CartDrawer.jsx";
import AuthModal from "../../assets/user/AuthModal.jsx";

export function GlassButton({
  icon: IconComponent,
  children,
  pill,
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 sm:gap-2 bg-transparent border-0 text-inherit cursor-pointer font-['Inter',sans-serif] font-semibold text-[11px] sm:text-xs uppercase tracking-wider px-2.5 sm:px-3.5 py-2 rounded-full transition-all duration-300 hover:bg-white/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-current ${
        pill
          ? "bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 sm:px-5 py-2"
          : ""
      } ${className}`}
      {...props}
    >
      {IconComponent && (
        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
      )}
      {children && <span className="hidden md:inline">{children}</span>}
    </button>
  );
}

export function GlassInput(props) {
  return (
    <input
      className="w-full px-4 sm:px-5 py-3 rounded-xl sm:rounded-2xl font-medium text-xs sm:text-sm font-['Inter',sans-serif] bg-white/10 border border-white/20 text-inherit placeholder:text-inherit/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
      {...props}
    />
  );
}

export default function GlassNav({
  brand = "OFFGRID",
  cartItems = [],
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  handleRemoveCartItem,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Agar parent se cartCount nahi aaya toh cartItems se calculate kar lega
  const totalCartCount = cartCount > 0 ? cartCount : cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white backdrop-blur-xl py-2 shadow-lg text-neutral-900"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-3 sm:py-6 text-white"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-10 flex justify-between items-center">
          {/* Left: Contact Button */}
          <div className="flex items-center">
            <GlassButton icon={Plus} onClick={() => setIsContactOpen(true)}>
              Contact Us
            </GlassButton>
          </div>

          {/* Center: Brand Logo */}
          <a
            href="/"
            className="font-['Cormorant_Garamond',serif] font-bold text-xl sm:text-2xl lg:text-3xl tracking-[0.2em] sm:tracking-[0.25em] uppercase text-current no-underline text-center absolute left-1/2 -translate-x-1/2"
          >
            {brand}
          </a>

          {/* Right: Actions */}
          <div className="flex items-center gap-1 sm:gap-3">
            <GlassButton
              icon={ShoppingBag}
              className="relative cursor-pointer p-2 sm:px-3.5 sm:py-2.5"
              onClick={onOpenCart ? onOpenCart : () => setIsCartOpen(true)}
              aria-label="Cart"
            >
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[10px] font-bold grid place-items-center">
                  {totalCartCount}
                </span>
              )}
            </GlassButton>

            <GlassButton
              icon={User}
              className="cursor-pointer p-2 sm:px-3.5 sm:py-2.5"
              onClick={() => setIsUserPanelOpen(true)}
              aria-label="Account"
            />

            <GlassButton
              icon={Search}
              className="p-2 sm:px-3.5 sm:py-2.5"
              aria-label="Search"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setIsMenuOpen(false);
              }}
            />

            <button
              onClick={() => {
                setIsMenuOpen(true);
                setSearchOpen(false);
              }}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-full transition-all group focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span className="text-[11px] sm:text-xs font-['Inter',sans-serif] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] group-hover:tracking-[0.32em] transition-all duration-300 hidden sm:inline">
                Menu
              </span>
              <Menu
                size={18}
                className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Fixed Search Dropdown Overlay */}
      {searchOpen && (
        <div className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 w-[min(92%,600px)] z-[1001] p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-neutral-900/95 border border-white/20 backdrop-blur-2xl shadow-2xl text-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400">
              Search Products
            </span>
            <button
              onClick={() => setSearchOpen(false)}
              className="text-xs underline text-neutral-400 cursor-pointer"
            >
              Close
            </button>
          </div>
          <GlassInput
            placeholder="Search collections, products…"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <div className="mt-4 p-3 bg-white/10 rounded-xl text-xs text-neutral-200">
              Searching for: "{searchQuery}"...
            </div>
          )}
        </div>
      )}

      {/* External Pages & Modals Integration */}
      <MenuPage isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <ContactPage
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
      />
      <AuthModal
        isOpen={isUserPanelOpen}
        onClose={() => setIsUserPanelOpen(false)}
        wishlistCount={wishlistCount}
      />
    </>
  );
}