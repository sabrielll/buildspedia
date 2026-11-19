/**
 * Buildspedia - Hero Roster File: Popol and Kupa (Hunting Partners)
 * Slug: /popol
 */

import { buildHero } from '../utils/buildHero.js';

const hero_popol = buildHero("Popol", {
  "displayName": "Popol and Kupa",
  "title": "Hunting Partners",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.9%",
  "pickRate": "2.5%",
  "banRate": "4.2%",
  "summary": "Duet bocah pemburu dan serigala Kupa pelindung yang mampu mengamankan vision dengan jebakan perangkap dan mematikan musuh dengan gigitan serigala.",
  "pros": [
    "Serigala Kupa menjadi tameng badan dan penyerang garis depan",
    "Perangkap trap memberi vision semak gratis dan efek beku/immobilize",
    "Push turret tercepat"
  ],
  "cons": [
    "Popol sangat lemah dan rapuh jika serigala Kupa mati",
    "Butuh waktu untuk memanggil kembali Kupa"
  ]
});

export default hero_popol;
