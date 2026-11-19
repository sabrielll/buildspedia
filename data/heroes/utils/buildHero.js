/**
 * Buildspedia - Hero Object Builder Utility
 * Combines hero-specific metadata from data/heroes/roster/[slug].js with role archetype defaults
 */

import { CURRENT_PATCH } from '../../constants/patch.js';
import { ARCHETYPES } from '../../archetypes/index.js';

export function buildHero(dirName, meta) {
  const id = dirName.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const slug = dirName.toLowerCase().replace(/[^a-z0-9]/g, '-');

  let archKey = 'FighterExp';
  if (meta.role === 'Assassin') {
    archKey = meta.sec === 'Mage' ? 'MagicMage' : 'PhysicalAssassin';
  } else if (meta.role === 'Mage' || meta.sec === 'Mage') {
    archKey = 'MagicMage';
  } else if (meta.role === 'Tank') {
    archKey = 'TankRoam';
  } else if (meta.role === 'Marksman') {
    archKey = 'MarksmanGold';
  } else if (meta.role === 'Support') {
    archKey = 'SupportRoam';
  }

  const arch = ARCHETYPES[archKey];
  const isAamon = dirName === 'Aamon';

  return {
    id: id,
    slug: slug,
    dirName: dirName,
    name: meta.displayName,
    title: meta.title,
    role: meta.role,
    secondaryRole: meta.sec,
    specialty: isAamon
      ? 'Burst'
      : meta.role === 'Assassin' || meta.role === 'Mage'
      ? 'Burst'
      : meta.role === 'Marksman'
      ? 'DPS'
      : 'Initiator',
    lane: meta.lane,
    tier: meta.tier,
    difficulty: meta.diff,
    ratings: {
      durability: meta.role === 'Tank' ? 10 : meta.role === 'Fighter' ? 7 : meta.role === 'Marksman' ? 3 : 5,
      offense: meta.role === 'Marksman' || meta.role === 'Assassin' ? 9 : 7,
      controlEffect: meta.role === 'Tank' || meta.role === 'Support' ? 9 : 5,
      difficulty: meta.diff === 'Very High' ? 10 : meta.diff === 'High' ? 8 : meta.diff === 'Medium' ? 6 : 4
    },
    winRate: meta.winRate,
    pickRate: meta.pickRate,
    banRate: meta.banRate,
    patch: meta.patch || CURRENT_PATCH,
    summary: meta.summary,
    pros: meta.pros,
    cons: meta.cons,
    assets: {
      heroIcon: `/Assets/Hero Icons/${dirName}/${dirName}.png`,
      heroPortrait: `/Assets/Hero Icons/${dirName}/${dirName}_rec.png`,
      roleIcon: `/Assets/Clases/${meta.role}.png`
    },
    spells: meta.spells || (isAamon
      ? [
          { name: "Ice Retribution", category: "Boots", filename: "Ice_retribution.png", isPrimary: true, tag: "Primary Jungler", description: "Mencuri 72-100 Movement Speed target selama 3 detik untuk memastikan burst shard terkunci." },
          { name: "Flame Retribution", category: "Boots", filename: "Flame_Retribution.png", isPrimary: false, tag: "Vs Tank Jungler", description: "Mencuri Physical Attack & Magic Power musuh saat duel objektif." }
        ]
      : arch.spells),
    emblem: meta.emblem || (isAamon
      ? {
          name: "Assassin Emblem",
          category: "Assasins",
          assetPath: "/Assets/Emblem/Assasins/Custom_Assassin_Emblem.png",
          baseStats: "+16 Adaptive Penetration | +10 Adaptive Attack | +3% Movement Speed",
          tier1: { name: "Rupture", category: "Assasins", filename: "Rupture-Talent.png", effect: "Memperoleh +5 Adaptive Penetration tambahan.", reason: "Memaksimalkan penetrasi magic sejak early game." },
          tier2: { name: "Seasoned Hunter", category: "Basic_Common", filename: "Seasoned_Hunter.png", effect: "Damage ke Lord & Turtle meningkat 15%.", reason: "Mempercepat rotasi farming jungle dan objektif." },
          tier3: { name: "Lethal Ignition", category: "Mage", filename: "Lethal_Ignition-Talent.png", effect: "3x hit > 7% Max HP membakar musuh untuk 162-750 Adaptive Damage.", reason: "Sinergi sempurna dengan multi-hit shard Aamon." }
        }
      : arch.emblem),
    startingItem: meta.startingItem || (isAamon
      ? { name: "Mystery Codex", category: "Magical", filename: "Mystery_codex.png", cost: "300 Gold", stats: "+15 Magic Power" }
      : { name: arch.coreBuild[0].name, category: arch.coreBuild[0].category, filename: arch.coreBuild[0].filename, cost: arch.coreBuild[0].cost, stats: arch.coreBuild[0].stats }),
    coreBuild: meta.coreBuild || (isAamon
      ? [
          { slot: 1, name: "Arcane Boots", category: "Boots", filename: "Arcane_boots.png", cost: "690 Gold", stats: "+40 Movement Speed, +10 Magic PEN", passive: "Ice Retribution: Mencuri MS lawan.", whyBuy: "Flat Magic PEN krusial di early game." },
          { slot: 2, name: "Genius Wand", category: "Magical", filename: "Genius_wand.png", cost: "2000 Gold", stats: "+75 Magic Power, +5% MS, +10 Magic PEN", passive: "Mengurangi 3-7 Magic Defense musuh per hit (hingga 3 stack).", whyBuy: "Multi-hit shard langsung memicu 3 stack pengurangan defense." },
          { slot: 3, name: "Concentrated Energy", category: "Magical", filename: "Concentrated_energy.png", cost: "2020 Gold", stats: "+70 Magic Power, +700 HP, +20% Spell Vamp", passive: "Meningkatkan Magic Power & sustain HP saat kombo.", whyBuy: "Daya tahan ekstra dan sustain di mid game." },
          { slot: 4, name: "Holy Crystal", category: "Magical", filename: "Holy_crystal.png", cost: "2180 Gold", stats: "+100 Magic Power", passive: "Meningkatkan Magic Power sebesar 21%-35%.", whyBuy: "Power spike utama pengganda damage shard." },
          { slot: 5, name: "Divine Glaive", category: "Magical", filename: "Divine_glaive.png", cost: "1970 Gold", stats: "+65 Magic Power, +40% Magic PEN", passive: "Bonus Magic PEN terhadap musuh ber-Magic Defense tinggi.", whyBuy: "Penembus Athena's Shield & Radiant Armor lawan." },
          { slot: 6, name: "Blood Wings", category: "Magical", filename: "Blood_wings.png", cost: "3000 Gold", stats: "+175 Magic Power, +500 HP", passive: "Memperoleh Shield sebesar 200% Magic Power.", whyBuy: "Magic Power tertinggi sekaligus pelindung saat masuk backline." }
        ]
      : arch.coreBuild),
    situationalBuild: meta.situationalBuild || (isAamon
      ? [
          { name: "Winter Truncheon", category: "Magical", filename: "Winter_truncheon.png", cost: "1910 Gold", stats: "+60 Magic Power, +25 Physical Defense, +400 HP", badge: "vs Assassin Burst", replaceItem: { name: "Blood Wings", category: "Magical", filename: "Blood_wings.png" }, whyBuy: "Skill aktif Frozen kebal 2 detik untuk menghindari burst Ling/Hayabusa." },
          { name: "Athena's Shield", category: "Defense", filename: "Athena_shield.png", cost: "2150 Gold", stats: "+900 HP, +62 Magic Defense", badge: "vs Magic Burst", replaceItem: { name: "Blood Wings", category: "Magical", filename: "Blood_wings.png" }, whyBuy: "Meredam 25% Magic Damage dari mage one-shot seperti Eudora/Xavier." },
          { name: "Immortality", category: "Defense", filename: "Immortality.png", cost: "2120 Gold", stats: "+800 HP, +20 Physical Defense", badge: "Late Game Revive", replaceItem: { name: "Blood Wings", category: "Magical", filename: "Blood_wings.png" }, whyBuy: "Kesempatan hidup kedua di menit kritis perebutan Lord." }
        ]
      : arch.situationalBuild.slice(0, 3).map((sItem) => ({
          ...sItem,
          replaceItem: {
            name: arch.coreBuild[5].name,
            category: arch.coreBuild[5].category,
            filename: arch.coreBuild[5].filename
          }
        }))),
    skills: meta.skills || (isAamon
      ? [
          {
            key: "P",
            type: "Passive",
            name: "Invisible Armor",
            icon: `/Assets/Hero Icons/${dirName}/${dirName}_0.png`,
            cooldown: "Pasif",
            description: "Memasuki mode Camouflage setiap kali skill mengenai musuh, memulihkan HP, mendapat +60% Movement Speed, dan memperkuat Basic Attack berikutnya.",
            tips: "Gunakan Camouflage untuk reposisi tanpa bisa dikunci basic attack lawan."
          },
          {
            key: "1",
            type: "Skill 1",
            name: "Soul Shards",
            icon: `/Assets/Hero Icons/${dirName}/${dirName}_1.png`,
            cooldown: "9.0 - 6.5s",
            levels: [1, 3, 5, 7, 9, 11],
            description: "Melempar belati shard ke target, memberikan Magic Damage dan menjatuhkan pecahan shard di tanah untuk diserap.",
            tips: "Skill utama untuk poke dan menumpuk jumlah shard sebelum Ultimate."
          },
          {
            key: "2",
            type: "Skill 2",
            name: "Slayer Shards",
            icon: `/Assets/Hero Icons/${dirName}/${dirName}_2.png`,
            cooldown: "15.0 - 12.5s",
            levels: [2, 6, 10, 13, 14, 15],
            description: "Melempar belati ke depan yang memberikan efek slow 50% dan kembali ke Aamon untuk langsung mengaktifkan Camouflage.",
            tips: "Gunakan untuk membuka serangan secara siluman dari semak atau kabur."
          },
          {
            key: "3",
            type: "Ultimate",
            name: "Endless Shards",
            icon: `/Assets/Hero Icons/${dirName}/${dirName}_3.png`,
            cooldown: "46.0 - 36.0s",
            levels: [4, 8, 12],
            description: "Mengunci target dan meluncurkan hingga 25 shard di sekitar Aamon. Damage meningkat drastis berdasarkan HP target yang telah hilang.",
            tips: "Gunakan sebagai finisher saat shard sudah terkumpul banyak dan HP lawan di bawah 50%."
          }
        ]
      : [
          {
            key: "P",
            type: "Passive",
            name: meta.skillNames?.[0] || `${meta.displayName}'s Mastery`,
            icon: `/Assets/Hero Icons/${dirName}/${dirName}_0.png`,
            cooldown: "Pasif",
            description: `Setiap serangan atau penggunaan kemampuan dari ${meta.displayName} memperkuat status dasarnya.`,
            tips: "Manfaatkan efek pasif untuk efisiensi duel di lane."
          },
          {
            key: "1",
            type: "Skill 1",
            name: meta.skillNames?.[1] || `${meta.displayName} Strike`,
            icon: `/Assets/Hero Icons/${dirName}/${dirName}_1.png`,
            cooldown: "7.5 - 4.0s",
            levels: meta.skillLevels?.[0] || [1, 3, 5, 7, 9, 11],
            description: "Melancarkan serangan utama ke arah target yang memberikan damage instan.",
            tips: "Prioritaskan level maksimal pertama untuk burst dan clear wave."
          },
          {
            key: "2",
            type: "Skill 2",
            name: meta.skillNames?.[2] || "Tactical Maneuver",
            icon: `/Assets/Hero Icons/${dirName}/${dirName}_2.png`,
            cooldown: "10.0 - 7.5s",
            levels: meta.skillLevels?.[1] || [2, 6, 10, 13, 14, 15],
            description: "Bermanuver cepat untuk mengatur posisi sekaligus memberi efek kontrol.",
            tips: "Simpan untuk inisiasi atau menghindari sergapan lawan."
          },
          {
            key: "3",
            type: "Ultimate",
            name: meta.skillNames?.[3] || "Apex Domain",
            icon: `/Assets/Hero Icons/${dirName}/${dirName}_3.png`,
            cooldown: "40.0 - 28.0s",
            levels: meta.skillLevels?.[2] || [4, 8, 12],
            description: `Melepaskan jurus pamungkas ${meta.displayName} dengan efek penentu teamfight.`,
            tips: "Tingkatkan setiap tersedia pada level 4, 8, dan 12."
          }
        ]),
    skillOrder: meta.skillOrder || {
      quickOrder: ["1", "2", "3"],
      priority: "Max Skill 1 > Max Skill 2 > Ambil Ultimate tiap Lv 4/8/12",
      levels: [
        { level: 1, skill: "Skill 1" }, { level: 2, skill: "Skill 2" }, { level: 3, skill: "Skill 1" },
        { level: 4, skill: "Ultimate" }, { level: 5, skill: "Skill 1" }, { level: 6, skill: "Skill 2" },
        { level: 7, skill: "Skill 1" }, { level: 8, skill: "Ultimate" }, { level: 9, skill: "Skill 1" },
        { level: 10, skill: "Skill 2" }, { level: 11, skill: "Skill 1" }, { level: 12, skill: "Ultimate" }
      ]
    },
    visualCombo: meta.full || ["2", "AA", "1", "AA", "3"],
    comboVideos: meta.comboVideos || [
      {
        id: "poke",
        title: "Early Poke (Minim Skill)",
        tag: "Cicil Darah",
        sequence: meta.poke || ["1", "AA", "2"],
        videoPath: `/Assets/Videos/${dirName}/${dirName}_poke.mp4`,
      },
      {
        id: "full",
        title: "Full Skill Combo",
        tag: "Instant Burst",
        sequence: meta.full || ["2", "AA", "1", "AA", "3"],
        videoPath: `/Assets/Videos/${dirName}/${dirName}_full.mp4`,
      }
    ],
    howToPlay: meta.howToPlay || (isAamon
      ? "Aamon adalah burst assassin-mage yang dimainkan di posisi Jungler. Gaya bermainnya berfokus pada pemanfaatan kamuflase dari Slayer Shards (Skill 2) dan Invisible Armor (Pasif) untuk menyergap carry lawan yang terisolasi tanpa terdeteksi. Cicil target dengan Enhanced Basic Attack dan Soul Shards (Skill 1) guna menjatuhkan banyak pecahan belati di tanah, lalu kunci eksekusi instan menggunakan Endless Shards (Ultimate) saat darah lawan menipis. Berkat mobilitas dan regenerasi HP selama mode kamuflase, Aamon sangat handal melakukan keluar-masuk teamfight serta mengamankan objektif di seluruh map."
      : `${meta.displayName} adalah hero ${meta.role} yang sangat efektif dimainkan di ${meta.lane}. Gaya bermainnya berfokus pada penguasaan tempo rotasi menggunakan Tactical Maneuver (Skill 2) untuk membuka celah serangan, lalu segera disusul dengan ${meta.displayName} Strike (Skill 1) serta Basic Attack guna menekan HP lawan. Manfaatkan kemampuan pasif ${meta.displayName}'s Mastery untuk menjaga keunggulan trading damage, dan lepaskan Apex Domain (Ultimate) pada momen penentuan teamfight atau perebutan Lord demi mengunci kemenangan tim.`),
    combos: meta.combos || [
      {
        name: `Standard Combo ${meta.displayName}`,
        sequence: ["Skill 2", "Basic Attack", "Skill 1", "Basic Attack", "Ultimate"],
        description: "Masuk dengan Skill 2, picu Basic Attack yang diperkuat, sambung Skill 1 + Basic Attack, dan akhiri dengan eksekusi Ultimate."
      }
    ],
    counters: meta.counters || (isAamon
      ? {
          strongAgainst: [
            { name: "Layla", slug: "layla", role: "Marksman", reason: "Marksman tanpa skill dash yang sangat mudah dieksekusi instan." },
            { name: "Miya", slug: "miya", role: "Marksman", reason: "Tidak mampu menahan burst magic shard di early-mid game." },
            { name: "Xavier", slug: "xavier", role: "Mage", reason: "Mage statis yang sulit mengunci Aamon saat kamuflase." }
          ],
          weakAgainst: [
            { name: "Franco", slug: "franco", role: "Tank", reason: "Ultimate Suppression mengunci Aamon meskipun dalam mode Camouflage." },
            { name: "Kaja", slug: "kaja", role: "Support", reason: "Divine Judgment langsung menarik dan menghentikan pergerakan Aamon." },
            { name: "Ruby", slug: "ruby", role: "Fighter", reason: "Crowd Control area beruntun yang mengungkap posisi kamuflase Aamon." }
          ],
          synergies: [
            { name: "Angela", slug: "angela", role: "Support", reason: "Heartguard memberi shield tebal dan slow tambahan saat Aamon menyelam." },
            { name: "Tigreal", slug: "tigreal", role: "Tank", reason: "Implosion mengumpulkan lawan agar shard Aamon mengenai target mudah." },
            { name: "Atlas", slug: "atlas", role: "Tank", reason: "Fatal Links membanting carry musuh tepat ke jangkauan burst Aamon." }
          ]
        }
      : {
          strongAgainst: [
            { name: "Layla", slug: "layla", role: "Marksman", reason: "Hero tanpa mobilitas yang sangat mudah dijangkau dan dihabisi." },
            { name: "Miya", slug: "miya", role: "Marksman", reason: "Kalah adu burst damage dan sustain di fase awal pertempuran." },
            { name: "Eudora", slug: "eudora", role: "Mage", reason: "Tidak memiliki mobilitas setelah kombo skillnya keluar." }
          ],
          weakAgainst: [
            { name: "Franco", slug: "franco", role: "Tank", reason: "Suppression Bloody Hunt mengunci gerak seketika tanpa ampun." },
            { name: "Diggie", slug: "diggie", role: "Support", reason: "Time Journey membatalkan seluruh efek Crowd Control tim." },
            { name: "Kaja", slug: "kaja", role: "Support", reason: "Kuncian cambuk suppression mematikan pergerakan hero lincah." }
          ],
          synergies: [
            { name: "Tigreal", slug: "tigreal", role: "Tank", reason: "Pusaran Implosion mengumpulkan seluruh musuh menjadi satu titik serang empuk." },
            { name: "Angela", slug: "angela", role: "Support", reason: "Heartguard memberi perlindungan shield ekstra dan percepatan gerak tak terbendung." },
            { name: "Mathilda", slug: "mathilda", role: "Support", reason: "Guiding Wind memberikan mobilitas dash gratis untuk keluar-masuk war." }
          ]
        }),
    gameplayGuide: meta.gameplayGuide || {
      earlyGame: `Di fase awal permainan (menit 00:00 - 05:00), fokuslah mengamankan gold dan level di lane Anda (${meta.lane}). Jaga jarak aman dari gank musuh dan bantu pengamanan Turtle pertama jika memungkinkan.`,
      midGame: "Pada fase mid game (menit 05:00 - 12:00), mulailah berotasi bersama roamer dan midlaner untuk menekan turret musuh serta mengamankan vision semak jungle lawan.",
      lateGame: "Di fase akhir game (menit 12:00+), hindari berjalan sendirian di map terbuka. Tetap berada di dekat formasi tim Anda untuk memastikan kontes Lord berjalan sukses."
    }
  };
}
