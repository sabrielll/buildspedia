'use client';

import React from 'react';
import SafeImage from './SafeImage';

/**
 * EmblemSetup - Komponen Reusable Konfigurasi Emblem MLBB
 * Menampilkan susunan 3 Tier Talent + Base Emblem dengan styling WildRiftFire
 * Path: /Assets/Emblem/[Kategori_Emblem]/[Nama_Talent].png
 */
export default function EmblemSetup({ emblem, className = '' }) {
  if (!emblem) return null;

  const baseCategory = emblem.category || 'Assasins';
  const baseEmblemPath = emblem.assetPath || `/Assets/Emblem/${baseCategory}/${emblem.icon || 'Custom_Assassin_Emblem.png'}`;

  const talents = [
    {
      key: 'tier1',
      title: 'Talent Tier 1',
      subtitle: 'Stat Boost',
      data: emblem.tier1,
      color: 'border-blue-400 text-blue-400',
      badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30'
    },
    {
      key: 'tier2',
      title: 'Talent Tier 2',
      subtitle: 'Utility & Playstyle',
      data: emblem.tier2,
      color: 'border-purple-400 text-purple-400',
      badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30'
    },
    {
      key: 'tier3',
      title: 'Talent Tier 3',
      subtitle: 'Core Keystone',
      data: emblem.tier3,
      color: 'border-amber-400 text-amber-400',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30'
    },
  ];

  return (
    <div className={`bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-6 shadow-xl relative overflow-hidden ${className}`}>
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Emblem Set */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-6">
        <div className="flex items-center gap-4">
          {/* Base Emblem Icon */}
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 p-2 border-2 border-amber-500/60 shadow-glow-gold flex items-center justify-center">
            <SafeImage
              src={baseEmblemPath}
              alt={emblem.name || 'Emblem'}
              fallbackType="emblem"
              className="w-full h-full object-contain filter drop-shadow"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                Emblem Set Utama
              </span>
            </div>
            <h3 className="text-xl font-black text-slate-100 mt-1">{emblem.name}</h3>
            {emblem.baseStats && (
              <p className="text-xs text-slate-400 mt-0.5 font-medium">
                <span className="text-cyan-400 font-semibold">Bonus Stat: </span>
                {emblem.baseStats}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 3-Tier Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {talents.map((tier, idx) => {
          const talent = tier.data;
          if (!talent) return null;

          const talentCategory = talent.category || baseCategory;
          const talentPath = talent.assetPath || `/Assets/Emblem/${talentCategory}/${talent.filename}`;

          return (
            <div
              key={tier.key}
              className="group relative bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/60 hover:border-cyan-400/60 rounded-xl p-4 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Header Tier */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${tier.badgeBg}`}>
                    {tier.title}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {tier.subtitle}
                  </span>
                </div>

                {/* Talent Icon & Name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border-2 border-slate-700 group-hover:border-cyan-400 group-hover:shadow-glow-cyan transition-all duration-300 p-1.5 flex items-center justify-center overflow-hidden">
                    <SafeImage
                      src={talentPath}
                      alt={talent.name}
                      fallbackType="emblem"
                      className="w-full h-full object-contain filter drop-shadow"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {talent.name}
                    </h4>
                    <span className="text-[10px] text-slate-400">
                      {talent.category?.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                {/* Effect */}
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {talent.effect}
                </p>
              </div>

              {/* Why choose this talent */}
              {talent.reason && (
                <div className="mt-2 pt-2.5 border-t border-slate-700/50 text-[11px] text-slate-400 bg-slate-900/40 p-2 rounded">
                  <span className="text-amber-400 font-semibold">Alasan Pemilihan: </span>
                  {talent.reason}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
