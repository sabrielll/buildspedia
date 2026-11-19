/**
 * Buildspedia - Hero Roster File: Natalia (Bright Claw)
 * Slug: /natalia
 */

import { buildHero } from '../utils/buildHero.js';

const hero_natalia = buildHero("Natalia", {
  "displayName": "Natalia",
  "title": "Bright Claw",
  "role": "Assassin",
  "sec": null,
  "lane": "Roamer",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.7%",
  "pickRate": "2.1%",
  "banRate": "8.4%",
  "summary": "Pembunuh bayangan cakar tak terlihat yang mengintai di semak-semak untuk membungkam dan mengeksekusi marksman musuh dari belakang.",
  "pros": [
    "Status Conceal stealth alami menjadikannya teror tak terlihat di map",
    "Efek Silence membungkam musuh sebelum mereka sempat memencet skill",
    "Asap Smoke Bomb kebal basic attack"
  ],
  "cons": [
    "Sangat lemah jika terdeteksi sebelum sempat mendekat",
    "Sulit berkontribusi dalam war terbuka 5v5"
  ]
});

export default hero_natalia;
