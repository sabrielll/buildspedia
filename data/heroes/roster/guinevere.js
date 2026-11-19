/**
 * Buildspedia - Hero Roster File: Guinevere (Ms. Violet)
 * Slug: /guinevere
 */

import { buildHero } from '../utils/buildHero.js';

const hero_guinevere = buildHero("Guinevere", {
  "displayName": "Guinevere",
  "title": "Ms. Violet",
  "role": "Fighter",
  "sec": "Mage",
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.6%",
  "pickRate": "4.5%",
  "banRate": "13.9%",
  "poke": [
    "2",
    "AA",
    "1",
    "2"
  ],
  "full": [
    "2",
    "3",
    "1",
    "AA",
    "2"
  ],
  "skillNames": [
    "Super Magic",
    "Energy Wave",
    "Spatial Migration",
    "Violet Requiem"
  ],
  "summary": "Nona bangsawan violet yang melompat menerbangkan musuh ke udara dengan Spatial Migration dan menari di udara dengan Violet Requiem.",
  "pros": [
    "Efek Airborne beruntun yang tidak bisa dibatalkan oleh Purify biasa saat di udara",
    "Mobilitas lompat jauh menembus dinding",
    "Burst magic damage sangat tinggi"
  ],
  "cons": [
    "Jika lompatan Spatial Migration meleset, Guinevere rentan diserang balik",
    "Mudah dibatalkan oleh skill knockback sebelum sempat melompat"
  ]
});

export default hero_guinevere;
