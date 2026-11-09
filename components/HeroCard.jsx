'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SafeImage from './SafeImage';
import { TIER_CONFIG } from '../data/heroes';

/**
 * HeroCard - Komponen Reusable Kartu Hero untuk Grid Halaman Utama
 * Mengadaptasi tata letak visual modern wildriftfire.com dengan aksen MLBB
 */
export default function HeroCard({ hero }) {
  if (!hero) return null;

  const tierStyle = TIER_CONFIG[hero.tier] || TIER_CONFIG['S'];
  const heroIconPath = hero.assets?.heroIcon || `/Assets/Hero Icons/${hero.name}/${hero.name}.png`;
  const roleIconPath = hero.assets?.roleIcon || `/Assets/Clases/${hero.role}.png`;

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
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Hero Image */}
            <SafeImage
              src={heroIconPath}
              alt={hero.name}
              fallbackType="hero"
              className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-110 group-hover:scale-105 transition-all duration-500"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            {/* Tier Badge Floating Top Right */}
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

            {/* Quick Stats Bar (Win Rate & Ban Rate) */}
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
