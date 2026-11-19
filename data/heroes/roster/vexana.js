/**
 * Buildspedia - Hero Roster File: Vexana (Sharna Necromancer)
 * Slug: /vexana
 */

import { buildHero } from '../utils/buildHero.js';

const hero_vexana = buildHero("Vexana", {
  "displayName": "Vexana",
  "title": "Sharna Necromancer",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "Low",
  "winRate": "53.4%",
  "pickRate": "6.1%",
  "banRate": "21.0%",
  "summary": "Ratu necromancer pemanggil Undead Knight raksasa yang membanting musuh dengan airborne stun dan ledakan kutukan berantai Nether Curse.",
  "pros": [
    "Undead Knight raksasa menahan tembakan musuh dan mengincar carry lawan otomatis",
    "Clear wave minion kilat berkat ledakan Nether Curse",
    "Terrify CC area"
  ],
  "cons": [
    "Animasi skill memerlukan prediksi arah gerak lawan",
    "Mobilitas standar tanpa escape dash"
  ]
});

export default hero_vexana;
