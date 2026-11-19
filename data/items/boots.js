/**
 * Buildspedia - Boots & Roaming Equipment Data
 * Mapped to /Assets/Build Icons/Boots/[filename]
 */

export const BOOTS_ITEMS = [
  {
    id: 'arcane_boots',
    name: 'Arcane Boots',
    category: 'Boots',
    filename: 'Arcane_boots.png',
    cost: '690 Gold',
    tier: 'Tier 2 Movement',
    stats: '+40 Movement Speed, +10 Magic Penetration',
    passive: 'Hunter: Memberikan flat magic penetration ekstra untuk menembus base defense lawan di early game.',
    recommendedRoles: ['Mage', 'Assassin']
  },
  {
    id: 'tough_boots',
    name: 'Tough Boots',
    category: 'Boots',
    filename: 'Tough_boots.png',
    cost: '700 Gold',
    stats: '+40 Movement Speed, +22 Magic Defense',
    passive: 'Fortitude: Mengurangi durasi efek Crowd Control (stun, slow, immobilize) yang diterima sebesar 30%.',
    recommendedRoles: ['Tank', 'Fighter', 'Assassin', 'Roamer']
  },
  {
    id: 'warrior_boots',
    name: 'Warrior Boots',
    category: 'Boots',
    filename: 'Warrior_boots.png',
    cost: '720 Gold',
    stats: '+40 Movement Speed, +22 Physical Defense',
    passive: 'Valor: Memperoleh 5 Physical Defense ekstra setiap menerima basic attack (hingga 25 poin) selama 3 detik.',
    recommendedRoles: ['Fighter', 'Tank']
  },
  {
    id: 'swift_boots',
    name: 'Swift Boots',
    category: 'Boots',
    filename: 'Swift_boots.png',
    cost: '710 Gold',
    stats: '+40 Movement Speed, +15% Attack Speed',
    passive: 'Swift: Mempercepat jeda antar tembakan dan kelancaran animasi serangan dasar.',
    recommendedRoles: ['Marksman']
  },
  {
    id: 'demon_shoes',
    name: 'Demon Shoes',
    category: 'Boots',
    filename: 'Demon_shoes.png',
    cost: '720 Gold',
    stats: '+40 Movement Speed, +10 Mana Regen',
    passive: 'Mysticism: Memulihkan 10% Max Mana saat mengeliminasi hero lawan dan 4% saat membunuh minion.',
    recommendedRoles: ['Mage', 'Support']
  },
  {
    id: 'magic_shoes',
    name: 'Magic Shoes',
    category: 'Boots',
    filename: 'Magic_shoes.png',
    cost: '710 Gold',
    stats: '+40 Movement Speed, +10% Cooldown Reduction',
    passive: 'Cooldown: Mempercepat jeda cooldown seluruh skill aktif.',
    recommendedRoles: ['Support', 'Mage', 'Assassin']
  },
  {
    id: 'rapid_boots',
    name: 'Rapid Boots',
    category: 'Boots',
    filename: 'Rapid_boots.png',
    cost: '750 Gold',
    stats: '+65 Movement Speed',
    passive: 'Side Effect: Memberi kecepatan rotasi tertinggi di luar pertempuran, melambat 25 poin saat bertarung.',
    recommendedRoles: ['Roamer', 'Support']
  },
  {
    id: 'ice_retribution',
    name: "Ice Hunter's Boots",
    category: 'Boots',
    filename: 'Ice_retribution.png',
    cost: '700 Gold',
    stats: '+40 Movement Speed, +Jungle Retribution',
    passive: 'Ice Retribution: Mencuri 72-100 Movement Speed target selama 3 detik, mempercepat gerak pengguna.',
    recommendedRoles: ['Assassin', 'Jungler']
  },
  {
    id: 'flame_retribution',
    name: "Flame Hunter's Boots",
    category: 'Boots',
    filename: 'Flame_Retribution.png',
    cost: '700 Gold',
    stats: '+40 Movement Speed, +Jungle Retribution',
    passive: 'Flame Retribution: Mencuri 58-100 Physical Attack dan Magic Power target selama 4 detik.',
    recommendedRoles: ['Fighter', 'Jungler']
  },
  {
    id: 'bloody_retribution',
    name: "Bloody Hunter's Boots",
    category: 'Boots',
    filename: 'Bloody_retribution.png',
    cost: '700 Gold',
    stats: '+40 Movement Speed, +Jungle Retribution',
    passive: 'Bloody Retribution: Menyerap 250 + 20% Max HP pengguna dari target selama 4 detik.',
    recommendedRoles: ['Tank', 'Jungler']
  },
  {
    id: 'conceal',
    name: 'Conceal Roaming Blessing',
    category: 'Boots',
    filename: 'Conceal.png',
    cost: 'Gratis Blessing',
    stats: 'Skill Aktif Camouflage',
    passive: 'Conceal: Menyembunyikan pengguna dan rekan tim terdekat selama 5 detik serta memberi 30%-75% Movement Speed.',
    recommendedRoles: ['Tank', 'Support']
  },
  {
    id: 'encourage',
    name: 'Encourage Roaming Blessing',
    category: 'Boots',
    filename: 'Encourage.png',
    cost: 'Gratis Blessing',
    stats: 'Aura Tim Pasif',
    passive: 'Encourage: Meningkatkan Physical Attack dan Magic Power rekan tim sebesar 12-30 serta 15% Attack Speed.',
    recommendedRoles: ['Tank', 'Support']
  },
  {
    id: 'favor',
    name: 'Favor Roaming Blessing',
    category: 'Boots',
    filename: 'Favor.png',
    cost: 'Gratis Blessing',
    stats: 'Healing Tambahan',
    passive: 'Favor: Setiap kali menggunakan skill heal atau shield, memulihkan 300-750 HP rekan setim dengan darah terendah.',
    recommendedRoles: ['Support']
  },
];
