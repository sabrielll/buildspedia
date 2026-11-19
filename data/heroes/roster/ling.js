/**
 * Buildspedia - Hero Roster File: Ling (Cyan Finch)
 * Slug: /ling
 */

import { buildHero } from '../utils/buildHero.js';

const hero_ling = buildHero("Ling", {
  "displayName": "Ling",
  "title": "Cyan Finch",
  "role": "Assassin",
  "sec": null,
  "lane": "Jungler",
  "tier": "S",
  "diff": "Very High",
  "winRate": "53.5%",
  "pickRate": "3.8%",
  "banRate": "25.6%",
  "summary": "Pendekar pedang finch yang berjalan di atas dinding map Land of Dawn dan melompat membelah langit dengan pedang Tempest of Blades.",
  "pros": [
    "Mampu melompat dan berjalan di atas semua dinding map",
    "Ultimate Tempest of Blades memberi kekebalan penuh dan reset pedang instan",
    "Split push tercepat"
  ],
  "cons": [
    "Sangat boros energi lightness; membutuhkan Purple Buff mutlak",
    "Tingkat kesulitan mikro dan kecepatan jari tinggi"
  ]
});

export default hero_ling;
