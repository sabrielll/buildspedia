/**
 * Buildspedia - Hero Roster File: Belerick (Guardians of Nature)
 * Slug: /belerick
 */

import { buildHero } from '../utils/buildHero.js';

const hero_belerick = buildHero("Belerick", {
  "displayName": "Belerick",
  "title": "Guardians of Nature",
  "role": "Tank",
  "sec": null,
  "lane": "Roamer",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.7%",
  "pickRate": "3.1%",
  "banRate": "4.9%",
  "summary": "Raksasa pohon penjaga yang memantulkan kembali setiap serangan fisik musuh menjadi duri mematikan berkat pasif Deadly Thorns.",
  "pros": [
    "Counter mutlak marksman bertipe attack speed cepat (Claude, Miya, Moskov)",
    "Bonus Max HP dari item meningkat 30%",
    "Ultimate taunt area luas"
  ],
  "cons": [
    "Sangat lambat dalam mobilitas rotasi",
    "Rentan terhadap burst magic jarak jauh"
  ]
});

export default hero_belerick;
