/**
 * Buildspedia - Hero Roster File: Hilda (Power of Megalith)
 * Slug: /hilda
 */

import { buildHero } from '../utils/buildHero.js';

const hero_hilda = buildHero("Hilda", {
  "displayName": "Hilda",
  "title": "Power of Megalith",
  "role": "Fighter",
  "sec": "Tank",
  "lane": "Roamer",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.6%",
  "pickRate": "2.1%",
  "banRate": "3.7%",
  "summary": "Pendekar wanita penguasa semak-semak yang meregenerasi darah dan shield secara gratis di dalam semak dan merusuh jungler musuh sejak level 1.",
  "pros": [
    "Regenerasi HP dan shield gratis setiap masuk ke semak-semak",
    "Perusuh jungle musuh paling menyebalkan di early game",
    "Ultimate eksekusi tebasan tebal"
  ],
  "cons": [
    "Efektivitas menurun drastis di area terbuka tanpa semak",
    "Bukan hero pemenang teamfight late game 5v5"
  ]
});

export default hero_hilda;
