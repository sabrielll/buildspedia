/**
 * Buildspedia - Hero Roster File: Miya (Moonlight Archer)
 * Slug: /miya
 */

import { buildHero } from '../utils/buildHero.js';

const hero_miya = buildHero("Miya", {
  "displayName": "Miya",
  "title": "Moonlight Archer",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "B",
  "diff": "Low",
  "winRate": "50.4%",
  "pickRate": "4.7%",
  "banRate": "1.9%",
  "summary": "Pemanah bulan pemanah panah ganda dengan jurus menghilang Moonlight Shadow pembawa efek Purify dan attack speed kilat di late game.",
  "pros": [
    "Ultimate menghilang dan menghapus seluruh Crowd Control secara instan",
    "Attack speed dan panah ganda melumat tim musuh dalam 2 detik di late game",
    "Sangat mudah dipahami"
  ],
  "cons": [
    "Sangat lemah di early game dan mudah di-gank",
    "Sangat bergantung pada item core"
  ]
});

export default hero_miya;
