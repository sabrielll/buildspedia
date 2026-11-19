/**
 * Buildspedia - Hero Roster File: Aurora (Frost Queen)
 * Slug: /aurora
 */

import { buildHero } from '../utils/buildHero.js';

const hero_aurora = buildHero("Aurora", {
  "displayName": "Aurora",
  "title": "Frost Queen",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "Low",
  "winRate": "53.1%",
  "pickRate": "4.2%",
  "banRate": "15.6%",
  "summary": "Ratu es penguasa Crowd Control beku mutlak dengan pasif Pride of Ice yang membekukan dirinya sendiri saat sekarat layaknya Winter Truncheon.",
  "pros": [
    "Efek Freeze area membekukan musuh dan turret",
    "Pasif hidup kembali dengan membekukan diri saat menerima lethal damage",
    "Burst damage es masif"
  ],
  "cons": [
    "Mobilitas rendah tanpa skill dash bawaan",
    "Sangat bergantung pada cooldown skill"
  ]
});

export default hero_aurora;
