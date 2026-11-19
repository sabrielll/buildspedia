/**
 * Buildspedia - Hero Roster File: Cecilion (Embrace of Night)
 * Slug: /cecilion
 */

import { buildHero } from '../utils/buildHero.js';

const hero_cecilion = buildHero("Cecilion", {
  "displayName": "Cecilion",
  "title": "Embrace of Night",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.9%",
  "pickRate": "3.2%",
  "banRate": "3.8%",
  "summary": "Mage pengumpul stack Mana tanpa batas yang kelelawar Bat Impact-nya mampu melenyapkan seluruh formasi musuh dalam 1 tebasan di late game.",
  "pros": [
    "Scaling mana dan damage tanpa batas maksimal di late game",
    "Jangkauan skill Bat Impact sangat jauh dan aman di belakang",
    "Sinergi spesial dengan Carmilla"
  ],
  "cons": [
    "Sangat boros mana di early game dan damage belum terasa",
    "Sangat rentan jika didekati hero penyerang jarak dekat"
  ]
});

export default hero_cecilion;
