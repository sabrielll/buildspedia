'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SafeImage from './SafeImage';
import { TIER_CONFIG } from '../data/heroes';

/**
 * HeroCard - Komponen Reusable Kartu Hero untuk Grid Halaman Utama
 * Mendukung mode 'compact' (8 per baris - WildRift / MLBB roster style)
 * dan mode 'detailed' (4 per baris)
 */
export default function HeroCard({ hero, viewMode = 'compact' }) {
  const [isHovered, setIsHovered] = useState(false);

  if (!hero) return null;

  const tierStyle = TIER_CONFIG[hero.tier] || TIER_CONFIG['S'];
  const heroIconPath = hero.assets?.heroIcon || `/Assets/Hero Icons/${hero.name}/${hero.name}.png`;
  const roleIconPath = hero.assets?.roleIcon || `/Assets/Clases/${hero.role}.png`;

  // ==========================================
  // MODE COMPACT (8 Per Baris - Hero Tile Style)
  // ==========================================
  if (viewMode === 'compact') {
    return (
      <motion.div
        whileHover={{ y: -5, scale: 1.04 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="group relative select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/${hero.slug}`} className="block h-full">
          <div className="relative aspect-[3/4] bg-slate-900 rounded-xl sm:rounded-2xl border-2 border-slate-800/90 
            group-hover:border-cyan-400 group-hover:shadow-glow-cyan transition-all duration-300 
            overflow-hidden flex flex-col justify-between">
            
            {/* Background Hero Portrait / Avatar */}
            <div className="absolute inset-0 bg-slate-950 overflow-hidden">
              <SafeImage
                src={heroIconPath}
                alt={hero.name}
                fallbackType="hero"
                className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-110 group-hover:scale-108 transition-all duration-300"
              />
              {/* Radial Ambient Glow */}
              <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Top Badges (Tier & Role) */}
            <div className="relative z-10 p-1.5 sm:p-2 flex items-center justify-between pointer-events-none">
              {/* Role Icon */}
              <div className="w-5 h-5 rounded-md bg-slate-950/85 backdrop-blur-md p-0.5 border border-slate-700/70 shadow flex items-center justify-center">
                <SafeImage
                  src={roleIconPath}
                  alt={hero.role}
                  fallbackType="role"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>

              {/* Tier Pill */}
              <span className={`px-1.5 py-0.5 text-[9px] sm:text-[10px] font-black rounded-md shadow-md ${tierStyle.badge}`}>
                {hero.tier}
              </span>
            </div>

            {/* Bottom Gradient Overlay & Hero Name */}
            <div className="relative z-10 pt-6 pb-2 px-1.5 sm:px-2 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent flex flex-col items-center text-center">
              <h3 className="text-xs sm:text-sm font-black text-slate-100 group-hover:text-cyan-300 transition-colors tracking-wide truncate w-full">
                {hero.name}
              </h3>
              
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <span className="text-[9px] sm:text-[10px] font-bold text-amber-400 truncate">
                  {hero.lane}
                </span>
                <span className="text-slate-600 text-[8px]">•</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400">
                  {hero.winRate}
                </span>
              </div>
            </div>

            {/* Active Border Glow Ring on Hover */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-cyan-400/0 group-hover:border-cyan-400/70 transition-all pointer-events-none" />
          </div>
        </Link>

        {/* Floating Quick Stats Tooltip saat Hover di Desktop */}
        {isHovered && (
          <div className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 z-50 pointer-events-none animate-fadeIn">
            <div className="bg-slate-900/95 backdrop-blur-md border border-cyan-500/50 rounded-xl p-2.5 shadow-2xl shadow-cyan-950/70 text-left">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1.5">
                <div>
                  <h4 className="text-xs font-black text-slate-100">{hero.name}</h4>
                  <p className="text-[10px] text-amber-400 italic truncate max-w-[130px]">{hero.title}</p>
                </div>
                <span className={`text-[9px] font-bold px-1 py-0.5 rounded ${tierStyle.badge}`}>
                  {hero.tier} Tier
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-1 text-[10px] text-slate-300">
                <div>
                  <span className="text-slate-500">Role: </span>
                  <span className="font-semibold text-slate-200">{hero.role}</span>
                </div>
                <div>
                  <span className="text-slate-500">Lane: </span>
                  <span className="font-semibold text-cyan-300">{hero.lane}</span>
                </div>
                <div>
                  <span className="text-slate-500">Win: </span>
                  <span className="font-semibold text-emerald-400">{hero.winRate}</span>
                </div>
                <div>
                  <span className="text-slate-500">Ban: </span>
                  <span className="font-semibold text-amber-400">{hero.banRate}</span>
                </div>
              </div>

              {/* Triangle pointer */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-2 h-2 bg-slate-900 border-r border-b border-cyan-500/50 rotate-45" />
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  // ==========================================
  // MODE DETAILED (4 Per Baris - Traditional Card)
  // ==========================================
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative"
    >
      <Link href={`/${hero.slug}`} className="block h-full">
        <div className="relative h-full bg-slate-900/90 rounded-2xl border border-slate-800 
          group-hover:border-cyan-400 group-hover:shadow-glow-cyan transition-all duration-300 
          overflow-hidden flex flex-col justify-between">
          
          {/* Top Banner & Hero Art */}
          <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-slate-800 to-slate-950 overflow-hidden">
            <SafeImage
              src={heroIconPath}
              alt={hero.name}
              fallbackType="hero"
              className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-110 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            {/* Tier Badge Top Right */}
            <div className="absolute top-2.5 right-2.5 z-10">
              <span className={`px-2.5 py-1 text-xs font-black rounded-lg shadow-lg ${tierStyle.badge}`}>
                {hero.tier} Tier
              </span>
            </div>

            {/* Role Icon Badge Top Left */}
            <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-700/60">
              <div className="w-4 h-4 flex items-center justify-center">
                <SafeImage
                  src={roleIconPath}
                  alt={hero.role}
                  fallbackType="role"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[11px] font-bold text-slate-200">
                {hero.role}
              </span>
            </div>

            {/* Lane Tag on Bottom Left Image */}
            {hero.lane && (
              <div className="absolute bottom-2 left-3 z-10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-2 py-0.5 rounded">
                  {hero.lane}
                </span>
              </div>
            )}
          </div>

          {/* Body Content */}
          <div className="p-4 flex-1 flex flex-col justify-between bg-slate-900/95">
            <div>
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-black text-slate-100 group-hover:text-cyan-300 transition-colors tracking-wide">
                  {hero.name}
                </h3>
                {hero.secondaryRole && (
                  <span className="text-[10px] text-slate-400 font-medium">
                    / {hero.secondaryRole}
                  </span>
                )}
              </div>
              <p className="text-xs text-amber-400/90 font-medium italic mt-0.5">
                {hero.title}
              </p>
            </div>

            {/* Quick Stats Bar */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-1 text-center">
              <div className="bg-slate-800/50 rounded-lg py-1 px-1">
                <div className="text-[10px] text-slate-400 font-medium">Win Rate</div>
                <div className="text-xs font-bold text-emerald-400">{hero.winRate}</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg py-1 px-1">
                <div className="text-[10px] text-slate-400 font-medium">Pick Rate</div>
                <div className="text-xs font-bold text-slate-200">{hero.pickRate}</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg py-1 px-1">
                <div className="text-[10px] text-slate-400 font-medium">Ban Rate</div>
                <div className="text-xs font-bold text-amber-400">{hero.banRate}</div>
              </div>
            </div>

            {/* View Guide Action */}
            <div className="mt-3.5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
              <span>Buka Panduan Build</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
