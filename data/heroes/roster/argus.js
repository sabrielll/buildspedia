/**
 * Buildspedia - Hero Roster File: Argus (Nightstalker)
 * Slug: /argus
 */

import { buildHero } from '../utils/buildHero.js';

const hero_argus = buildHero("Argus", {
  "displayName": "Argus",
  "title": "Nightstalker",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "B",
  "diff": "Low",
  "winRate": "50.4%",
  "pickRate": "1.5%",
  "banRate": "1.2%",
  "summary": "Ksatria abadi dengan Eternal Evil yang kebal terhadap kematian selama 4 detik dan menyerap semua damage musuh menjadi HP miliknya.",
  "pros": [
    "Kekebalan 100% dari kematian saat Ultimate aktif",
    "Attack speed dan pasif tebasan ganda sangat cepat",
    "Push turret sangat cepat"
  ],
  "cons": [
    "Mudah di-counter jika musuh menahan skill dan kabur saat Ultimate aktif",
    "Kurang efektif dalam teamfight besar jika di-crowd control"
  ]
});

export default hero_argus;
