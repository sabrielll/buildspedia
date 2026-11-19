/**
 * Buildspedia - Hero Roster File: Aamon (Duke of Shards)
 * Slug: /aamon
 */

import { buildHero } from '../utils/buildHero.js';

const hero_aamon = buildHero("Aamon", {
  "displayName": "Aamon",
  "title": "Duke of Shards",
  "role": "Assassin",
  "sec": "Mage",
  "lane": "Jungler",
  "tier": "S+",
  "diff": "Medium",
  "winRate": "53.8%",
  "pickRate": "2.4%",
  "banRate": "18.2%",
  "summary": "Assassin Magic burst mematikan yang mengandalkan kamuflase tak terlihat, mobilitas tinggi, dan eksekusi pecahan belati shards.",
  "pros": [
    "Burst damage magic instan sangat masif",
    "Camouflage pasif memberi HP regen dan imunitas target lock",
    "Sangat lincah dalam rotasi dan flanking"
  ],
  "cons": [
    "Rentan terhadap Suppression CC",
    "Burst berkurang jika lawan menumpuk Radiant Armor",
    "Bergantung pada tumpukan shard sebelum Ultimate"
  ],
  "spells": [
    {
      "name": "Ice Retribution",
      "category": "Boots",
      "filename": "Ice_retribution.png",
      "isPrimary": true,
      "tag": "Primary Jungler",
      "description": "Mencuri 72-100 Movement Speed target selama 3 detik untuk memastikan burst shard terkunci."
    },
    {
      "name": "Flame Retribution",
      "category": "Boots",
      "filename": "Flame_Retribution.png",
      "isPrimary": false,
      "tag": "Vs Tank Jungler",
      "description": "Mencuri Physical Attack & Magic Power musuh saat duel objektif."
    }
  ],
  "emblem": {
    "name": "Assassin Emblem",
    "category": "Assasins",
    "assetPath": "/Assets/Emblem/Assasins/Custom_Assassin_Emblem.png",
    "baseStats": "+16 Adaptive Penetration | +10 Adaptive Attack | +3% Movement Speed",
    "tier1": {
      "name": "Rupture",
      "category": "Assasins",
      "filename": "Rupture-Talent.png",
      "effect": "Memperoleh +5 Adaptive Penetration tambahan.",
      "reason": "Memaksimalkan penetrasi magic sejak early game."
    },
    "tier2": {
      "name": "Seasoned Hunter",
      "category": "Basic_Common",
      "filename": "Seasoned_Hunter.png",
      "effect": "Damage ke Lord & Turtle meningkat 15%.",
      "reason": "Mempercepat rotasi farming jungle dan objektif."
    },
    "tier3": {
      "name": "Lethal Ignition",
      "category": "Mage",
      "filename": "Lethal_Ignition-Talent.png",
      "effect": "3x hit > 7% Max HP membakar musuh untuk 162-750 Adaptive Damage.",
      "reason": "Sinergi sempurna dengan multi-hit shard Aamon."
    }
  },
  "startingItem": {
    "name": "Mystery Codex",
    "category": "Magical",
    "filename": "Mystery_codex.png",
    "cost": "300 Gold",
    "stats": "+15 Magic Power"
  },
  "coreBuild": [
    {
      "slot": 1,
      "name": "Arcane Boots",
      "category": "Boots",
      "filename": "Arcane_boots.png",
      "cost": "690 Gold",
      "stats": "+40 Movement Speed, +10 Magic PEN",
      "passive": "Ice Retribution: Mencuri MS lawan.",
      "whyBuy": "Flat Magic PEN krusial di early game."
    },
    {
      "slot": 2,
      "name": "Genius Wand",
      "category": "Magical",
      "filename": "Genius_wand.png",
      "cost": "2000 Gold",
      "stats": "+75 Magic Power, +5% MS, +10 Magic PEN",
      "passive": "Mengurangi 3-7 Magic Defense musuh per hit (hingga 3 stack).",
      "whyBuy": "Multi-hit shard langsung memicu 3 stack pengurangan defense."
    },
    {
      "slot": 3,
      "name": "Concentrated Energy",
      "category": "Magical",
      "filename": "Concentrated_energy.png",
      "cost": "2020 Gold",
      "stats": "+70 Magic Power, +700 HP, +20% Spell Vamp",
      "passive": "Meningkatkan Magic Power & sustain HP saat kombo.",
      "whyBuy": "Daya tahan ekstra dan sustain di mid game."
    },
    {
      "slot": 4,
      "name": "Holy Crystal",
      "category": "Magical",
      "filename": "Holy_crystal.png",
      "cost": "2180 Gold",
      "stats": "+100 Magic Power",
      "passive": "Meningkatkan Magic Power sebesar 21%-35%.",
      "whyBuy": "Power spike utama pengganda damage shard."
    },
    {
      "slot": 5,
      "name": "Divine Glaive",
      "category": "Magical",
      "filename": "Divine_glaive.png",
      "cost": "1970 Gold",
      "stats": "+65 Magic Power, +40% Magic PEN",
      "passive": "Bonus Magic PEN terhadap musuh ber-Magic Defense tinggi.",
      "whyBuy": "Penembus Athena's Shield & Radiant Armor lawan."
    },
    {
      "slot": 6,
      "name": "Blood Wings",
      "category": "Magical",
      "filename": "Blood_wings.png",
      "cost": "3000 Gold",
      "stats": "+175 Magic Power, +500 HP",
      "passive": "Memperoleh Shield sebesar 200% Magic Power.",
      "whyBuy": "Magic Power tertinggi sekaligus pelindung saat masuk backline."
    }
  ],
  "situationalBuild": [
    {
      "name": "Winter Truncheon",
      "category": "Magical",
      "filename": "Winter_truncheon.png",
      "cost": "1910 Gold",
      "stats": "+60 Magic Power, +25 Physical Defense, +400 HP",
      "badge": "vs Assassin Burst",
      "replaceItem": {
        "name": "Blood Wings",
        "category": "Magical",
        "filename": "Blood_wings.png"
      },
      "whyBuy": "Skill aktif Frozen kebal 2 detik untuk menghindari burst Ling/Hayabusa."
    },
    {
      "name": "Athena's Shield",
      "category": "Defense",
      "filename": "Athena_shield.png",
      "cost": "2150 Gold",
      "stats": "+900 HP, +62 Magic Defense",
      "badge": "vs Magic Burst",
      "replaceItem": {
        "name": "Blood Wings",
        "category": "Magical",
        "filename": "Blood_wings.png"
      },
      "whyBuy": "Meredam 25% Magic Damage dari mage one-shot seperti Eudora/Xavier."
    },
    {
      "name": "Immortality",
      "category": "Defense",
      "filename": "Immortality.png",
      "cost": "2120 Gold",
      "stats": "+800 HP, +20 Physical Defense",
      "badge": "Late Game Revive",
      "replaceItem": {
        "name": "Blood Wings",
        "category": "Magical",
        "filename": "Blood_wings.png"
      },
      "whyBuy": "Kesempatan hidup kedua di menit kritis perebutan Lord."
    }
  ],
  "skills": [
    {
      "key": "P",
      "type": "Passive",
      "name": "Invisible Armor",
      "icon": "/Assets/Hero Icons/Aamon/Aamon_0.png",
      "cooldown": "Pasif",
      "description": "Memasuki mode Camouflage setiap kali skill mengenai musuh, memulihkan HP, mendapat +60% Movement Speed, dan memperkuat Basic Attack berikutnya.",
      "tips": "Gunakan Camouflage untuk reposisi tanpa bisa dikunci basic attack lawan."
    },
    {
      "key": "1",
      "type": "Skill 1",
      "name": "Soul Shards",
      "icon": "/Assets/Hero Icons/Aamon/Aamon_1.png",
      "cooldown": "9.0 - 6.5s",
      "levels": [
        1,
        3,
        5,
        7,
        9,
        11
      ],
      "description": "Melempar belati shard ke target, memberikan Magic Damage dan menjatuhkan pecahan shard di tanah untuk diserap.",
      "tips": "Skill utama untuk poke dan menumpuk jumlah shard sebelum Ultimate."
    },
    {
      "key": "2",
      "type": "Skill 2",
      "name": "Slayer Shards",
      "icon": "/Assets/Hero Icons/Aamon/Aamon_2.png",
      "cooldown": "15.0 - 12.5s",
      "levels": [
        2,
        6,
        10,
        13,
        14,
        15
      ],
      "description": "Melempar belati ke depan yang memberikan efek slow 50% dan kembali ke Aamon untuk langsung mengaktifkan Camouflage.",
      "tips": "Gunakan untuk membuka serangan secara siluman dari semak atau kabur."
    },
    {
      "key": "3",
      "type": "Ultimate",
      "name": "Endless Shards",
      "icon": "/Assets/Hero Icons/Aamon/Aamon_3.png",
      "cooldown": "46.0 - 36.0s",
      "levels": [
        4,
        8,
        12
      ],
      "description": "Mengunci target dan meluncurkan hingga 25 shard di sekitar Aamon. Damage meningkat drastis berdasarkan HP target yang telah hilang.",
      "tips": "Gunakan sebagai finisher saat shard sudah terkumpul banyak dan HP lawan di bawah 50%."
    }
  ],
  "howToPlay": "Aamon adalah burst assassin-mage yang dimainkan di posisi Jungler. Gaya bermainnya berfokus pada pemanfaatan kamuflase dari Slayer Shards (Skill 2) dan Invisible Armor (Pasif) untuk menyergap carry lawan yang terisolasi tanpa terdeteksi. Cicil target dengan Enhanced Basic Attack dan Soul Shards (Skill 1) guna menjatuhkan banyak pecahan belati di tanah, lalu kunci eksekusi instan menggunakan Endless Shards (Ultimate) saat darah lawan menipis. Berkat mobilitas dan regenerasi HP selama mode kamuflase, Aamon sangat handal melakukan keluar-masuk teamfight serta mengamankan objektif di seluruh map.",
  "counters": {
    "strongAgainst": [
      {
        "name": "Layla",
        "slug": "layla",
        "role": "Marksman",
        "reason": "Marksman tanpa skill dash yang sangat mudah dieksekusi instan."
      },
      {
        "name": "Miya",
        "slug": "miya",
        "role": "Marksman",
        "reason": "Tidak mampu menahan burst magic shard di early-mid game."
      },
      {
        "name": "Xavier",
        "slug": "xavier",
        "role": "Mage",
        "reason": "Mage statis yang sulit mengunci Aamon saat kamuflase."
      }
    ],
    "weakAgainst": [
      {
        "name": "Franco",
        "slug": "franco",
        "role": "Tank",
        "reason": "Ultimate Suppression mengunci Aamon meskipun dalam mode Camouflage."
      },
      {
        "name": "Kaja",
        "slug": "kaja",
        "role": "Support",
        "reason": "Divine Judgment langsung menarik dan menghentikan pergerakan Aamon."
      },
      {
        "name": "Ruby",
        "slug": "ruby",
        "role": "Fighter",
        "reason": "Crowd Control area beruntun yang mengungkap posisi kamuflase Aamon."
      }
    ],
    "synergies": [
      {
        "name": "Angela",
        "slug": "angela",
        "role": "Support",
        "reason": "Heartguard memberi shield tebal dan slow tambahan saat Aamon menyelam."
      },
      {
        "name": "Tigreal",
        "slug": "tigreal",
        "role": "Tank",
        "reason": "Implosion mengumpulkan lawan agar shard Aamon mengenai target mudah."
      },
      {
        "name": "Atlas",
        "slug": "atlas",
        "role": "Tank",
        "reason": "Fatal Links membanting carry musuh tepat ke jangkauan burst Aamon."
      }
    ]
  }
});

export default hero_aamon;
