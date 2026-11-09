'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import SafeImage from '../../components/SafeImage';
import RoleFilter from '../../components/RoleFilter';
import { HEROES_DATA, TIER_CONFIG } from '../../data/heroes';

const LANES = ['All', 'Jungler', 'Roamer', 'Mid Lane', 'Gold Lane', 'Exp Lane'];
const TIERS = ['S+', 'S', 'A', 'B'];

export default function TierListPage() {
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedLane, setSelectedLane] = useState('All');

  const heroesByTier = useMemo(() => {
    const filtered = HEROES_DATA.filter((hero) => {
      const matchRole =
        selectedRole === 'All' ||
        hero.role === selectedRole ||
        hero.secondaryRole === selectedRole;

      const matchLane =
        selectedLane === 'All' ||
        hero.lane.toLowerCase().includes(selectedLane.toLowerCase());

      return matchRole && matchLane;
    });

    const groups = { 'S+': [], S: [], A: [], B: [] };
    filtered.forEach((h) => {
      if (groups[h.tier]) {
        groups[h.tier].push(h);
      } else {
        groups['B'].push(h);
      }
    });

    return groups;
  }, [selectedRole, selectedLane]);

  return (
    <div className="min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80 pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase mb-3">
            Ranked Competitive Tier List
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Tier List Mobile Legends{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Patch 1.8.92
            </span>
          </h1>
          <p className="mt-3 text-sm text-slate-400 max-w-2xl mx-auto">
            Daftar peringkat kekuatan hero MLBB berdasarkan dominasi turnamen kompetitif dan statistik win rate tier Mythic Glory ke atas.
          </p>

          {/* Lane Filter Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            {LANES.map((lane) => (
              <button
                key={lane}
                onClick={() => setSelectedLane(lane)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedLane === lane
                    ? 'bg-amber-500 text-slate-950 shadow-glow-gold'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {lane === 'All' ? 'Semua Lane' : lane}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Role Filter */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl">
          <RoleFilter activeRole={selectedRole} onSelectRole={setSelectedRole} />
        </div>

        {/* Tier Groups Matrix */}
        {TIERS.map((tierKey) => {
          const heroes = heroesByTier[tierKey] || [];
          const tierStyle = TIER_CONFIG[tierKey];

          return (
            <div
              key={tierKey}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-6 shadow-xl"
            >
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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {heroes.map((hero) => (
                    <Link
                      key={hero.id}
                      href={`/${hero.slug}`}
                      className="group bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-400 hover:shadow-glow-cyan rounded-xl p-2.5 transition-all flex flex-col items-center text-center"
                    >
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-slate-700 group-hover:border-cyan-400 mb-2">
                        <SafeImage
                          src={hero.assets?.heroIcon || `/Assets/Hero Icons/${hero.name}/${hero.name}.png`}
                          alt={hero.name}
                          fallbackType="hero"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-slate-500 text-xs italic">
                  Tidak ada hero di tier ini dengan filter yang dipilih.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
