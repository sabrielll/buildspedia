/**
 * Buildspedia - Support Roamer Archetype Template
 */

export const SupportRoam = {
  spells: [
    { name: "Flicker", category: "Spells", filename: "Flicker.png", isPrimary: true, tag: "Rekomendasi Utama", description: "Menghindari serbuan musuh yang mengincar support." },
    { name: "Revitalize", category: "Spells", filename: "Revitalize.png", isPrimary: false, tag: "Opsi Heal Massal", description: "Menciptakan lingkaran pemulihan darah tebal di area pertempuran." }
  ],
  emblem: {
    name: "Custom Support Emblem",
    category: "Support",
    assetPath: "/Assets/Emblem/Support/Custom_Support_Emblem.png",
    baseStats: "+15% Healing Effect | +10 Cooldown Reduction | +10 Movement Speed",
    tier1: { name: "Agility", category: "Support", filename: "Agility-Talent.png", effect: "Mendapatkan 4% Movement Speed tambahan.", reason: "Membantu mobilitas rotasi cepat menyusul kawan." },
    tier2: { name: "Pull Yourself Together", category: "Support", filename: "Pull_Yourself_Together-Talent.png", effect: "Mengurangi cooldown Battle Spell dan item aktif sebesar 15%.", reason: "Mempercepat tersedianya spell Flicker/Revitalize." },
    tier3: { name: "Focusing Mark", category: "Support", filename: "Focusing_Mark-Talent.png", effect: "Serangan ke musuh membuat rekan tim menghasilkan damage 6% lebih besar ke target.", reason: "Membantu rekan tim melenyapkan target fokus." }
  },
  coreBuild: [
    { slot: 1, name: "Magic Shoes (Favor)", category: "Boots", filename: "Magic_shoes.png", cost: "710 Gold", stats: "+40 Movement Speed, +10% Cooldown Reduction", passive: "Favor: Memulihkan darah rekan terendah saat menggunakan skill heal/shield.", whyBuy: "Maksimalisasi heal dan pemendekan cooldown skill." },
    { slot: 2, name: "Fleeting Time", category: "Magical", filename: "Fleeting_time.png", cost: "2050 Gold", stats: "+70 Magic Power, +350 Mana, +15% CDR", passive: "Mengurangi cooldown Ultimate sebesar 30% setelah kill atau assist.", whyBuy: "Membuat Ultimate dapat digunakan berulang kali dalam perang." },
    { slot: 3, name: "Dominance Ice", category: "Defense", filename: "Dominance_ice.png", cost: "2010 Gold", stats: "+500 Mana, +70 Physical Defense, +5% MS", passive: "Mengurangi regen musuh sebesar 50% dan attack speed 70%.", whyBuy: "Wajib untuk mematikan lifesteal dan heal lawan." },
    { slot: 4, name: "Oracle", category: "Defense", filename: "Oracle.png", cost: "2060 Gold", stats: "+850 HP, +42 Magic Defense, +10% CDR", passive: "Meningkatkan efek shield dan regenerasi HP sebesar 30%.", whyBuy: "Mempertebal seluruh efek penyembuhan pada tim." },
    { slot: 5, name: "Athena's Shield", category: "Defense", filename: "Athena_shield.png", cost: "2150 Gold", stats: "+900 HP, +62 Magic Defense", passive: "Mengurangi magic damage yang diterima sebesar 25%.", whyBuy: "Mencegah mati konyol terkena burst mage musuh." },
    { slot: 6, name: "Immortality", category: "Defense", filename: "Immortality.png", cost: "2120 Gold", stats: "+800 HP, +20 Physical Defense", passive: "Immortal: Bangkit kembali setelah gugur.", whyBuy: "Memberi kesempatan terus menyembuhkan rekan kawan." }
  ],
  situationalBuild: [
    { name: "Winter Truncheon", category: "Magical", filename: "Winter_truncheon.png", cost: "1910 Gold", stats: "+60 Magic Power, +25 Physical Defense", badge: "Self Freeze", whyBuy: "Menyelamatkan diri saat menjadi target fokus musuh." },
    { name: "Antique Cuirass", category: "Defense", filename: "Antique_cuirass.png", cost: "2170 Gold", stats: "+920 HP, +54 Physical Defense", badge: "Vs Physical", whyBuy: "Menahan tebasan assassin fisik lawan." },
    { name: "Necklace of Durance", category: "Magical", filename: "Necklace_of_durance.png", cost: "2010 Gold", stats: "+60 Magic Power, +5% CDR, +10% Magic Lifesteal", badge: "Anti Heal Magic", whyBuy: "Alternatif anti-heal dari skill sihir jarak jauh." },
    { name: "Guardian Helmet", category: "Defense", filename: "Guardian_helmet.png", cost: "2200 Gold", stats: "+1550 HP, +20 HP Regen", badge: "Non-stop Regen", whyBuy: "Menjaga darah support tetap penuh di medan perang." }
  ]
};
