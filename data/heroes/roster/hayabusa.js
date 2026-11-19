/**
 * Buildspedia - Hero Roster File: Hayabusa (Crimson Shadow)
 * Slug: /hayabusa
 */

import { buildHero } from '../utils/buildHero.js';

const hero_hayabusa = buildHero("Hayabusa", {
  "displayName": "Hayabusa",
  "title": "Crimson Shadow",
  "role": "Assassin",
  "sec": null,
  "lane": "Jungler",
  "tier": "S",
  "diff": "High",
  "winRate": "52.9%",
  "pickRate": "3.9%",
  "banRate": "18.7%",
  "summary": "Ninja bayangan bayangan Quad Shadow yang menebas target tunggal dengan Ougi: Shadow Kill tanpa bisa disentuh oleh musuh sama sekali.",
  "pros": [
    "Kebal penuh terhadap semua serangan saat menebas dengan Ultimate",
    "Mobilitas 4 bayangan Quad Shadow sangat lincah untuk outplay dan kabur",
    "Split push kuat"
  ],
  "cons": [
    "Damage Ultimate terbagi jika ada banyak minion atau hero musuh lain di dekatnya",
    "Sangat boros energi jika kombo bayangan meleset"
  ]
});

export default hero_hayabusa;
