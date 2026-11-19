/**
 * Buildspedia - Hero Roster File: Yin (Martial Genius)
 * Slug: /yin
 */

import { buildHero } from '../utils/buildHero.js';

const hero_yin = buildHero("Yin", {
  "displayName": "Yin",
  "title": "Martial Genius",
  "role": "Fighter",
  "sec": "Assassin",
  "lane": "Exp Lane",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.4%",
  "pickRate": "4.2%",
  "banRate": "16.8%",
  "summary": "Pendekar jenius yang menculik satu hero musuh ke dimensi ring duel My Turn! dan bertransformasi menjadi iblis Lieh berdaya hantam mematikan.",
  "pros": [
    "Menculik hero carry musuh ke dimensi ring 1v1 terpisah selama 8 detik",
    "Bentuk Lieh memiliki stun dan hantaman Frenzy Strike raksasa",
    "Mengisolasi carry dari pengawalan tank"
  ],
  "cons": [
    "Bisa di-counter di dalam ring dengan Wind of Nature, Winter Truncheon, atau lari berputar",
    "Rentan diserbu teman musuh setelah keluar ring"
  ]
});

export default hero_yin;
