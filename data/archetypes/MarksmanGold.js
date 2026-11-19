/**
 * Buildspedia - Marksman Gold Lane Archetype Template
 */

export const MarksmanGold = {
  spells: [
    { name: "Flicker", category: "Spells", filename: "Flicker.png", isPrimary: true, tag: "Rekomendasi Utama", description: "Satu-satunya penyelamat posisi dari sergapan assassin." },
    { name: "Purify", category: "Spells", filename: "Purify.png", isPrimary: false, tag: "Vs Heavy CC", description: "Menghapus semua efek stun/freeze seketika." }
  ],
  emblem: {
    name: "Custom Marksman Emblem",
    category: "Marksman",
    assetPath: "/Assets/Emblem/Marksman/Custom_Marksman_Emblem.png",
    baseStats: "+15% Attack Speed | +5% Adaptive Attack | +5% Critical Chance",
    tier1: { name: "Fatal", category: "Marksman", filename: "Fatal-Talent.png", effect: "Meningkatkan 5% Critical Chance dan 10% Critical Damage.", reason: "Mendongkrak daya tembak mematikan." },
    tier2: { name: "Weapon Master", category: "Marksman", filename: "Weapon_Master-Talent.png", effect: "Physical Attack yang diperoleh bertambah sebesar 5%.", reason: "Amplifikasi kekuatan seluruh item serang." },
    tier3: { name: "Quantum Charge", category: "Basic_Common", filename: "Quantum_Charge-Talent.png", effect: "Basic attack memberi 30% Movement Speed dan memulihkan HP.", reason: "Kiting tiada henti dan sustain darah tanpa harus recall." }
  },
  coreBuild: [
    { slot: 1, name: "Swift Boots", category: "Boots", filename: "Swift_boots.png", cost: "710 Gold", stats: "+40 Movement Speed, +15% Attack Speed", passive: "Swift: Mempercepat jeda antar tembakan.", whyBuy: "Membantu kelancaran last-hit minion di Gold Lane." },
    { slot: 2, name: "Corrosion Scythe", category: "Physical", filename: "Corrosion_scythe.png", cost: "2050 Gold", stats: "+30 Physical Attack, +5% MS, +35% Attack Speed", passive: "Memberi efek slow 8% per hit dan menumpuk attack speed.", whyBuy: "Mengunci musuh agar tidak bisa melarikan diri." },
    { slot: 3, name: "Demon Hunter Sword", category: "Physical", filename: "Demon_hunter_sword.png", cost: "2180 Gold", stats: "+35 Physical Attack, +25% Attack Speed", passive: "Menghasilkan damage setara 8% sisa HP target per tembakan.", whyBuy: "Penghancur darah tebal tank lawan." },
    { slot: 4, name: "Golden Staff", category: "Physical", filename: "Golden_staff.png", cost: "2100 Gold", stats: "+65 Physical Attack, +15% Attack Speed", passive: "Mengubah critical menjadi attack speed dan memicu efek pasif 3 kali.", whyBuy: "Melipatgandakan seluruh efek item serangan menjadi bertubi-tubi." },
    { slot: 5, name: "Wind of Nature", category: "Physical", filename: "Wind_of_nature.png", cost: "1910 Gold", stats: "+30 Physical Attack, +20% Attack Speed, +10% Lifesteal", passive: "Wind Chant: Kebal terhadap seluruh physical damage selama 2 detik.", whyBuy: "Penyelamat nyawa mutlak saat diserang assassin fisik." },
    { slot: 6, name: "Rose Gold Meteor", category: "Physical", filename: "Rose_gold_meteor.png", cost: "2120 Gold", stats: "+60 Physical Attack, +30 Magic Defense, +10% Lifesteal", passive: "Memberi shield tebal saat HP berada di bawah 30%.", whyBuy: "Perlindungan dari burst magic mendadak." }
  ],
  situationalBuild: [
    { name: "Berserker's Fury", category: "Physical", filename: "Berserkers_fury.png", cost: "2250 Gold", stats: "+65 Physical Attack, +25% Crit Chance, +40% Crit Dmg", badge: "Crit Burst", whyBuy: "Opsi build kritikal penghancur hero empuk dalam 3 hit." },
    { name: "Windtalker", category: "Physical", filename: "Windtalker.png", cost: "1820 Gold", stats: "+40% Attack Speed, +20 Movement Speed, +10% Crit", badge: "Wave Clear", whyBuy: "Menembakkan percikan angin sihir pembersih minion cepat." },
    { name: "Blade of Despair", category: "Physical", filename: "Blade_of_despair.png", cost: "3010 Gold", stats: "+160 Physical Attack, +5% MS", badge: "Max Attack", whyBuy: "Maksimalisasi damage tembakan di menit akhir." },
    { name: "Immortality", category: "Defense", filename: "Immortality.png", cost: "2120 Gold", stats: "+800 HP, +20 Physical Defense", badge: "Asuransi Hidup", whyBuy: "Pencegah kekalahan saat adu Lord di late game." }
  ]
};
