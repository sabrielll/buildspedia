/**
 * Buildspedia - Hero Roster File: Floryn (Budding Hope)
 * Slug: /floryn
 */

import { buildHero } from '../utils/buildHero.js';

const hero_floryn = buildHero("Floryn", {
  "displayName": "Floryn",
  "title": "Budding Hope",
  "role": "Support",
  "sec": null,
  "lane": "Roamer",
  "tier": "S",
  "diff": "Low",
  "winRate": "53.2%",
  "pickRate": "3.9%",
  "banRate": "17.4%",
  "summary": "Gadis pembawa lentera bunga peri yang dapat memberikan item gratis ke kawan dan menyembuhkan seluruh tim di manapun mereka berada tanpa terhalang anti-heal.",
  "pros": [
    "Ultimate menyembuhkan seluruh kawan global dan menghapus efek anti-heal sementara",
    "Memberikan slot item buff gratis Dew Lantern kepada hypercarry tim",
    "Stun jarak jauh"
  ],
  "cons": [
    "Satu slot item pribadinya terkunci oleh lentera bunga",
    "Sangat rapuh saat diincar assassin musuh"
  ]
});

export default hero_floryn;
