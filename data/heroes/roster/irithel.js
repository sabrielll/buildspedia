/**
 * Buildspedia - Hero Roster File: Irithel (Jungle Heart)
 * Slug: /irithel
 */

import { buildHero } from '../utils/buildHero.js';

const hero_irithel = buildHero("Irithel", {
  "displayName": "Irithel",
  "title": "Jungle Heart",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.4%",
  "pickRate": "2.6%",
  "banRate": "2.0%",
  "summary": "Penunggang harimau Leo yang mampu menembakkan panah panah maut sambil terus berlari tanpa pernah menghentikan langkahnya.",
  "pros": [
    "Mampu menembak sambil bergerak bebas 360 derajat (kiting terbaik)",
    "Serangan panah Ultimate memiliki efek ledakan area splash",
    "Mengurangi armor lawan"
  ],
  "cons": [
    "Jangkauan serang relatif pendek dibandingkan marksman sniper",
    "Sangat empuk dan mudah diculik jika terkena efek stun"
  ]
});

export default hero_irithel;
