/**
 * Buildspedia - Hero Roster File: Chang'e (Moon Palace Immortal)
 * Slug: /chang-e
 */

import { buildHero } from '../utils/buildHero.js';

const hero_chang_e = buildHero("Chang'e", {
  "displayName": "Chang'e",
  "title": "Moon Palace Immortal",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.5%",
  "pickRate": "3.7%",
  "banRate": "4.1%",
  "summary": "Gadis kelinci bulan dengan rentetan ratusan Meteor Shower jarak jauh pembersih minion kilat dan penghancur barisan depan musuh.",
  "pros": [
    "Meteor Shower menghujani musuh dari jarak sangat jauh dengan DPS tinggi",
    "Pembersihan wave minion paling cepat",
    "Mencuri buff musuh mudah"
  ],
  "cons": [
    "Sangat di-counter oleh Radiant Armor dan tameng peluru Lolita",
    "Shield skill 2 jika pecah menghilangkan buff movement speed-nya"
  ]
});

export default hero_chang_e;
