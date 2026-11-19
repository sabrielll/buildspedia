/**
 * Buildspedia - Hero Roster File: Gatotkaca (Iron Bone)
 * Slug: /gatot
 */

import { buildHero } from '../utils/buildHero.js';

const hero_gatot = buildHero("Gatot", {
  "displayName": "Gatotkaca",
  "title": "Iron Bone",
  "role": "Tank",
  "sec": "Fighter",
  "lane": "Exp Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.9%",
  "pickRate": "2.8%",
  "banRate": "3.6%",
  "summary": "Ksatria otot kawat tulang besi dari mitologi Nusantara yang semakin tebal dan semakin sakit tinjunya seiring berkurangnya darah.",
  "pros": [
    "Physical defense meningkat drastis saat darah berkurang berkat Steel Bones",
    "Pukulan tinju pasif menghasilkan burst magic dan heal deras",
    "Avatar of Guardian melompat jauh"
  ],
  "cons": [
    "Animasi pendaratan Ultimate cukup lambat dan mudah dihindari lawan",
    "Kalah lincah melawan hero berbasis true damage"
  ]
});

export default hero_gatot;
