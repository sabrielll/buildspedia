'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import HeroCard from '../components/HeroCard';
import RoleFilter from '../components/RoleFilter';
import SafeImage from '../components/SafeImage';
import { HEROES_DATA } from '../data/heroes';

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState('All');
  const [viewMode, setViewMode] = useState('compact'); // 'compact' (8 per baris) | 'detailed' (4 per baris)

  // Filter hero berdasarkan role, search query, dan tier
  const filteredHeroes = useMemo(() => {
    return HEROES_DATA.filter((hero) => {
      const matchRole =
        selectedRole === 'All' ||
        hero.role === selectedRole ||
        hero.secondaryRole === selectedRole;

      const matchSearch =
        hero.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hero.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hero.lane.toLowerCase().includes(searchQuery.toLowerCase());

      const matchTier = selectedTier === 'All' || hero.tier === selectedTier;

      return matchRole && matchSearch && matchTier;
    });
  }, [selectedRole, searchQuery, selectedTier]);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Header / Spotlight Banner */}
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
              Panduan build terstruktur ala <span className="text-cyan-400 font-semibold">WildRiftFire</span>. 
              Temukan racikan Core Items, Situational Counters, susunan 3-Tier Emblem, dan urutan kombo dari seluruh 121 hero.
            </p>

            {/* Quick Hero Spotlight Cards (Aamon, Akai, Fanny, Valentina) */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left max-w-3xl mx-auto">
              <Link
                href="/aamon"
                className="group p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 hover:shadow-glow-cyan transition-all flex items-center gap-2.5"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-amber-500/50 p-0.5 flex-shrink-0 overflow-hidden">
                  <SafeImage
                    src="/Assets/Hero Icons/Aamon/Aamon.png"
                    alt="Aamon"
                    fallbackType="hero"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-100 group-hover:text-cyan-300 truncate">Aamon</span>
                    <span className="text-[9px] bg-red-600/90 text-white font-black px-1 rounded">S+</span>
                  </div>
                  <p className="text-[10px] text-slate-400 truncate">Assassin Jungler</p>
                </div>
              </Link>

              <Link
                href="/akai"
                className="group p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 hover:shadow-glow-cyan transition-all flex items-center gap-2.5"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-amber-500/50 p-0.5 flex-shrink-0 overflow-hidden">
                  <SafeImage
                    src="/Assets/Hero Icons/Akai/Akai.png"
                    alt="Akai"
                    fallbackType="hero"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-100 group-hover:text-cyan-300 truncate">Akai</span>
                    <span className="text-[9px] bg-amber-500 text-slate-950 font-black px-1 rounded">S</span>
                  </div>
                  <p className="text-[10px] text-slate-400 truncate">Tank Roamer</p>
                </div>
              </Link>

              <Link
                href="/fanny"
                className="group p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 hover:shadow-glow-cyan transition-all flex items-center gap-2.5"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-amber-500/50 p-0.5 flex-shrink-0 overflow-hidden">
                  <SafeImage
                    src="/Assets/Hero Icons/Fanny/Fanny.png"
                    alt="Fanny"
                    fallbackType="hero"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-100 group-hover:text-cyan-300 truncate">Fanny</span>
                    <span className="text-[9px] bg-red-600/90 text-white font-black px-1 rounded">S+</span>
                  </div>
                  <p className="text-[10px] text-slate-400 truncate">Blade Dancer</p>
                </div>
              </Link>

              <Link
                href="/valentina"
                className="group p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 hover:shadow-glow-cyan transition-all flex items-center gap-2.5"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-amber-500/50 p-0.5 flex-shrink-0 overflow-hidden">
                  <SafeImage
                    src="/Assets/Hero Icons/Valentina/Valentina.png"
                    alt="Valentina"
                    fallbackType="hero"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-100 group-hover:text-cyan-300 truncate">Valentina</span>
                    <span className="text-[9px] bg-red-600/90 text-white font-black px-1 rounded">S+</span>
                  </div>
                  <p className="text-[10px] text-slate-400 truncate">Mage Mid Lane</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Grid & Filter Controls */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        {/* Controls Container */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 sm:p-5 shadow-xl mb-6 space-y-3.5">
          {/* Top row: Role Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <RoleFilter
              activeRole={selectedRole}
              onSelectRole={setSelectedRole}
            />

            {/* Tier Filter Pills */}
            <div className="flex items-center gap-1.5 self-start lg:self-center flex-wrap">
              <span className="text-xs font-bold text-slate-400 mr-1 hidden sm:inline">Tier:</span>
              {['All', 'S+', 'S', 'A', 'B'].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition-all ${
                    selectedTier === tier
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-glow-gold'
                      : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {tier === 'All' ? 'Semua Tier' : `${tier}`}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom row: Search Bar, Results Count & View Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
            {/* Search Input with Icon */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari hero dari 121 daftar (Aamon, Chou, Fanny, Yu Zhong)..."
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
              <svg
                className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results Count & View Mode Toggle */}
            <div className="flex items-center justify-between sm:justify-end gap-3">
              <div className="text-xs text-slate-400 font-medium">
                Menampilkan <span className="text-cyan-400 font-bold">{filteredHeroes.length}</span> dari {HEROES_DATA.length} Hero
              </div>

              {/* View Toggle (8 Kolom vs 4 Kolom) */}
              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setViewMode('compact')}
                  title="Tampilan Kompak (8 Hero per Baris)"
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'compact'
                      ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>⊞</span>
                  <span className="hidden md:inline">8 Kolom (Kompak)</span>
                </button>
                <button
                  onClick={() => setViewMode('detailed')}
                  title="Tampilan Detail (4 Hero per Baris)"
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'detailed'
                      ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>⊟</span>
                  <span className="hidden md:inline">4 Kolom (Detail)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Cards Grid (8 Kolom per Baris di Desktop pada mode compact) */}
        {filteredHeroes.length > 0 ? (
          <motion.div
            layout
            className={
              viewMode === 'compact'
                ? 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3'
                : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'
            }
          >
            <AnimatePresence>
              {filteredHeroes.map((hero) => (
                <motion.div
                  key={hero.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  <HeroCard hero={hero} viewMode={viewMode} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800 p-8">
            <svg
              className="w-12 h-12 text-slate-600 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-base font-bold text-slate-200">Tidak ada hero yang cocok</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Tidak ditemukan hasil untuk pencarian &quot;{searchQuery}&quot; pada filter role {selectedRole}. Coba ubah kata kunci atau reset filter.
            </p>
            <button
              onClick={() => {
                setSelectedRole('All');
                setSearchQuery('');
                setSelectedTier('All');
              }}
              className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-bold rounded-lg border border-slate-700"
            >
              Reset Semua Filter
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
