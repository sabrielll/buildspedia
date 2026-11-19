/**
 * Buildspedia - Hero Roster File: Yi Sun-shin (Paenlong Legend)
 * Slug: /yss
 */

import { buildHero } from '../utils/buildHero.js';

const hero_yss = buildHero("Yss", {
  "displayName": "Yi Sun-shin",
  "title": "Paenlong Legend",
  "role": "Assassin",
  "sec": "Marksman",
  "lane": "Jungler",
  "tier": "A",
  "diff": "High",
  "winRate": "51.6%",
  "pickRate": "1.8%",
  "banRate": "2.5%",
  "summary": "Laksamana armada kura-kura pemanah dan pedang yang memanggil hujan meteor meriam Mountain Shocker global untuk membuka posisi musuh.",
  "pros": [
    "Mountain Shocker menghujani seluruh musuh di map dan membuka visi keberadaan mereka",
    "Pergantian senjata pedang dan panah menghasilkan 100% Critical Damage",
    "Kapal kura-kura super cepat"
  ],
  "cons": [
    "Membutuhkan mikro pergantian jarak serang pedang dan panah secara ritmis",
    "Sangat bergantung pada momentum snowball awal"
  ]
});

export default hero_yss;
