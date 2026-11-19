/**
 * Buildspedia - Hero Roster File: Dyrroth (Prince of the Abyss)
 * Slug: /dyrroth
 */

import { buildHero } from '../utils/buildHero.js';

const hero_dyrroth = buildHero("Dyrroth", {
  "displayName": "Dyrroth",
  "title": "Prince of the Abyss",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "Low",
  "winRate": "52.7%",
  "pickRate": "4.9%",
  "banRate": "15.3%",
  "summary": "Pangeran jurang pemecah zirah musuh hingga 75% dengan tebasan Abyssal Strike penghancur tank terkeras di early hingga mid game.",
  "pros": [
    "Mengurangi Physical Defense musuh hingga 75% dengan skill 2",
    "Early game lane bully paling ditakuti di Exp Lane",
    "Regen HP deras dari pasif Wrath of the Abyss"
  ],
  "cons": [
    "Ultimate memiliki jeda delay animasi yang bisa dihindari dengan flicker/dash",
    "Efektivitas menurun di teamfight late game 5v5"
  ]
});

export default hero_dyrroth;
