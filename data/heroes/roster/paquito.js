/**
 * Buildspedia - Hero Roster File: Paquito (The Heavenly Fist)
 * Slug: /paquito
 */

import { buildHero } from '../utils/buildHero.js';

const hero_paquito = buildHero("Paquito", {
  "displayName": "Paquito",
  "title": "The Heavenly Fist",
  "role": "Fighter",
  "sec": "Assassin",
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "High",
  "winRate": "52.8%",
  "pickRate": "4.7%",
  "banRate": "14.5%",
  "summary": "Petinju surga dengan kombo rantai pukulan Champ Stance tanpa cooldown yang meremukkan lawan dengan kombinasi jab dan uppercut cepat.",
  "pros": [
    "Mekanik Champ Stance me-reset cooldown skill untuk kombo tinju ganda",
    "Damage burst fisik dan shield tebal tiada henti",
    "Sangat lincah bermanuver"
  ],
  "cons": [
    "Membutuhkan perhitungan stack Champ Stance yang matang",
    "Rentan terkena burst jika kombo tinju meleset"
  ]
});

export default hero_paquito;
