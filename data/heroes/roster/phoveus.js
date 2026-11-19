/**
 * Buildspedia - Hero Roster File: Phoveus (Shadow of Dread)
 * Slug: /phoveus
 */

import { buildHero } from '../utils/buildHero.js';

const hero_phoveus = buildHero("Phoveus", {
  "displayName": "Phoveus",
  "title": "Shadow of Dread",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.5%",
  "pickRate": "1.6%",
  "banRate": "3.8%",
  "summary": "Prajurit rantai pemangsa kelincahan yang secara otomatis melompat menimpa musuh setiap kali ada hero lawan yang melakukan dash atau blink.",
  "pros": [
    "Counter mutlak seluruh hero lincah ber-dash (Wanwan, Harith, Benedetta, Chou)",
    "Mendapatkan shield tebal setiap kali melompat",
    "Damage magic area tinggi"
  ],
  "cons": [
    "Sangat tidak berdaya jika tim musuh tidak memiliki hero dengan skill dash/blink",
    "Serangan mudah dihindari musuh statis"
  ]
});

export default hero_phoveus;
