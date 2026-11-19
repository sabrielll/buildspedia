/**
 * Buildspedia - Hero Roster File: Cyclops (Starsoul Magician)
 * Slug: /cyclops
 */

import { buildHero } from '../utils/buildHero.js';

const hero_cyclops = buildHero("Cyclops", {
  "displayName": "Cyclops",
  "title": "Starsoul Magician",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.2%",
  "pickRate": "2.5%",
  "banRate": "1.8%",
  "summary": "Penyihir bermata satu penembak bola planet Planets Attack bertubi-tubi dengan lifesteal sihir deras dan kuncian Star Power Lockdown.",
  "pros": [
    "Spam skill terus menerus berkat pasif pemangkas cooldown per hit",
    "Star Power Lockdown mengunci assassin lincah tanpa meleset",
    "Lifesteal sihir tebal"
  ],
  "cons": [
    "Jangkauan serang relatif dekat untuk ukuran hero mage",
    "Sangat boros mana jika tidak memiliki buff atau enchanted talisman"
  ]
});

export default hero_cyclops;
