/**
 * Buildspedia - Hero Roster File: Yve (Astrowarden)
 * Slug: /yve
 */

import { buildHero } from '../utils/buildHero.js';

const hero_yve = buildHero("Yve", {
  "displayName": "Yve",
  "title": "Astrowarden",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "High",
  "winRate": "52.9%",
  "pickRate": "2.9%",
  "banRate": "11.0%",
  "summary": "Penjaga galaksi papan catur Real World Manipulation yang memperlambat musuh hingga 90% dan mendikte jalannya seluruh peperangan.",
  "pros": [
    "Kubah catur Real World Manipulation memberikan slow area 90% dan zoning terbesar",
    "Mendapatkan shield tebal dan kebal airborne saat Ultimate aktif",
    "Pembersih pertempuran tim terbaik"
  ],
  "cons": [
    "Ultimate dapat dibatalkan oleh efek CC Suppression",
    "Berdiri diam di tempat saat menekan papan catur"
  ]
});

export default hero_yve;
