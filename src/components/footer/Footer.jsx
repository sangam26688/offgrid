import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowUp, Check } from "lucide-react";
import { FaInstagram, FaYoutube, FaPinterest, FaXTwitter } from "react-icons/fa6";

/* ───────────── Animations (pure CSS, koi extra package nahi) ───────────── */
const FOOTER_CSS = `
.ft-item   { opacity: 0; transform: translateY(24px); transition: opacity .9s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.22,1,.36,1) }
.ft-seen .ft-item { opacity: 1; transform: translateY(0) }

.ft-rule { transform: scaleX(0); transform-origin: left; transition: transform 1.2s cubic-bezier(.22,1,.36,1) }
.ft-seen .ft-rule { transform: scaleX(1) }

/* Giant wordmark: letters neeche se uthte hain, hover par amber fill aata hai */
.ft-mask   { overflow: hidden; padding: .04em 0 }
.ft-letter {
  display: inline-block; transform: translateY(105%);
  color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,.16);
  transition: transform 1.2s cubic-bezier(.22,1,.36,1), color .5s ease, -webkit-text-stroke-color .5s ease;
}


@keyframes ft-pop  { 0% { transform: scale(.4); opacity: 0 } 60% { transform: scale(1.15) } 100% { transform: scale(1); opacity: 1 } }
@keyframes ft-spin { to { transform: rotate(360deg) } }
@keyframes ft-shake { 0%,100% { transform: translateX(0) } 20%,60% { transform: translateX(-6px) } 40%,80% { transform: translateX(6px) } }
@keyframes ft-glow { 0%,100% { opacity: .5; transform: scale(1) } 50% { opacity: .9; transform: scale(1.15) } }
@keyframes ft-sheen { from { transform: translateX(-130%) } to { transform: translateX(130%) } }

.ft-pop   { animation: ft-pop .5s cubic-bezier(.34,1.56,.64,1) both }
.ft-spin  { animation: ft-spin .8s linear infinite }
.ft-shake { animation: ft-shake .45s ease }
.ft-glow  { animation: ft-glow 8s ease-in-out infinite }
.ft-btn:hover .ft-sheen { animation: ft-sheen .8s ease-out }

@media (prefers-reduced-motion: reduce) {
  .ft-item, .ft-rule, .ft-letter { opacity: 1; transform: none !important; transition: none }
  .ft-pop, .ft-spin, .ft-shake, .ft-glow, .ft-btn:hover .ft-sheen { animation: none !important }
}
`;

const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
  { href: "https://youtube.com", label: "YouTube", icon: FaYoutube },
  { href: "https://twitter.com", label: "Twitter / X", icon: FaXTwitter },
  { href: "https://pinterest.com", label: "Pinterest", icon: FaPinterest },
];

const APPAREL = [
  ["Women's Fashion", "#Womens-Fashion"],
  ["Men's Fashion", "#Mens-Fashion"],
  ["Kids & Baby", "#Kids-Baby"],
  ["Haute Couture", "#Haute-Couture"],
  ["What's New", "#Whats-New"],
];

const BOUTIQUE = [
  ["Bags", "#bags"],
  ["Jewelry & Timepieces", "#jewelry-timepieces"],
  ["Gifts & Curated Sets", "#gifts"],
  ["Bespoke Orders", "#bespoke"],
];

const CARE = [
  ["Client Care", "/client"], // pehle "client" tha (relative), kisi bhi nested route par toot jaata tha
  ["Global Shipping & Returns", "#shipping"],
  ["Track Order", "#track-order"],
  ["Privacy Policy", "/privacy"],
];

/* Link: hover par halka aage khisakta hai + amber underline slide hoti hai */
function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-block transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white hover:translate-x-1.5"
    >
      {children}
      <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-amber-400 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
    </a>
  );
}

