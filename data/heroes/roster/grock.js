/**
 * Buildspedia - Hero Roster File: Grock (Fortress Titan)
 * Slug: /grock
 */

import { buildHero } from '../utils/buildHero.js';

const hero_grock = buildHero("Grock", {
  "displayName": "Grock",
  "title": "Fortress Titan",
  "role": "Tank",
  "sec": "Fighter",
  "lane": "Roamer",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.4%",
  "pickRate": "1.9%",
  "banRate": "2.8%",
  "summary": "Raksasa benteng batu yang kebal terhadap semua efek Crowd Control saat berada di dekat dinding dan menabrak musuh dengan Wild Charge dahsyat.",
  "pros": [
    "Kebal terhadap seluruh CC saat mengayunkan senjata di samping dinding",
    "Physical Attack tinggi yang dikonversi dari Physical Defense",
    "Mampu membuat dinding pemotong jalan"
  ],
  "cons": [
    "Magic Defense bawaan rendah jika tidak membeli item pertahanan sihir",
    "Salah memasang dinding dapat merugikan rekan setim"
  ]
});

export default hero_grock;
