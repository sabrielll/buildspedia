/**
 * Buildspedia - Hero Roster File: Aldous (Soul Contractor)
 * Slug: /aldous
 */

import { buildHero } from '../utils/buildHero.js';

const hero_aldous = buildHero("Aldous", {
  "displayName": "Aldous",
  "title": "Soul Contractor",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "B",
  "diff": "Medium",
  "winRate": "50.1%",
  "pickRate": "1.8%",
  "banRate": "2.1%",
  "summary": "Fighter scaling tak terbatas dengan tinju Contract: Soul Steal yang mampu melumat carry musuh dalam 1 pukulan di late game.",
  "pros": [
    "Damage pukulan berskala tanpa batas dari stack minion",
    "Ultimate Chase Fate membuka map seluruh musuh dan terbang langsung",
    "Shield tebal dari skill 2"
  ],
  "cons": [
    "Early game sangat lemah dan butuh waktu lama untuk mengumpulkan stack",
    "Mudah di-kite dan di-freeze lane oleh lawan agresif"
  ]
});

export default hero_aldous;
