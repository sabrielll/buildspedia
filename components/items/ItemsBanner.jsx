'use client';

import React from 'react';

export default function ItemsBanner({ categories, selectedCategory, onSelectCategory }) {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80 pt-10 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase mb-3">
          Katalog Equipment MLBB Season 32
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
          Database Item &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Equipment Codex
          </span>
        </h1>
        <p className="mt-3 text-sm text-slate-400 max-w-2xl mx-auto">
          Eksplorasi seluruh racikan item Physical, Magical, Defense, dan Roaming Boots lengkap dengan analisis harga gold, atribut stats, dan efek pasif unik.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-glow-cyan border border-cyan-400'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
