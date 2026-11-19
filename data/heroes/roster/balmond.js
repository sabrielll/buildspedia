/**
 * Buildspedia - Hero Roster File: Balmond (Bloody Beast)
 * Slug: /balmond
 */

import { buildHero } from '../utils/buildHero.js';

const hero_balmond = buildHero("Balmond", {
  "displayName": "Balmond",
  "title": "Bloody Beast",
  "role": "Fighter",
  "sec": null,
  "lane": "Jungler",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.3%",
  "pickRate": "2.7%",
  "banRate": "4.2%",
  "summary": "Berserker orc pemutar kapak Cyclone Sweep tiada henti dengan eksekusi Lethal Counter penghancur Turtle/Lord dan pencuri kill instan.",
  "pros": [
    "Eksekusi Ultimate menghitung True Damage berdasarkan persentase HP hilang musuh",
    "Sustain regen pasif setiap membunuh minion/hero",
    "Sangat mudah dimainkan"
  ],
  "cons": [
    "Putaran kapak dapat dibatalkan oleh efek stun/airborne musuh",
    "Kurang fleksibel melawan marksman kiting"
  ]
});

export default hero_balmond;
