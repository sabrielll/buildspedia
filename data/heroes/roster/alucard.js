/**
 * Buildspedia - Hero Roster File: Alucard (Demon Hunter)
 * Slug: /alucard
 */

import { buildHero } from '../utils/buildHero.js';

const hero_alucard = buildHero("Alucard", {
  "displayName": "Alucard",
  "title": "Demon Hunter",
  "role": "Fighter",
  "sec": "Assassin",
  "lane": "Jungler",
  "tier": "B",
  "diff": "Low",
  "winRate": "49.8%",
  "pickRate": "2.5%",
  "banRate": "1.0%",
  "summary": "Pendekar pedang dengan lifesteal fisik tertinggi yang melompat lincah dari satu target ke target berikutnya.",
  "pros": [
    "Lifesteal fisik sangat deras saat Ultimate aktif",
    "Cooldown skill sangat singkat dan tidak menggunakan mana",
    "Snowball cepat"
  ],
  "cons": [
    "Sangat rentan terhadap Hard Crowd Control",
    "Mudah dimatikan jika musuh membuat item Dominance Ice"
  ]
});

export default hero_alucard;
