/**
 * Buildspedia - Hero Roster File: Julian (Scarlet Raven)
 * Slug: /julian
 */

import { buildHero } from '../utils/buildHero.js';

const hero_julian = buildHero("Julian", {
  "displayName": "Julian",
  "title": "Scarlet Raven",
  "role": "Mage",
  "sec": "Fighter",
  "lane": "Jungler",
  "tier": "S",
  "diff": "Medium",
  "winRate": "53.1%",
  "pickRate": "3.9%",
  "banRate": "16.7%",
  "summary": "Anak Raven tanpa ultimate biasa yang setiap kombinasi skill ke-3 nya bertransformasi menjadi jurus mematikan dengan kekebalan dan airborne.",
  "pros": [
    "Dapat mengakses skill tier 3 yang diperkuat sejak level 3",
    "Skill 2 enhanced memberikan efek invulnerable kebal dari serangan",
    "Lifesteal sihir pasif tebal"
  ],
  "cons": [
    "Jangkauan serang tergolong pendek untuk kategori mage",
    "Sangat bergantung pada timing kombinasi 3 skill"
  ]
});

export default hero_julian;
