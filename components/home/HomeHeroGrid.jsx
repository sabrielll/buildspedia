'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroCard from '../HeroCard';

function EmptyHeroState({ searchQuery, selectedRole, onResetFilters }) {
  return (
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
        onClick={onResetFilters}
        className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-bold rounded-lg border border-slate-700"
      >
        Reset Semua Filter
      </button>
    </div>
  );
}

export default function HomeHeroGrid({
  heroes,
  viewMode,
  searchQuery,
  selectedRole,
  onResetFilters
}) {
  if (heroes.length === 0) {
    return (
      <EmptyHeroState
        searchQuery={searchQuery}
        selectedRole={selectedRole}
        onResetFilters={onResetFilters}
      />
    );
  }

  return (
    <motion.div
      layout
      className={
        viewMode === 'compact'
          ? 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3'
          : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'
      }
    >
      <AnimatePresence>
        {heroes.map((hero) => (
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
  );
}
