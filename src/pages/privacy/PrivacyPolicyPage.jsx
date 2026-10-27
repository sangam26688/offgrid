import React from 'react';
import { ShieldCheck, ArrowLeft, Lock } from 'lucide-react';
import { PRIVACY_POLICY_SECTIONS } from './PrivacyPolicyData.js';

export default function PrivacyPolicyPage({ onBackToHome, brand = "OFFGRID" }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Inter',sans-serif] selection:bg-neutral-200 selection:text-black  py-15">
      
      {/* 1. Header / Navigation Back */}
      <div className="max-w-3xl mx-auto px-4 py-6 flex items-center justify-between border-b border-neutral-100">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-black transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} /> Back to Store
        </button>
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">
          {brand} Legal
        </span>
      </div>

      {/* 2. Hero Title Section (Compact) */}
      <section className="max-w-3xl mx-auto px-4 pt-10 pb-8 text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase bg-neutral-100 px-3 py-1 rounded-full text-neutral-700">
          <Lock size={12} className="text-amber-600" /> Data Protection
        </div>
        <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl font-bold tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto font-light leading-relaxed">
          Last updated: October 2026. How {brand} collects, uses, and safeguards your personal information.
        </p>
      </section>

      {/* 3. Detailed Policy Content (Clean & Simple layout without heavy card padding) */}
      <main className="max-w-3xl mx-auto px-4 space-y-8">
        
        {/* Intro Banner */}
        <div className="flex items-center gap-3 border-b border-neutral-200 pb-5">
          <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-amber-600 shrink-0">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h3 className="font-['Cormorant_Garamond',serif] text-xl font-semibold">Commitment to Confidentiality</h3>
            <p className="text-[11px] text-neutral-500 font-light">Your trust is our most valued asset.</p>
          </div>
        </div>

        {/* Sections List */}
        <div className="space-y-6">
          {PRIVACY_POLICY_SECTIONS.map((section, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-neutral-900">
                {section.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Contact */}
        <div className="border-t border-neutral-200 pt-6 mt-8 text-center space-y-2">
          <p className="text-xs text-neutral-500 font-light">
            Have questions regarding your privacy rights? Reach out directly to our team.
          </p>
          <a 
            href="mailto:concierge@offgrid.studio" 
            className="inline-block text-xs font-bold uppercase tracking-widest text-black underline hover:text-amber-600 transition-colors"
          >
            concierge@offgrid.studio
          </a>
        </div>

      </main>

    </div>
  );
}