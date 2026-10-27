import React, { useEffect, useRef } from "react";
import heroImg from "../../pages/home/heroimg.png"; // apni image ka path yahan check kar lena

/* ───────────── Animations (pure CSS, koi extra package nahi) ───────────── */
const HERO_CSS = `
@keyframes hr-kenburns { from { transform: scale(1.18) } to { transform: scale(1) } }
@keyframes hr-curtain  { from { opacity: 1 } to { opacity: 0 } }
@keyframes hr-line {
  from { transform: translateY(108%); opacity: 0; filter: blur(8px) }
  to   { transform: translateY(0);    opacity: 1; filter: blur(0) }
}
@keyframes hr-up   { from { transform: translateY(16px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
@keyframes hr-rule { from { transform: scaleX(0) } to { transform: scaleX(1) } }

.hr-kenburns { animation: hr-kenburns 2.8s cubic-bezier(.22,1,.36,1) both }
.hr-curtain  { animation: hr-curtain 1.4s .1s ease-out both }
.hr-line { display: block; animation: hr-line 1.1s cubic-bezier(.22,1,.36,1) both }
.hr-up   { animation: hr-up .9s cubic-bezier(.22,1,.36,1) both }
.hr-rule { transform-origin: left; animation: hr-rule 1.2s cubic-bezier(.22,1,.36,1) both }

@media (prefers-reduced-motion: reduce) {
  .hr-kenburns, .hr-curtain, .hr-line, .hr-up, .hr-rule { animation: none !important }
  .hr-curtain { opacity: 0 }
}
`;

const Hero = () => {
  const sectionRef = useRef(null);

  // Scroll parallax: CSS variables set hote hain, React re-render nahi hota (smooth rehta hai)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const vh = window.innerHeight;
      const y = window.scrollY;
      // parallax ko 25% viewport par cap kiya, wahi extra image upar rakhi hai (gap nahi dikhega)
      el.style.setProperty("--py", `${Math.min(y * 0.25, vh * 0.25)}px`);
      el.style.setProperty("--p", Math.min(y / vh, 1).toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      // svh = mobile browser ke address bar ke saath bhi sahi height (100vh wahan cut jaata tha)
      className="relative w-full h-screen supports-[height:100svh]:h-[100svh] min-h-[560px] flex items-center justify-start px-5 sm:px-10 lg:px-16 pt-20 sm:pt-24 pb-10 overflow-hidden bg-black"
      style={{ "py": "0px", "--p": 0 }}
    >
      <style>{HERO_CSS}</style>

      {/* 1. Background: parallax wrapper (upar 25vh extra) > Ken Burns image */}
      <div
        className="absolute inset-x-0 -top-[1vh] h-[calc(100%+5vh)] z-0 will-change-transform"
        style={{ transform: "translate3d(0, var(--py), 0)" }}
      >
        <img
          src={heroImg}
          alt="OFFGRID flagship collection"
          className="hr-kenburns w-full h-full object-cover object-[65%_center] sm:object-center"
        />
      </div>

      {/* Overlay: mobile par poori image gehri (text full width), desktop par left se gehra */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/75 via-black/55 to-black/40 sm:via-black/40 sm:to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 z-[1] bg-gradient-to-t from-black/60 to-transparent" />

      {/* Opening curtain */}
      <div className="hr-curtain pointer-events-none absolute inset-0 z-[2] bg-black" />

      {/* 2. Text content */}
      <div
        className="relative z-10 w-full max-w-2xl text-start text-white will-change-transform"
        style={{
          opacity: "calc(1 - var(--p) * 1.5)",
          transform: "translate3d(0, calc(var(--p) * -50px), 0)",
        }}
      >
        <div className="hr-up flex items-center gap-3 sm:gap-4" style={{ animationDelay: "0.7s" }}>
          <span className="hr-rule block h-px w-8 sm:w-12 shrink-0 bg-amber-400" style={{ animationDelay: "0.8s" }} />
          <span className="text-[10px] sm:text-xs lg:text-sm font-semibold tracking-[0.22em] sm:tracking-[0.4em] uppercase text-neutral-200">
            Drop 01 // Archive Validated
          </span>
        </div>

        {/* clamp = screen ke hisaab se size, koi bhi width par line cut/overflow nahi hoti */}
        <h1 className="mt-5 sm:mt-6 font-['Cormorant_Garamond',serif] text-[clamp(2rem,9.5vw,3.25rem)] sm:text-6xl lg:text-7xl font-light tracking-normal sm:tracking-wide uppercase leading-[0.98] break-words">
          <span className="block overflow-hidden py-[0.06em]">
            <span className="hr-line" style={{ animationDelay: "0.9s" }}>Future Silhouettes,</span>
          </span>
          <span className="block overflow-hidden py-[0.06em]">
            <span className="hr-line" style={{ animationDelay: "1.1s" }}>Unapologetic Form</span>
          </span>
        </h1>

        <p
          className="hr-up mt-5 sm:mt-6 max-w-md sm:max-w-xl text-neutral-300 text-[13px] sm:text-sm lg:text-base leading-relaxed font-light"
          style={{ animationDelay: "1.5s" }}
        >
          Redefining modern aesthetics through heavy-weight structural draping and avant-garde
          tailoring. Built for the unapologetic elite.
        </p>
      </div>
    </section>
  );
};

export default Hero;