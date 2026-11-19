/**
 * Buildspedia - Hero Roster File: Aulus (Warrior of Ferocity)
 * Slug: /aulus
 */

import { buildHero } from '../utils/buildHero.js';

const hero_aulus = buildHero("Aulus", {
  "displayName": "Aulus",
  "title": "Warrior of Ferocity",
  "role": "Fighter",
  "sec": null,
  "lane": "Jungler",
  "tier": "B",
  "diff": "Low",
  "winRate": "49.9%",
  "pickRate": "0.8%",
  "banRate": "0.5%",
  "summary": "Pendekar kapak kerdil yang palunya berevolusi setiap mencapai level 4, 8, dan 12 hingga menjadi mesin pembantai jangkauan luas di late game.",
  "pros": [
    "Damage critical area raksasa saat mencapai level 12",
    "Kecepatan gerak tinggi dari skill 1",
    "Sangat mematikan saat teamfight late game"
  ],
  "cons": [
    "Sangat lemah di early game sebelum palunya berevolusi",
    "Rentan diinvasi jungler agresif"
  ]
});

export default hero_aulus;
