/**
 * Buildspedia - Hero Roster File: Pharsa (Wings of Vengeance)
 * Slug: /pharsa
 */

import { buildHero } from '../utils/buildHero.js';

const hero_pharsa = buildHero("Pharsa", {
  "displayName": "Pharsa",
  "title": "Wings of Vengeance",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.7%",
  "pickRate": "3.9%",
  "banRate": "11.8%",
  "summary": "Penyihir gagak pembom udara dengan 4 tembakan bom Feathered Air Strike berdaya ledak raksasa dan terbang menjadi burung menembus rintangan.",
  "pros": [
    "Feathered Air Strike menguasai seluruh pertempuran objektif dari jarak super aman",
    "Wings by Wings terbang menembus dinding dengan kecepatan tinggi",
    "Zoning terbaik di MLBB"
  ],
  "cons": [
    "Berdiri diam di tempat saat menembakkan bom udara",
    "Sangat mudah diculik jika assassin musuh berhasil memutar ke belakang"
  ]
});

export default hero_pharsa;
