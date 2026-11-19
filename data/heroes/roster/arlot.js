/**
 * Buildspedia - Hero Roster File: Arlott (Lone Lancer)
 * Slug: /arlot
 */

import { buildHero } from '../utils/buildHero.js';

const hero_arlot = buildHero("Arlot", {
  "displayName": "Arlott",
  "title": "Lone Lancer",
  "role": "Fighter",
  "sec": "Assassin",
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.7%",
  "pickRate": "3.4%",
  "banRate": "14.5%",
  "summary": "Petarung tombak lincah yang memanfaatkan pasif Demon Gaze untuk melakukan dash Vengeance tiada henti dan meraup lifesteal masif.",
  "pros": [
    "Dash tanpa henti ke target yang memiliki mark",
    "Crowd control area sapuan tombak Final Slash",
    "Damage burst dan sustain tinggi"
  ],
  "cons": [
    "Sangat bergantung pada akurasi deteksi pasif Demon Gaze",
    "Jika dash meleset tanpa mark, mobilitasnya langsung terkunci"
  ]
});

export default hero_arlot;
