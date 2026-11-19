/**
 * Buildspedia - Hero Roster File: Fredrinn (Rogue Appraiser)
 * Slug: /fredrinn
 */

import { buildHero } from '../utils/buildHero.js';

const hero_fredrinn = buildHero("Fredrinn", {
  "displayName": "Fredrinn",
  "title": "Rogue Appraiser",
  "role": "Tank",
  "sec": "Fighter",
  "lane": "Jungler",
  "tier": "S",
  "diff": "Medium",
  "winRate": "53.6%",
  "pickRate": "4.9%",
  "banRate": "24.1%",
  "summary": "Raja jungler tank kompetitif dengan pedang Crystal Core yang mengubah darah yang hilang menjadi damage tebasan Appraiser's Wrath pembalik keadaan.",
  "pros": [
    "Cooldown skill sangat singkat dengan taunt, airborne, dan slow beruntun",
    "Appraiser's Wrath membalikkan teamfight dengan burst true damage raksasa",
    "Sangat keras"
  ],
  "cons": [
    "Damage Ultimate bergantung pada seberapa banyak Crystal Energy abu-abu yang terkumpul",
    "Mobilitas terbatas pada dash pendek"
  ]
});

export default hero_fredrinn;
