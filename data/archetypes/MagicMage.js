/**
 * Buildspedia - Magic Mage Archetype Template
 */

export const MagicMage = {
  spells: [
    { name: "Flicker", category: "Spells", filename: "Flicker.png", isPrimary: true, tag: "Rekomendasi Utama", description: "Menghindari sergapan mendadak dari assassin lincah lawan." },
    { name: "Flameshot", category: "Spells", filename: "Flameshot.png", isPrimary: false, tag: "Opsi Sniping / Knockback", description: "Mendorong musuh yang mendekat atau menembak target kabur sekarat." }
  ],
  emblem: {
    name: "Custom Mage Emblem",
    category: "Mage",
    assetPath: "/Assets/Emblem/Mage/Custom_Mage_Emblem.png",
    baseStats: "+30 Magic Power | +5% Cooldown Reduction | +8 Magic Penetration",
    tier1: { name: "Inspire", category: "Mage", filename: "Inspire-Talent.png", effect: "Mendapatkan 5% Cooldown Reduction ekstra.", reason: "Membantu spam skill sejak menit pertama." },
    tier2: { name: "Bargain Hunter", category: "Mage", filename: "Bargain_Hunter-Talent.png", effect: "Memperoleh diskon harga 5% pada seluruh pembelian equipment di shop.", reason: "Mempercepat terselesaikannya item core sihir." },
    tier3: { name: "Lethal Ignition", category: "Mage", filename: "Lethal_Ignition-Talent.png", effect: "Memberikan damage multi-hit membakar musuh hingga 750 adaptive damage.", reason: "Melipatgandakan efek burst sihir." }
  },
  coreBuild: [
    { slot: 1, name: "Arcane Boots", category: "Boots", filename: "Arcane_boots.png", cost: "690 Gold", stats: "+40 Movement Speed, +10 Magic Penetration", passive: "Memberi flat penetration krusial di early game.", whyBuy: "Memaksimalkan rasa sakit dari skill poke di lane." },
    { slot: 2, name: "Clock of Destiny", category: "Magical", filename: "Clock_of_destiny.png", cost: "1950 Gold", stats: "+60 Magic Power, +500 HP, +600 Mana", passive: "Menumpuk HP dan Magic Power setiap 20 detik.", whyBuy: "Pondasi scaling stat tebal di mid hingga late game." },
    { slot: 3, name: "Lightning Truncheon", category: "Magical", filename: "Lightning_truncheon.png", cost: "2250 Gold", stats: "+75 Magic Power, +10% CDR, +400 Mana", passive: "Memantulkan gelombang petir berskala dengan max mana hero.", whyBuy: "Sinergi ledakan damage utama bersama Clock of Destiny." },
    { slot: 4, name: "Holy Crystal", category: "Magical", filename: "Holy_crystal.png", cost: "2180 Gold", stats: "+100 Magic Power", passive: "Mystery: Meningkatkan Magic Power sebesar 21%-35%.", whyBuy: "Melipatgandakan seluruh magic damage secara eksponensial." },
    { slot: 5, name: "Divine Glaive", category: "Magical", filename: "Divine_glaive.png", cost: "1970 Gold", stats: "+65 Magic Power, +40% Magic Penetration", passive: "Spellbreaker: Menembus pertahanan magic defense musuh.", whyBuy: "Wajib untuk meruntuhkan Athena's Shield tank lawan." },
    { slot: 6, name: "Blood Wings", category: "Magical", filename: "Blood_wings.png", cost: "3000 Gold", stats: "+175 Magic Power, +500 HP", passive: "Guard: Memperoleh perisai shield tebal setara 200% magic power.", whyBuy: "Item pamungkas pemberi magic power terbesar dan pelindung shield." }
  ],
  situationalBuild: [
    { name: "Winter Truncheon", category: "Magical", filename: "Winter_truncheon.png", cost: "1910 Gold", stats: "+60 Magic Power, +25 Physical Defense", badge: "Kebal 2 Detik", whyBuy: "Menghindari one-shot dari assassin musuh." },
    { name: "Genius Wand", category: "Magical", filename: "Genius_wand.png", cost: "2000 Gold", stats: "+75 Magic Power, +5% Movement Speed", badge: "Flat Penetrasi", whyBuy: "Merontokkan magic defense musuh tipis dengan cepat." },
    { name: "Ice Queen Wand", category: "Magical", filename: "Ice_queen_wand.png", cost: "2240 Gold", stats: "+75 Magic Power, +10% Magic Lifesteal, +7% MS", badge: "Slow Kiting", whyBuy: "Memberi efek slow 30% pada setiap skill yang mengenai musuh." },
    { name: "Immortality", category: "Defense", filename: "Immortality.png", cost: "2120 Gold", stats: "+800 HP, +20 Physical Defense", badge: "Asuransi Hidup", whyBuy: "Jaminan bangkit kembali saat terbunuh di akhir game." }
  ]
};
