/**
 * Buildspedia - Hero Roster File: Freya (Valkyrie)
 * Slug: /freya
 */

import { buildHero } from '../utils/buildHero.js';

const hero_freya = buildHero("Freya", {
  "displayName": "Freya",
  "title": "Valkyrie",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "A",
  "diff": "Medium",
  "winRate": "52.1%",
  "pickRate": "2.2%",
  "banRate": "4.0%",
  "summary": "Dewi perang Valkyrie Descent dengan tebasan kapak suci berkecepatan tinggi yang tak henti-hentinya menghasilkan shield dan stun.",
  "pros": [
    "Shield tebal tiada henti dari spam skill 2 Spirit Combo",
    "Serangan tebasan Valkyrie memiliki splash damage dan jangkauan luas",
    "Sangat kuat dalam duel 1v1"
  ],
  "cons": [
    "Sangat rentan terhadap kiting dan efek slow/disengage lawan",
    "Jika skill 2 terputus tanpa target, serangannya melambat drastis"
  ]
});

export default hero_freya;
