/**
 * Buildspedia - Hero Roster File: Harith (Time Traveler)
 * Slug: /harith
 */

import { buildHero } from '../utils/buildHero.js';

const hero_harith = buildHero("Harith", {
  "displayName": "Harith",
  "title": "Time Traveler",
  "role": "Mage",
  "sec": "Marksman",
  "lane": "Gold Lane",
  "tier": "S+",
  "diff": "High",
  "winRate": "54.6%",
  "pickRate": "5.1%",
  "banRate": "32.4%",
  "summary": "Penyihir kucing pelintas waktu yang melakukan Chrono Dash tanpa henti di atas karpet Zaman Force dengan shield dan burst damage tiada henti.",
  "pros": [
    "Dash tanpa henti dengan shield tebal dan serangan enhanced basic attack",
    "Resistensi CC alami hingga 45%",
    "Sangat mendominasi Gold Lane"
  ],
  "cons": [
    "Membutuhkan penempatan posisi di dalam matriks Zaman Force",
    "Rentan terhadap efek Suppression dan anti-shield Esmeralda"
  ]
});

export default hero_harith;
