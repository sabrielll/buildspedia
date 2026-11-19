/**
 * Buildspedia - Hero Roster File: Silvanna (Imperial Knightess)
 * Slug: /silvanna
 */

import { buildHero } from '../utils/buildHero.js';

const hero_silvanna = buildHero("Silvanna", {
  "displayName": "Silvanna",
  "title": "Imperial Knightess",
  "role": "Fighter",
  "sec": "Mage",
  "lane": "Exp Lane",
  "tier": "B",
  "diff": "Low",
  "winRate": "50.6%",
  "pickRate": "1.5%",
  "banRate": "1.2%",
  "summary": "Ksatria wanita kekaisaran dengan tombak Imperial Justice yang mengurung hero lawan dalam lingkaran duel tanpa bisa kabur.",
  "pros": [
    "Imperial Justice mengurung musuh dalam lingkaran tanpa bisa keluar selama 3.5 detik",
    "Spiral Strangling menghasilkan magic lifesteal dan serangan beruntun",
    "Stun skill 1 cepat"
  ],
  "cons": [
    "Putaran tombak mudah dibatalkan oleh efek stun musuh",
    "Kurang efektif jika musuh memiliki imunitas CC"
  ]
});

export default hero_silvanna;
