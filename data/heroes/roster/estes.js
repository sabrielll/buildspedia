/**
 * Buildspedia - Hero Roster File: Estes (Moon Elf King)
 * Slug: /estes
 */

import { buildHero } from '../utils/buildHero.js';

const hero_estes = buildHero("Estes", {
  "displayName": "Estes",
  "title": "Moon Elf King",
  "role": "Support",
  "sec": null,
  "lane": "Roamer",
  "tier": "S",
  "diff": "Low",
  "winRate": "53.0%",
  "pickRate": "4.3%",
  "banRate": "21.0%",
  "summary": "Raja penyembuh peri bulan dengan berkat Moonlight Immersion yang menjaga seluruh darah tim tetap penuh di tengah badai teamfight.",
  "pros": [
    "Kapasitas heal area terbesar dalam game",
    "Membentuk strategi gameplay grouping tak terkalahkan",
    "Slow area luas dari Domain of Moon God"
  ],
  "cons": [
    "Sangat di-counter oleh item anti-heal (Dominance Ice, Glowing Wand, Sea Halberd, Baxia)",
    "Target empuk utama assassin flanking"
  ]
});

export default hero_estes;
