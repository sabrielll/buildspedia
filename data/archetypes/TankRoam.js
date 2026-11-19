/**
 * Buildspedia - Tank Roamer Archetype Template
 */

export const TankRoam = {
  spells: [
    { name: "Flicker", category: "Spells", filename: "Flicker.png", isPrimary: true, tag: "Rekomendasi Utama", description: "Inisiasi kejutan untuk melompat ke tengah musuh." },
    { name: "Vengeance", category: "Spells", filename: "Vengeance.png", isPrimary: false, tag: "Vs High DPS", description: "Memantulkan 35% damage serangan musuh dan memberi reduksi damage tebal." }
  ],
  emblem: {
    name: "Custom Tank Emblem",
    category: "Tank",
    assetPath: "/Assets/Emblem/Tank/Custom_Tank_Emblem.png",
    baseStats: "+500 Max HP | +10 Physical & Magic Defense | +4 HP Regen",
    tier1: { name: "Vitality", category: "Tank", filename: "Vitality-Talent.png", effect: "Mendapatkan 225 Max HP tambahan secara instan.", reason: "Mendongkrak ketahanan darah sejak menit pertama." },
    tier2: { name: "Tenacity", category: "Tank", filename: "Tenacity-Talent.png", effect: "Meningkatkan defense sebesar 15 poin saat darah di bawah 50%.", reason: "Membuat badan semakin keras saat menahan gempuran musuh." },
    tier3: { name: "Concussive Blast", category: "Tank", filename: "Concussive_Blast-Talent.png", effect: "Menghasilkan ledakan area magic berskala Max HP setelah basic attack.", reason: "Membantu clear wave dan memberi damage kejutan." }
  },
  coreBuild: [
    { slot: 1, name: "Tough Boots (Conceal)", category: "Boots", filename: "Tough_boots.png", cost: "700 Gold", stats: "+40 Movement Speed, +22 Magic Defense", passive: "Conceal: Menyembunyikan seluruh tim untuk inisiasi gank cepat.", whyBuy: "Membantu koordinasi open war mendadak." },
    { slot: 2, name: "Dominance Ice", category: "Defense", filename: "Dominance_ice.png", cost: "2010 Gold", stats: "+500 Mana, +70 Physical Defense, +5% MS", passive: "Mengurangi attack speed lawan 70% dan memangkas regen/shield 50%.", whyBuy: "Item anti-heal wajib bagi seluruh roamer garis depan." },
    { slot: 3, name: "Athena's Shield", category: "Defense", filename: "Athena_shield.png", cost: "2150 Gold", stats: "+900 HP, +62 Magic Defense, +2 HP Regen", passive: "Mengurangi magic damage yang diterima sebesar 25% selama 3 detik.", whyBuy: "Penangkal utama burst sihir mage lawan." },
    { slot: 4, name: "Antique Cuirass", category: "Defense", filename: "Antique_cuirass.png", cost: "2170 Gold", stats: "+920 HP, +54 Physical Defense, +4 HP Regen", passive: "Mengurangi Physical Attack musuh hingga 24% saat terkena skill.", whyBuy: "Meruntuhkan damage assassin dan fighter berbasis skill." },
    { slot: 5, name: "Blade Armor", category: "Defense", filename: "Blade_armor.png", cost: "1960 Gold", stats: "+90 Physical Defense, +20% Crit Dmg Reduction", passive: "Memantulkan 20% basic attack lawan kembali ke penyerangnya.", whyBuy: "Counter mutlak marksman ber-critical tinggi." },
    { slot: 6, name: "Immortality", category: "Defense", filename: "Immortality.png", cost: "2120 Gold", stats: "+800 HP, +20 Physical Defense", passive: "Immortal: Hidup kembali setelah tereliminasi.", whyBuy: "Memberi kesempatan kedua untuk kembali melindungi carry kawan." }
  ],
  situationalBuild: [
    { name: "Radiant Armor", category: "Defense", filename: "Radiant_armor.png", cost: "1880 Gold", stats: "+950 HP, +52 Magic Defense", badge: "Vs DPS Magic", whyBuy: "Melawan mage dengan serangan beruntun seperti Chang'e dan Valir." },
    { name: "Guardian Helmet", category: "Defense", filename: "Guardian_helmet.png", cost: "2200 Gold", stats: "+1550 HP, +20 HP Regen", badge: "HP Tanpa Recall", whyBuy: "Memulihkan darah di luar pertempuran tanpa perlu kembali ke base." },
    { name: "Cursed Helmet", category: "Defense", filename: "Cursed_helmet.png", cost: "1760 Gold", stats: "+1200 HP, +25 Magic Defense", badge: "Burn Damage", whyBuy: "Memberi aura bakar HP pada musuh di dekatnya." },
    { name: "Thunder Belt", category: "Defense", filename: "Thunder_belt.png", cost: "1990 Gold", stats: "+800 HP, +30 Physical Defense", badge: "Slow True Dmg", whyBuy: "Efek slow 99% dan True Damage setelah menggunakan skill." }
  ]
};
