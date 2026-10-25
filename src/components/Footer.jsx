import React from 'react';
import { ArrowUpRight } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaXTwitter
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-neutral-200 pt-24 pb-12 px-6 lg:px-20 border-t border-neutral-900 font-['Inter',sans-serif]">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-neutral-800/60">
        
        {/* 1. Brand Info & Social Media Handles (4 Columns) */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-bold tracking-[0.3em] uppercase text-white">
            OFFGRID
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
            Redefining modern luxury e-commerce. Uncompromising artisanal craftsmanship, exclusive high-fashion collections, and timeless elegance for the global wardrobe.
          </p>

          {/* Social Media Handles for Business */}
          <div className="space-y-3 pt-2">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-400 block">
              Official Social Channels
            </span>
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
                aria-label="Twitter / X"
              >
                <FaXTwitter size={18} />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
                aria-label="Pinterest"
              >
                <FaPinterest size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Fashion & Apparel Collections (2 Columns) */}
        <div className="lg:col-span-2 space-y-5">
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-400">
            Apparel & Lines
          </h4>
          <ul className="space-y-3.5 text-sm text-neutral-300">
            <li><a href="#Womens-Fashion" className="hover:text-white transition-colors">Women's Fashion</a></li>
            <li><a href="#Mens-Fashion" className="hover:text-white transition-colors">Men's Fashion</a></li>
            <li><a href="#Kids-Baby" className="hover:text-white transition-colors">Kids & Baby</a></li>
            <li><a href="#Haute-Couture" className="hover:text-white transition-colors">Haute Couture</a></li>
            <li><a href="#Whats-New" className="hover:text-white transition-colors">What's New</a></li>
          </ul>
        </div>

        {/* 3. Luxury Accessories & Gifts (2 Columns) */}
        <div className="lg:col-span-2 space-y-5">
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-400">
            Boutique
          </h4>
          <ul className="space-y-3.5 text-sm text-neutral-300">
            <li><a href="#bags" className="hover:text-white transition-colors">Bags</a></li>
            <li><a href="#jewelry-timepieces" className="hover:text-white transition-colors">Jewelry & Timepieces</a></li>
            <li><a href="#gifts" className="hover:text-white transition-colors">Gifts & Curated Sets</a></li>
            <li><a href="#bespoke" className="hover:text-white transition-colors">Bespoke Orders</a></li>
          </ul>
        </div>

        {/* 4. Private Access Newsletter (4 Columns) */}
        <div className="lg:col-span-4 space-y-5">
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-400">
            Private Access
          </h4>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Subscribe to receive private invitations to seasonal drops across women, men, kids, and haute couture collections.
          </p>
          
          <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-full overflow-hidden p-1.5 focus-within:border-neutral-500 transition-all">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-transparent px-4 py-2 text-sm text-white focus:outline-none placeholder:text-neutral-600"
            />
            <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all active:scale-95 cursor-pointer flex items-center gap-1">
              <span>Join</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* Client Care & Services Row */}
      <div className="max-w-[1500px] mx-auto py-8 border-b border-neutral-900 flex flex-wrap gap-6 items-center justify-between text-xs text-neutral-400">
        <div className="flex flex-wrap gap-6 uppercase tracking-wider">
          <a href="#client-care" className="hover:text-white transition-colors">Client Care</a>
          <a href="#shipping" className="hover:text-white transition-colors">Global Shipping & Returns</a>
          <a href="#track-order" className="hover:text-white transition-colors">Track Order</a>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        <div className="uppercase tracking-widest text-neutral-500 text-[11px]">
          OFFGRID Official Store
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-[1500px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 tracking-widest">
        <p>© {new Date().getFullYear()} OFFGRID. All rights reserved.</p>
        <p className="mt-4 sm:mt-0 uppercase font-medium text-[11px]">
          Designed for the Uncompromising
        </p>
      </div>
    </footer>
  );
};

export default Footer;