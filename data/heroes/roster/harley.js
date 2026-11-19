/**
 * Buildspedia - Hero Roster File: Harley (Mage Genius)
 * Slug: /harley
 */

import { buildHero } from '../utils/buildHero.js';

const hero_harley = buildHero("Harley", {
  "displayName": "Harley",
  "title": "Mage Genius",
  "role": "Mage",
  "sec": "Assassin",
  "lane": "Jungler",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.5%",
  "pickRate": "2.8%",
  "banRate": "5.6%",
  "summary": "Pesulap cilik dengan lingkaran cincin maut Deadly Magic yang meledakkan target berdasarkan akumulasi tembakan kartu poker yang diterimanya.",
  "pros": [
    "Kombo kartu dan Deadly Magic meledakkan target tunggal seketika",
    "Mobilitas topi Space Escape sangat lincah untuk mengecoh lawan",
    "Farming jungle cepat"
  ],
  "cons": [
    "Sangat mudah ditangkal oleh item Athena's Shield dan Radiant Armor",
    "Hanya efektif menargetkan 1 musuh tunggal"
  ]
});

export default hero_harley;
