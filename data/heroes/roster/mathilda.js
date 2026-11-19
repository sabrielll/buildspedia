/**
 * Buildspedia - Hero Roster File: Mathilda (Swift Plume)
 * Slug: /mathilda
 */

import { buildHero } from '../utils/buildHero.js';

const hero_mathilda = buildHero("Mathilda", {
  "displayName": "Mathilda",
  "title": "Swift Plume",
  "role": "Support",
  "sec": "Assassin",
  "lane": "Roamer",
  "tier": "S+",
  "diff": "Medium",
  "winRate": "54.2%",
  "pickRate": "4.1%",
  "banRate": "34.8%",
  "summary": "Pemandu angin suku yang memberi skill terbang gratis bagi seluruh kawan dengan Guiding Wind dan terbang mengitari target dengan Circling Eagle.",
  "pros": [
    "Guiding Wind memberi dash gratis dan shield tebal bagi rekan tim",
    "Circling Eagle mengunci musuh dari kejauhan dengan efek airborne stun",
    "Damage burst sihir awal game tinggi"
  ],
  "cons": [
    "Darah relatif empuk jika salah perhitungan terbang ke kerumunan musuh",
    "Butuh rekan yang paham cara menekan tombol terbang"
  ]
});

export default hero_mathilda;
