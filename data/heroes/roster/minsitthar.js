/**
 * Buildspedia - Hero Roster File: Minsitthar (Courageous Warrior)
 * Slug: /minsitthar
 */

import { buildHero } from '../utils/buildHero.js';

const hero_minsitthar = buildHero("Minsitthar", {
  "displayName": "Minsitthar",
  "title": "Courageous Warrior",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.9%",
  "pickRate": "2.5%",
  "banRate": "7.8%",
  "summary": "Raja tombak emas yang menarik musuh dengan Spear of Glory dan arena King's Calling yang mengunci seluruh skill dash & blink lawan.",
  "pros": [
    "King's Calling melarang semua musuh di dalam arena menggunakan skill blink, dash, dan flicker",
    "Tombak menarik hero musuh dari balik barisan",
    "Tameng stun tangguh"
  ],
  "cons": [
    "Sangat mengandalkan musuh yang bertumpu pada skill dash",
    "Damage menengah dibandingkan fighter murni"
  ]
});

export default hero_minsitthar;
