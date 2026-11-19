/**
 * Buildspedia - Hero Roster File: Alpha (Blade of Enmity)
 * Slug: /alpha
 */

import { buildHero } from '../utils/buildHero.js';

const hero_alpha = buildHero("Alpha", {
  "displayName": "Alpha",
  "title": "Blade of Enmity",
  "role": "Fighter",
  "sec": null,
  "lane": "Jungler",
  "tier": "S",
  "diff": "Low",
  "winRate": "52.6%",
  "pickRate": "3.9%",
  "banRate": "9.4%",
  "summary": "Fighter jungle tercepat dengan robot Beta yang memberikan rentetan True Damage dan lifesteal deras pada setiap tebasan skill.",
  "pros": [
    "Clear jungle luar biasa cepat dengan cooldown skill super singkat",
    "True damage alami menembus armor tank lawan",
    "Sustain lifesteal tinggi"
  ],
  "cons": [
    "Mudah dihindari jika musuh memiliki mobilitas tinggi",
    "Rentan terkena kiting jarak jauh"
  ]
});

export default hero_alpha;
