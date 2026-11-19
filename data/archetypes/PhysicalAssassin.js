/**
 * Buildspedia - Physical Assassin Archetype Template
 */

export const PhysicalAssassin = {
  spells: [
    { name: "Ice Retribution", category: "Boots", filename: "Ice_retribution.png", isPrimary: true, tag: "Wajib Jungler", description: "Mencuri movement speed lawan untuk memastikan seluruh kombo fisik terkunci rapi." },
    { name: "Flicker", category: "Spells", filename: "Flicker.png", isPrimary: false, tag: "Opsi Non-Jungle", description: "Teleportasi cepat untuk mengejar atau melarikan diri dari sergapan lawan." }
  ],
  emblem: {
    name: "Custom Assassin Emblem",
    category: "Assasins",
    assetPath: "/Assets/Emblem/Assasins/Custom_Assassin_Emblem.png",
    baseStats: "+16 Adaptive Penetration | +10 Adaptive Attack | +3% Movement Speed",
    tier1: { name: "Rupture", category: "Assasins", filename: "Rupture-Talent.png", effect: "Mendapatkan 5 Adaptive Penetration tambahan.", reason: "Memaksimalkan burst damage penetrasi awal game." },
    tier2: { name: "Seasoned Hunter", category: "Basic_Common", filename: "Seasoned_Hunter.png", effect: "Meningkatkan damage ke Lord dan Turtle sebesar 15%.", reason: "Mempercepat perebutan objektif jungle." },
    tier3: { name: "Killing Spree", category: "Assasins", filename: "Killing_Spree-Talent.png", effect: "Memulihkan 8% Max HP dan memperoleh 20% Movement Speed setelah eliminasi.", reason: "Sustain dan mobilitas tinggi saat teamfight berkepanjangan." }
  },
  coreBuild: [
    { slot: 1, name: "Ice Hunter's Tough Boots", category: "Boots", filename: "Tough_boots.png", cost: "700 Gold", stats: "+40 Movement Speed, +22 Magic Defense", passive: "Mengurangi durasi Crowd Control sebesar 30%.", whyBuy: "Mengurangi resiko ter-stun saat menyelam ke formasi musuh." },
    { slot: 2, name: "Blade of the Heptaseas", category: "Physical", filename: "Blade_of_the_heptaseas.png", cost: "1950 Gold", stats: "+70 Physical Attack, +250 HP, +15 PEN", passive: "Ambush: Basic attack pertama dari semak memberi 160% damage ekstra.", whyBuy: "Kunci instan burst saat melompat dari semak." },
    { slot: 3, name: "Hunter Strike", category: "Physical", filename: "Hunter_strike.png", cost: "2010 Gold", stats: "+80 Physical Attack, +10% CDR, +15 PEN", passive: "Retribution: Menyerang 5 kali beruntun memberi 50% movement speed.", whyBuy: "Meningkatkan mobilitas rotasi dan penetrasi ekstra." },
    { slot: 4, name: "Blade of Despair", category: "Physical", filename: "Blade_of_despair.png", cost: "3010 Gold", stats: "+160 Physical Attack, +5% Movement Speed", passive: "Despair: Menyerang musuh sekarat memberi 25% physical attack tambahan.", whyBuy: "Power spike damage puncak untuk menghabisi musuh." },
    { slot: 5, name: "Endless Battle", category: "Physical", filename: "Endless_battle.png", cost: "2470 Gold", stats: "+65 Physical Attack, +250 HP, +10% CDR, +8% Lifesteal", passive: "Divine Justice: Menghasilkan 60% True Damage setelah skill.", whyBuy: "Menembus armor tank lawan dengan True Damage." },
    { slot: 6, name: "Immortality", category: "Defense", filename: "Immortality.png", cost: "2120 Gold", stats: "+800 HP, +20 Physical Defense", passive: "Immortal: Bangkit kembali setelah tereliminasi.", whyBuy: "Jaminan hidup kedua di late game." }
  ],
  situationalBuild: [
    { name: "Rose Gold Meteor", category: "Physical", filename: "Rose_gold_meteor.png", cost: "2120 Gold", stats: "+60 Physical Attack, +30 Magic Defense, +10% Lifesteal", badge: "Vs Burst Mage", whyBuy: "Memberi shield darurat saat HP turun di bawah 30%." },
    { name: "Sea Halberd", category: "Physical", filename: "Sea_halberd.png", cost: "2050 Gold", stats: "+80 Physical Attack, +25% Attack Speed", badge: "Anti Heal", whyBuy: "Memangkas pemulihan darah dan perisai hero lifesteal lawan." },
    { name: "Winter Truncheon", category: "Magical", filename: "Winter_truncheon.png", cost: "1910 Gold", stats: "+60 Magic Power, +25 Physical Defense", badge: "Outplay Kebal", whyBuy: "Skill aktif beku selama 2 detik untuk mengulur waktu bantuan kawan." },
    { name: "Athena's Shield", category: "Defense", filename: "Athena_shield.png", cost: "2150 Gold", stats: "+900 HP, +62 Magic Defense", badge: "Vs Magic Burst", whyBuy: "Meredam kombo sihir mendadak dari mage lawan." }
  ]
};
