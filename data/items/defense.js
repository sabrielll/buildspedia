/**
 * Buildspedia - Defense Equipment Data
 * Mapped to /Assets/Build Icons/Defense/[filename]
 */

export const DEFENSE_ITEMS = [
  {
    id: 'immortality',
    name: 'Immortality',
    category: 'Defense',
    filename: 'Immortality.png',
    cost: '2120 Gold',
    tier: 'Tier 3 Situational',
    stats: '+800 HP, +20 Physical Defense',
    passive: 'Immortal: Hidup kembali 2.5 detik setelah tereliminasi dengan 16% Max HP dan shield pelindung 220-1200 poin (Cooldown 210 detik).',
    recommendedRoles: ['Tank', 'Fighter', 'Marksman', 'Mage', 'Assassin']
  },
  {
    id: 'dominance_ice',
    name: 'Dominance Ice',
    category: 'Defense',
    filename: 'Dominance_ice.png',
    cost: '2010 Gold',
    tier: 'Tier 3 Core',
    stats: '+500 Mana, +70 Physical Defense, +5% Movement Speed',
    passive: 'Arctic Cold & Lifebane: Mengurangi Attack Speed lawan di dekatnya sebesar 70% dan memangkas HP Regen/Shield musuh sebesar 50%.',
    recommendedRoles: ['Tank', 'Fighter', 'Support']
  },
  {
    id: 'athena_shield',
    name: "Athena's Shield",
    category: 'Defense',
    filename: 'Athena_shield.png',
    cost: '2150 Gold',
    tier: 'Tier 3 Core',
    stats: '+900 HP, +62 Magic Defense, +2 HP Regen',
    passive: 'Shield: Saat pertama kali menerima magic damage, mengurangi seluruh magic damage yang diterima sebesar 25% selama 3 detik.',
    recommendedRoles: ['Tank', 'Fighter', 'Marksman', 'Mage', 'Assassin']
  },
  {
    id: 'antique_cuirass',
    name: 'Antique Cuirass',
    category: 'Defense',
    filename: 'Antique_cuirass.png',
    cost: '2170 Gold',
    tier: 'Tier 3 Core',
    stats: '+920 HP, +54 Physical Defense, +4 HP Regen',
    passive: 'Deter: Saat terkena serangan skill musuh, mengurangi Physical Attack musuh sebesar 8% (dapat di-stack hingga 3 kali) selama 2 detik.',
    recommendedRoles: ['Tank', 'Fighter']
  },
  {
    id: 'blade_armor',
    name: 'Blade Armor',
    category: 'Defense',
    filename: 'Blade_armor.png',
    cost: '1960 Gold',
    tier: 'Tier 3 Core',
    stats: '+90 Physical Defense, +20% Critical Damage Reduction',
    passive: 'Bladed Armor: Memantulkan 20% basic attack lawan kembali ke penyerangnya sebagai physical damage dan memberi slow 15%.',
    recommendedRoles: ['Tank']
  },
  {
    id: 'radiant_armor',
    name: 'Radiant Armor',
    category: 'Defense',
    filename: 'Radiant_armor.png',
    cost: '1880 Gold',
    tier: 'Tier 3 Situational',
    stats: '+950 HP, +52 Magic Defense, +12 HP Regen',
    passive: 'Holy Blessing: Mengurangi magic damage bertubi-tubi hingga 8 stack (counter mutlak Chang\'e, Valir, Yve, Kimmy).',
    recommendedRoles: ['Tank', 'Fighter']
  },
  {
    id: 'cursed_helmet',
    name: 'Cursed Helmet',
    category: 'Defense',
    filename: 'Cursed_helmet.png',
    cost: '1760 Gold',
    tier: 'Tier 3 Core',
    stats: '+1200 HP, +25 Magic Defense',
    passive: 'Burning Soul: Memberikan magic damage per detik setara 1.2% Max HP ke musuh di sekitarnya (+150% damage ke minion/creep).',
    recommendedRoles: ['Tank', 'Fighter']
  },
  {
    id: 'guardian_helmet',
    name: 'Guardian Helmet',
    category: 'Defense',
    filename: 'Guardian_helmet.png',
    cost: '2200 Gold',
    tier: 'Tier 3 Core',
    stats: '+1550 HP, +20 HP Regen',
    passive: 'Recovery: Memulihkan 2.5% Max HP setiap detik saat berada di luar pertempuran (tidak perlu recall ke base).',
    recommendedRoles: ['Tank']
  },
  {
    id: 'brute_force_breastplate',
    name: 'Brute Force Breastplate',
    category: 'Defense',
    filename: 'Brute_force_breastplate.png',
    cost: '1870 Gold',
    tier: 'Tier 3 Core',
    stats: '+600 HP, +30 Physical Defense, +10% Cooldown Reduction',
    passive: 'Brute Force: Menggunakan skill atau basic attack menambah 2% movement speed dan 4 defense (hingga 6 stack) serta reduksi CC 15%.',
    recommendedRoles: ['Fighter', 'Assassin']
  },
  {
    id: 'oracle',
    name: 'Oracle',
    category: 'Defense',
    filename: 'Oracle.png',
    cost: '2060 Gold',
    tier: 'Tier 3 Situational',
    stats: '+850 HP, +42 Magic Defense, +10% Cooldown Reduction',
    passive: 'Bless: Meningkatkan seluruh penyerapan perisai shield dan efek regenerasi HP yang diterima sebesar 30%.',
    recommendedRoles: ['Tank', 'Fighter', 'Support']
  },
  {
    id: 'thunder_belt',
    name: 'Thunder Belt',
    category: 'Defense',
    filename: 'Thunder_belt.png',
    cost: '1990 Gold',
    tier: 'Tier 3 Situational',
    stats: '+800 HP, +30 Physical Defense, +10% Cooldown Reduction, +6 Mana Regen',
    passive: 'Thunderbolt: Setelah skill, basic attack berikutnya menghasilkan True Damage setara 50 + 5% Max HP dan efek slow 99%.',
    recommendedRoles: ['Tank', 'Fighter']
  },
  {
    id: 'twilight_armor',
    name: 'Twilight Armor',
    category: 'Defense',
    filename: 'Twilight_armor.png',
    cost: '2100 Gold',
    tier: 'Tier 3 Situational',
    stats: '+1200 HP, +20 Physical Defense',
    passive: 'Twilight: Mengurangi burst physical damage tunggal yang melebihi 600 poin sebesar 20% dan melepaskan ledakan True Damage.',
    recommendedRoles: ['Tank']
  },
  {
    id: 'queen_wings',
    name: "Queen's Wings",
    category: 'Defense',
    filename: 'Queen_wings.png',
    cost: '2250 Gold',
    tier: 'Tier 3 Situational',
    stats: '+1000 HP, +10% Cooldown Reduction, +5% Spell Vamp',
    passive: 'Demonize: Saat HP di bawah 40%, mengurangi damage yang diterima sebesar 30% dan menambah 15% spell vamp selama 3 detik.',
    recommendedRoles: ['Fighter', 'Tank']
  },
];
