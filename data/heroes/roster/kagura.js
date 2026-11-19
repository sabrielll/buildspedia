/**
 * Buildspedia - Hero Roster File: Kagura (Onmyouji Master)
 * Slug: /kagura
 */

import { buildHero } from '../utils/buildHero.js';

const hero_kagura = buildHero("Kagura", {
  "displayName": "Kagura",
  "title": "Onmyouji Master",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "High",
  "winRate": "52.3%",
  "pickRate": "3.7%",
  "banRate": "7.8%",
  "summary": "Master payung Seimei dengan mobilitas purifikasi alami terlengkap yang mampu mencicil, mengunci, dan meledakkan musuh dari jarak aman.",
  "pros": [
    "Skill 2 memiliki efek Purify alami bawaan untuk melepaskan diri dari stun",
    "Burst damage payung Yin-Yang sangat mematikan bagi backline musuh",
    "Jangkauan poke sangat jauh"
  ],
  "cons": [
    "Mekanik payung membutuhkan kontrol posisi dan makro skill tinggi",
    "Kurang efektif melawan hero yang menumpuk Magic Defense tebal"
  ]
});

export default hero_kagura;
