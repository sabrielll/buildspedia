/**
 * Buildspedia - Hero Roster File: Hanzo (Akakage Demon)
 * Slug: /hanzo
 */

import { buildHero } from '../utils/buildHero.js';

const hero_hanzo = buildHero("Hanzo", {
  "displayName": "Hanzo",
  "title": "Akakage Demon",
  "role": "Assassin",
  "sec": null,
  "lane": "Jungler",
  "tier": "B",
  "diff": "Medium",
  "winRate": "49.7%",
  "pickRate": "1.2%",
  "banRate": "1.5%",
  "summary": "Ninja iblis pemakan creep jungle secara instan yang melepaskan bayangan iblis Kinjutsu Pinnacle Ninja untuk menyerang musuh dari jarak jauh.",
  "pros": [
    "Melahap monster jungle musuh secara instan dengan skill 1",
    "Menyerang dari jarak super aman menggunakan tubuh iblis",
    "DPS fisik sangat deras"
  ],
  "cons": [
    "Tubuh asli yang ditinggalkan di semak sangat rentan dibunuh oleh assassin lawan",
    "Sangat boros energi Demon Blood"
  ]
});

export default hero_hanzo;
