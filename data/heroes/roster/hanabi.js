/**
 * Buildspedia - Hero Roster File: Hanabi (Scarlet Flower)
 * Slug: /hanabi
 */

import { buildHero } from '../utils/buildHero.js';

const hero_hanabi = buildHero("Hanabi", {
  "displayName": "Hanabi",
  "title": "Scarlet Flower",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "B",
  "diff": "Low",
  "winRate": "50.8%",
  "pickRate": "5.2%",
  "banRate": "4.1%",
  "summary": "Ninja wanita dengan kelopak bunga Petal Barrage yang memantul ke seluruh musuh dan shield pasif yang memberinya kekebalan terhadap Crowd Control.",
  "pros": [
    "Kebal terhadap seluruh Crowd Control selama memiliki shield pasif",
    "Pantulan serangan dasar mengenai seluruh musuh dan turret",
    "Teamfight 5v5 sangat nyaman"
  ],
  "cons": [
    "Tidak memiliki skill blink/dash alami",
    "Early game damage sangat rendah sebelum memiliki item core"
  ]
});

export default hero_hanabi;
