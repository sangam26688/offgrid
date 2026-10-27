// BeautyData.js

export const BEAUTY_CATEGORIES = [
  "All",
  "Fragrances",
  "Makeup",
  "Skincare Prep"
];

export const BEAUTY_DATA = [
  {
    id: 'bm1',
    name: 'Noir Velvet Extrait de Parfum (100ml)',
    category: 'Fragrances',
    subCategory: 'Extrait de Parfum',
    price: 340,
    tag: 'Signature Fragrance',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1000',
    description: 'A dark, hypnotic blend of black amber, smoked oud, Bulgarian rose, and raw vanilla bean crafted in Grasse.',
    notes: { top: 'Black Pepper, Bergamot', heart: 'Bulgarian Rose, Smoked Iris', base: 'Oud, Leather, Black Amber' },
    shades: ['100ml Bottle', '50ml Travel Atomizer']
  },
  {
    id: 'bm2',
    name: 'Monolith Velvet Matte Lipstick',
    category: 'Makeup',
    subCategory: 'Lips',
    price: 68,
    tag: 'Bestseller',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    description: 'Weightless pigment-rich velvet matte formula infused with hyaluronic spheres and botanical oils for 12-hour hydration.',
    notes: { finish: 'Velvet Soft Matte', longevity: '12-Hour Wear', formula: 'Infused with Jojoba Oil' },
    shades: ['Obsidian Red 01', 'Nude Satin 02', 'Crimson Velvet 03', 'Plum Noir 04']
  },
  {
    id: 'bm3',
    name: "Soleil D'Or Luminous Highlighter",
    category: 'Makeup',
    subCategory: 'Face & Complexion',
    price: 85,
    tag: 'New Drop',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=1000',
    description: 'Ultra-refined micro-milled pearl powder compact that delivers an ethereal glass-skin glow with light-reflecting crystals.',
    notes: { texture: 'Silk Press Powder', effect: 'Dimensional Dewy Glow' },
    shades: ['Champagne Gold', 'Rose Quartz', 'Bronze Amber']
  },
  {
    id: 'bm4',
    name: 'Santal & Smoked Leather Elixir',
    category: 'Fragrances',
    subCategory: 'Eau de Parfum',
    price: 290,
    tag: 'Haute Parfumerie',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000',
    description: 'Dry Australian sandalwood paired with crushed cardamom, cedarwood, and Tuscan leather notes.',
    notes: { top: 'Cardamom, Violet Leaves', heart: 'Papyrus, Iris', base: 'Sandalwood, Tuscan Leather' },
    shades: ['100ml Bottle', 'Discovery Set']
  },
  {
    id: 'bm5',
    name: "L'Ombre Quad Eyeshadow Palette",
    category: 'Makeup',
    subCategory: 'Eyes',
    price: 110,
    tag: 'Limited Edition',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1608248597369-02c3498877e8?auto=format&fit=crop&q=80&w=1000',
    description: '4 high-pigment eyeshadows combining buttery mattes, molten metallics, and sparkling topper shades in a magnetic gold compact.',
    notes: { texture: 'Multi-Dimensional Powders', duration: 'Crease-Resistant All Day' },
    shades: ['Smokey Quartz', 'Sunset Bronze', 'Midnight Velvet']
  },
  {
    id: 'bm6',
    name: 'Radiance Botanical Face Oil (30ml)',
    category: 'Skincare Prep',
    subCategory: 'Face & Complexion',
    price: 160,
    tag: 'Cult Classic',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1608248597369-02c3498877e8?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1000',
    description: '22 cold-pressed active botanicals designed to prime skin before makeup application and restore night luminosity.',
    notes: { actives: 'Rosehip, Marula, Bakuchiol', absorption: 'Fast-Absorbing Dry Oil' },
    shades: ['30ml Glass Dropper']
  }
];