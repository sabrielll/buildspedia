'use client';

import React, { useState, useMemo } from 'react';
import HomeBanner from '../components/home/HomeBanner';
import HomeFilterBar from '../components/home/HomeFilterBar';
import HomeHeroGrid from '../components/home/HomeHeroGrid';
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

  const handleResetFilters = () => {
    setSelectedRole('All');
    setSearchQuery('');
    setSelectedTier('All');
  };

  return (
    <div className="min-h-screen pb-20">
      <HomeBanner />

      <section className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <HomeFilterBar
          selectedRole={selectedRole}
          onSelectRole={setSelectedRole}
          selectedTier={selectedTier}
          onSelectTier={setSelectedTier}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          filteredCount={filteredHeroes.length}
          totalCount={HEROES_DATA.length}
        />

        <HomeHeroGrid
          heroes={filteredHeroes}
          viewMode={viewMode}
          searchQuery={searchQuery}
          selectedRole={selectedRole}
          onResetFilters={handleResetFilters}
        />
      </section>
    </div>
  );
}
