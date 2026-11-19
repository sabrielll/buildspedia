/**
 * Buildspedia - Hero Roster File: Gord (Professor of the Mystic)
 * Slug: /gord
 */

import { buildHero } from '../utils/buildHero.js';

const hero_gord = buildHero("Gord", {
  "displayName": "Gord",
  "title": "Professor of the Mystic",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "B",
  "diff": "Low",
  "winRate": "50.3%",
  "pickRate": "1.8%",
  "banRate": "1.1%",
  "summary": "Profesor sihir berselancar kosmik dengan sinar laser Mystic Gush yang membakar musuh dengan rentetan True Damage tanpa henti.",
  "pros": [
    "True Damage pasif melumerkan tank tebal dari kejauhan",
    "Clear wave minion sangat cepat dengan bola bouncher",
    "Laser berjangkauan panjang"
  ],
  "cons": [
    "Berdiri diam tak bisa bergerak saat menembakkan laser Ultimate",
    "Sangat mudah disergap oleh assassin lincah"
  ]
});

export default hero_gord;
