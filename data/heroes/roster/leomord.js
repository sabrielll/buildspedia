/**
 * Buildspedia - Hero Roster File: Leomord (Sworn Sword)
 * Slug: /leomord
 */

import { buildHero } from '../utils/buildHero.js';

const hero_leomord = buildHero("Leomord", {
  "displayName": "Leomord",
  "title": "Sworn Sword",
  "role": "Fighter",
  "sec": "Assassin",
  "lane": "Jungler",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.4%",
  "pickRate": "2.3%",
  "banRate": "3.5%",
  "summary": "Ksatria berkuda kegelapan Barbiel yang selalu menghasilkan Critical Damage 100% pada musuh yang memiliki darah di bawah 50%.",
  "pros": [
    "Serangan selalu 100% Critical Damage pada musuh berdarah sekarat",
    "Menaiki kuda Barbiel memberikan defense ekstra dan tebasan area luas",
    "Pembersih teamfight cepat"
  ],
  "cons": [
    "Sangat bergantung pada kuda Barbiel; jika kuda dihalau lawan, Leomord lemah",
    "Rentan terkena hard CC saat memanggil kuda"
  ]
});

export default hero_leomord;
