/**
 * Buildspedia - Hero Roster File: Benedetta (Shadow Ranger)
 * Slug: /benedetta
 */

import { buildHero } from '../utils/buildHero.js';

const hero_benedetta = buildHero("Benedetta", {
  "displayName": "Benedetta",
  "title": "Shadow Ranger",
  "role": "Assassin",
  "sec": "Fighter",
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "High",
  "winRate": "52.5%",
  "pickRate": "3.6%",
  "banRate": "11.8%",
  "summary": "Pendekar pedang wanita lincah dengan dash Swordout Slash pada setiap basic attack dan kekebalan CC sempurna dari An Eye for an Eye.",
  "pros": [
    "Mobilitas dash tak terbatas pada setiap serangan",
    "Skill 2 memblokir semua damage dan stun musuh lalu memantulkannya",
    "Ultimate pembersih wave instan"
  ],
  "cons": [
    "Tingkat kesulitan mikro tinggi, butuh holding basic attack terus menerus",
    "Mudah terpeleset keluar formasi jika timing salah"
  ]
});

export default hero_benedetta;
