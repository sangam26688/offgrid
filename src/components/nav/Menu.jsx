import React, { useState, useEffect, useRef } from "react";
import { X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Gifts", href: "/gifts" },
  { name: "Women", href: "/women" },
  { name: "Men", href: "/men" },
  { name: "New In", href: "/new-in" },
  { name: "Kids", href: "/kids" },
  { name: "Travel", href: "/travel" },
  { name: "Jewellery & Watches", href: "/luxury" },
  { name: "Fragrances and Makeup", href: "/fragrance" },
  { name: "Décor & Lifestyle", href: "/decor" },
];

/* ───────────── Animations (pure CSS, koi extra package nahi) ───────────── */
const MENU_CSS = `
@keyframes mn-fade-in  { from { opacity: 0 } to { opacity: 1 } }
@keyframes mn-fade-out { from { opacity: 1 } to { opacity: 0 } }
@keyframes mn-drawer-in  { from { transform: translateX(100%) } to { transform: translateX(0) } }
@keyframes mn-drawer-out { from { transform: translateX(0) } to { transform: translateX(100%) } }
@keyframes mn-reveal { from { transform: translateY(105%); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
@keyframes mn-up     { from { transform: translateY(14px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
@keyframes mn-line   { from { transform: scaleX(0) } to { transform: scaleX(1) } }
@keyframes mn-sheen  { from { transform: translateX(-130%) } to { transform: translateX(130%) } }

// .mn-fade-in  { animation: mn-fade-in .4s ease-out both }
.mn-fade-out { animation: mn-fade-out .4s ease-in both }
.mn-drawer-in  { animation: mn-drawer-in .65s cubic-bezier(.22,1,.36,1) both }
.mn-drawer-out { animation: mn-drawer-out .4s cubic-bezier(.55,0,1,.45) both }
.mn-reveal { display: block; animation: mn-reveal .8s cubic-bezier(.22,1,.36,1) both }
.mn-up     { animation: mn-up .6s cubic-bezier(.22,1,.36,1) both }
.mn-line   { transform-origin: left; animation: mn-line .9s .25s cubic-bezier(.22,1,.36,1) both }
.mn-cta:hover .mn-cta-sheen { animation: mn-sheen .9s ease-out }

@media (prefers-reduced-motion: reduce) {
  .mn-fade-in, .mn-fade-out, .mn-drawer-in, .mn-drawer-out, .mn-reveal, .mn-up, .mn-line,
  .mn-cta:hover .mn-cta-sheen { animation: none !important }
}
`;

export default function MenuPage({ isOpen, onClose }) {
  const [rendered, setRendered] = useState(isOpen);
  const [closing, setClosing] = useState(false);
  const timer = useRef(null);
  const { pathname } = useLocation();

  // Mount / unmount with exit animation
  useEffect(() => {
    clearTimeout(timer.current);
    if (isOpen) {
      setRendered(true);
      setClosing(false);
    } else if (rendered) {
      setClosing(true);
      timer.current = setTimeout(() => {
        setRendered(false);
        setClosing(false);
      }, 400);
    }
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Esc to close + background scroll lock
  useEffect(() => {
    if (!rendered) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [rendered, onClose]);

  if (!rendered) return null;

  return (
    <>
      <style>{MENU_CSS}</style>
      <div
        className={`fixed inset-0 z-[1001] flex justify-end bg-black/60 backdrop-blur-md ${
          closing ? "mn-fade-out" : "mn-fade-in"
        }`}
        onMouseDown={(e) => e.target === e.currentTarget && onClose?.()}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <aside
          className={`relative h-full w-full sm:w-[420px] bg-white text-neutral-900 shadow-[-30px_0_80px_-20px_rgba(0,0,0,0.5)] flex flex-col justify-between p-8 sm:p-10 overflow-y-auto ${
            closing ? "mn-drawer-out" : "mn-drawer-in"
          }`}
        >
          {/* Header */}
          <div className="relative pb-4">
            <div className="flex justify-between items-center">
              <span
                className="mn-up text-[10px] font-['Inter',sans-serif] uppercase tracking-[0.3em] font-bold"
                style={{ animationDelay: ".3s" }}
              >
                Navigation Directory
              </span>
              <button
                onClick={onClose}
                className="group p-2 rounded-full hover:bg-neutral-100 active:scale-90 transition-all duration-300 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} className="transition-transform duration-500 group-hover:rotate-180" />
              </button>
            </div>
            {/* divider draws itself */}
            <div className="mn-line absolute left-0 bottom-0 h-px w-full bg-neutral-200" />
          </div>

          {/* Links: baaki dim ho jaate hain, hovered link focus mein rehta hai */}
          <nav className="group/list flex flex-col gap-5 sm:gap-6 my-auto py-8" aria-label="Main">
            {navLinks.map((link, i) => {
              const active = pathname === link.href;
              return (
                <div key={link.name} className="overflow-hidden">
                  <Link
                    to={link.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    style={{ animationDelay: `${0.2 + i * 0.055}s` }}
                    className={`mn-reveal group relative flex items-center justify-between no-underline text-neutral-900 font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl tracking-wider transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:pl-3 group-hover/list:opacity-30 hover:!opacity-100 ${
                      active ? "" : "opacity-80"
                    }`}
                  >
                    <span className="relative inline-flex items-center gap-3">
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />}
                      {link.name}
                      <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-amber-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                    </span>
                    <ChevronRight
                      size={22}
                      className="text-amber-600 -translate-x-3 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="pt-6 flex flex-col gap-4">
            <Link
              to="/"
              onClick={onClose}
              style={{ animationDelay: `${0.25 + navLinks.length * 0.055}s` }}
              className="mn-cta mn-up group relative w-full overflow-hidden text-center bg-black text-white py-4 rounded-full font-['Inter',sans-serif] font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-neutral-800 hover:tracking-[0.28em] active:scale-95 transition-all duration-500 cursor-pointer no-underline"
            >
              <span className="mn-cta-sheen pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[130%]" />
              <span className="relative">Explore Collection</span>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}