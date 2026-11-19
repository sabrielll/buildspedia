/**
 * Buildspedia - Hero Roster File: Carmilla (Shadow of Dusk)
 * Slug: /carmilla
 */

import { buildHero } from '../utils/buildHero.js';

const hero_carmilla = buildHero("Carmilla", {
  "displayName": "Carmilla",
  "title": "Shadow of Dusk",
  "role": "Support",
  "sec": "Tank",
  "lane": "Roamer",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.6%",
  "pickRate": "0.9%",
  "banRate": "1.2%",
  "summary": "Ratu vampir pengikat kutukan Curse of Blood yang menghubungkan hingga 3 hero musuh sehingga seluruh damage dan CC kawan terbagi rata ke mereka.",
  "pros": [
    "Ultimate membagi 100% damage dan CC ke semua musuh yang terhubung",
    "Mencuri Physical & Magic Defense musuh secara pasif",
    "Sustain darah tebal"
  ],
  "cons": [
    "Jarak serang sangat dekat dan butuh masuk ke tengah musuh",
    "Kurang populer di publik rank karena butuh koordinasi tim tinggi"
  ]
});

export default hero_carmilla;
