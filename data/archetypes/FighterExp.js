/**
 * Buildspedia - Fighter Exp Lane Archetype Template
 */

export const FighterExp = {
  spells: [
    { name: "Flicker", category: "Spells", filename: "Flicker.png", isPrimary: true, tag: "Rekomendasi Utama", description: "Inisiasi melompat atau keluar dari sergapan gank." },
    { name: "Vengeance", category: "Spells", filename: "Vengeance.png", isPrimary: false, tag: "Vs Duelist Melee", description: "Menahan gempuran adu pukul di garis depan." }
  ],
  emblem: {
    name: "Custom Fighter Emblem",
    category: "Fighter",
    assetPath: "/Assets/Emblem/Fighter/Custom_Fighter_Emblem.png",
    baseStats: "+10% Spell Vamp | +22 Adaptive Attack | +6 Physical & Magic Defense",
    tier1: { name: "Firmness", category: "Fighter", filename: "Firmness-Talent.png", effect: "Mendapatkan 6 Physical & Magic Defense tambahan.", reason: "Ketahanan dasar dalam pertukaran pukulan di Exp Lane." },
    tier2: { name: "Festival of Blood", category: "Fighter", filename: "Festival_of_Blood-Talent.png", effect: "Meningkatkan 6% Spell Vamp (+0.5% per kill/assist hingga 10%).", reason: "Menjadikan darah semakin tebal saat bertarung terus menerus." },
    tier3: { name: "Brave Smite", category: "Fighter", filename: "Brave_Smite-Talent.png", effect: "Memulihkan 4% Max HP setiap kali memberikan damage dengan skill.", reason: "Regenerasi instan saat berduel di tengah kerumunan." }
  },
  coreBuild: [
    { slot: 1, name: "Warrior Boots", category: "Boots", filename: "Warrior_boots.png", cost: "720 Gold", stats: "+40 Movement Speed, +22 Physical Defense", passive: "Meningkatkan physical defense pada setiap basic attack lawan.", whyBuy: "Kunci memenangkan pertukaran pukulan di lane." },
    { slot: 2, name: "War Axe", category: "Physical", filename: "War_axe.png", cost: "2100 Gold", stats: "+40 Physical Attack, +550 HP, +10% CDR, +12% Spell Vamp", passive: "Fighting Spirit: Menumpuk physical attack dan true damage per detik.", whyBuy: "Item wajib nomor 1 untuk seluruh fighter sustained war." },
    { slot: 3, name: "Dominance Ice", category: "Defense", filename: "Dominance_ice.png", cost: "2010 Gold", stats: "+500 Mana, +70 Physical Defense, +5% MS", passive: "Mengurangi attack speed lawan 70% dan anti-heal 50%.", whyBuy: "Menahan regenerasi darah lawan tanding di Exp Lane." },
    { slot: 4, name: "Brute Force Breastplate", category: "Defense", filename: "Brute_force_breastplate.png", cost: "1870 Gold", stats: "+600 HP, +30 Physical Defense, +10% CDR", passive: "Menambah movement speed dan physical/magic defense setiap menggunakan skill.", whyBuy: "Mobilitas kencang dan kekebalan CC saat mengejar mangsa." },
    { slot: 5, name: "Athena's Shield", category: "Defense", filename: "Athena_shield.png", cost: "2150 Gold", stats: "+900 HP, +62 Magic Defense", passive: "Meredam serangan magic burst sebesar 25%.", whyBuy: "Mencegah terbunuh seketika saat masuk ke backline musuh." },
    { slot: 6, name: "Immortality", category: "Defense", filename: "Immortality.png", cost: "2120 Gold", stats: "+800 HP, +20 Physical Defense", passive: "Immortal: Hidup kembali setelah tereliminasi.", whyBuy: "Penyelamat nyawa di fase perang akhir game." }
  ],
  situationalBuild: [
    { name: "Bloodlust Axe", category: "Physical", filename: "Bloodlust_axe.png", cost: "1970 Gold", stats: "+70 Physical Attack, +10% CDR, +20% Spell Vamp", badge: "Max Spell Vamp", whyBuy: "Memaksimalkan lifesteal sihir pada setiap skill." },
    { name: "Blade of Despair", category: "Physical", filename: "Blade_of_despair.png", cost: "3010 Gold", stats: "+160 Physical Attack, +5% MS", badge: "Finisher Damage", whyBuy: "Mendongkrak damage pukulan akhir game." },
    { name: "Queen's Wings", category: "Defense", filename: "Queen_wings.png", cost: "2250 Gold", stats: "+1000 HP, +10% CDR, +5% Spell Vamp", badge: "Anti Dying", whyBuy: "Mengurangi damage 30% dan menambah lifesteal saat sekarat." },
    { name: "Sea Halberd", category: "Physical", filename: "Sea_halberd.png", cost: "2050 Gold", stats: "+80 Physical Attack, +25% Attack Speed", badge: "Anti Shield", whyBuy: "Memecahkan shield tebal milik Uranus, Harith, atau Esmeralda." }
  ]
};
