import React, { useState } from 'react';

const NEW_ARRIVALS = {
  Women: [
    {
      id: 'w-1',
      name: 'Leather Mini Handbag',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'w-2',
      name: 'Jacquard Wool Cardigan',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'w-3',
      name: 'Patent Leather Pumps',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'w-4',
      name: 'Cat-Eye Eyewear',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800',
    },
  ],
  Men: [
    {
      id: 'm-1',
      name: 'Tailored Wool Coat',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm-2',
      name: 'Technical Cargo Trousers',
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm-3',
      name: 'Leather Monolith Boots',
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'm-4',
      name: 'Geometric Optical Frames',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
    },
  ],
};

export default function NewArrivalsSection() {
  const [activeTab, setActiveTab] = useState('Women');

  return (
    <section className="w-full bg-white text-neutral-900 py-20 px-4 sm:px-8 font-['Inter',sans-serif]">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
          New Arrivals
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-xl mx-auto">
          Rooted in memory and shaped by transformation, evolving forms and refined details reveal new expressions of individuality.
        </p>

        {/* Women / Men Tabs */}
        <div className="flex justify-center items-center gap-6 pt-4 text-xs font-semibold tracking-wider">
          {['Women', 'Men'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 transition-all cursor-pointer ${
                activeTab === tab
                  ? 'border-b-2 border-black text-black font-bold'
                  : 'text-neutral-400 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {NEW_ARRIVALS[activeTab].map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#f7f7f7] aspect-[4/5] flex items-center justify-center p-6 overflow-hidden cursor-pointer transition-colors hover:bg-[#f0f0f0]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-800 bg-white/80 px-3 py-1.5 backdrop-blur-sm rounded-full">
                  {product.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}