/**
 * Buildspedia - Hero Roster File: Uranus (Aethereal Defender)
 * Slug: /uranus
 */

import { buildHero } from '../utils/buildHero.js';

const hero_uranus = buildHero("Uranus", {
  "displayName": "Uranus",
  "title": "Aethereal Defender",
  "role": "Tank",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.7%",
  "pickRate": "2.1%",
  "banRate": "2.9%",
  "summary": "Pengawal langit penimbun 20 stack Radiance yang meregenerasi darahnya sendiri hingga ribuan HP per detik tanpa perlu kembali ke base.",
  "pros": [
    "Regenerasi darah pasif tertinggi di MLBB; nyaris tidak pernah recall ke base",
    "Zoning lane dan menahan tembakan musuh dengan sangat kuat",
    "Movement speed tinggi"
  ],
  "cons": [
    "Sama sekali tidak memiliki skill Hard CC (hanya slow)",
    "Rentan terhadap anti-heal dan hero burst sihir"
  ]
});

export default hero_uranus;