const Footer = ({ brand = "OFFGRID", onSubscribe }) => {
  const footerRef = useRef(null);
  const [seen, setSeen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const timer = useRef(null);

  // Footer viewport mein aate hi sab kuch stagger se reveal hota hai
  useEffect(() => {
    const el = footerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return setSeen(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleJoin = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setStatus("error");
      timer.current = setTimeout(() => setStatus("idle"), 1800);
      return;
    }
    setStatus("sending");
    try {
      // Backend ho to onSubscribe prop se jodo, warna 1 sec ka fake delay
      if (onSubscribe) await onSubscribe(email.trim());
      else await new Promise((r) => setTimeout(r, 1000));
      setStatus("done");
      setEmail("");
      timer.current = setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      timer.current = setTimeout(() => setStatus("idle"), 2500);
    }
  };

  const d = (n) => ({ transitionDelay: `${n}s` });

  return (
    <footer
      ref={footerRef}
      className={`relative w-full overflow-hidden bg-[#0a0a0a] text-neutral-200 pt-20 sm:pt-24 pb-8 px-5 sm:px-10 lg:px-20 border-t border-neutral-900 font-['Inter',sans-serif] ${
        seen ? "ft-seen" : ""
      }`}
    >
      <style>{FOOTER_CSS}</style>

      {/* soft amber glow (ek hi decorative cheez) */}
      <div className="ft-glow pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 pb-14 sm:pb-16">
        {/* 1. Brand + socials */}
        <div className="sm:col-span-2 lg:col-span-4 space-y-6">
          <h2 className="ft-item font-['Cormorant_Garamond',serif] text-3xl font-bold tracking-[0.3em] uppercase text-white" style={d(0.05)}>
            {brand}
          </h2>
          <p className="ft-item text-neutral-400 text-sm leading-relaxed max-w-sm" style={d(0.12)}>
            Redefining modern luxury e-commerce. Uncompromising artisanal craftsmanship, exclusive high-fashion collections, and timeless elegance for the global wardrobe.
          </p>

          <div className="ft-item space-y-3 pt-2" style={d(0.2)}>
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-400 block">
              Official Social Channels
            </span>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-black hover:bg-amber-400 hover:border-amber-400 hover:-translate-y-1 hover:shadow-[0_10px_25px_-8px_rgba(251,191,36,0.6)] active:scale-90 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  <Icon size={18} className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Apparel */}
        <div className="lg:col-span-2 space-y-5">
          <h4 className="ft-item text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-400" style={d(0.1)}>
            Apparel &amp; Lines
          </h4>
          <ul className="space-y-3.5 text-sm text-neutral-300">
            {APPAREL.map(([name, href], i) => (
              <li key={name} className="ft-item" style={d(0.16 + i * 0.05)}>
                <FooterLink href={href}>{name}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Boutique */}
        <div className="lg:col-span-2 space-y-5">
          <h4 className="ft-item text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-400" style={d(0.15)}>
            Boutique
          </h4>
          <ul className="space-y-3.5 text-sm text-neutral-300">
            {BOUTIQUE.map(([name, href], i) => (
              <li key={name} className="ft-item" style={d(0.21 + i * 0.05)}>
                <FooterLink href={href}>{name}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Newsletter */}
        <div className="sm:col-span-2 lg:col-span-4 space-y-5">
          <h4 className="ft-item text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-400" style={d(0.2)}>
            Private Access
          </h4>
          <p className="ft-item text-sm text-neutral-400 leading-relaxed" style={d(0.27)}>
            Subscribe to receive private invitations to seasonal drops across women, men, kids, and haute couture collections.
          </p>

          <form
            onSubmit={handleJoin}
            noValidate
            className={`ft-item relative flex items-center bg-neutral-900 border rounded-full overflow-hidden p-1.5 transition-all duration-500 ${
              status === "error"
                ? "ft-shake border-red-500/70"
                : "border-neutral-800 focus-within:border-amber-400/70 focus-within:shadow-[0_0_0_4px_rgba(251,191,36,0.08)]"
            }`}
            style={d(0.34)}
          >
            {status === "done" ? (
              <div className="ft-pop flex w-full items-center justify-center gap-2 py-2.5 text-sm text-amber-300">
                <Check size={16} /> You're on the list
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={status === "error" ? "Enter a valid email" : "Enter your email address"}
                  aria-label="Email address"
                  autoComplete="email"
                  className="w-full min-w-0 bg-transparent px-4 py-2 text-sm text-white focus:outline-none placeholder:text-neutral-600"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="ft-btn group relative shrink-0 overflow-hidden bg-white text-black px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-300 transition-all duration-300 active:scale-95 disabled:cursor-wait cursor-pointer flex items-center gap-1"
                >
                  <span className="ft-sheen pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-[130%]" />
                  {status === "sending" ? (
                    <span className="ft-spin relative h-3.5 w-3.5 rounded-full border-2 border-black/25 border-t-black" />
                  ) : (
                    <>
                      <span className="relative">Join</span>
                      <ArrowUpRight size={14} className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Divider (khud draw hoti hai) */}
      <div className="ft-rule relative max-w-[1500px] mx-auto h-px bg-neutral-800/70" />

      {/* Client care row */}
      <div className="relative max-w-[1500px] mx-auto py-8 flex flex-col md:flex-row gap-5 md:gap-6 md:items-center justify-between text-xs text-neutral-400">
        <div className="flex flex-wrap gap-x-6 gap-y-3 uppercase tracking-wider">
          {CARE.map(([name, href], i) => (
            <span key={name} className="ft-item" style={d(0.1 + i * 0.05)}>
              <FooterLink href={href}>{name}</FooterLink>
            </span>
          ))}
        </div>
        <div className="ft-item uppercase tracking-widest text-neutral-500 text-[11px]" style={d(0.3)}>
          {brand} Official Store
        </div>
      </div>

      <div className="ft-rule relative max-w-[1500px] mx-auto h-px bg-neutral-900" />

      {/* Giant wordmark: footer ka ek yaadgaar moment */}
      <div className="relative max-w-[1500px] mx-auto py-10 sm:py-12 flex items-center justify-center">
        <h2 className="ft-mask text-[9.5rem] sm:text-[6.5rem] md:text-[7.5rem] lg:text-[8.5rem] font-['Cormorant_Garamond',serif] font-bold uppercase tracking-[0.5em] text-white">
          {brand}
        </h2>
      </div>

      {/* Bottom bar */}
      <div className="relative max-w-[1500px] mx-auto pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-5 text-xs text-neutral-500 tracking-widest">
        <p className="ft-item text-center" style={d(0.2)}>
          © {new Date().getFullYear()} {brand}. All rights reserved.
        </p>
        <p className="ft-item uppercase font-medium text-[11px] text-center" style={d(0.28)}>
          Designed for the Uncompromising
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="ft-item group inline-flex items-center gap-2 uppercase text-[11px] font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
          style={d(0.36)}
        >
          Top
          <span className="grid h-8 w-8 place-items-center rounded-full border border-neutral-800 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500">
            <ArrowUp size={14} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;