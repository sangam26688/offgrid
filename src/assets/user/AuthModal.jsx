import React, { useState } from 'react';
import { X, ShieldCheck, Phone, Mail } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const [authMode, setAuthMode] = useState('select'); // 'select' | 'phone'
  const [phoneNumber, setPhoneNumber] = useState('');

  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    // Yahan tum Google Firebase Auth ya NextAuth ka logic laga sakte ho
    alert("Google Sign-In triggered!");
  };

  const handleFacebookLogin = () => {
    // Yahan Facebook Auth ka logic aayega
    alert("Facebook Sign-In triggered!");
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-neutral-950 border border-neutral-800 rounded-3xl max-w-md w-full p-8 relative space-y-6 shadow-2xl text-white">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 pt-2">
          <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-light tracking-wider uppercase">
            Welcome to OFFGRID
          </h3>
          <p className="text-xs text-neutral-400 font-light">
            Sign in or create an account for private VIP access.
          </p>
        </div>

        {authMode === 'select' ? (
          <div className="space-y-4 pt-2">
            
            {/* Google Sign In Button */}
            <button 
              onClick={handleGoogleLogin}
              className="w-full bg-white text-black py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Continue with Google
            </button>

            {/* Facebook Sign In Button */}
            <button 
              onClick={handleFacebookLogin}
              className="w-full bg-[#1877F2] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#155db2] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-neutral-800"></div>
              <span className="px-3 text-[10px] uppercase tracking-widest text-neutral-500">Or</span>
              <div className="flex-grow border-t border-neutral-800"></div>
            </div>

            {/* Phone Number Toggle Option */}
            <button 
              onClick={() => setAuthMode('phone')}
              className="w-full bg-neutral-900 border border-neutral-800 text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone size={14} className="text-amber-400" /> Continue with Phone Number
            </button>

          </div>
        ) : (
          /* Phone OTP Input View */
          <div className="space-y-4 pt-2">
            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block">
                Enter Mobile Number
              </label>
              <div className="flex gap-2">
                <span className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-3 text-xs flex items-center text-neutral-300">
                  +91
                </span>
                <input 
                  type="tel"
                  placeholder="98765 43210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <button 
              onClick={() => alert(`OTP sent to ${phoneNumber}`)}
              className="w-full bg-white text-black py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all cursor-pointer shadow-lg"
            >
              Send Verification OTP
            </button>

            <button 
              onClick={() => setAuthMode('select')}
              className="w-full text-center text-xs text-neutral-400 hover:text-white pt-2 cursor-pointer uppercase tracking-wider"
            >
              Back to Social Logins
            </button>
          </div>
        )}

        <div className="pt-4 border-t border-neutral-900 text-center">
          <p className="text-[10px] text-neutral-500 tracking-wider flex items-center justify-center gap-1">
            <ShieldCheck size={12} className="text-amber-400" /> Secure 256-Bit Encrypted Authentication
          </p>
        </div>

      </div>
    </div>
  );
}