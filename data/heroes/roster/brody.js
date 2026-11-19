/**
 * Buildspedia - Hero Roster File: Brody (Lone Star)
 * Slug: /brody
 */

import { buildHero } from '../utils/buildHero.js';

const hero_brody = buildHero("Brody", {
  "displayName": "Brody",
  "title": "Lone Star",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.8%",
  "pickRate": "4.6%",
  "banRate": "12.3%",
  "summary": "Marksman unik yang mampu menembak sambil bergerak dengan pukulan Abyss Corrosion berdamage fisik raksasa dan stun instan.",
  "pros": [
    "Bisa menembak sambil berjalan (kiting sempurna)",
    "Burst damage fisik early game tertinggi di antara semua marksman",
    "Ultimate eksekusi auto-lock jangkauan jauh"
  ],
  "cons": [
    "Attack speed statis dan memerlukan jeda timing animasi serang",
    "Kurang efektif melawan hero tebal jika tidak unggul gold"
  ]
});

export default hero_brody;
