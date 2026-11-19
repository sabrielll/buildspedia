/**
 * Buildspedia - Hero Roster File: Johnson (Mustang)
 * Slug: /johnson
 */

import { buildHero } from '../utils/buildHero.js';

const hero_johnson = buildHero("Johnson", {
  "displayName": "Johnson",
  "title": "Mustang",
  "role": "Tank",
  "sec": "Support",
  "lane": "Roamer",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.3%",
  "pickRate": "4.6%",
  "banRate": "8.2%",
  "summary": "Tank mobil balap penabrak yang bertransformasi menjadi kendaraan tempur cepat bersama 1 rekan penumpang untuk menabrak musuh di seluruh map.",
  "pros": [
    "Kemampuan menabrak tiba-tiba menciptakan kombo maut (bersama Odette/Kadita)",
    "Perisai elektromagnetik pasif sangat tebal saat sekarat",
    "Stun dan slow area"
  ],
  "cons": [
    "Dapat dihindari jika musuh memiliki visi map yang baik",
    "Mudah dibatalkan oleh dinding Grock atau es Aurora"
  ]
});

export default hero_johnson;
