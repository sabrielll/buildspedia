/**
 * Buildspedia - Hero Roster File: Layla (Malefic Gunner)
 * Slug: /layla
 */

import { buildHero } from '../utils/buildHero.js';

const hero_layla = buildHero("Layla", {
  "displayName": "Layla",
  "title": "Malefic Gunner",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "B",
  "diff": "Low",
  "winRate": "50.7%",
  "pickRate": "4.9%",
  "banRate": "2.1%",
  "summary": "Gadis meriam malefic dengan jangkauan tembakan terjauh dalam game yang mampu menembak turret musuh dari luar jangkauan radar pertahanan.",
  "pros": [
    "Jangkauan serang terjauh di MLBB seiring bertambahnya level hero",
    "Laser Destruction Rush berjarak satu layar penuh",
    "Damage kritikal late game sangat masif"
  ],
  "cons": [
    "Sama sekali tidak memiliki skill kabur/dash bawaan",
    "Makanan empuk nomor satu bagi seluruh hero assassin"
  ]
});

export default hero_layla;
