/**
 * Buildspedia - Hero Roster File: Angela (Bunnylove)
 * Slug: /angela
 */

import { buildHero } from '../utils/buildHero.js';

const hero_angela = buildHero("Angela", {
  "displayName": "Angela",
  "title": "Bunnylove",
  "role": "Support",
  "sec": "Mage",
  "lane": "Roamer",
  "tier": "S",
  "diff": "Low",
  "winRate": "53.2%",
  "pickRate": "6.1%",
  "banRate": "22.4%",
  "summary": "Support global possession terpopuler yang merasuki tubuh assassin/fighter kawan untuk memberikan shield masif, heal, dan slow.",
  "pros": [
    "Ultimate Heartguard dapat membantu rekan setim dari ujung map manapun",
    "Spam heal Love Waves sangat deras",
    "Efek immobilize menjerat musuh"
  ],
  "cons": [
    "Sangat rapuh jika terisolasi sendirian tanpa rekan",
    "Tidak memiliki skill inisiasi hard CC area mandiri"
  ]
});

export default hero_angela;
