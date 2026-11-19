/**
 * Buildspedia - Hero Roster File: Barats (Dino Rider)
 * Slug: /barats
 */

import { buildHero } from '../utils/buildHero.js';

const hero_barats = buildHero("Barats", {
  "displayName": "Barats",
  "title": "Dino Rider",
  "role": "Tank",
  "sec": "Fighter",
  "lane": "Jungler",
  "tier": "S+",
  "diff": "Low",
  "winRate": "54.2%",
  "pickRate": "4.8%",
  "banRate": "28.5%",
  "summary": "Monster dinosaurus raksasa yang menelan hero musuh dan meludahkannya ke dinding dengan pertahanan armor dan resistensi CC tertinggi.",
  "pros": [
    "Ukuran tubuh membesar dan mendapat 25 stack defense pasif tebal",
    "Detention Beam menelan assassin musuh dan merusak formasi",
    "Sangat dominan di objektif Lord"
  ],
  "cons": [
    "Mudah kehilangan stack jika tidak berada di pertempuran",
    "Target empuk hero anti-HP seperti Karrie dan Lunox"
  ]
});

export default hero_barats;
