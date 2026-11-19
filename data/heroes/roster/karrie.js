/**
 * Buildspedia - Hero Roster File: Karrie (Lost Star)
 * Slug: /karrie
 */

import { buildHero } from '../utils/buildHero.js';

const hero_karrie = buildHero("Karrie", {
  "displayName": "Karrie",
  "title": "Lost Star",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "S+",
  "diff": "Medium",
  "winRate": "53.9%",
  "pickRate": "5.4%",
  "banRate": "29.8%",
  "summary": "Marksman penghancur tank terkuat dalam sejarah MLBB dengan lemparan roda Lightwheel Mark yang mencairkan musuh dengan 8-12% True Damage Max HP.",
  "pros": [
    "True Damage pasif menembus semua armor pertahanan tank dalam hitungan detik",
    "Mobilitas dash Phantom Step sangat singkat (kurang dari 2 detik)",
    "Bisa dibangun semi-tank"
  ],
  "cons": [
    "Jangkauan tembakan menengah, butuh positioning kiting yang baik",
    "Clear wave minion relatif lebih lambat di awal"
  ]
});

export default hero_karrie;
