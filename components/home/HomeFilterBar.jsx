'use client';

import React from 'react';
import RoleFilter from '../RoleFilter';

const TIER_FILTERS = ['All', 'S+', 'S', 'A', 'B'];

export default function HomeFilterBar({
  selectedRole,
  onSelectRole,
  selectedTier,
  onSelectTier,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  filteredCount,
  totalCount
}) {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 sm:p-5 shadow-xl mb-6 space-y-3.5">
      {/* Top row: Role Filter Pills */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        <RoleFilter activeRole={selectedRole} onSelectRole={onSelectRole} />

        {/* Tier Filter Pills */}
        <div className="flex items-center gap-1.5 self-start lg:self-center flex-wrap">
          <span className="text-xs font-bold text-slate-400 mr-1 hidden sm:inline">Tier:</span>
          {TIER_FILTERS.map((tier) => (
            <button
              key={tier}
              onClick={() => onSelectTier(tier)}
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
            onChange={(e) => onSearchChange(e.target.value)}
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
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
            >
              ✕
            </button>
          )}
        </div>

        {/* Results Count & View Mode Toggle */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <div className="text-xs text-slate-400 font-medium">
            Menampilkan <span className="text-cyan-400 font-bold">{filteredCount}</span> dari {totalCount} Hero
          </div>

          {/* View Toggle (8 Kolom vs 4 Kolom) */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onViewModeChange('compact')}
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
              onClick={() => onViewModeChange('detailed')}
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
  );
}
