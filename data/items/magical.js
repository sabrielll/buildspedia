/**
 * Buildspedia - Magical Equipment Data
 * Mapped to /Assets/Build Icons/Magical/[filename]
 */

export const MAGICAL_ITEMS = [
  {
    id: 'holy_crystal',
    name: 'Holy Crystal',
    category: 'Magical',
    filename: 'Holy_crystal.png',
    cost: '2180 Gold',
    tier: 'Tier 3 Core',
    stats: '+100 Magic Power',
    passive: 'Mystery: Meningkatkan Total Magic Power hero sebesar 21%-35% (berskala seiring naiknya level hero).',
    recommendedRoles: ['Mage', 'Assassin']
  },
  {
    id: 'genius_wand',
    name: 'Genius Wand',
    category: 'Magical',
    filename: 'Genius_wand.png',
    cost: '2000 Gold',
    tier: 'Tier 3 Core',
    stats: '+75 Magic Power, +5% Movement Speed, +10 Magic Penetration',
    passive: 'Magic: Memberikan damage mengurangi 3-7 Magic Defense target per serangan (hingga 3 stack) selama 2 detik.',
    recommendedRoles: ['Mage', 'Assassin']
  },
  {
    id: 'lightning_truncheon',
    name: 'Lightning Truncheon',
    category: 'Magical',
    filename: 'Lightning_truncheon.png',
    cost: '2250 Gold',
    tier: 'Tier 3 Core',
    stats: '+75 Magic Power, +10% Cooldown Reduction, +400 Mana',
    passive: 'Resonate: Setiap 6 detik, skill berikutnya memantul mengenai 3 musuh dengan magic damage berskala Max Mana.',
    recommendedRoles: ['Mage']
  },
  {
    id: 'clock_of_destiny',
    name: 'Clock of Destiny',
    category: 'Magical',
    filename: 'Clock_of_destiny.png',
    cost: '1950 Gold',
    tier: 'Tier 3 Core',
    stats: '+60 Magic Power, +500 HP, +600 Mana',
    passive: 'Time & Reincarnate: Menumpuk 20 HP dan 4 Magic Power setiap 20 detik (hingga 12 stack); pada stack penuh memberi 5% Magic Power ekstra.',
    recommendedRoles: ['Mage']
  },
  {
    id: 'divine_glaive',
    name: 'Divine Glaive',
    category: 'Magical',
    filename: 'Divine_glaive.png',
    cost: '1970 Gold',
    tier: 'Tier 3 Core',
    stats: '+65 Magic Power, +40% Magic Penetration',
    passive: 'Spellbreaker: Memperoleh 0.1% Magic Penetration ekstra untuk setiap poin Magic Defense yang dimiliki musuh (hingga 20%).',
    recommendedRoles: ['Mage', 'Assassin']
  },
  {
    id: 'blood_wings',
    name: 'Blood Wings',
    category: 'Magical',
    filename: 'Blood_wings.png',
    cost: '3000 Gold',
    tier: 'Tier 3 Core',
    stats: '+175 Magic Power, +500 HP',
    passive: 'Guard: Memperoleh perisai shield setara 200% Magic Power. Saat shield pecah, memberi 30 Movement Speed selama 1 detik.',
    recommendedRoles: ['Mage', 'Assassin']
  },
  {
    id: 'concentrated_energy',
    name: 'Concentrated Energy',
    category: 'Magical',
    filename: 'Concentrated_energy.png',
    cost: '2020 Gold',
    tier: 'Tier 3 Core',
    stats: '+70 Magic Power, +700 HP, +20% Magic Lifesteal',
    passive: 'Recharge: Meningkatkan Magic Power hingga 6 stack saat bertarung terus-menerus dan memulihkan HP.',
    recommendedRoles: ['Mage', 'Fighter', 'Assassin']
  },
  {
    id: 'winter_truncheon',
    name: 'Winter Truncheon',
    category: 'Magical',
    filename: 'Winter_truncheon.png',
    cost: '1910 Gold',
    tier: 'Tier 3 Situational',
    stats: '+60 Magic Power, +25 Physical Defense, +400 HP',
    passive: 'Frozen (Aktif): Membekukan diri selama 2 detik; kebal terhadap semua jenis damage dan efek CC apapun.',
    recommendedRoles: ['Mage', 'Assassin', 'Fighter']
  },
  {
    id: 'enchanted_talisman',
    name: 'Enchanted Talisman',
    category: 'Magical',
    filename: 'Enchanted_talisman.png',
    cost: '1870 Gold',
    tier: 'Tier 3 Core',
    stats: '+50 Magic Power, +250 HP, +20% Cooldown Reduction',
    passive: 'Mana Spring & Max CDR: Meregenerasi 15% Max Mana setiap 10 detik dan meningkatkan batas maksimal CDR menjadi 45%.',
    recommendedRoles: ['Mage', 'Support']
  },
  {
    id: 'ice_queen_wand',
    name: 'Ice Queen Wand',
    category: 'Magical',
    filename: 'Ice_queen_wand.png',
    cost: '2240 Gold',
    tier: 'Tier 3 Core',
    stats: '+75 Magic Power, +10% Magic Lifesteal, +150 Mana, +7% Movement Speed',
    passive: 'Ice Bound: Serangan skill menyebabkan efek slow 15% ke musuh (dapat di-stack 2 kali hingga 30%) selama 3 detik.',
    recommendedRoles: ['Mage', 'Support']
  },
  {
    id: 'fleeting_time',
    name: 'Fleeting Time',
    category: 'Magical',
    filename: 'Fleeting_time.png',
    cost: '2050 Gold',
    tier: 'Tier 3 Core',
    stats: '+70 Magic Power, +350 Mana, +15% Cooldown Reduction',
    passive: 'Timestream: Setiap kali mengeliminasi atau memperoleh assist, langsung memangkas 30% sisa cooldown skill Ultimate.',
    recommendedRoles: ['Mage', 'Support']
  },
  {
    id: 'feather_of_heaven',
    name: 'Feather of Heaven',
    category: 'Magical',
    filename: 'Feather_of_heaven.png',
    cost: '2030 Gold',
    tier: 'Tier 3 Core',
    stats: '+55 Magic Power, +20% Attack Speed, +5% Cooldown Reduction',
    passive: 'Affliction & Impulse: Basic attack menghasilkan magic damage ekstra dan meningkatkan 6% attack speed per pukulan.',
    recommendedRoles: ['Mage', 'Marksman']
  },
  {
    id: 'shadow_twinblades',
    name: 'Shadow Twinblades',
    category: 'Magical',
    filename: 'Shadow_twinblades.png',
    cost: '1960 Gold',
    tier: 'Tier 3 Situational',
    stats: '+75 Magic Power, +15% Magic Lifesteal, +5% Movement Speed',
    passive: 'Assassination: Basic attack pertama setelah 5 detik tidak terkena hit memberikan slow 60% dan bonus magic damage.',
    recommendedRoles: ['Assassin', 'Mage']
  },
  {
    id: 'necklace_of_durance',
    name: 'Necklace of Durance',
    category: 'Magical',
    filename: 'Necklace_of_durance.png',
    cost: '2010 Gold',
    tier: 'Tier 3 Situational',
    stats: '+60 Magic Power, +5% CDR, +10% Magic Lifesteal',
    passive: 'Lifebane: Serangan skill memangkas regenerasi darah dan perisai shield musuh sebesar 50% selama 3 detik.',
    recommendedRoles: ['Mage', 'Support']
  },
];
