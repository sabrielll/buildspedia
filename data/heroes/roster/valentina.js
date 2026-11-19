/**
 * Buildspedia - Hero Roster File: Valentina (Prophetess of Primal)
 * Slug: /valentina
 */

import { buildHero } from '../utils/buildHero.js';

const hero_valentina = buildHero("Valentina", {
  "displayName": "Valentina",
  "title": "Prophetess of Primal",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S+",
  "diff": "High",
  "winRate": "53.6%",
  "pickRate": "4.8%",
  "banRate": "32.1%",
  "summary": "Penyihir ratu bayangan yang mampu mencuri dan menggunakan Ultimate hero musuh manapun (I am You) serta menguras EXP lawan.",
  "pros": [
    "Mampu mencuri Ultimate musuh terkuat (Tigreal, Atlas, Faramis, Yu Zhong)",
    "Dash ganda Shadow Strike lincah dengan efek terror CC",
    "Mendapat bonus EXP ekstra"
  ],
  "cons": [
    "Efektivitas bergantung pada Ultimate apa yang dimiliki oleh draft tim musuh",
    "Kurang maksimal jika musuh tidak memiliki Ultimate pembuka war yang bagus"
  ]
});

export default hero_valentina;
