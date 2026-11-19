/**
 * Buildspedia - Hero Roster File: Clint (West Justice)
 * Slug: /clint
 */

import { buildHero } from '../utils/buildHero.js';

const hero_clint = buildHero("Clint", {
  "displayName": "Clint",
  "title": "West Justice",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.8%",
  "pickRate": "4.2%",
  "banRate": "3.5%",
  "summary": "Koboi penembak jitu dengan pasif Double Shot tembus lurus yang memberikan damage burst kritikal jarak jauh setiap kali menembakkan skill.",
  "pros": [
    "Jarak tembak pasif Double Shot sangat jauh dan menembus lurus",
    "Skill 2 jaring memberikan efek immobilize dan melompat mundur",
    "Konsisten sepanjang fase game"
  ],
  "cons": [
    "Mobilitas hanya mengandalkan skill 2 berjarak pendek",
    "Kalah adu attack speed murni vs trinity marksman di late game"
  ]
});

export default hero_clint;
