'use client';

import React from 'react';
import Link from 'next/link';
import SafeImage from '../SafeImage';

function TierHeroTile({ hero }) {
  return (
    <Link
      href={`/${hero.slug}`}
      className="group bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-400 hover:shadow-glow-cyan rounded-xl p-2 transition-all flex flex-col items-center text-center"
    >
      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-slate-700 group-hover:border-cyan-400 mb-2">
        <SafeImage
          src={hero.assets?.heroPortrait || `/Assets/Hero Icons/${hero.name}/${hero.name}_rec.png`}
          fallbackSrc={hero.assets?.heroIcon || `/Assets/Hero Icons/${hero.name}/${hero.name}.png`}
          alt={hero.name}
          fallbackType="hero"
          className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute bottom-1 right-1 bg-slate-950/90 text-[10px] text-emerald-400 font-black px-1 rounded">
          {hero.winRate}
        </span>
      </div>
      <h4 className="text-xs font-bold text-slate-100 group-hover:text-cyan-300 truncate w-full">
        {hero.name}
      </h4>
      <div className="flex items-center gap-1 mt-0.5 text-[10px] text-slate-400">
        <span>{hero.role}</span>
        <span>•</span>
        <span className="text-cyan-400">{hero.lane}</span>
      </div>
    </Link>
  );
}

export default function TierGroupSection({ tierKey, tierStyle, heroes }) {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-6 shadow-xl">
      {/* Header Tier */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-xl text-base font-black shadow-lg ${tierStyle.badge}`}>
            {tierKey}
          </span>
          <div>
            <h2 className="text-lg font-black text-slate-100">{tierStyle.label}</h2>
            <span className="text-xs text-slate-400">
              {heroes.length} Hero di kategori ini
            </span>
          </div>
        </div>
      </div>

      {/* Heroes in this Tier */}
      {heroes.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5 sm:gap-3">
          {heroes.map((hero) => (
            <TierHeroTile key={hero.id} hero={hero} />
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-slate-500 text-xs italic">
          Tidak ada hero di tier ini dengan filter yang dipilih.
        </div>
      )}
    </div>
  );
}
