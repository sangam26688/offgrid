import React, { useState } from 'react';
import { X, User, Package, Heart, LogOut, ShieldCheck, ChevronRight, Mail, MapPin } from 'lucide-react';

export default function UserPanel({ isOpen, onClose, wishlistCount = 0 }) {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'orders', 'wishlist'

  if (!isOpen) return null;

  // Mock user data & orders
  const user = {
    name: "Alex Vance",
    email: "alex.vance@offgrid.studio",
    memberTier: "Vanguard VIP Concierge",
    joinedDate: "October 2025"
  };

  const recentOrders = [
    { id: "OG-98421", date: "Oct 24, 2026", status: "Dispatched", total: "$950", items: "Monolith Aluminum Carry-On" },
    { id: "OG-87102", date: "Sep 12, 2026", status: "Delivered", total: "$780", items: "Atelier Leather Weekender" }
  ];

  return (
    <div className="fixed inset-0 z-[2000] flex justify-end bg-black/60 backdrop-blur-md transition-opacity">
      <div className="h-full w-full sm:w-[460px] bg-white text-neutral-900 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 font-bold text-xs">
              AV
            </div>
            <div>
              <h3 className="font-['Cormorant_Garamond',serif] text-lg font-bold leading-tight">{user.name}</h3>
              <span className="text-[10px] text-amber-600 font-semibold uppercase tracking-wider">{user.memberTier}</span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-neutral-100 cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-neutral-200 my-4 text-xs font-bold uppercase tracking-wider">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex-1 pb-3 text-center transition-all cursor-pointer border-b-2 ${activeTab === 'profile' ? 'border-black text-black' : 'border-transparent text-neutral-400'}`}
          >
            Profile
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`flex-1 pb-3 text-center transition-all cursor-pointer border-b-2 ${activeTab === 'orders' ? 'border-black text-black' : 'border-transparent text-neutral-400'}`}
          >
            Orders ({recentOrders.length})
          </button>
          <button 
            onClick={() => setActiveTab('wishlist')}
            className={`flex-1 pb-3 text-center transition-all cursor-pointer border-b-2 ${activeTab === 'wishlist' ? 'border-black text-black' : 'border-transparent text-neutral-400'}`}
          >
            Wishlist ({wishlistCount})
          </button>
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto space-y-6 py-2">
          
          {/* 1. Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 space-y-4">
                <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-500">Account Details</h4>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-3 text-neutral-700">
                    <Mail size={16} className="text-neutral-400" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-700">
                    <ShieldCheck size={16} className="text-amber-600" />
                    <span>Member since {user.joinedDate}</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-700">
                    <MapPin size={16} className="text-neutral-400" />
                    <span>Global Priority Shipping Active</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <button 
                  onClick={() => alert("Navigating to saved addresses...")}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-neutral-200 hover:border-black text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Saved Addresses</span>
                  <ChevronRight size={16} />
                </button>
                <button 
                  onClick={() => alert("Opening notification preferences...")}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-neutral-200 hover:border-black text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Notification Preferences</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* 2. Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-500">Recent Acquisitions</h4>
              {recentOrders.map((order, idx) => (
                <div key={idx} className="border border-neutral-200 rounded-2xl p-4 space-y-2 bg-neutral-50/50">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold font-mono">{order.id}</span>
                    <span className="px-2 py-0.5 rounded-full bg-black text-white text-[9px] uppercase tracking-wider">{order.status}</span>
                  </div>
                  <p className="text-xs font-semibold text-neutral-900">{order.items}</p>
                  <div className="flex justify-between items-center text-[11px] text-neutral-500 pt-1 border-t border-neutral-200/60">
                    <span>{order.date}</span>
                    <span className="font-bold text-neutral-900 font-mono">{order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. Wishlist Tab */}
          {activeTab === 'wishlist' && (
            <div className="space-y-4 text-center py-8">
              <Heart size={36} className="mx-auto text-red-500 fill-red-500 mb-2" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Your Saved Masterpieces</h4>
              <p className="text-xs text-neutral-500">You currently have {wishlistCount} items saved in your private collection wishlist.</p>
            </div>
          )}

        </div>

        {/* Footer Logout */}
        <div className="border-t border-neutral-200 pt-4 mt-4">
          <button 
            onClick={() => { alert("Logged out successfully"); onClose(); }}
            className="w-full flex items-center justify-center gap-2 bg-neutral-100 text-neutral-900 py-3.5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            <LogOut size={16} /> Secure Sign Out
          </button>
        </div>

      </div>
    </div>
  );
}