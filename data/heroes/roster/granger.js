/**
 * Buildspedia - Hero Roster File: Granger (Death Chanter)
 * Slug: /granger
 */

import { buildHero } from '../utils/buildHero.js';

const hero_granger = buildHero("Granger", {
  "displayName": "Granger",
  "title": "Death Chanter",
  "role": "Marksman",
  "sec": "Assassin",
  "lane": "Jungler",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.7%",
  "pickRate": "3.6%",
  "banRate": "4.8%",
  "summary": "Penembak biola kematian dengan peluru ke-6 berkekuatan Critical pasti dan tembakan bazoka jarak jauh Death Sonata.",
  "pros": [
    "Mobilitas dash lincah dengan cooldown singkat",
    "Peluru ke-6 selalu memberikan Critical Damage 100%",
    "Death Sonata membidik musuh yang kabur sekarat"
  ],
  "cons": [
    "Sangat mengandalkan akurasi bidikan Rhapsody",
    "Damage menurun jika lawan menumpuk Physical Defense tebal"
  ]
});

export default hero_granger;
