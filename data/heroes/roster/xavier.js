/**
 * Buildspedia - Hero Roster File: Xavier (Defier of Light)
 * Slug: /xavier
 */

import { buildHero } from '../utils/buildHero.js';

const hero_xavier = buildHero("Xavier", {
  "displayName": "Xavier",
  "title": "Defier of Light",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "53.1%",
  "pickRate": "4.5%",
  "banRate": "15.6%",
  "summary": "Pemberontak ordo cahaya dengan laser global Dawning Light menembus seluruh map dan kombinasi kurungan cahaya Mystic Field immobilize.",
  "pros": [
    "Laser Ultimate Dawning Light berjangkauan global dari ujung map ke ujung map",
    "Tahap Transcendence memperluas skill dan memotong cooldown",
    "Immobilize kurungan area"
  ],
  "cons": [
    "Mobilitas rendah tanpa skill kabur",
    "Sangat mudah disergap jika kurungan cahaya meleset"
  ]
});

export default hero_xavier;
