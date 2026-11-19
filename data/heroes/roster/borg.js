/**
 * Buildspedia - Hero Roster File: X.Borg (Firaga Armor)
 * Slug: /borg
 */

import { buildHero } from '../utils/buildHero.js';

const hero_borg = buildHero("Borg", {
  "displayName": "X.Borg",
  "title": "Firaga Armor",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "Low",
  "winRate": "52.4%",
  "pickRate": "3.8%",
  "banRate": "8.7%",
  "summary": "Prajurit cyborg bersenjata semburan api True Damage yang memiliki 2 bar HP berkat zirah Firaga Armor penyelamat nyawanya.",
  "pros": [
    "Semburan api Fire Missiles membakar musuh dengan True Damage 100%",
    "Kebal burst saat armor pecah",
    "Ultimate ledakan area mematikan Last Insanity"
  ],
  "cons": [
    "Sangat lemah dan rapuh saat zirah Firaga Armor sedang terlepas",
    "Butuh mengambil baterai armor di tanah untuk regenerasi"
  ]
});

export default hero_borg;
