/**
 * Buildspedia - Hero Roster File: Natan (Spacetime Walker)
 * Slug: /natan
 */

import { buildHero } from '../utils/buildHero.js';

const hero_natan = buildHero("Natan", {
  "displayName": "Natan",
  "title": "Spacetime Walker",
  "role": "Marksman",
  "sec": "Mage",
  "lane": "Gold Lane",
  "tier": "S",
  "diff": "High",
  "winRate": "53.0%",
  "pickRate": "3.8%",
  "banRate": "16.4%",
  "summary": "Penjelajah waktu dengan proyektil bumerang Magic Damage dan klon bayangan Entropy? yang melipatgandakan seluruh tembakan serangannya.",
  "pros": [
    "Seluruh tembakan marksman berupa Magic Damage 100% yang sangat sakit",
    "Klon bayangan Entropy menduplikasi seluruh serangan dan skill",
    "Attack speed pasif sangat cepat"
  ],
  "cons": [
    "Tidak memiliki skill escape murni selain bertukar tempat dengan klon",
    "Sangat di-counter oleh Radiant Armor dan Athena's Shield"
  ]
});

export default hero_natan;
