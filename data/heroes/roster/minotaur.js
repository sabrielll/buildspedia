/**
 * Buildspedia - Hero Roster File: Minotaur (Son of Minos)
 * Slug: /minotaur
 */

import { buildHero } from '../utils/buildHero.js';

const hero_minotaur = buildHero("Minotaur", {
  "displayName": "Minotaur",
  "title": "Son of Minos",
  "role": "Tank",
  "sec": "Support",
  "lane": "Roamer",
  "tier": "S",
  "diff": "Low",
  "winRate": "52.9%",
  "pickRate": "3.8%",
  "banRate": "14.0%",
  "summary": "Banteng gempa perkasa dengan hantaman palu Minoan Fury yang melambungkan seluruh musuh ke udara dan memulihkan darah kawan di sekitarnya.",
  "pros": [
    "Minoan Fury memberikan 3 kali guncangan gempa airborne area raksasa",
    "Heal area memulihkan darah dan menambah attack speed kawan",
    "Mengurangi defense musuh"
  ],
  "cons": [
    "Animasi palu membutuhkan positioning di tengah-tengah formasi musuh",
    "Mobilitas standar"
  ]
});

export default hero_minotaur;
