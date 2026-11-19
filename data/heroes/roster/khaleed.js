/**
 * Buildspedia - Hero Roster File: Khaleed (Desert Scimitar)
 * Slug: /khaleed
 */

import { buildHero } from '../utils/buildHero.js';

const hero_khaleed = buildHero("Khaleed", {
  "displayName": "Khaleed",
  "title": "Desert Scimitar",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "Low",
  "winRate": "52.4%",
  "pickRate": "2.8%",
  "banRate": "6.2%",
  "summary": "Ksatria badai gurun dengan tebasan pedang pasir Desert Tornado berdamage awal game raksasa dan meditasi pasir penyembuh darah instan.",
  "pros": [
    "Damage putaran pedang skill 1 di early game sangat mematikan",
    "Meditasi pasir memulihkan HP dan memberi reduksi damage 50%",
    "Ultimate pasir melompat jauh dengan stun area"
  ],
  "cons": [
    "Meditasi pasir dapat dibatalkan dengan mudah oleh efek stun musuh",
    "Damage menurun di late game"
  ]
});

export default hero_khaleed;
