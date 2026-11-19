'use client';

import React from 'react';
import SafeImage from '../SafeImage';

export default function EmblemBanner({ emblemSets, selectedEmblem, onSelectEmblem }) {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80 pt-10 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase mb-3">
          Sistem Talent Emblem Baru MLBB
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
          Katalog Emblem &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Talent Matrix
          </span>
        </h1>
        <p className="mt-3 text-sm text-slate-400 max-w-2xl mx-auto">
          Pelajari setiap bonus stat atribut dan efek pasif 3-Tier Talent untuk menyusun kombinasi emblem terkuat bagi hero andalan Anda.
        </p>

        {/* Emblem Selector Pills */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {emblemSets.map((emb) => (
            <button
              key={emb.id}
              onClick={() => onSelectEmblem(emb)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedEmblem.id === emb.id
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-glow-cyan border border-cyan-400'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <SafeImage
                  src={`/Assets/Emblem/${emb.category}/${emb.icon}`}
                  alt={emb.name}
                  fallbackType="emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <span>{emb.name.replace('Custom ', '').replace(' Emblem', '')}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
