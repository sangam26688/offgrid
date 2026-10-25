import React, { useState, useEffect } from "react";
import { Plus, ShoppingBag, User, Search, Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function GlassButton({ icon: IconComponent, children, pill, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-2 bg-transparent border-0 text-inherit cursor-pointer font-['Inter',sans-serif] font-semibold text-xs uppercase tracking-wider px-3.5 py-2.5 rounded-full transition-all duration-300 hover:bg-white/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-current ${
        pill ? "bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-5 py-2.5" : ""
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
      className="w-full px-5 py-3.5 rounded-2xl font-medium text-sm font-['Inter',sans-serif] bg-white/10 border border-white/20 text-inherit placeholder:text-inherit/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
      {...props}
    />
  );
}

export default function GlassNav({
  brand = "OFFGRID", // <-- CAPITAL BRAND NAME
  cartCount = 0,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // 👉 Image ke exact categories aur sub-menu structure ke sath
  const navLinks = [
    { name: "Gifts", href: "gifts", hasSub: false },
    { name: "Women", href: "women", hasSub: false },
    { name: "Men", href: "men", hasSub: false },
    { name: "New In", href: "NewIn", hasSub: false },
    { name: "Kids", href: "Kids", hasSub: false },
    { name: "Travel", href: "Travel", hasSub: false },
    { name: "Jewellery & Watches", href: "JewelryWatchesPage", hasSub: false },
    { name: "Fragrances and Makeup", href: "Fragrance", hasSub: false },
    { name: "Décor & Lifestyle", href: "decor", hasSub: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && (setIsMenuOpen(false), setSearchOpen(false));
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeAll = () => {
    setIsMenuOpen(false);
    setSearchOpen(false);
    setActiveSubMenu(null);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[999] will-change-transform transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white backdrop-blur-xl py-2 shadow-lg border-b border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-10"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent  md:py-6 text-white"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 flex justify-between items-center">
          
          <div className="flex items-center gap-2">
            <GlassButton icon={Plus}>Contact Us</GlassButton>
          </div>

          <a
            href="/"
            className="font-['Cormorant_Garamond',serif] font-bold text-2xl sm:text-3xl tracking-[0.25em] uppercase text-current no-underline transition-transform active:scale-95"
            aria-label={brand}
          >
            {brand}
          </a>

          <div className="flex items-center gap-2 sm:gap-5">
            <GlassButton icon={ShoppingBag} className="max-sm:hidden relative" aria-label="Cart">
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-current text-background text-[10px] font-bold grid place-items-center">
                  {cartCount}
                </span>
              )}
            </GlassButton>
            
            <GlassButton icon={User} className="max-sm:hidden" aria-label="Account" />

            <GlassButton
              icon={Search}
              aria-label="Search"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setIsMenuOpen(false);
              }}
            />

            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setSearchOpen(false);
              }}
              className="flex items-center gap-2.5 px-3 py-2 rounded-full transition-all group focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span className="text-xs font-['Inter',sans-serif] font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.32em] transition-all duration-300">
                Menu
              </span>
              <Menu size={20} className="transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </nav>

      <div
        onClick={closeAll}
        className={`fixed inset-0  backdrop-blur-md z-[1000] transition-opacity duration-500 ease-in-out ${
          isMenuOpen || searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 w-[min(600px,calc(100%-32px))] z-[1001] transition-all duration-300 ease-out p-6 rounded-3xl dark:bg-neutral-900/80 border border-white/20 backdrop-blur-2xl shadow-2xl ${
          searchOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <GlassInput placeholder="Search collections, products…" autoFocus={searchOpen} />
      </div>

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[460px] z-[1001] backdrop-blur-2xl bg-white/80  shadow-2xl transition-transform duration-500 ease-in-out flex flex-col justify-between p-8 sm:p-12 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center pb-2 ">
          <span className="text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.3em] font-bold ">
            Navigation Directory
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full  transition-all active:scale-90 cursor-pointer"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-6 my-auto py-8">
          {navLinks.map((link, index) => (
            <div key={link.name} className="group">
              <a
                href={link.href}
                onClick={(e) => {
                  if (link.hasSub) {
                    e.preventDefault();
                    setActiveSubMenu(activeSubMenu === link.name ? null : link.name);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
                className="relative font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl tracking-wider transition-all duration-300 flex items-center justify-between no-underline opacity-70 hover:opacity-100 hover:pl-2 text-current"
              >
                <span>{link.name}</span>
                <span className="flex items-center gap-2">
                  {link.hasSub && (
                    <ChevronRight 
                      size={20} 
                      className={`transition-transform duration-300 ${activeSubMenu === link.name ? "rotate-90" : ""}`} 
                    />
                  )}
                  <span className="text-xs font-['Inter',sans-serif] tracking-widest opacity-40 group-hover:opacity-80 transition-opacity">
                    0{index + 1}
                  </span>
                </span>
              </a>

              {/* Sub-menu items slide down when clicked */}
              {link.hasSub && activeSubMenu === link.name && link.subItems && (
                <div className="flex flex-col gap-2 mt-3 pl-4 border-l border-current/20">
                  {link.subItems.map((sub) => (
                    <a
                      key={sub}
                      href={`#${sub.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xs font-['Inter',sans-serif] uppercase tracking-wider text-neutral-500 transition-colors py-1"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-6  flex flex-col gap-4">
          <button className="w-full bg-current text-background py-4 rounded-full font-['Inter',sans-serif] font-bold text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all cursor-pointer">
            Explore Collection
          </button>
        </div>
      </aside>
    </>
  );
}