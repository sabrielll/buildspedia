/**
 * Buildspedia - Hero Roster File: Kadita (Ocean Goddess)
 * Slug: /kadita
 */

import { buildHero } from '../utils/buildHero.js';

const hero_kadita = buildHero("Kadita", {
  "displayName": "Kadita",
  "title": "Ocean Goddess",
  "role": "Mage",
  "sec": "Assassin",
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.7%",
  "pickRate": "3.4%",
  "banRate": "11.5%",
  "summary": "Dewi laut selatan dengan ombak Rough Waves pembawa kekebalan CC dan semburan ombak maut yang menenggelamkan lawan dalam satu kombo petrify.",
  "pros": [
    "Kombo Petrify + Rough Waves menghasilkan burst damage area one-shot",
    "Kebal CC dan pengurangan damage 50% saat menunggangi ombak skill 1",
    "Pasif memulihkan 65% darah"
  ],
  "cons": [
    "Jika kombo ombak meleset, Kadita rentan diserang saat ombak kembali",
    "Cooldown Ultimate cukup panjang"
  ]
});

export default hero_kadita;
