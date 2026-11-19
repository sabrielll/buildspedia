/**
 * Buildspedia - Hero Roster File: Zhask (Planes Dominator)
 * Slug: /zhask
 */

import { buildHero } from '../utils/buildHero.js';

const hero_zhask = buildHero("Zhask", {
  "displayName": "Zhask",
  "title": "Planes Dominator",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "53.1%",
  "pickRate": "4.6%",
  "banRate": "19.4%",
  "summary": "Penguasa serangga alien pemanggil menara Nightmaric Spawn raksasa yang menyatu ke dalam tubuh serangga dengan kekebalan dan tembakan sinar mematikan.",
  "pros": [
    "Menyatu ke dalam tubuh alien Nightmaric Spawn raksasa kebal serangan fisik instan",
    "Laser serangga memiliki DPS dan slow sangat tinggi",
    "Sangat kuat dalam adu tembak statis"
  ],
  "cons": [
    "Kurang lincah saat alien tidak dipanggil",
    "Mudah dihindari jika musuh mundur keluar jangkauan tembak alien"
  ]
});

export default hero_zhask;
