/**
 * Buildspedia - Hero Roster File: Esmeralda (Poisoning Witch)
 * Slug: /esmeralda
 */

import { buildHero } from '../utils/buildHero.js';

const hero_esmeralda = buildHero("Esmeralda", {
  "displayName": "Esmeralda",
  "title": "Poisoning Witch",
  "role": "Mage",
  "sec": "Tank",
  "lane": "Exp Lane",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.4%",
  "pickRate": "2.4%",
  "banRate": "3.1%",
  "summary": "Penari astrologi penghisap perisai lawan yang mengubah seluruh shield musuh menjadi perisai tebal milik dirinya sendiri.",
  "pros": [
    "Mengabaikan dan menyerap shield musuh (counter telak Harith, Angela, Lolita)",
    "Movement speed sangat tinggi saat spam skill 1",
    "Hybrid physical & magic damage"
  ],
  "cons": [
    "Sangat rentan terhadap efek debuff anti-heal Dominance Ice",
    "Kurang memiliki burst damage instan"
  ]
});

export default hero_esmeralda;
