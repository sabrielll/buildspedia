/**
 * Buildspedia - Hero Roster File: Alice (Queen of Blood)
 * Slug: /alice
 */

import { buildHero } from '../utils/buildHero.js';

const hero_alice = buildHero("Alice", {
  "displayName": "Alice",
  "title": "Queen of Blood",
  "role": "Mage",
  "sec": "Tank",
  "lane": "Mid Lane",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.4%",
  "pickRate": "1.2%",
  "banRate": "4.5%",
  "summary": "Mage lifesteal tanky yang menyelam ke tengah formasi lawan dan menghisap darah semua musuh di sekitarnya tanpa henti.",
  "pros": [
    "Sustain darah sangat luar biasa dengan Ultimate aktif",
    "Mobilitas teleportasi instan melalui Flowing Blood",
    "Sangat tebal di late game"
  ],
  "cons": [
    "Sangat boros mana dan membutuhkan buff ungu atau item mana tinggi",
    "Rentan terhadap efek anti-heal Dominance Ice dan Sea Halberd"
  ]
});

export default hero_alice;
