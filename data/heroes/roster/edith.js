/**
 * Buildspedia - Hero Roster File: Edith (Forsaken Warden)
 * Slug: /edith
 */

import { buildHero } from '../utils/buildHero.js';

const hero_edith = buildHero("Edith", {
  "displayName": "Edith",
  "title": "Forsaken Warden",
  "role": "Tank",
  "sec": "Marksman",
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.9%",
  "pickRate": "3.5%",
  "banRate": "8.4%",
  "summary": "Penjaga mecha raksasa Phylax yang dapat melontarkan pilot Edith keluar menjadi marksman petir berdaya tembak Magic Attack dahsyat.",
  "pros": [
    "Bentuk robot memiliki CC berantai tebal (bantingan dan airborne)",
    "Mengubah seluruh Physical & Magic Defense menjadi Magic Power murni saat Ultimate",
    "Sustain lifesteal kilat"
  ],
  "cons": [
    "Sangat empuk saat keluar dari robot jika stack Wrath belum maksimal",
    "Jangkauan tembakan mode Edith cukup terbatas"
  ]
});

export default hero_edith;
