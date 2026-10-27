import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Headphones, ChevronDown, Mail, Phone, Search, Sparkles, ArrowUpRight, X } from "lucide-react";
import { CLIENT_CARE_FAQS, SUPPORT_TOPICS } from "./ClientCareData.js";

/* ───────────── Animations (pure CSS, koi extra package nahi) ───────────── */
const CARE_CSS = `
@keyframes cc-up   { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }
@keyframes cc-fade { from { opacity: 0 } to { opacity: 1 } }
@keyframes cc-rule { from { transform: scaleX(0) } to { transform: scaleX(1) } }
@keyframes cc-toast {
  0%   { opacity: 0; transform: translateY(24px) scale(.96) }
  8%   { opacity: 1; transform: translateY(0) scale(1) }
  90%  { opacity: 1; transform: translateY(0) scale(1) }
  100% { opacity: 0; transform: translateY(12px) scale(.98) }
}
@keyframes cc-progress { from { transform: scaleX(1) } to { transform: scaleX(0) } }
@keyframes cc-drift { 0%,100% { transform: translate(0,0) scale(1) } 50% { transform: translate(-40px,20px) scale(1.2) } }
@keyframes cc-sheen { from { transform: translateX(-130%) } to { transform: translateX(130%) } }
@keyframes cc-pulse { 0% { box-shadow: 0 0 0 0 rgba(217,119,6,.45) } 100% { box-shadow: 0 0 0 10px rgba(217,119,6,0) } }

.cc-up   { animation: cc-up .8s cubic-bezier(.22,1,.36,1) both }
.cc-fade { animation: cc-fade .5s ease-out both }
.cc-rule { transform-origin: left; animation: cc-rule 1s cubic-bezier(.22,1,.36,1) both }
.cc-toast { animation: cc-toast 3s cubic-bezier(.22,1,.36,1) both }
.cc-progress { transform-origin: left; animation: cc-progress 3s linear both }
.cc-blob { animation: cc-drift 16s ease-in-out infinite }
.cc-pulse { animation: cc-pulse 2s ease-out infinite }
.cc-btn:hover .cc-sheen { animation: cc-sheen .9s ease-out }

.cc-reveal { opacity: 0; transform: translateY(28px); transition: opacity .9s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.22,1,.36,1) }
.cc-reveal.cc-in { opacity: 1; transform: translateY(0) }

@media (prefers-reduced-motion: reduce) {
  .cc-up, .cc-fade, .cc-rule, .cc-toast, .cc-progress, .cc-blob, .cc-pulse, .cc-btn:hover .cc-sheen { animation: none !important }
  .cc-reveal { opacity: 1; transform: none; transition: none }
}
`;

