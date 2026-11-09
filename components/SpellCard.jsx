'use client';

import React from 'react';
import SafeImage from './SafeImage';

export default function SpellCard({ spell }) {
  if (!spell) return null;

  const category = spell.category || 'Spells';
  const filename = spell.filename || `${spell.name}.png`;
  const imagePath = spell.assetPath || (
    category === 'Boots' 
      ? `/Assets/Build Icons/Boots/${filename}` 
      : `/Assets/Spells/${filename}`
  );

  return (
    <div className={`p-4 rounded-xl bg-slate-900/90 border transition-all duration-300 flex items-start gap-4 ${
      spell.isPrimary 
        ? 'border-amber-500/60 shadow-glow-gold/40' 
        : 'border-slate-800 hover:border-slate-700'
    }`}>
      {/* Spell Icon Container */}
      <div className={`w-14 h-14 rounded-xl p-1 bg-slate-950 border-2 flex-shrink-0 flex items-center justify-center overflow-hidden ${
        spell.isPrimary ? 'border-amber-400 shadow-glow-gold' : 'border-slate-700'
      }`}>
        <SafeImage
          src={imagePath}
          alt={spell.name}
          fallbackType="spell"
          className="w-full h-full object-contain filter drop-shadow"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <h4 className="text-sm font-bold text-slate-100">{spell.name}</h4>
          {spell.tag && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
              spell.isPrimary 
                ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' 
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}>
              {spell.tag}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {spell.description}
        </p>
      </div>
    </div>
  );
}
