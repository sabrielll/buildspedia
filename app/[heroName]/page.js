'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { getHeroBySlug } from '../../data/heroes';
import HeroNotFound from '../../components/hero-detail/HeroNotFound';
import HeroHeader from '../../components/hero-detail/HeroHeader';
import HeroBuildSection from '../../components/hero-detail/HeroBuildSection';
import HeroLoadoutSection from '../../components/hero-detail/HeroLoadoutSection';
import HeroSkillSection from '../../components/hero-detail/HeroSkillSection';
import HeroMatchupSection from '../../components/hero-detail/HeroMatchupSection';

export default function HeroDetailPage() {
  const params = useParams();
  const heroNameParam = params?.heroName;
  const hero = getHeroBySlug(heroNameParam);

  if (!hero) {
    return <HeroNotFound heroNameParam={heroNameParam} />;
  }

  return (
    <div className="min-h-screen pb-16 w-full max-w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-5 space-y-6">
        {/* 1. Compact Hero Identity & Quick Stats Bar */}
        <HeroHeader hero={hero} />

        {/* 2. Unified Loadout Bento: 6-Item Final Build + Situational (Left) & Emblem + Spells (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <HeroBuildSection hero={hero} />
          <HeroLoadoutSection hero={hero} />
        </div>

        {/* 3. Bottom Split: Skill Leveling + Combo Video (Left) & Matchup Matrix (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <HeroSkillSection hero={hero} />
          <HeroMatchupSection hero={hero} />
        </div>
      </div>
    </div>
  );
}
