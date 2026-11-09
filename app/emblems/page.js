'use client';

import React, { useState } from 'react';
import SafeImage from '../../components/SafeImage';

const EMBLEM_SETS = [
  {
    id: 'assassin',
    name: 'Custom Assassin Emblem',
    category: 'Assasins',
    icon: 'Custom_Assassin_Emblem.png',
    stats: '+16 Adaptive Penetration, +10 Adaptive Attack, +3% Movement Speed',
    description: 'Emblem ofensif murni terbaik untuk hero burst physical maupun magic yang berfokus pada eksekusi cepat.',
    talents: [
      { name: 'Rupture', tier: 'Tier 1', filename: 'Rupture-Talent.png', effect: 'Memperoleh 5 Adaptive Penetration tambahan untuk menembus base armor lawan.' },
      { name: 'Master Assassin', tier: 'Tier 2', filename: 'Master_Assassin-Talent.png', effect: 'Meningkatkan damage sebesar 7% jika hanya ada 1 musuh di sekitar (duel 1v1).' },
      { name: 'Killing Spree', tier: 'Tier 3', filename: 'Killing_Spree-Talent.png', effect: 'Memulihkan 8% Max HP dan memperoleh 20% Movement Speed selama 3 detik setelah mengeliminasi hero.' }
    ]
  },
  {
    id: 'tank',
    name: 'Custom Tank Emblem',
    category: 'Tank',
    icon: 'Custom_Tank_Emblem.png',
    stats: '+500 Max HP, +10 Physical & Magic Defense, +4 HP Regen',
    description: 'Pilihan utama roamer dan jungler tank untuk memaksimalkan daya tahan terhadap gempuran lawan.',
    talents: [
      { name: 'Vitality', tier: 'Tier 1', filename: 'Vitality-Talent.png', effect: 'Mendapatkan 225 Max HP ekstra secara langsung.' },
      { name: 'Tenacity', tier: 'Tier 2', filename: 'Tenacity-Talent.png', effect: 'Meningkatkan Physical & Magic Defense sebesar 15 poin saat HP berada di bawah 50%.' },
      { name: 'Concussive Blast', tier: 'Tier 3', filename: 'Concussive_Blast-Talent.png', effect: 'Menghasilkan ledakan magic area berskala 100 (+7% Total HP) setelah basic attack.' }
    ]
  },
  {
    id: 'mage',
    name: 'Custom Mage Emblem',
    category: 'Mage',
    icon: 'Custom_Mage_Emblem.png',
    stats: '+30 Magic Power, +5% Cooldown Reduction, +8 Magic Penetration',
    description: 'Emblem standar midlaner sihir untuk memaksimalkan daya ledak skill dan frekuensi rotasi spell.',
    talents: [
      { name: 'Inspire', tier: 'Tier 1', filename: 'Inspire-Talent.png', effect: 'Mendapatkan 5% Cooldown Reduction ekstra.' },
      { name: 'Bargain Hunter', tier: 'Tier 2', filename: 'Bargain_Hunter-Talent.png', effect: 'Memperoleh diskon harga 5% pada seluruh pembelian equipment di shop.' },
      { name: 'Lethal Ignition', tier: 'Tier 3', filename: 'Lethal_Ignition-Talent.png', effect: 'Memberikan damage > 7% HP lawan 3 kali membakar target sebesar 162-750 adaptive damage.' }
    ]
  },
  {
    id: 'fighter',
    name: 'Custom Fighter Emblem',
    category: 'Fighter',
    icon: 'Custom_Fighter_Emblem.png',
    stats: '+10% Spell Vamp, +22 Adaptive Attack, +6 Physical & Magic Defense',
    description: 'Dirancang khusus untuk petarung garis depan yang membutuhkan lifesteal sihir dan ketahanan tubuh.',
    talents: [
      { name: 'Firmness', tier: 'Tier 1', filename: 'Firmness-Talent.png', effect: 'Mendapatkan 6 Physical & Magic Defense tambahan.' },
      { name: 'Festival of Blood', tier: 'Tier 2', filename: 'Festival_of_Blood-Talent.png', effect: 'Meningkatkan 6% Spell Vamp (+0.5% per kill/assist hingga 10%).' },
      { name: 'Brave Smite', tier: 'Tier 3', filename: 'Brave_Smite-Talent.png', effect: 'Memulihkan 4% Max HP setiap kali skill mengenai hero musuh.' }
    ]
  },
  {
    id: 'marksman',
    name: 'Custom Marksman Emblem',
    category: 'Marksman',
    icon: 'Custom_Marksman_Emblem.png',
    stats: '+15% Attack Speed, +5% Adaptive Attack, +5% Critical Chance',
    description: 'Pondasi utama penembak jitu Gold Lane untuk memaksimalkan DPS tembakan dan critical.',
    talents: [
      { name: 'Fatal', tier: 'Tier 1', filename: 'Fatal-Talent.png', effect: 'Mendapatkan 5% Critical Chance dan 10% Critical Damage.' },
      { name: 'Weapon Master', tier: 'Tier 2', filename: 'Weapon_Master-Talent.png', effect: 'Physical Attack dari item dan emblem meningkat sebesar 5%.' },
      { name: 'Weakness Finder', tier: 'Tier 3', filename: 'Weakness_Finder-Talent.png', effect: 'Basic attack memperlambat musuh 90% dan memangkas 50% Attack Speed lawan.' }
    ]
  },
  {
    id: 'support',
    name: 'Custom Support Emblem',
    category: 'Support',
    icon: 'Custom_Support_Emblem.png',
    stats: '+15% Healing Effect, +10 Cooldown Reduction, +10 Movement Speed',
    description: 'Meningkatkan efektivitas penyembuhan darah kawan dan mempercepat ketersediaan Battle Spell.',
    talents: [
      { name: 'Agility', tier: 'Tier 1', filename: 'Agility-Talent.png', effect: 'Mendapatkan 4% Movement Speed tambahan.' },
      { name: 'Pull Yourself Together', tier: 'Tier 2', filename: 'Pull_Yourself_Together-Talent.png', effect: 'Mengurangi cooldown Battle Spell dan Equipment aktif sebesar 15%.' },
      { name: 'Focusing Mark', tier: 'Tier 3', filename: 'Focusing_Mark-Talent.png', effect: 'Serangan ke musuh membuat rekan tim menghasilkan damage 6% lebih besar ke target tersebut.' }
    ]
  },
  {
    id: 'common',
    name: 'Basic Common Emblem',
    category: 'Basic_Common',
    icon: 'Basic_Common_Emblem.png',
    stats: '+500 HP, +12 HP Regen, +12 Adaptive Attack, +100 Mana',
    description: 'Emblem regenerasi seimbang yang sangat cocok untuk hero boros mana atau bertipe sustain hibrida.',
    talents: [
      { name: 'Thrill', tier: 'Tier 1', filename: 'Thrill.png', effect: 'Mendapatkan 16 Adaptive Attack tambahan.' },
      { name: 'Seasoned Hunter', tier: 'Tier 2', filename: 'Seasoned_Hunter.png', effect: 'Meningkatkan damage ke Lord dan Turtle sebesar 15% serta mempercepat jungle.' },
      { name: 'Quantum Charge', tier: 'Tier 3', filename: 'Quantum_Charge-Talent.png', effect: 'Basic attack memberi 30% Movement Speed dan memulihkan HP setara 75-180.' }
    ]
  }
];

