/**
 * Buildspedia - Hero Roster File: Odette (Swan Princess)
 * Slug: /odette
 */

import { buildHero } from '../utils/buildHero.js';

const hero_odette = buildHero("Odette", {
  "displayName": "Odette",
  "title": "Swan Princess",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.8%",
  "pickRate": "3.4%",
  "banRate": "4.5%",
  "summary": "Putri angsa dengan nyanyian sihir Swan Song berkubah luas yang menghujani musuh dengan ratusan not balok mematikan dan shield tebal.",
  "pros": [
    "Swan Song memiliki radius area burst sihir terluas dalam game",
    "Mendapatkan shield tebal dan lompatan dash kecil saat mengaktifkan Ultimate",
    "Kombo maut bersama Johnson"
  ],
  "cons": [
    "Nyanyian Ultimate dapat dibatalkan seketika oleh efek crowd control airborne/freeze/stun",
    "Mobilitas dasar rendah"
  ]
});

export default hero_odette;
