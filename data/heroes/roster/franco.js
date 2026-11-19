/**
 * Buildspedia - Hero Roster File: Franco (Frozen Warrior)
 * Slug: /franco
 */

import { buildHero } from '../utils/buildHero.js';

const hero_franco = buildHero("Franco", {
  "displayName": "Franco",
  "title": "Frozen Warrior",
  "role": "Tank",
  "sec": "Support",
  "lane": "Roamer",
  "tier": "S",
  "diff": "Medium",
  "winRate": "51.7%",
  "pickRate": "6.5%",
  "banRate": "19.2%",
  "summary": "Tank legendaris penculik dengan Iron Hook maut dan kuncian gigitan Bloody Hunt suppression yang tidak bisa dibatalkan oleh Purify sekalipun.",
  "pros": [
    "Kuncian Suppression mutlak menahan hero assassin paling lincah sekalipun",
    "Iron Hook mampu menculik musuh dari balik tembok dan merusuh buff musuh",
    "Movement speed tinggi"
  ],
  "cons": [
    "Sangat bergantung pada akurasi tarikan hook",
    "Bukan tipe tank pelindung garis depan yang tahan gempuran terus menerus"
  ]
});

export default hero_franco;
