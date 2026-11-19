/**
 * Buildspedia - Hero Roster File: Bane (Frozen King)
 * Slug: /bane
 */

import { buildHero } from '../utils/buildHero.js';

const hero_bane = buildHero("Bane", {
  "displayName": "Bane",
  "title": "Frozen King",
  "role": "Fighter",
  "sec": "Mage",
  "lane": "Exp Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.1%",
  "pickRate": "1.9%",
  "banRate": "2.0%",
  "summary": "Bajak laut hantu dengan semburan ludah Ale pemulih HP dan gelombang hiu maut Deadly Catch penghancur formasi dan turret.",
  "pros": [
    "Dapat dibangun Hybrid Physical atau Full Magic burst",
    "Semburan pasif Shark Bite memberikan splash damage tebal",
    "Ultimate dapat merusak turret dari jarak jauh"
  ],
  "cons": [
    "Mobilitas rata-rata tanpa dash panjang",
    "Darah cukup empuk jika dibangun full offensive"
  ]
});

export default hero_bane;