export default function EmblemsPage() {
  const [selectedEmblem, setSelectedEmblem] = useState(EMBLEM_SETS[0]);

  return (
    <div className="min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80 pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase mb-3">
            Sistem Talent Emblem Baru MLBB
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Katalog Emblem &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Talent Matrix
            </span>
          </h1>
          <p className="mt-3 text-sm text-slate-400 max-w-2xl mx-auto">
            Pelajari setiap bonus stat atribut dan efek pasif 3-Tier Talent untuk menyusun kombinasi emblem terkuat bagi hero andalan Anda.
          </p>

          {/* Emblem Selector Pills */}
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            {EMBLEM_SETS.map((emb) => (
              <button
                key={emb.id}
                onClick={() => setSelectedEmblem(emb)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedEmblem.id === emb.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-glow-cyan border border-cyan-400'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <SafeImage
                    src={`/Assets/Emblem/${emb.category}/${emb.icon}`}
                    alt={emb.name}
                    fallbackType="emblem"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>{emb.name.replace('Custom ', '').replace(' Emblem', '')}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Emblem Detail Showcase */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-slate-800 pb-6 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-slate-950 p-2.5 border-2 border-amber-500/60 shadow-glow-gold flex items-center justify-center flex-shrink-0">
              <SafeImage
                src={`/Assets/Emblem/${selectedEmblem.category}/${selectedEmblem.icon}`}
                alt={selectedEmblem.name}
                fallbackType="emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-0.5 rounded-full">
                  Kategori {selectedEmblem.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mt-1">
                {selectedEmblem.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {selectedEmblem.description}
              </p>
              <div className="mt-2 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-lg inline-block">
                Bonus Atribut: {selectedEmblem.stats}
              </div>
            </div>
          </div>

          {/* 3 Talents Matrix */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-200">
              Pilihan Susunan Talent ({selectedEmblem.name})
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedEmblem.talents.map((talent, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/80 border border-slate-800 hover:border-cyan-400/60 rounded-2xl p-5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                        {talent.tier}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 p-1 flex items-center justify-center">
                        <SafeImage
                          src={`/Assets/Emblem/${selectedEmblem.category}/${talent.filename}`}
                          alt={talent.name}
                          fallbackType="emblem"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="text-sm font-bold text-slate-100">{talent.name}</h4>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {talent.effect}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
