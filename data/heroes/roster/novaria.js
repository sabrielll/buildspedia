/**
 * Buildspedia - Hero Roster File: Novaria (Star Rebel)
 * Slug: /novaria
 */

import { buildHero } from '../utils/buildHero.js';

const hero_novaria = buildHero("Novaria", {
  "displayName": "Novaria",
  "title": "Star Rebel",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "53.3%",
  "pickRate": "4.2%",
  "banRate": "19.8%",
  "summary": "Pemberontak bintang penembak proyektil Astral Recall terjauh yang membuka seluruh visi semak musuh dan menembus dinding map dengan bebas.",
  "pros": [
    "Menembus dinding map dan mendapat movement speed masif dengan skill 2",
    "Astral Recall menembak musuh dari 2 layar jarak jauh",
    "Ultimate Astral Echo membuka semak dan memperbesar hitbox musuh"
  ],
  "cons": [
    "Membutuhkan akurasi bidikan sniper tinggi",
    "Kurang memiliki burst damage jarak dekat jika disergap"
  ]
});

export default hero_novaria;
