/**
 * Buildspedia - Hero Roster File: Kimmy (Jetpack Rebel)
 * Slug: /kimmy
 */

import { buildHero } from '../utils/buildHero.js';

const hero_kimmy = buildHero("Kimmy", {
  "displayName": "Kimmy",
  "title": "Jetpack Rebel",
  "role": "Marksman",
  "sec": "Mage",
  "lane": "Gold Lane",
  "tier": "B",
  "diff": "High",
  "winRate": "49.9%",
  "pickRate": "1.2%",
  "banRate": "1.0%",
  "summary": "Gadis jetpack penembak kimiawi yang menembakkan peluru sembari bergerak bebas dengan kontrol dual-joystick unik.",
  "pros": [
    "Dapat menembak terus-menerus ke segala arah sambil terbang",
    "Hybrid magic dan physical damage",
    "Rudal jarak jauh Maximum Charge"
  ],
  "cons": [
    "Kontrol bidikan ganda membutuhkan kebiasaan tangan",
    "Sangat di-counter oleh Radiant Armor dan Blade Armor"
  ]
});

export default hero_kimmy;
