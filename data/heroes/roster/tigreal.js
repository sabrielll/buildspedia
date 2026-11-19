/**
 * Buildspedia - Hero Roster File: Tigreal (Warrior of Dawn)
 * Slug: /tigreal
 */

import { buildHero } from '../utils/buildHero.js';

const hero_tigreal = buildHero("Tigreal", {
  "displayName": "Tigreal",
  "title": "Warrior of Dawn",
  "role": "Tank",
  "sec": "Support",
  "lane": "Roamer",
  "tier": "S",
  "diff": "Low",
  "winRate": "53.1%",
  "pickRate": "6.4%",
  "banRate": "28.0%",
  "summary": "Ksatria pelindung fajar dengan dorongan Sacred Hammer dan pusaran magnet Implosion penarik 5 musuh sekaligus dalam kombo Flicker maut.",
  "pros": [
    "Kombo Flicker + Implosion mampu membalikkan jalannya pertandingan dalam 1 momen",
    "Dorongan Sacred Hammer mendorong musuh masuk ke turret kawan",
    "Pasif kebal basic attack"
  ],
  "cons": [
    "Channeling Implosion dapat dibatalkan jika terkena stun cepat sebelum pusaran meledak",
    "Sangat bergantung pada ketersediaan Flicker"
  ]
});

export default hero_tigreal;
