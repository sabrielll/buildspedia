/**
 * Buildspedia - Hero Roster File: Wanwan (Agile Tiger)
 * Slug: /wanwan
 */

import { buildHero } from '../utils/buildHero.js';

const hero_wanwan = buildHero("Wanwan", {
  "displayName": "Wanwan",
  "title": "Agile Tiger",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "S",
  "diff": "Very High",
  "winRate": "53.8%",
  "pickRate": "3.9%",
  "banRate": "26.4%",
  "summary": "Gadis lincah klan harimau yang melompat pada setiap tembakan panah dan membantai seluruh musuh di udara dengan Crossbow of Tang tak tersentuh.",
  "pros": [
    "Kebal 100% terhadap semua serangan saat terbang menembakkan Crossbow of Tang",
    "Purify alami bawaan dari skill 2 Needles in Flowers",
    "Melompat lincah di setiap hit"
  ],
  "cons": [
    "Harus memecahkan 3 titik kelemahan (weakness mark) sebelum Ultimate bisa ditekan",
    "Rentan terhadap item defense Winter Truncheon dan Wind of Nature"
  ]
});

export default hero_wanwan;
