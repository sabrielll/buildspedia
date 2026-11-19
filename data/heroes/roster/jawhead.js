/**
 * Buildspedia - Hero Roster File: Jawhead (Steel Sweetheart)
 * Slug: /jawhead
 */

import { buildHero } from '../utils/buildHero.js';

const hero_jawhead = buildHero("Jawhead", {
  "displayName": "Jawhead",
  "title": "Steel Sweetheart",
  "role": "Fighter",
  "sec": null,
  "lane": "Roamer",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.5%",
  "pickRate": "2.3%",
  "banRate": "3.0%",
  "summary": "Robot tempur pelindung gadis kecil yang mampu melempar musuh ke arah rekan setim dengan skill Ejector dan menghujani rudal Smart Missiles.",
  "pros": [
    "Skill Ejector mampu melempar musuh atau mengamankan teman",
    "Burst damage rudal early game sangat sakit",
    "Inisiasi lock Ultimate menabrak target pasti"
  ],
  "cons": [
    "Jika salah melempar kawan bisa menjadi blunder fatal",
    "Efektivitas berkurang jika musuh selalu berkumpul rapat"
  ]
});

export default hero_jawhead;
