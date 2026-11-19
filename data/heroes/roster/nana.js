/**
 * Buildspedia - Hero Roster File: Nana (Sweet Leonin)
 * Slug: /nana
 */

import { buildHero } from '../utils/buildHero.js';

const hero_nana = buildHero("Nana", {
  "displayName": "Nana",
  "title": "Sweet Leonin",
  "role": "Mage",
  "sec": "Support",
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "Low",
  "winRate": "52.8%",
  "pickRate": "5.9%",
  "banRate": "17.8%",
  "summary": "Gadis peri rubah menggemaskan dengan boneka Molina pengubah musuh jadi kelinci tak berdaya dan pasif nyawa kedua Molina's Blessing.",
  "pros": [
    "Pasif nyawa kedua memberi kekebalan maut saat darah habis dan lari kencang",
    "Molina mengutuk musuh menjadi kelinci pelumpuh skill",
    "Jejak kaki raksasa Ultimate burst area luas"
  ],
  "cons": [
    "Bidikan bumerang dapat dihindari lawan lincah",
    "Kurang memiliki mobilitas aktif selain pasifnya"
  ]
});

export default hero_nana;
