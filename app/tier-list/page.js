'use client';

import React, { useState, useMemo } from 'react';
import RoleFilter from '../../components/RoleFilter';
import TierListBanner from '../../components/tier-list/TierListBanner';
import TierGroupSection from '../../components/tier-list/TierGroupSection';
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
      <TierListBanner
        lanes={LANES}
        selectedLane={selectedLane}
        onSelectLane={setSelectedLane}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl">
          <RoleFilter activeRole={selectedRole} onSelectRole={setSelectedRole} />
        </div>

        {TIERS.map((tierKey) => (
          <TierGroupSection
            key={tierKey}
            tierKey={tierKey}
            tierStyle={TIER_CONFIG[tierKey]}
            heroes={heroesByTier[tierKey] || []}
          />
        ))}
      </div>
    </div>
  );
}
