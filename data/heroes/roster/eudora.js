/**
 * Buildspedia - Hero Roster File: Eudora (Lightning Sorceress)
 * Slug: /eudora
 */

import { buildHero } from '../utils/buildHero.js';

const hero_eudora = buildHero("Eudora", {
  "displayName": "Eudora",
  "title": "Lightning Sorceress",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "B",
  "diff": "Low",
  "winRate": "50.6%",
  "pickRate": "3.1%",
  "banRate": "2.5%",
  "summary": "Penyihir petir ratu semak dengan kombo petir 2-3-1 yang mengeliminasi hero empuk lawan dalam sepersekian detik.",
  "pros": [
    "Kombo point-and-click stun tidak bisa meleset",
    "Burst damage instan sangat mematikan dari semak-semak",
    "Sangat mudah dimainkan pemula"
  ],
  "cons": [
    "Mobilitas nol tanpa escape skill",
    "Sangat tidak berdaya setelah seluruh kombo cooldown"
  ]
});

export default hero_eudora;
