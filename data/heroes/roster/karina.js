/**
 * Buildspedia - Hero Roster File: Karina (Shadow Blade)
 * Slug: /karina
 */

import { buildHero } from '../utils/buildHero.js';

const hero_karina = buildHero("Karina", {
  "displayName": "Karina",
  "title": "Shadow Blade",
  "role": "Assassin",
  "sec": "Mage",
  "lane": "Jungler",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.8%",
  "pickRate": "2.9%",
  "banRate": "4.7%",
  "summary": "Assassin elf pembunuh berantai dengan pedang Shadowdance yang kebal terhadap semua basic attack fisik dan me-reset cooldown skill setiap kill.",
  "pros": [
    "Kebal 100% terhadap seluruh tembakan Basic Attack lawan dengan skill 1",
    "Reset cooldown skill instan setiap kali mengeliminasi musuh",
    "True damage pasif"
  ],
  "cons": [
    "Sangat rentan terhadap hero burst sihir",
    "Kurang memiliki mobilitas kabur jika tidak mendapatkan kill"
  ]
});

export default hero_karina;
