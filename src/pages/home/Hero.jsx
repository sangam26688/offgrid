import React from 'react';
import heroImg from '../../pages/home/heroimg.png'; // Ikabil ditoy ti umno a direksion ti ladawanmo

const Hero = () => {
  return (
    <section className="relative w-full h-[102vh] flex items-center justify-start lg:px-16 overflow-hidden">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="OFFGRID Flagship Hero" 
          className="w-full h-full object-cover"
        />
        {/* Aglawlaw nga addaan nasiksikap a layer tapno mapintas a makita ti teksto */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. Text Content Layer (Inikkat dagiti button ken pinabaro ti teksto a para iti Gen-Z) */}
      <div className="relative z-10 max-w-2xl text-start space-y-6 text-white px-6 sm:px-0">
        <span className="text-xs lg:text-sm font-semibold tracking-[0.4em] uppercase text-neutral-300">
          Drop 01 // Archive Validated
        </span>

        <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-6xl lg:text-7xl font-light tracking-wide uppercase leading-none">
          Future Silhouettes, Unapologetic Form
        </h1>

        <p className="text-neutral-300 text-sm lg:text-base leading-relaxed font-light">
          Redefining modern aesthetics through heavy-weight structural draping and avant-garde tailoring. Built for the unapologetic elite.
        </p>
      </div>

    </section>
  );
};

export default Hero;