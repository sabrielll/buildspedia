/**
 * Buildspedia - Hero Roster File: Atlas (Ocean Gladiator)
 * Slug: /atlas
 */

import { buildHero } from '../utils/buildHero.js';

const hero_atlas = buildHero("Atlas", {
  "displayName": "Atlas",
  "title": "Ocean Gladiator",
  "role": "Tank",
  "sec": "Support",
  "lane": "Roamer",
  "tier": "S",
  "diff": "Medium",
  "winRate": "51.9%",
  "pickRate": "2.8%",
  "banRate": "10.1%",
  "summary": "Tank inisiator gurita raksasa dengan Fatal Links yang menarik seluruh tim musuh dan membanting mereka menjadi satu titik kehancuran.",
  "pros": [
    "Kombo Fatal Links dapat membalikkan keadaan game dalam 1 momen",
    "Mobilitas Perfect Match melepaskan tubuh robot untuk inisiasi cepat",
    "Sangat tebal"
  ],
  "cons": [
    "Sangat di-counter mutlak oleh Ultimate Time Journey Diggie",
    "Channeling Ultimate bisa digagalkan jika terkena stun cepat"
  ]
});

export default hero_atlas;
