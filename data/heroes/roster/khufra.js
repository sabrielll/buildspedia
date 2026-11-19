/**
 * Buildspedia - Hero Roster File: Khufra (Desert Tyrant)
 * Slug: /khufra
 */

import { buildHero } from '../utils/buildHero.js';

const hero_khufra = buildHero("Khufra", {
  "displayName": "Khufra",
  "title": "Desert Tyrant",
  "role": "Tank",
  "sec": "Support",
  "lane": "Roamer",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.8%",
  "pickRate": "4.1%",
  "banRate": "16.5%",
  "summary": "Mumi tiran padang pasir yang memantul menjadi bola Bouncing Ball untuk menggagalkan semua skill dash musuh dan membanting mereka ke dinding.",
  "pros": [
    "Bouncing Ball menghentikan seluruh hero ber-skill blink/dash (Fanny, Lancelot, Harith, Benedetta)",
    "Lompatan Tyrant's Revenge berjarak sangat jauh dari semak",
    "Ultimate bantingan dinding"
  ],
  "cons": [
    "Bouncing Ball tidak dapat menghentikan hero bertipe flicker teleport instan",
    "Arah lompatan butuh kalkulasi timing presisi"
  ]
});

export default hero_khufra;
