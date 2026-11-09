'use client';

import React, { useState, useMemo } from 'react';
import SafeImage from '../../components/SafeImage';
import { ITEMS_DATA, ITEM_CATEGORIES } from '../../data/items';

export default function ItemsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');

  const filteredItems = useMemo(() => {
    return ITEMS_DATA.filter((item) => {
      const matchCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.stats.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.passive.toLowerCase().includes(searchQuery.toLowerCase());

      const matchRole =
        selectedRole === 'All' ||
        item.recommendedRoles.includes(selectedRole);

      return matchCategory && matchSearch && matchRole;
    });
  }, [selectedCategory, searchQuery, selectedRole]);

  const categoryColor = (cat) => {
    switch (cat) {
      case 'Physical':
        return 'text-red-400 bg-red-500/10 border-red-500/30';
      case 'Magical':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'Defense':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Boots':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80 pt-10 pb-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase mb-3">
            Katalog Equipment MLBB Season 32
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Database Item &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Equipment Codex
            </span>
          </h1>
          <p className="mt-3 text-sm text-slate-400 max-w-2xl mx-auto">
            Eksplorasi seluruh racikan item Physical, Magical, Defense, dan Roaming Boots lengkap dengan analisis harga gold, atribut stats, dan efek pasif unik.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            {ITEM_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-glow-cyan border border-cyan-400'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Filter & Items Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
        {/* Search & Role Filter Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari item (Blade of Despair, Athena, Genius Wand)..."
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
            <svg
              className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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

          {/* Role Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 mr-1 hidden lg:inline">Rekomendasi Role:</span>
            {['All', 'Assassin', 'Fighter', 'Mage', 'Marksman', 'Support', 'Tank'].map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition-all whitespace-nowrap ${
                  selectedRole === role
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-glow-gold'
                    : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
                }`}
              >
                {role === 'All' ? 'Semua Role' : role}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="text-xs text-slate-400 font-medium whitespace-nowrap self-center">
            <span className="text-cyan-400 font-bold">{filteredItems.length}</span> Item
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => {
              const imagePath = `/Assets/Build Icons/${item.category}/${item.filename}`;

              return (
                <div
                  key={item.id}
                  className="bg-slate-900/90 border border-slate-800 hover:border-cyan-400/60 rounded-2xl p-4 transition-all duration-300 shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Item Card */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 rounded-xl bg-slate-950 p-1.5 border border-slate-700 group-hover:border-cyan-400 group-hover:shadow-glow-cyan transition-all flex items-center justify-center flex-shrink-0">
                        <SafeImage
                          src={imagePath}
                          alt={item.name}
                          fallbackType="item"
                          className="w-full h-full object-contain filter drop-shadow"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${categoryColor(item.category)}`}>
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors truncate">
                          {item.name}
                        </h3>
                        <span className="text-xs font-semibold text-amber-400">
                          🪙 {item.cost}
                        </span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="text-xs font-semibold text-cyan-300 bg-slate-950/70 p-2 rounded-lg border border-slate-800/80 mb-2">
                      {item.stats}
                    </div>

                    {/* Passive */}
                    <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                      <span className="text-amber-400 font-semibold">Efek Pasif: </span>
                      {item.passive}
                    </p>
                  </div>

                  {/* Recommended Roles */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] text-slate-500 font-semibold">Cocok Untuk:</span>
                    {item.recommendedRoles.map((role) => (
                      <span
                        key={role}
                        className="text-[9px] font-bold text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800 p-8">
            <svg
              className="w-12 h-12 text-slate-600 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-base font-bold text-slate-200">Tidak ada item yang cocok</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Tidak ditemukan hasil untuk pencarian &quot;{searchQuery}&quot; pada filter kategori {selectedCategory}. Coba ubah kata kunci atau reset filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setSelectedRole('All');
              }}
              className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-bold rounded-lg border border-slate-700"
            >
              Reset Semua Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
