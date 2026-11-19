/**
 * Buildspedia - Hero Roster File: Diggie (Timekeeper)
 * Slug: /diggie
 */

import { buildHero } from '../utils/buildHero.js';

const hero_diggie = buildHero("Diggie", {
  "displayName": "Diggie",
  "title": "Timekeeper",
  "role": "Support",
  "sec": null,
  "lane": "Roamer",
  "tier": "S+",
  "diff": "Low",
  "winRate": "54.5%",
  "pickRate": "3.8%",
  "banRate": "31.2%",
  "summary": "Burung hantu manipulasi waktu penyelamat tim yang membatalkan seluruh efek Crowd Control musuh dengan Ultimate Time Journey.",
  "pros": [
    "Time Journey memberikan imunitas CC mutlak dan shield raksasa ke seluruh rekan tim di sekitar",
    "Bom burung Auto Alarm Bomb mengejutkan di semak",
    "Tetap bergerak memberi visi saat mati"
  ],
  "cons": [
    "Sangat rapuh jika terisolasi tanpa kawan",
    "Damage bom menurun di fase akhir game"
  ]
});

export default hero_diggie;
