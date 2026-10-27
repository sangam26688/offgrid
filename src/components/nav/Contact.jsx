import React, { useState, useEffect, useRef } from "react";
import { X, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

/* ───────────── Animations (pure CSS, koi extra package nahi) ───────────── */
const CONTACT_CSS = `
@keyframes ct-backdrop-in  { from { opacity: 0 } to { opacity: 1 } }
@keyframes ct-backdrop-out { from { opacity: 1 } to { opacity: 0 } }
@keyframes ct-panel-in  { from { opacity: 0; transform: translateY(40px) scale(.96) } to { opacity: 1; transform: translateY(0) scale(1) } }
@keyframes ct-panel-out { from { opacity: 1; transform: translateY(0) scale(1) } to { opacity: 0; transform: translateY(24px) scale(.97) } }
@keyframes ct-up   { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }
@keyframes ct-spin { to { transform: rotate(360deg) } }
@keyframes ct-draw { to { stroke-dashoffset: 0 } }
@keyframes ct-ring { from { transform: scale(.6); opacity: .7 } to { transform: scale(1.8); opacity: 0 } }
@keyframes ct-drift { 0%,100% { transform: translate(0,0) scale(1) } 50% { transform: translate(-30px,24px) scale(1.15) } }
@keyframes ct-sheen { from { transform: translateX(-130%) } to { transform: translateX(130%) } }

.ct-backdrop-in  { animation: ct-backdrop-in .4s ease-out both }
.ct-backdrop-out { animation: ct-backdrop-out .35s ease-in both }
.ct-panel-in  { animation: ct-panel-in .7s cubic-bezier(.22,1,.36,1) both }
.ct-panel-out { animation: ct-panel-out .35s cubic-bezier(.55,0,1,.45) both }
.ct-up   { animation: ct-up .7s cubic-bezier(.22,1,.36,1) both }
.ct-spin { animation: ct-spin .8s linear infinite }
.ct-check-circle { stroke-dasharray: 160; stroke-dashoffset: 160; animation: ct-draw .8s .1s cubic-bezier(.65,0,.35,1) forwards }
.ct-check-tick   { stroke-dasharray: 40;  stroke-dashoffset: 40;  animation: ct-draw .5s .75s cubic-bezier(.65,0,.35,1) forwards }
.ct-ring { animation: ct-ring 1.4s .6s ease-out both }
.ct-blob { animation: ct-drift 14s ease-in-out infinite }
.ct-btn:hover .ct-btn-sheen { animation: ct-sheen .9s ease-out }

@media (prefers-reduced-motion: reduce) {
  .ct-backdrop-in, .ct-backdrop-out, .ct-panel-in, .ct-panel-out, .ct-up,
  .ct-ring, .ct-blob, .ct-btn:hover .ct-btn-sheen { animation: none !important }
  .ct-check-circle, .ct-check-tick { animation: none !important; stroke-dashoffset: 0 }
}
`;

/* Floating-label field: label upar uthta hai aur focus par niche line slide hoti hai */
function Field({ as: Tag = "input", label, delay = 0, className = "", ...props }) {
  return (
    <div className={`ct-up relative ${className}`} style={{ animationDelay: `${delay}s` }}>
      <Tag
        {...props}
        placeholder=" "
        className="peer w-full px-4 pt-6 pb-2.5 rounded-xl border border-neutral-200 bg-neutral-50/60 text-sm text-neutral-900 focus:outline-none focus:bg-white focus:border-neutral-300 transition-colors duration-300 resize-none"
      />
      <label className="pointer-events-none absolute left-4 top-4 origin-left text-xs text-neutral-400 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:top-2 peer-focus:scale-[.8] peer-focus:text-amber-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-[.8]">
        {label}
      </label>
      <span className="pointer-events-none absolute left-3 right-3 bottom-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:scale-x-100" />
    </div>
  );
}

export default function ContactPage({ isOpen, onClose }) {
  const [rendered, setRendered] = useState(isOpen);
  const [closing, setClosing] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timers = useRef([]);

  const later = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  };
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // Mount / unmount with exit animation
  useEffect(() => {
    if (isOpen) {
      setRendered(true);
      setClosing(false);
    } else if (rendered) {
      setClosing(true);
      later(() => {
        setRendered(false);
        setClosing(false);
        setSending(false);
        setSubmitted(false);
      }, 350);
    }
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

  // agar isOpen false hai aur exit animation bhi khatam, to kuch render nahi hoga
  if (!rendered) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    later(() => {
      setSending(false);
      setSubmitted(true);
      later(() => onClose?.(), 2800);
    }, 1200);
  };

  const info = [
    { icon: Mail, text: "concierge@offgrid.studio" },
    { icon: Phone, text: "+91 800 990 6343" },
    { icon: MapPin, text: "Paris / Tokyo / Delhi" },
  ];

  return (
    <>
      <style>{CONTACT_CSS}</style>
      <div
        className={`fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md ${
          closing ? "ct-backdrop-out" : "ct-backdrop-in"
        }`}
        onMouseDown={(e) => e.target === e.currentTarget && onClose?.()}
        role="dialog"
        aria-modal="true"
        aria-label="Client concierge contact form"
      >
        <div
          className={`relative w-full max-w-2xl max-h-[92vh] overflow-y-auto overflow-x-hidden bg-white text-neutral-900 rounded-3xl p-8 sm:p-12 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] ${
            closing ? "ct-panel-out" : "ct-panel-in"
          }`}
        >
          {/* soft drifting amber glow (ek hi decorative cheez) */}
          <div className="ct-blob pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />

          <button
            onClick={onClose}
            aria-label="Close"
            className="group absolute top-6 right-6 z-10 p-2 rounded-full bg-neutral-100 hover:bg-black hover:text-white active:scale-90 transition-all duration-300 cursor-pointer"
          >
            <X size={20} className="transition-transform duration-500 group-hover:rotate-180" />
          </button>

          {submitted ? (
            <div className="relative text-center py-12 space-y-5">
              <div className="relative mx-auto h-20 w-20">
                <span className="ct-ring absolute inset-0 rounded-full border-2 border-amber-400" />
                <svg viewBox="0 0 52 52" className="relative h-20 w-20" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle className="ct-check-circle" cx="26" cy="26" r="24" stroke="#d97706" strokeWidth="2" />
                  <path className="ct-check-tick" d="M15 27l8 8 14-16" stroke="#d97706" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="ct-up font-['Cormorant_Garamond',serif] text-3xl font-bold" style={{ animationDelay: ".9s" }}>
                Message sent
              </h3>
              <p className="ct-up text-xs text-neutral-500" style={{ animationDelay: "1.05s" }}>
                Our concierge team will reply to you shortly.
              </p>
            </div>
          ) : (
            <div className="relative space-y-7">
              <div>
                <span className="ct-up block text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-400" style={{ animationDelay: ".15s" }}>
                  Get in touch
                </span>
                <h2 className="ct-up text-3xl sm:text-4xl font-['Cormorant_Garamond',serif] font-bold mt-1" style={{ animationDelay: ".22s" }}>
                  Client Concierge
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Your name" type="text" required delay={0.3} autoComplete="name" />
                  <Field label="Your email" type="email" required delay={0.38} autoComplete="email" />
                </div>
                <Field as="textarea" rows={4} label="How can we help?" required delay={0.46} />

                <button
                  type="submit"
                  disabled={sending}
                  className="ct-btn ct-up group relative w-full overflow-hidden bg-black text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 hover:tracking-[0.28em] active:scale-[.98] disabled:cursor-wait transition-all duration-500 cursor-pointer"
                  style={{ animationDelay: ".54s" }}
                >
                  <span className="ct-btn-sheen pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[130%]" />
                  <span className="relative inline-flex items-center justify-center gap-2">
                    {sending ? (
                      <>
                        <span className="ct-spin h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>
              </form>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-neutral-100 text-[11px] text-neutral-500">
                {info.map(({ icon: Icon, text }, i) => (
                  <div
                    key={text}
                    className="ct-up group flex items-center gap-2 transition-colors duration-300 hover:text-neutral-900"
                    style={{ animationDelay: `${0.62 + i * 0.08}s` }}
                  >
                    <Icon size={14} className="text-amber-600 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}