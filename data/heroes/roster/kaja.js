/**
 * Buildspedia - Hero Roster File: Kaja (Nazar Commander)
 * Slug: /kaja
 */

import { buildHero } from '../utils/buildHero.js';

const hero_kaja = buildHero("Kaja", {
  "displayName": "Kaja",
  "title": "Nazar Commander",
  "role": "Support",
  "sec": "Fighter",
  "lane": "Roamer",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.3%",
  "pickRate": "1.7%",
  "banRate": "3.5%",
  "summary": "Komandan burung petir penyerap damage musuh dengan cambuk Divine Judgment yang mengikat dan menyeret carry musuh ke dalam barisan rekan.",
  "pros": [
    "Kuncian cambuk Suppression mutlak menyeret musuh tanpa bisa di-purify",
    "Pasif mengurangi damage yang diberikan musuh hingga 32%",
    "Inisiasi kilat"
  ],
  "cons": [
    "Darah relatif lebih tipis dibandingkan tank murni",
    "Sangat bergantung pada ketersediaan battle spell Flicker"
  ]
});

export default hero_kaja;