/* Scroll-reveal: element viewport mein aate hi smoothly dikhta hai */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setSeen(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`cc-reveal ${seen ? "cc-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function ClientCarePage({ onBackToHome, brand = "OFFGRID" }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState(null); // { msg, id }
  const toastTimer = useRef(null);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const triggerToast = (msg) => {
    clearTimeout(toastTimer.current);
    setToast({ msg, id: Date.now() }); // naya id = animation dobara chalta hai
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  };

  const q = searchQuery.trim().toLowerCase();
  const filteredFaqs = CLIENT_CARE_FAQS.filter(
    (faq) => faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Inter',sans-serif] selection:bg-neutral-200 selection:text-black pb-16">
      <style>{CARE_CSS}</style>

      {/* Toast */}
      {toast && (
        <div
          key={toast.id}
          role="status"
          className="cc-toast fixed bottom-6 right-6 z-[2000] overflow-hidden bg-black text-white pl-6 pr-7 py-3.5 rounded-2xl shadow-2xl text-xs font-semibold tracking-wider uppercase flex items-center gap-2.5"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toast.msg}</span>
          <span className="cc-progress absolute left-0 bottom-0 h-[2px] w-full bg-amber-400" />
        </div>
      )}

      {/* 1. Header */}
      <div className="relative max-w-4xl mx-auto px-4 py-8 sm:py-12 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="cc-fade group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-black transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Store
        </button>
        <span className="cc-fade text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold" style={{ animationDelay: ".15s" }}>
          {brand} Support
        </span>
        <span className="cc-rule absolute left-4 right-4 bottom-0 h-px bg-neutral-200" style={{ animationDelay: ".2s" }} />
      </div>

      {/* 2. Hero */}
      <section className="relative max-w-4xl mx-auto px-4 pt-10 pb-8 text-center space-y-3">
        <div className="cc-blob pointer-events-none absolute left-1/2 top-0 -z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl" />

        <div
          className="cc-up relative inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase bg-neutral-100 px-3 py-1 rounded-full text-neutral-700"
          style={{ animationDelay: ".25s" }}
        >
          <span className="cc-pulse h-1.5 w-1.5 rounded-full bg-amber-600" />
          <Headphones size={12} className="text-amber-600" /> 24/7 Global Concierge
        </div>

        <h1
          className="cc-up relative font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl font-bold tracking-tight"
          style={{ animationDelay: ".38s" }}
        >
          Client Care &amp; Support
        </h1>

        <p
          className="cc-up relative text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto font-light leading-relaxed"
          style={{ animationDelay: ".5s" }}
        >
          How can we assist your {brand} experience today? Explore our dedicated guides or connect directly with our atelier concierges.
        </p>

        {/* Search */}
        <div className="cc-up relative max-w-md mx-auto pt-4" style={{ animationDelay: ".62s" }}>
          <div className="group relative flex items-center">
            <Search size={16} className="absolute left-4 text-neutral-400 transition-colors duration-300 group-focus-within:text-amber-600" />
            <input
              type="text"
              placeholder="Search questions (e.g. shipping, returns)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenFaq(null);
              }}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-full pl-11 pr-10 py-3 text-xs text-neutral-900 focus:outline-none focus:border-black focus:bg-white focus:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] transition-all duration-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="cc-fade absolute right-3 p-1 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 space-y-12">
        {/* 3. Topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {SUPPORT_TOPICS.map((topic, idx) => (
            <Reveal key={topic.title ?? idx} delay={idx * 0.08}>
              <button
                type="button"
                onClick={() => triggerToast(`Opening ${topic.title} portal`)}
                className="group relative h-full w-full text-left bg-neutral-50 border border-neutral-200 rounded-2xl p-5 space-y-2 overflow-hidden hover:border-black hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)] active:scale-[.98] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer"
              >
                <span className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-amber-500 to-amber-300 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-900">{topic.title}</h4>
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-neutral-400 transition-all duration-500 group-hover:text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">{topic.desc}</p>
              </button>
            </Reveal>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-6 pt-6">
          <Reveal>
            <div className="relative pb-4 flex items-end justify-between gap-4">
              <div>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold">Frequently Asked Questions</h3>
                <p className="text-xs text-neutral-500 font-light">Quick answers to common inquiries.</p>
              </div>
              {q && (
                <span key={filteredFaqs.length} className="cc-fade text-[11px] text-neutral-400">
                  {filteredFaqs.length} {filteredFaqs.length === 1 ? "result" : "results"}
                </span>
              )}
              <span className="absolute left-0 bottom-0 h-px w-full bg-neutral-200" />
            </div>
          </Reveal>

          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <p className="cc-up text-xs text-neutral-500 text-center py-8">
                No matching questions found. Contact our concierge below.
              </p>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const id = faq.id ?? faq.question; // index ki jagah stable id: filter karne par galat FAQ open nahi hoga
                const isOpen = openFaq === id;
                return (
                  <div
                    key={id}
                    className={`cc-up relative border rounded-2xl overflow-hidden transition-all duration-500 ${
                      isOpen
                        ? "border-neutral-900 bg-white shadow-[0_14px_40px_-20px_rgba(0,0,0,0.35)]"
                        : "border-neutral-200 bg-neutral-50/50 hover:border-neutral-400"
                    }`}
                    style={{ animationDelay: `${Math.min(idx, 8) * 0.05}s` }}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-amber-500 transition-transform duration-500 ${
                        isOpen ? "scale-y-100" : "scale-y-0"
                      }`}
                    />
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : id)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left text-xs sm:text-sm font-semibold text-neutral-900 hover:bg-neutral-100/70 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={16}
                        className={`shrink-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen ? "rotate-180 text-amber-600" : "text-neutral-500"
                        }`}
                      />
                    </button>
                    {/* smooth height animation: grid-rows 0fr -> 1fr */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-4 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-200/60 pt-3">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Contact banner */}
        <Reveal>
          <div className="relative overflow-hidden bg-neutral-900 text-white rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center shadow-xl">
            <div className="cc-blob pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />

            <div className="relative space-y-2 md:col-span-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400">Direct Assistance</span>
              <h4 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold">
                Still need personal assistance?
              </h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Our styling and support concierges are available 24 hours a day across Paris, Tokyo, and New Delhi.
              </p>
            </div>

            <div className="relative flex flex-col gap-3">
              <a
                href="mailto:concierge@offgrid.studio"
                className="cc-btn group relative overflow-hidden bg-white text-black px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-200 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center no-underline"
              >
                <span className="cc-sheen pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/60 to-transparent -translate-x-[130%]" />
                <Mail size={14} className="relative transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                <span className="relative">Email Concierge</span>
              </a>
              <a
                href="tel:+918009906343"
                className="group border border-neutral-700 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-800 hover:border-amber-400/60 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center no-underline"
              >
                <Phone size={14} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                Call Support
              </a>
            </div>
          </div>
        </Reveal>
      </main>
    </div>
  );
}