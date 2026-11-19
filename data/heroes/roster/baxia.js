/**
 * Buildspedia - Hero Roster File: Baxia (Mystic Tortoise)
 * Slug: /baxia
 */

import { buildHero } from '../utils/buildHero.js';

const hero_baxia = buildHero("Baxia", {
  "displayName": "Baxia",
  "title": "Mystic Tortoise",
  "role": "Tank",
  "sec": null,
  "lane": "Jungler",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.8%",
  "pickRate": "2.1%",
  "banRate": "5.2%",
  "summary": "Kura-kura pelindung dengan roda perisai berkecepatan tinggi yang memiliki efek pasif Anti-Heal alami untuk melumpuhkan lifesteal lawan.",
  "pros": [
    "Pasif mengurangi efek regen/heal musuh hingga 50% secara alami",
    "Rotasi menggelinding antar lane paling kencang",
    "Damage shield tiada henti"
  ],
  "cons": [
    "Kurang memiliki efek Hard CC instan area seperti Tigreal atau Atlas",
    "Perlu menempel musuh terus menerus"
  ]
});

export default hero_baxia;
