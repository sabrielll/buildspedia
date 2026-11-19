/**
 * Buildspedia - Hero Roster File: Helcurt (Shadowbringer)
 * Slug: /helcurt
 */

import { buildHero } from '../utils/buildHero.js';

const hero_helcurt = buildHero("Helcurt", {
  "displayName": "Helcurt",
  "title": "Shadowbringer",
  "role": "Assassin",
  "sec": null,
  "lane": "Jungler",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.7%",
  "pickRate": "3.1%",
  "banRate": "15.9%",
  "summary": "Monster pembunuh kegelapan yang membutakan pandangan seluruh map musuh dengan Dark Night Falls dan membungkam skill lawan secara instan.",
  "pros": [
    "Ultimate mematikan seluruh visi map musuh dan memberi movement speed gila",
    "Efek silence mematikan skill musuh sebelum mereka sempat melawan",
    "Burst sting masif"
  ],
  "cons": [
    "Tubuh sangat rapuh jika terkena CC balik",
    "Bergantung pada tumpukan stack Deadly Stinger"
  ]
});

export default hero_helcurt;
