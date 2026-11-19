'use client';

import React from 'react';
import Link from 'next/link';
import SafeImage from '../SafeImage';

const SPOTLIGHT_HEROES = [
  {
    href: '/aamon',
    name: 'Aamon',
    tier: 'S+',
    tierClass: 'bg-red-600/90 text-white',
    subtitle: 'Assassin Jungler',
    portrait: '/Assets/Hero Icons/Aamon/Aamon_rec.png',
    icon: '/Assets/Hero Icons/Aamon/Aamon.png'
  },
  {
    href: '/akai',
    name: 'Akai',
    tier: 'S',
    tierClass: 'bg-amber-500 text-slate-950',
    subtitle: 'Tank Roamer',
    portrait: '/Assets/Hero Icons/Akai/Akai_rec.png',
    icon: '/Assets/Hero Icons/Akai/Akai.png'
  },
  {
    href: '/fanny',
    name: 'Fanny',
    tier: 'S+',
    tierClass: 'bg-red-600/90 text-white',
    subtitle: 'Blade Dancer',
    portrait: '/Assets/Hero Icons/Fanny/Fanny_rec.png',
    icon: '/Assets/Hero Icons/Fanny/Fanny.png'
  },
  {
    href: '/valentina',
    name: 'Valentina',
    tier: 'S+',
    tierClass: 'bg-red-600/90 text-white',
    subtitle: 'Mage Mid Lane',
    portrait: '/Assets/Hero Icons/Valentina/Valentina_rec.png',
    icon: '/Assets/Hero Icons/Valentina/Valentina.png'
  }
];

function SpotlightHeroCard({ hero }) {
  return (
    <Link
      href={hero.href}
      className="group p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 hover:shadow-glow-cyan transition-all flex items-center gap-2.5"
    >
      <div className="w-10 h-10 rounded-lg bg-slate-950 border border-amber-500/50 p-0.5 flex-shrink-0 overflow-hidden">
        <SafeImage
          src={hero.portrait}
          fallbackSrc={hero.icon}
          alt={hero.name}
          fallbackType="hero"
          className="w-full h-full object-cover object-top rounded"
        />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-black text-slate-100 group-hover:text-cyan-300 truncate">
            {hero.name}
          </span>
          <span className={`text-[9px] font-black px-1 rounded ${hero.tierClass}`}>
            {hero.tier}
          </span>
        </div>
        <p className="text-[10px] text-slate-400 truncate">{hero.subtitle}</p>
      </div>
    </Link>
  );
}

export default function HomeBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80 pt-8 pb-10 sm:pt-12 sm:pb-14">
      {/* Glow Spheres */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase mb-3 shadow-glow-gold/30">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            121 Hero MLBB Terdaftar • Season 32 Meta
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight leading-tight">
            Kuasai Land of Dawn dengan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
              Build Terbaik
            </span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Panduan build kompetitif <span className="text-cyan-400 font-semibold">Mobile Legends: Bang Bang</span> terlengkap.{' '}
            Temukan racikan Core Items, Situational Counters, susunan 3-Tier Emblem, dan urutan kombo dari seluruh 121 hero.
          </p>

          {/* Quick Hero Spotlight Cards (Aamon, Akai, Fanny, Valentina) */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left max-w-3xl mx-auto">
            {SPOTLIGHT_HEROES.map((hero) => (
              <SpotlightHeroCard key={hero.href} hero={hero} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
