/**
 * Buildspedia - Hero Roster File: Thamuz (Lord Lava)
 * Slug: /thamuz
 */

import { buildHero } from '../utils/buildHero.js';

const hero_thamuz = buildHero("Thamuz", {
  "displayName": "Thamuz",
  "title": "Lord Lava",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.9%",
  "pickRate": "2.7%",
  "banRate": "3.8%",
  "summary": "Raja lava neraka dengan lemparan sabit berputar Grand Lord Lava yang menghasilkan semburan True Damage dan regenerasi darah tiada henti.",
  "pros": [
    "Semburan True Damage terus menerus saat sabit kembali",
    "Regen darah sangat deras saat Ultimate Cauterant Inferno aktif",
    "Duelist early game tak terkalahkan"
  ],
  "cons": [
    "Kurang memiliki efek Hard CC untuk menghentikan musuh kabur",
    "Mudah di-counter oleh item anti-heal"
  ]
});

export default hero_thamuz;
