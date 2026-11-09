/**
 * Buildspedia - Centralized Items & Equipment Data Repository
 * Mapped to /Assets/Build Icons/[Category]/[filename]
 */

export const ITEM_CATEGORIES = [
  { id: 'All', name: 'Semua Item' },
  { id: 'Physical', name: 'Physical' },
  { id: 'Magical', name: 'Magical' },
  { id: 'Defense', name: 'Defense' },
  { id: 'Boots', name: 'Movement / Roam' },
];

export const ITEMS_DATA = [
  // ================= BOOTS / MOVEMENT =================
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

  // ================= PHYSICAL EQUIPMENT =================
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

  // ================= MAGICAL EQUIPMENT =================
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

  // ================= DEFENSE EQUIPMENT =================
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
  }
];

export function getAllItems() {
  return ITEMS_DATA;
}

export function getItemsByCategory(category) {
  if (!category || category === 'All') return ITEMS_DATA;
  return ITEMS_DATA.filter((item) => item.category === category);
}
