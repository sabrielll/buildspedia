'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import SafeImage from '../../components/SafeImage';
import ItemIcon from '../../components/ItemIcon';
import EmblemSetup from '../../components/EmblemSetup';
import SpellCard from '../../components/SpellCard';
import SkillOrder from '../../components/SkillOrder';
import { getHeroBySlug, HEROES_DATA, TIER_CONFIG } from '../../data/heroes';

export default function HeroDetailPage() {
  const params = useParams();
  const heroNameParam = params?.heroName;
  const hero = getHeroBySlug(heroNameParam);

  const [activeTab, setActiveTab] = useState('build');
  const [selectedSkinIndex, setSelectedSkinIndex] = useState(0);

  if (!hero) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-2xl font-black text-slate-100">Hero Tidak Ditemukan</h1>
        <p className="text-slate-400 text-sm mt-1 max-w-md">
          Hero dengan kata kunci &quot;{heroNameParam}&quot; belum terdaftar di database kami.
        </p>
        <Link
          href="/"
          className="mt-6 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold rounded-xl shadow-glow-cyan transition-all"
        >
          Kembali ke Daftar Hero
        </Link>
      </div>
    );
  }

  const tierStyle = TIER_CONFIG[hero.tier] || TIER_CONFIG['S'];
  const currentSkin = hero.assets?.skins?.[selectedSkinIndex] || {
    name: hero.name,
    path: hero.assets?.heroIcon || `/Assets/Hero Icons/${hero.name}/${hero.name}.png`
  };

  const tabs = [
    { id: 'build', label: 'Core Build & Situational', icon: '⚔️' },
    { id: 'emblems', label: 'Emblem Sets & Spells', icon: '🛡️' },
    { id: 'skills', label: 'Skills & Combos', icon: '⚡' },
    { id: 'counters', label: 'Counters & Synergies', icon: '🎯' },
    { id: 'guide', label: 'Gameplay Strategy', icon: '📜' },
  ];

  return (
    <div className="min-h-screen pb-24 w-full max-w-full overflow-x-hidden">
      {/* Breadcrumb & Navigation Top Bar */}
      <div className="bg-slate-900/60 border-b border-slate-800/80 py-2.5 sm:py-3 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              {hero.role}
            </Link>
            <span>/</span>
            <span className="text-slate-200 font-bold truncate max-w-[200px]">{hero.name} Guide</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full scrollbar-none">
            <span className="text-[10px] uppercase font-bold text-slate-500 whitespace-nowrap">Hero Lain:</span>
            <div className="flex items-center gap-1">
              {HEROES_DATA.slice(0, 6).map((h) => (
                <Link
                  key={h.id}
                  href={`/${h.slug}`}
                  className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold transition-all whitespace-nowrap ${
                    h.slug === hero.slug
                      ? 'bg-amber-500 text-slate-950 shadow-glow-gold'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {h.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header Banner (WildRiftFire Style) */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80 pt-8 pb-10 overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            
            {/* Hero Image Showcase with Skin Selector */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-slate-900 p-2 border-2 border-amber-500/60 shadow-glow-gold overflow-hidden">
                <SafeImage
                  src={currentSkin.path}
                  alt={currentSkin.name}
                  fallbackType="hero"
                  className="w-full h-full object-cover rounded-2xl filter brightness-105"
                />
                
                {/* Tier Floating Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`px-2.5 py-1 text-xs font-black rounded-lg shadow-lg ${tierStyle.badge}`}>
                    {hero.tier} Tier
                  </span>
                </div>
              </div>

              {/* Skin Variation Thumbnails (jika ada) */}
              {hero.assets?.skins && hero.assets.skins.length > 1 && (
                <div className="mt-3 flex items-center gap-1.5">
                  {hero.assets.skins.map((skin, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSkinIndex(idx)}
                      title={skin.name}
                      className={`w-8 h-8 rounded-lg overflow-hidden border transition-all ${
                        selectedSkinIndex === idx
                          ? 'border-cyan-400 shadow-glow-cyan scale-110'
                          : 'border-slate-700 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <SafeImage
                        src={skin.path}
                        alt={skin.name}
                        fallbackType="hero"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Hero Bio & Quick Stats */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-2">
                {/* Role Pill */}
                <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-3 py-1 rounded-full">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <SafeImage
                      src={hero.assets?.roleIcon || `/Assets/Clases/${hero.role}.png`}
                      alt={hero.role}
                      fallbackType="role"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-200">{hero.role}</span>
                  {hero.secondaryRole && (
                    <span className="text-xs text-slate-400">/ {hero.secondaryRole}</span>
                  )}
                </div>

                {/* Lane Pill */}
                <span className="text-xs uppercase font-extrabold tracking-wider bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 px-3 py-1 rounded-full">
                  Lane: {hero.lane}
                </span>

                {/* Difficulty Pill */}
                <span className="text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 rounded-full">
                  Tingkat Kesulitan: {hero.difficulty}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
                {hero.name}
              </h1>
              <p className="text-sm sm:text-base text-amber-400 font-semibold italic mt-1">
                &ldquo;{hero.title}&rdquo;
              </p>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-2xl">
                {hero.summary}
              </p>

              {/* Stat Metrics Bar */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto lg:mx-0">
                <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Win Rate</span>
                  <div className="text-base font-black text-emerald-400">{hero.winRate}</div>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Pick Rate</span>
                  <div className="text-base font-black text-slate-200">{hero.pickRate}</div>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Ban Rate</span>
                  <div className="text-base font-black text-amber-400">{hero.banRate}</div>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Rating Offense</span>
                  <div className="text-base font-black text-cyan-400">{hero.ratings?.offense}/10</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation Anchor Tabs */}
      <div className="sticky top-16 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-glow-cyan border border-cyan-400'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-12">
        
        {/* 1. CORE BUILD SECTION */}
        {(activeTab === 'build' || activeTab === 'all') && (
          <section id="build-section" className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-2xl font-black text-slate-100 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-amber-400 shadow-glow-gold" />
                  Rekomendasi Core Build (Urutan Pembelian)
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Urutan 6 item utama yang telah dioptimalkan untuk sinergi damage dan survival rate {hero.name}.
                </p>
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full hidden sm:inline-block">
                Tingkat Kemenangan Build: {hero.winRate}
              </span>
            </div>

            {/* Quick Progression Horizontal Visual Bar */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center justify-between overflow-x-auto pb-2 gap-3 scrollbar-none">
                {hero.coreBuild.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center min-w-[70px]">
                      <span className="text-[10px] font-bold text-amber-400 mb-1">
                        Slot {item.slot}
                      </span>
                      <ItemIcon
                        item={item}
                        size="md"
                        slotNumber={item.slot}
                        showTooltip={true}
                      />
                      <span className="text-[11px] font-bold text-slate-200 text-center mt-1.5 truncate max-w-[80px]">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {item.cost}
                      </span>
                    </div>
                    {idx < hero.coreBuild.length - 1 && (
                      <div className="hidden sm:flex text-slate-600 font-black text-lg">
                        →
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Detailed Item Breakdown Cards (WildRiftFire Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hero.coreBuild.map((item) => (
                <div
                  key={item.slot}
                  className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header Item Card */}
                    <div className="flex items-center gap-3 mb-3">
                      <ItemIcon item={item} size="md" showTooltip={false} slotNumber={item.slot} />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-amber-400">Slot #{item.slot}</span>
                          <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">
                            {item.category}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-100 truncate">{item.name}</h4>
                        <span className="text-xs font-semibold text-amber-400/90">🪙 {item.cost}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="text-xs font-semibold text-cyan-300 mb-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                      {item.stats}
                    </div>

                    {/* Passive */}
                    <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                      <span className="text-amber-400 font-semibold">Efek Pasif: </span>
                      {item.passive}
                    </p>
                  </div>

                  {/* Why Buy */}
                  <div className="pt-2.5 border-t border-slate-800 text-[11px] text-slate-400 bg-slate-950/40 p-2 rounded">
                    <span className="text-cyan-400 font-semibold">Alasan Membeli: </span>
                    {item.whyBuy}
                  </div>
                </div>
              ))}
            </div>

            {/* SITUATIONAL ITEMS SECTION */}
            <div className="pt-6">
              <div className="border-b border-slate-800 pb-3 mb-4">
                <h3 className="text-xl font-black text-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-glow-cyan" />
                  Item Situasional (Alternatif Counter Musuh)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Ganti item slot ke-5 atau ke-6 dengan pilihan ini berdasarkan kondisi komposisi lawan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {hero.situationalBuild.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/80 border border-slate-800 hover:border-amber-400/50 rounded-2xl p-4 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <ItemIcon item={item} size="sm" showTooltip={false} />
                        <div>
                          {item.badge && (
                            <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded">
                              {item.badge}
                            </span>
                          )}
                          <h4 className="text-sm font-bold text-slate-100 mt-1">{item.name}</h4>
                          <span className="text-[11px] text-slate-400 font-medium">🪙 {item.cost}</span>
                        </div>
                      </div>
                      <div className="text-[11px] font-medium text-cyan-300 mb-2">
                        {item.stats}
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-400 bg-slate-950/50 p-2 rounded border border-slate-800">
                      <span className="text-amber-400 font-semibold">Situasi Penggunaan: </span>
                      {item.whyBuy}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 2. EMBLEM & SPELLS SECTION */}
        {(activeTab === 'emblems' || activeTab === 'all') && (
          <section id="emblem-section" className="space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-2xl font-black text-slate-100 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-purple-400 shadow-glow-cyan" />
                Konfigurasi Emblem & Battle Spells
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Susunan emblem 3-Tier yang memberikan scaling optimal untuk role {hero.role}.
              </p>
            </div>

            {/* Emblem Component */}
            <EmblemSetup emblem={hero.emblem} />

            {/* Battle Spells Grid */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                Pilihan Battle Spells Rekomendasi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {hero.spells.map((spell, idx) => (
                  <SpellCard key={idx} spell={spell} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 3. SKILLS & COMBOS SECTION */}
        {(activeTab === 'skills' || activeTab === 'all') && (
          <section id="skills-section" className="space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-2xl font-black text-slate-100 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-glow-cyan" />
                Kemampuan Skill & Panduan Kombo
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Penjelasan mendalam efek pasif, skill aktif, dan urutan kombo mematikan.
              </p>
            </div>

            {/* Skill Leveling Priority */}
            <SkillOrder skillOrder={hero.skillOrder} />

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hero.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${
                        skill.type.includes('Passive') 
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' 
                          : skill.type.includes('Ultimate')
                          ? 'bg-red-500/10 text-red-400 border-red-500/30'
                          : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                      }`}>
                        {skill.type}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        Cooldown: {skill.cooldown}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-slate-100 mt-1 mb-2">
                      {skill.name}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line mb-3">
                      {skill.description}
                    </p>
                  </div>

                  {skill.tips && (
                    <div className="pt-2.5 border-t border-slate-800/80 text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded-lg">
                      <span className="text-amber-400 font-bold">Pro Tip: </span>
                      {skill.tips}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Combos Visual Section */}
            {hero.combos && (
              <div className="mt-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <h3 className="text-lg font-black text-slate-100 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  Urutan Eksekusi Kombo (Execution Sequences)
                </h3>

                <div className="space-y-4">
                  {hero.combos.map((combo, idx) => (
                    <div key={idx} className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl">
                      <h4 className="text-sm font-bold text-cyan-300 mb-2">
                        {combo.name}
                      </h4>

                      {/* Sequence Pills */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {combo.sequence.map((step, stepIdx) => (
                          <React.Fragment key={stepIdx}>
                            <span className="text-xs font-bold bg-slate-800 text-slate-100 border border-slate-700 px-3 py-1.5 rounded-lg shadow">
                              <span className="text-amber-400 mr-1.5">#{stepIdx + 1}</span>
                              {step}
                            </span>
                            {stepIdx < combo.sequence.length - 1 && (
                              <span className="text-cyan-400 font-black text-xs">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {combo.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 4. COUNTERS & SYNERGIES SECTION */}
        {(activeTab === 'counters' || activeTab === 'all') && (
          <section id="counters-section" className="space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-2xl font-black text-slate-100 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-glow-cyan" />
                Hero Matchup: Counter & Sinergi Tim
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Ketahui keunggulan dan kelemahan draft hero untuk memenangkan fase pemilihan rank.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Strong Against */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <h3 className="text-base font-bold text-emerald-400">Kuat Melawan (Strong Against)</h3>
                </div>
                <div className="space-y-3">
                  {hero.counters?.strongAgainst?.map((target, idx) => (
                    <div key={idx} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-100">{target.name}</span>
                        <span className="text-[10px] text-slate-400">{target.role}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{target.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weak Against */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <h3 className="text-base font-bold text-red-400">Lemah Melawan (Weak Against)</h3>
                </div>
                <div className="space-y-3">
                  {hero.counters?.weakAgainst?.map((target, idx) => (
                    <div key={idx} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-100">{target.name}</span>
                        <span className="text-[10px] text-slate-400">{target.role}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{target.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Good Synergies */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <h3 className="text-base font-bold text-cyan-400">Sinergi Terbaik (Best Partners)</h3>
                </div>
                <div className="space-y-3">
                  {hero.counters?.synergies?.map((target, idx) => (
                    <div key={idx} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-100">{target.name}</span>
                        <span className="text-[10px] text-slate-400">{target.role}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{target.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 5. GAMEPLAY STRATEGY SECTION */}
        {(activeTab === 'guide' || activeTab === 'all') && (
          <section id="guide-section" className="space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-2xl font-black text-slate-100 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-amber-400 shadow-glow-gold" />
                Panduan Gameplay per Fase Pertandingan
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Rencana makro gameplay dari menit pertama hingga perebutan Lord krusial di late game.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Early Game */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl relative overflow-hidden">
                <div className="text-[10px] uppercase font-black text-amber-400 tracking-wider mb-2">
                  Menit 00:00 - 05:00
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">Early Game Strategy</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {hero.gameplayGuide?.earlyGame}
                </p>
              </div>

              {/* Mid Game */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl relative overflow-hidden">
                <div className="text-[10px] uppercase font-black text-cyan-400 tracking-wider mb-2">
                  Menit 05:00 - 12:00
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">Mid Game Teamfight</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {hero.gameplayGuide?.midGame}
                </p>
              </div>

              {/* Late Game */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl relative overflow-hidden">
                <div className="text-[10px] uppercase font-black text-purple-400 tracking-wider mb-2">
                  Menit 12:00+ (Lord Clash)
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">Late Game Decision</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {hero.gameplayGuide?.lateGame}
                </p>
              </div>
            </div>

            {/* Pros & Cons Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h3 className="text-base font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <span>✅</span> Kelebihan Utama (Pros)
                </h3>
                <ul className="space-y-2">
                  {hero.pros?.map((pro, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h3 className="text-base font-bold text-red-400 mb-3 flex items-center gap-2">
                  <span>⚠️</span> Kelemahan Utama (Cons)
                </h3>
                <ul className="space-y-2">
                  {hero.cons?.map((con, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
