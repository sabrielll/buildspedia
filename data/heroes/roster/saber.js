/**
 * Buildspedia - Hero Roster File: Saber (Spacetime Sword)
 * Slug: /saber
 */

import { buildHero } from '../utils/buildHero.js';

const hero_saber = buildHero("Saber", {
  "displayName": "Saber",
  "title": "Spacetime Sword",
  "role": "Assassin",
  "sec": null,
  "lane": "Jungler",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.4%",
  "pickRate": "3.9%",
  "banRate": "8.5%",
  "summary": "Ksatria pedang pedang terbang pemburu carry dengan kuncian Triple Sweep point-and-click di udara yang mengeksekusi musuh tanpa ampun.",
  "pros": [
    "Triple Sweep mengunci target pasti ke udara tanpa bisa meleset",
    "Pasif mengikis Physical Defense musuh hingga 40 poin",
    "Sangat ditakuti marksman dan mage"
  ],
  "cons": [
    "Setelah kombo Ultimate keluar, Saber mudah dibunuh jika kawan musuh berkumpul",
    "Sangat mudah ditangkal oleh item Wind of Nature dan Antique Cuirass"
  ]
});

export default hero_saber;
