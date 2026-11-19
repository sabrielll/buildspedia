/**
 * Buildspedia - Physical Equipment Data
 * Mapped to /Assets/Build Icons/Physical/[filename]
 */

export const PHYSICAL_ITEMS = [
  {
    id: 'blade_of_despair',
    name: 'Blade of Despair',
    category: 'Physical',
    filename: 'Blade_of_despair.png',
    cost: '3010 Gold',
    tier: 'Tier 3 Core',
    stats: '+160 Physical Attack, +5% Movement Speed',
    passive: 'Despair: Menyerang musuh yang memiliki HP di bawah 50% akan meningkatkan Physical Attack sebesar 25% selama 2 detik.',
    recommendedRoles: ['Assassin', 'Marksman', 'Fighter']
  },
  {
    id: 'blade_of_the_heptaseas',
    name: 'Blade of the Heptaseas',
    category: 'Physical',
    filename: 'Blade_of_the_heptaseas.png',
    cost: '1950 Gold',
    tier: 'Tier 3 Core',
    stats: '+70 Physical Attack, +250 HP, +15 Physical Penetration',
    passive: 'Ambush: Jika tidak menerima atau memberi damage selama 5 detik, basic attack berikutnya memberikan 160% damage ekstra dan slow 40%.',
    recommendedRoles: ['Assassin', 'Fighter']
  },
  {
    id: 'hunter_strike',
    name: 'Hunter Strike',
    category: 'Physical',
    filename: 'Hunter_strike.png',
    cost: '2010 Gold',
    tier: 'Tier 3 Core',
    stats: '+80 Physical Attack, +10% Cooldown Reduction, +15 Physical Penetration',
    passive: 'Retribution: Menyerang hero atau creep musuh 5 kali beruntun meningkatkan Movement Speed sebesar 50% selama 3 detik.',
    recommendedRoles: ['Assassin', 'Fighter', 'Marksman']
  },
  {
    id: 'endless_battle',
    name: 'Endless Battle',
    category: 'Physical',
    filename: 'Endless_battle.png',
    cost: '2470 Gold',
    tier: 'Tier 3 Core',
    stats: '+65 Physical Attack, +250 HP, +10% CDR, +8% Hybrid Lifesteal, +5% MS, +5 Mana Regen',
    passive: 'Divine Justice: Setelah menggunakan skill, basic attack berikutnya menghasilkan 60% True Damage ekstra.',
    recommendedRoles: ['Assassin', 'Fighter', 'Marksman']
  },
  {
    id: 'war_axe',
    name: 'War Axe',
    category: 'Physical',
    filename: 'War_axe.png',
    cost: '2100 Gold',
    tier: 'Tier 3 Core',
    stats: '+40 Physical Attack, +550 HP, +10% CDR, +12% Spell Vamp',
    passive: 'Fighting Spirit: Menumpuk physical attack dan true damage per detik; saat stack penuh menghasilkan True Damage tebal.',
    recommendedRoles: ['Fighter']
  },
  {
    id: 'bloodlust_axe',
    name: 'Bloodlust Axe',
    category: 'Physical',
    filename: 'Bloodlust_axe.png',
    cost: '1970 Gold',
    tier: 'Tier 3 Core',
    stats: '+70 Physical Attack, +10% Cooldown Reduction, +20% Spell Vamp',
    passive: 'Spell Vamp: Memulihkan HP sebesar 20% dari damage yang dihasilkan oleh skill fisik.',
    recommendedRoles: ['Fighter', 'Assassin']
  },
  {
    id: 'demon_hunter_sword',
    name: 'Demon Hunter Sword',
    category: 'Physical',
    filename: 'Demon_hunter_sword.png',
    cost: '2180 Gold',
    tier: 'Tier 3 Core',
    stats: '+35 Physical Attack, +25% Attack Speed',
    passive: 'Devour: Basic attack menghasilkan damage setara 8% dari sisa HP target saat itu sebagai physical damage ekstra.',
    recommendedRoles: ['Marksman', 'Fighter']
  },
  {
    id: 'corrosion_scythe',
    name: 'Corrosion Scythe',
    category: 'Physical',
    filename: 'Corrosion_scythe.png',
    cost: '2050 Gold',
    tier: 'Tier 3 Core',
    stats: '+30 Physical Attack, +5% Movement Speed, +35% Attack Speed',
    passive: 'Corrosion & Impulse: Memberikan efek slow 8% per pukulan (hingga 40%) dan meningkatkan attack speed hingga 30%.',
    recommendedRoles: ['Marksman', 'Fighter']
  },
  {
    id: 'golden_staff',
    name: 'Golden Staff',
    category: 'Physical',
    filename: 'Golden_staff.png',
    cost: '2100 Gold',
    tier: 'Tier 3 Core',
    stats: '+65 Physical Attack, +15% Attack Speed',
    passive: 'Swift & Endless Strike: Mengubah critical chance menjadi attack speed; pukulan ke-3 memicu efek attack dasar 3 kali.',
    recommendedRoles: ['Marksman']
  },
  {
    id: 'berserkers_fury',
    name: "Berserker's Fury",
    category: 'Physical',
    filename: 'Berserkers_fury.png',
    cost: '2250 Gold',
    tier: 'Tier 3 Core',
    stats: '+65 Physical Attack, +25% Critical Chance, +40% Critical Damage',
    passive: 'Doom: Serangan critical menghasilkan 5% Physical Attack tambahan selama 2 detik.',
    recommendedRoles: ['Marksman', 'Fighter', 'Assassin']
  },
  {
    id: 'windtalker',
    name: 'Windtalker',
    category: 'Physical',
    filename: 'Windtalker.png',
    cost: '1820 Gold',
    tier: 'Tier 3 Core',
    stats: '+40% Attack Speed, +20 Movement Speed, +10% Critical Chance',
    passive: 'Typhoon: Setiap beberapa detik, basic attack memantul mengenai 3 musuh dengan 150-362 magic damage.',
    recommendedRoles: ['Marksman', 'Fighter']
  },
  {
    id: 'wind_of_nature',
    name: 'Wind of Nature',
    category: 'Physical',
    filename: 'Wind_of_nature.png',
    cost: '1910 Gold',
    tier: 'Tier 3 Situational',
    stats: '+30 Physical Attack, +20% Attack Speed, +10% Physical Lifesteal',
    passive: 'Wind Chant (Aktif): Menjadi kebal terhadap seluruh Physical Damage selama 2 detik (1 detik untuk hero non-marksman).',
    recommendedRoles: ['Marksman']
  },
  {
    id: 'rose_gold_meteor',
    name: 'Rose Gold Meteor',
    category: 'Physical',
    filename: 'Rose_gold_meteor.png',
    cost: '2120 Gold',
    tier: 'Tier 3 Situational',
    stats: '+60 Physical Attack, +30 Magic Defense, +10% Lifesteal',
    passive: 'Lifeline: Saat HP di bawah 30%, memperoleh shield tebal sebesar 510-1350 dan 25 Magic Defense selama 3 detik.',
    recommendedRoles: ['Marksman', 'Assassin', 'Fighter']
  },
  {
    id: 'sea_halberd',
    name: 'Sea Halberd',
    category: 'Physical',
    filename: 'Sea_halberd.png',
    cost: '2050 Gold',
    tier: 'Tier 3 Situational',
    stats: '+80 Physical Attack, +25% Attack Speed',
    passive: 'Lifebane & Punish: Mengurangi efek Shield dan HP Regen musuh sebesar 50% serta menambah damage 8% ke musuh ber-HP lebih tinggi.',
    recommendedRoles: ['Marksman', 'Fighter', 'Assassin']
  },
  {
    id: 'haass_claws',
    name: "Haas's Claws",
    category: 'Physical',
    filename: 'Haass_claws.png',
    cost: '2020 Gold',
    tier: 'Tier 3 Core',
    stats: '+30 Physical Attack, +20% Attack Speed, +20% Critical Chance, +25% Lifesteal',
    passive: 'Frenzy: Serangan critical memberikan 20% Attack Speed ekstra selama 2 detik.',
    recommendedRoles: ['Marksman']
  },
];
