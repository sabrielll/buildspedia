/**
 * Buildspedia - Hero Roster File: Sun (Monkey King)
 * Slug: /sun
 */

import { buildHero } from '../utils/buildHero.js';

const hero_sun = buildHero("Sun", {
  "displayName": "Sun",
  "title": "Monkey King",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "B",
  "diff": "Low",
  "winRate": "50.8%",
  "pickRate": "2.2%",
  "banRate": "2.0%",
  "summary": "Raja kera pembuat klon bayangan ganda yang merontokkan armor pertahanan lawan dan menghancurkan turret serta Lord dalam sekejap mata.",
  "pros": [
    "Menciptakan hingga 2 klon tubuh tambahan untuk membingungkan musuh",
    "Mengurangi physical defense musuh hingga 32% secara pasif",
    "Pengambil objektif tercepat"
  ],
  "cons": [
    "Klon memberi lifesteal gratis bagi hero musuh berkemampuan vamp seperti Ruby dan Balmond",
    "Kurang berguna di war terbuka 5v5"
  ]
});

export default hero_sun;
