/**
 * Buildspedia - Hero Roster File: Luo Yi (Yin-Yang Geomancer)
 * Slug: /luo-yi
 */

import { buildHero } from '../utils/buildHero.js';

const hero_luo_yi = buildHero("Luo Yi", {
  "displayName": "Luo Yi",
  "title": "Yin-Yang Geomancer",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "High",
  "winRate": "53.0%",
  "pickRate": "3.1%",
  "banRate": "14.2%",
  "summary": "Geomancer Yin-Yang yang membenturkan hero-hero musuh satu sama lain dengan gaya magnetis dan mampu teleportasi 1 tim penuh dengan Diversion.",
  "pros": [
    "Reaksi Yin-Yang membenturkan musuh dan menghasilkan damage ledakan beruntun",
    "Ultimate Diversion memindahkan seluruh rekan tim ke belakang formasi musuh",
    "Early game damage sangat perih"
  ],
  "cons": [
    "Membutuhkan kombinasi warna tanda Yin (kuning) dan Yang (ungu) yang tepat",
    "Mudah diculik jika skill 1 meleset"
  ]
});

export default hero_luo_yi;
