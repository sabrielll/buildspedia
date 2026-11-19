/**
 * Buildspedia - Hero Roster File: Akai (Panda Warrior)
 * Slug: /akai
 */

import { buildHero } from '../utils/buildHero.js';

const hero_akai = buildHero("Akai", {
  "displayName": "Akai",
  "title": "Panda Warrior",
  "role": "Tank",
  "sec": "Fighter",
  "lane": "Roamer",
  "tier": "S",
  "diff": "Low",
  "winRate": "52.8%",
  "pickRate": "4.5%",
  "banRate": "12.0%",
  "summary": "Tank inisiator dan crowd control terkuat yang mampu memporak-porandakan formasi musuh dengan putaran Heavy Spin tak terbendung.",
  "pros": [
    "Heavy Spin kebal terhadap efek slow dan CC biasa",
    "Shield pasif Tai Chi sangat tebal berbasis Max HP",
    "Pengaman objektif Turtle/Lord terbaik"
  ],
  "cons": [
    "Positioning putaran harus tepat ke arah dinding",
    "Rentan terhadap True Damage Karrie",
    "Cooldown Ultimate cukup lama jika meleset"
  ]
});

export default hero_akai;
