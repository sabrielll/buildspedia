/**
 * Buildspedia - Hero Roster File: Masha (Wild-oats Fist)
 * Slug: /masha
 */

import { buildHero } from '../utils/buildHero.js';

const hero_masha = buildHero("Masha", {
  "displayName": "Masha",
  "title": "Wild-oats Fist",
  "role": "Fighter",
  "sec": "Tank",
  "lane": "Exp Lane",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.8%",
  "pickRate": "1.9%",
  "banRate": "5.4%",
  "summary": "Prajurit beruang dengan 3 lapis bar HP yang mengorbankan darahnya sendiri untuk melepaskan pukulan penghancur turret dan pencakar carry lawan.",
  "pros": [
    "Memiliki 3 bar nyawa HP terpisah",
    "Disarm mematikan Basic Attack marksman lawan selama 2 detik",
    "Push turret dan turtle tercepat"
  ],
  "cons": [
    "Penggunaan skill terus-menerus memakan darah sendiri",
    "Membutuhkan positioning matang sebelum menerjang"
  ]
});

export default hero_masha;
