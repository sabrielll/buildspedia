/**
 * Buildspedia - Hero Roster File: Ixia (Arclight Outlaw)
 * Slug: /ixia
 */

import { buildHero } from '../utils/buildHero.js';

const hero_ixia = buildHero("Ixia", {
  "displayName": "Ixia",
  "title": "Arclight Outlaw",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.8%",
  "pickRate": "3.7%",
  "banRate": "8.9%",
  "summary": "Penembak busur energi dengan kubah radar Full Barrage yang menghujani seluruh musuh dalam jangkauan kipas raksasa dengan lifesteal deras.",
  "pros": [
    "Ultimate Full Barrage menyerang seluruh musuh dalam area kipas raksasa sekaligus",
    "Lifesteal alami sangat deras dari pasif Siphon Starlium",
    "Teamfight choke-point mematikan"
  ],
  "cons": [
    "Tidak bisa bergerak saat berada di dalam mode Full Barrage",
    "Target empuk bagi assassin yang melompat ke belakang kubahnya"
  ]
});

export default hero_ixia;
