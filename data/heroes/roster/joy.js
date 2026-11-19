/**
 * Buildspedia - Hero Roster File: Joy (Flash of Miracle)
 * Slug: /joy
 */

import { buildHero } from '../utils/buildHero.js';

const hero_joy = buildHero("Joy", {
  "displayName": "Joy",
  "title": "Flash of Miracle",
  "role": "Assassin",
  "sec": "Mage",
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "High",
  "winRate": "53.4%",
  "pickRate": "2.8%",
  "banRate": "24.5%",
  "summary": "Gadis petir Leonin yang melompat lincah mengikuti ketukan irama musik Meow Rhythm dengan kekebalan Crowd Control dan burst listrik dahsyat.",
  "pros": [
    "Kebal terhadap seluruh Crowd Control saat dash pas pada ketukan irama beat musik",
    "Damage Ultimate Ha! Electrifying Beats melenyapkan barisan belakang lawan",
    "Sangat lincah"
  ],
  "cons": [
    "Membutuhkan ketepatan ritme musik (irama beat)",
    "Jika dash meleset satu kali, Ultimate tidak dapat diaktifkan"
  ]
});

export default hero_joy;
