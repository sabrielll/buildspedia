/**
 * Buildspedia - Hero Roster File: Faramis (Soul Binder)
 * Slug: /faramis
 */

import { buildHero } from '../utils/buildHero.js';

const hero_faramis = buildHero("Faramis", {
  "displayName": "Faramis",
  "title": "Soul Binder",
  "role": "Support",
  "sec": "Mage",
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "53.4%",
  "pickRate": "2.7%",
  "banRate": "15.8%",
  "summary": "Penyihir bayangan penyelamat tim yang Nether Realm-nya memberi bar darah ekstra kebal kematian bagi seluruh kawan saat open war.",
  "pros": [
    "Nether Realm memberi extra HP bar bagi seluruh tim",
    "Ghost Bursters menghasilkan ledakan pantulan masif pada kerumunan musuh",
    "Menarik musuh dengan rantai bayangan"
  ],
  "cons": [
    "Membutuhkan kawan yang tetap berada dalam lingkaran Nether Realm",
    "Kurang efektif jika rekan tim bermain terpisah (split push)"
  ]
});

export default hero_faramis;
