/**
 * Buildspedia - Hero Roster File: Zilong (Spear of Dragon)
 * Slug: /zilong
 */

import { buildHero } from '../utils/buildHero.js';

const hero_zilong = buildHero("Zilong", {
  "displayName": "Zilong",
  "title": "Spear of Dragon",
  "role": "Fighter",
  "sec": "Assassin",
  "lane": "Exp Lane",
  "tier": "B",
  "diff": "Low",
  "winRate": "50.2%",
  "pickRate": "3.8%",
  "banRate": "1.4%",
  "summary": "Ksatria tombak naga berlari kencang Supreme Warrior yang mencungkil musuh ke belakang dan menghancurkan turret tanpa henti dalam split push.",
  "pros": [
    "Supreme Warrior kebal terhadap efek slow dan meningkatkan kecepatan lari serta attack speed masif",
    "Mencungkil musuh ke dalam turret dengan skill 1",
    "Penghancur turret tercepat"
  ],
  "cons": [
    "Sangat rapuh di awal game",
    "Sangat mudah dimatikan oleh hero berkemampuan hard stun"
  ]
});

export default hero_zilong;
