'use client';

import React from 'react';
import Link from 'next/link';
import SafeImage from '../SafeImage';
import { TIER_CONFIG } from '../../data/heroes';

function HeroPortraitTile({ hero, heroPortraitPath, heroIconPath, tierStyle }) {
  return (
    <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border-2 border-amber-500/70 shadow-glow-gold flex-shrink-0 bg-slate-950">
      <SafeImage
        src={heroPortraitPath}
        fallbackSrc={heroIconPath}
        alt={hero.name}
        fallbackType="hero"
        className="w-full h-full object-cover object-[center_12%]"
      />
      <span className={`absolute top-1 right-1 px-1.5 py-0.2 text-[9px] font-black rounded shadow ${tierStyle.badge}`}>
        {hero.tier}
      </span>
    </div>
  );
}

function HeroRoleBadges({ role, secondaryRole, lane }) {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mb-1">
      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
        {role}
      </span>
      {secondaryRole && (
        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
          {secondaryRole}
        </span>
      )}
      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
        {lane}
      </span>
    </div>
  );
}

function HeroQuickMetrics({ winRate, banRate, patch }) {
  return (
    <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-800 px-4 py-2 rounded-xl text-xs">
      <div>
        <span className="text-slate-500 block text-[10px] uppercase font-bold">Win Rate</span>
        <span className="font-black text-emerald-400">{winRate}</span>
      </div>
      <div className="w-px h-6 bg-slate-800" />
      <div>
        <span className="text-slate-500 block text-[10px] uppercase font-bold">Ban Rate</span>
        <span className="font-black text-amber-400">{banRate}</span>
      </div>
      <div className="w-px h-6 bg-slate-800" />
      <div>
        <span className="text-slate-500 block text-[10px] uppercase font-bold">Patch</span>
        <span className="font-bold text-slate-300">{patch}</span>
      </div>
    </div>
  );
}

export default function HeroHeader({ hero }) {
  if (!hero) return null;

  const tierStyle = TIER_CONFIG[hero.tier] || TIER_CONFIG['S'];
  const dirName = hero.dirName || hero.name;
  const heroIconPath = hero.assets?.heroIcon || `/Assets/Hero Icons/${dirName}/${dirName}.png`;
  const heroPortraitPath = hero.assets?.heroPortrait || `/Assets/Hero Icons/${dirName}/${dirName}_rec.png`;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <HeroPortraitTile
          hero={hero}
          heroPortraitPath={heroPortraitPath}
          heroIconPath={heroIconPath}
          tierStyle={tierStyle}
        />

        <div>
          <HeroRoleBadges
            role={hero.role}
            secondaryRole={hero.secondaryRole}
            lane={hero.lane}
          />

          <div className="flex items-baseline justify-center sm:justify-start gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight uppercase">
              {hero.name}
            </h1>
            <span className="text-xs sm:text-sm text-slate-400 italic font-medium">
              {hero.title}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-center">
        <HeroQuickMetrics
          winRate={hero.winRate}
          banRate={hero.banRate}
          patch={hero.patch}
        />

        <Link
          href="/"
          className="px-3.5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300 hover:text-cyan-300 transition-colors"
        >
          ← Hero Grid
        </Link>
      </div>
    </div>
  );
}
