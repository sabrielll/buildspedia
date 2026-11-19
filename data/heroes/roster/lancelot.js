/**
 * Buildspedia - Hero Roster File: Lancelot (Blade of Roses)
 * Slug: /lancelot
 */

import { buildHero } from '../utils/buildHero.js';

const hero_lancelot = buildHero("Lancelot", {
  "displayName": "Lancelot",
  "title": "Blade of Roses",
  "role": "Assassin",
  "sec": null,
  "lane": "Jungler",
  "tier": "S",
  "diff": "High",
  "winRate": "52.6%",
  "pickRate": "5.1%",
  "banRate": "14.2%",
  "summary": "Ksatria anggar bermahkota mawar dengan tusukan Puncture tanpa batas dan tebasan segitiga Thorned Rose pembawa kekebalan tak tersentuh.",
  "pros": [
    "Puncture tanpa cooldown selama mengenai target baru dengan mark",
    "Thorned Rose kebal terhadap semua serangan selama animasi tebasan",
    "Burst damage fisik masif"
  ],
  "cons": [
    "Jika Puncture meleset mengenai target tanpa mark, mobilitasnya langsung mati",
    "Tingkat mikro mekanik tinggi"
  ]
});

export default hero_lancelot;
