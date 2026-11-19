/**
 * Buildspedia - Hero Roster File: Hylos (Grand Warden)
 * Slug: /hylos
 */

import { buildHero } from '../utils/buildHero.js';

const hero_hylos = buildHero("Hylos", {
  "displayName": "Hylos",
  "title": "Grand Warden",
  "role": "Tank",
  "sec": null,
  "lane": "Roamer",
  "tier": "S",
  "diff": "Low",
  "winRate": "53.5%",
  "pickRate": "4.8%",
  "banRate": "26.8%",
  "summary": "Centaur pelindung dengan HP tertinggi dalam game yang menggunakan darahnya sendiri saat mana habis dan membuka karpet Glorious Pathway super cepat.",
  "pros": [
    "Pool darah HP terbesar di antara semua hero MLBB",
    "Glorious Pathway memberi kecepatan gerak masif bagi tim dan memperlambat musuh",
    "Stun point-and-click"
  ],
  "cons": [
    "Target paling empuk bagi pengguna Demon Hunter Sword dan hero true damage % HP",
    "Mudah terkena kiting di awal"
  ]
});

export default hero_hylos;
