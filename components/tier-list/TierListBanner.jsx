'use client';

import React from 'react';

export default function TierListBanner({ lanes, selectedLane, onSelectLane }) {
  return (
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
          {lanes.map((lane) => (
            <button
              key={lane}
              onClick={() => onSelectLane(lane)}
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
  );
}
