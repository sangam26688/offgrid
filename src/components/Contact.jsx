import React from 'react';
import { Phone, MessageCircle, Clock, HelpCircle, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-['Inter',sans-serif] px-6 py-24 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-neutral-950 border border-neutral-900 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10">
        
        {/* Title */}
        <div className="space-y-2">
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light tracking-[0.15em] uppercase text-white">
            Contact Us
          </h1>
          <div className="w-12 h-[1px] bg-amber-400"></div>
        </div>

        {/* Contact Options */}
        <div className="space-y-8 text-sm">
          
          {/* Call Us */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Phone size={16} className="text-amber-400" />
              <a href="tel:+611300492212" className="hover:underline tracking-wide">
                Call Us +61 1300492212
              </a>
            </div>
            <p className="text-xs text-neutral-400 font-light pl-6">
              Monday to Sunday from 10 am to 7 pm (AEDT).
            </p>
          </div>

          {/* WhatsApp Us */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-semibold">
              <MessageCircle size={16} className="text-amber-400" />
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:underline tracking-wide">
                WhatsApp Us
              </a>
            </div>
            <p className="text-xs text-neutral-400 font-light pl-6">
              Monday to Sunday from 10 am to 7 pm (AEDT).
            </p>
          </div>

          {/* Live Chat */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse ml-1"></span>
              <span className="cursor-pointer hover:underline tracking-wide">LIVE CHAT</span>
            </div>
            <p className="text-xs text-neutral-400 font-light pl-6">
              Monday to Sunday from 10 am to 7 pm (AEDT).
            </p>
          </div>

        </div>

        {/* Further Assistance Section */}
        <div className="pt-8 border-t border-neutral-900 space-y-4">
          <h3 className="text-lg font-light tracking-wide text-neutral-300">
            Do you need further assistance?
          </h3>
          <div>
            <a 
              href="mailto:concierge@offgrid.studio" 
              className="text-xs font-bold uppercase tracking-[0.2em] text-white border-b border-white pb-1 hover:text-amber-400 hover:border-amber-400 transition-all inline-block"
            >
              Get in Contact with Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}