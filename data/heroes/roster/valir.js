/**
 * Buildspedia - Hero Roster File: Valir (Son of Flames)
 * Slug: /valir
 */

import { buildHero } from '../utils/buildHero.js';

const hero_valir = buildHero("Valir", {
  "displayName": "Valir",
  "title": "Son of Flames",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.8%",
  "pickRate": "3.2%",
  "banRate": "7.5%",
  "summary": "Pengendali api penolak serbuan jarak dekat dengan bola api Burst Fireball beruntun, dorongan Searing Torrent, dan Purify alami Vengeance Flame.",
  "pros": [
    "Ultimate Vengeance Flame memberikan efek Purify alami bawaan",
    "Dorongan api memukul mundur seluruh hero melee yang mencoba mendekat",
    "Efek slow dan bakar tiada henti"
  ],
  "cons": [
    "Jangkauan serang menengah",
    "Rentan terhadap hero sniper jarak jauh seperti Pharsa dan Novaria"
  ]
});

export default hero_valir;
