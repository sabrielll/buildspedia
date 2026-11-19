/**
 * Buildspedia - Centralized Emblem & 3-Tier Talent Matrix Repository
 * Mapped to /Assets/Emblem/[category]/[filename]
 */

export const EMBLEM_SETS = [
  {
    id: 'assassin',
    name: 'Custom Assassin Emblem',
    category: 'Assasins',
    icon: 'Custom_Assassin_Emblem.png',
    stats: '+16 Adaptive Penetration, +10 Adaptive Attack, +3% Movement Speed',
    description: 'Emblem ofensif murni terbaik untuk hero burst physical maupun magic yang berfokus pada eksekusi cepat.',
    talents: [
      { name: 'Rupture', tier: 'Tier 1', filename: 'Rupture-Talent.png', effect: 'Memperoleh 5 Adaptive Penetration tambahan untuk menembus base armor lawan.' },
      { name: 'Master Assassin', tier: 'Tier 2', filename: 'Master_Assassin-Talent.png', effect: 'Meningkatkan damage sebesar 7% jika hanya ada 1 musuh di sekitar (duel 1v1).' },
      { name: 'Killing Spree', tier: 'Tier 3', filename: 'Killing_Spree-Talent.png', effect: 'Memulihkan 8% Max HP dan memperoleh 20% Movement Speed selama 3 detik setelah mengeliminasi hero.' }
    ]
  },
  {
    id: 'tank',
    name: 'Custom Tank Emblem',
    category: 'Tank',
    icon: 'Custom_Tank_Emblem.png',
    stats: '+500 Max HP, +10 Physical & Magic Defense, +4 HP Regen',
    description: 'Pilihan utama roamer dan jungler tank untuk memaksimalkan daya tahan terhadap gempuran lawan.',
    talents: [
      { name: 'Vitality', tier: 'Tier 1', filename: 'Vitality-Talent.png', effect: 'Mendapatkan 225 Max HP ekstra secara langsung.' },
      { name: 'Tenacity', tier: 'Tier 2', filename: 'Tenacity-Talent.png', effect: 'Meningkatkan Physical & Magic Defense sebesar 15 poin saat HP berada di bawah 50%.' },
      { name: 'Concussive Blast', tier: 'Tier 3', filename: 'Concussive_Blast-Talent.png', effect: 'Menghasilkan ledakan magic area berskala 100 (+7% Total HP) setelah basic attack.' }
    ]
  },
  {
    id: 'mage',
    name: 'Custom Mage Emblem',
    category: 'Mage',
    icon: 'Custom_Mage_Emblem.png',
    stats: '+30 Magic Power, +5% Cooldown Reduction, +8 Magic Penetration',
    description: 'Emblem standar midlaner sihir untuk memaksimalkan daya ledak skill dan frekuensi rotasi spell.',
    talents: [
      { name: 'Inspire', tier: 'Tier 1', filename: 'Inspire-Talent.png', effect: 'Mendapatkan 5% Cooldown Reduction ekstra.' },
      { name: 'Bargain Hunter', tier: 'Tier 2', filename: 'Bargain_Hunter-Talent.png', effect: 'Memperoleh diskon harga 5% pada seluruh pembelian equipment di shop.' },
      { name: 'Lethal Ignition', tier: 'Tier 3', filename: 'Lethal_Ignition-Talent.png', effect: 'Memberikan damage > 7% HP lawan 3 kali membakar target sebesar 162-750 adaptive damage.' }
    ]
  },
  {
    id: 'fighter',
    name: 'Custom Fighter Emblem',
    category: 'Fighter',
    icon: 'Custom_Fighter_Emblem.png',
    stats: '+10% Spell Vamp, +22 Adaptive Attack, +6 Physical & Magic Defense',
    description: 'Dirancang khusus untuk petarung garis depan yang membutuhkan lifesteal sihir dan ketahanan tubuh.',
    talents: [
      { name: 'Firmness', tier: 'Tier 1', filename: 'Firmness-Talent.png', effect: 'Mendapatkan 6 Physical & Magic Defense tambahan.' },
      { name: 'Festival of Blood', tier: 'Tier 2', filename: 'Festival_of_Blood-Talent.png', effect: 'Meningkatkan 6% Spell Vamp (+0.5% per kill/assist hingga 10%).' },
      { name: 'Brave Smite', tier: 'Tier 3', filename: 'Brave_Smite-Talent.png', effect: 'Memulihkan 4% Max HP setiap kali skill mengenai hero musuh.' }
    ]
  },
  {
    id: 'marksman',
    name: 'Custom Marksman Emblem',
    category: 'Marksman',
    icon: 'Custom_Marksman_Emblem.png',
    stats: '+15% Attack Speed, +5% Adaptive Attack, +5% Critical Chance',
    description: 'Pondasi utama penembak jitu Gold Lane untuk memaksimalkan DPS tembakan dan critical.',
    talents: [
      { name: 'Fatal', tier: 'Tier 1', filename: 'Fatal-Talent.png', effect: 'Mendapatkan 5% Critical Chance dan 10% Critical Damage.' },
      { name: 'Weapon Master', tier: 'Tier 2', filename: 'Weapon_Master-Talent.png', effect: 'Physical Attack dari item dan emblem meningkat sebesar 5%.' },
      { name: 'Weakness Finder', tier: 'Tier 3', filename: 'Weakness_Finder-Talent.png', effect: 'Basic attack memperlambat musuh 90% dan memangkas 50% Attack Speed lawan.' }
    ]
  },
  {
    id: 'support',
    name: 'Custom Support Emblem',
    category: 'Support',
    icon: 'Custom_Support_Emblem.png',
    stats: '+15% Healing Effect, +10 Cooldown Reduction, +10 Movement Speed',
    description: 'Meningkatkan efektivitas penyembuhan darah kawan dan mempercepat ketersediaan Battle Spell.',
    talents: [
      { name: 'Agility', tier: 'Tier 1', filename: 'Agility-Talent.png', effect: 'Mendapatkan 4% Movement Speed tambahan.' },
      { name: 'Pull Yourself Together', tier: 'Tier 2', filename: 'Pull_Yourself_Together-Talent.png', effect: 'Mengurangi cooldown Battle Spell dan Equipment aktif sebesar 15%.' },
      { name: 'Focusing Mark', tier: 'Tier 3', filename: 'Focusing_Mark-Talent.png', effect: 'Serangan ke musuh membuat rekan tim menghasilkan damage 6% lebih besar ke target tersebut.' }
    ]
  },
  {
    id: 'common',
    name: 'Basic Common Emblem',
    category: 'Basic_Common',
    icon: 'Basic_Common_Emblem.png',
    stats: '+500 HP, +12 HP Regen, +12 Adaptive Attack, +100 Mana',
    description: 'Emblem regenerasi seimbang yang sangat cocok untuk hero boros mana atau bertipe sustain hibrida.',
    talents: [
      { name: 'Thrill', tier: 'Tier 1', filename: 'Thrill.png', effect: 'Mendapatkan 16 Adaptive Attack tambahan.' },
      { name: 'Seasoned Hunter', tier: 'Tier 2', filename: 'Seasoned_Hunter.png', effect: 'Meningkatkan damage ke Lord dan Turtle sebesar 15% serta mempercepat jungle.' },
      { name: 'Quantum Charge', tier: 'Tier 3', filename: 'Quantum_Charge-Talent.png', effect: 'Basic attack memberi 30% Movement Speed dan memulihkan HP setara 75-180.' }
    ]
  }
];

export function getAllEmblems() {
  return EMBLEM_SETS;
}

export function getEmblemById(id) {
  return EMBLEM_SETS.find((emblem) => emblem.id === id) || null;
}
