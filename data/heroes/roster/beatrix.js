/**
 * Buildspedia - Hero Roster File: Beatrix (Dawnbreak Soldier)
 * Slug: /beatrix
 */

import { buildHero } from '../utils/buildHero.js';

const hero_beatrix = buildHero("Beatrix", {
  "displayName": "Beatrix",
  "title": "Dawnbreak Soldier",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "S",
  "diff": "High",
  "winRate": "52.1%",
  "pickRate": "5.2%",
  "banRate": "8.1%",
  "summary": "Marksman multi-senjata jenius dengan 4 pilihan senjata unik (Renner, Bennett, Wesker, Nibiru) untuk segala situasi tempur.",
  "pros": [
    "Sangat adaptif di segala jarak tempur",
    "Wesker shotgun jarak dekat melenyapkan musuh instan",
    "Renner snipe dari luar layar"
  ],
  "cons": [
    "Mekanik reload membutuhkan timing presisi",
    "Tidak memiliki lifesteal alami tinggi"
  ]
});

export default hero_beatrix;
