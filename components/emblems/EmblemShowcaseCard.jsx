'use client';

import React from 'react';
import SafeImage from '../SafeImage';

function TalentTierCard({ category, talent }) {
  return (
    <div className="bg-slate-950/80 border border-slate-800 hover:border-cyan-400/60 rounded-2xl p-5 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
            {talent.tier}
          </span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 p-1 flex items-center justify-center">
            <SafeImage
              src={`/Assets/Emblem/${category}/${talent.filename}`}
              alt={talent.name}
              fallbackType="emblem"
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-sm font-bold text-slate-100">{talent.name}</h4>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          {talent.effect}
        </p>
      </div>
    </div>
  );
}

export default function EmblemShowcaseCard({ selectedEmblem }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-slate-800 pb-6 mb-8">
          <div className="w-20 h-20 rounded-2xl bg-slate-950 p-2.5 border-2 border-amber-500/60 shadow-glow-gold flex items-center justify-center flex-shrink-0">
            <SafeImage
              src={`/Assets/Emblem/${selectedEmblem.category}/${selectedEmblem.icon}`}
              alt={selectedEmblem.name}
              fallbackType="emblem"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-0.5 rounded-full">
                Kategori {selectedEmblem.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mt-1">
              {selectedEmblem.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {selectedEmblem.description}
            </p>
            <div className="mt-2 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-lg inline-block">
              Bonus Atribut: {selectedEmblem.stats}
            </div>
          </div>
        </div>

        {/* 3 Talents Matrix */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-200">
            Pilihan Susunan Talent ({selectedEmblem.name})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selectedEmblem.talents.map((talent, idx) => (
              <TalentTierCard
                key={idx}
                category={selectedEmblem.category}
                talent={talent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
