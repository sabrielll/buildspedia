/**
 * Buildspedia - Hero Roster File: Martis (Ashura King)
 * Slug: /martis
 */

import { buildHero } from '../utils/buildHero.js';

const hero_martis = buildHero("Martis", {
  "displayName": "Martis",
  "title": "Ashura King",
  "role": "Fighter",
  "sec": null,
  "lane": "Jungler",
  "tier": "S",
  "diff": "Medium",
  "winRate": "53.1%",
  "pickRate": "4.6%",
  "banRate": "21.5%",
  "summary": "Raja Ashura penakluk 3000 dunia dengan tebasan Mortal Coil kebal CC dan tebasan eksekusi Decimation pemenggal beruntun True Damage.",
  "pros": [
    "Mortal Coil kebal terhadap semua efek Crowd Control",
    "Decimation mengeksekusi True Damage dan me-reset cooldown serta menambah MS 100% per kill",
    "Sangat dominan di early-mid game"
  ],
  "cons": [
    "Efektivitas menurun di late game jika musuh menumpuk pertahanan",
    "Rentan jika tebasan Ultimate gagal membunuh target"
  ]
});

export default hero_martis;
