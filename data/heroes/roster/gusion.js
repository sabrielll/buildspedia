/**
 * Buildspedia - Hero Roster File: Gusion (Holy Blade)
 * Slug: /gusion
 */

import { buildHero } from '../utils/buildHero.js';

const hero_gusion = buildHero("Gusion", {
  "displayName": "Gusion",
  "title": "Holy Blade",
  "role": "Assassin",
  "sec": "Mage",
  "lane": "Jungler",
  "tier": "A",
  "diff": "High",
  "winRate": "51.2%",
  "pickRate": "4.8%",
  "banRate": "6.4%",
  "summary": "Assassin belati cahaya dengan kecepatan tangan 10 belati Shadowblade Slaughter yang melenyapkan lawan dalam hitungan detik.",
  "pros": [
    "Burst damage magic instan tertinggi di early-mid game",
    "Reset cooldown skill instan berkat Incandescence",
    "Mobilitas teleportasi dagger sangat lincah"
  ],
  "cons": [
    "Membutuhkan kecepatan jari dan akurasi tinggi",
    "Sangat di-counter oleh item Radiant Armor dan Athena's Shield di late game"
  ]
});

export default hero_gusion;
