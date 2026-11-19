/**
 * Buildspedia - Hero Roster File: Lesley (Sniper)
 * Slug: /lesley
 */

import { buildHero } from '../utils/buildHero.js';

const hero_lesley = buildHero("Lesley", {
  "displayName": "Lesley",
  "title": "Sniper",
  "role": "Marksman",
  "sec": "Assassin",
  "lane": "Gold Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.6%",
  "pickRate": "4.8%",
  "banRate": "6.5%",
  "summary": "Penembak runduk siluman yang mengubah setiap tembakan kritikalnya menjadi True Damage mematikan penembus armor tertabal sekalipun.",
  "pros": [
    "Tembakan pasif menghasilkan True Damage kritikal murni hingga 2000+ per peluru",
    "Kamuflase Master of Camouflage memberi kecepatan lari dan imunitas target",
    "Ultimate pengunci musuh sekarat"
  ],
  "cons": [
    "Sangat lemah di early game sebelum item Blade of Despair selesai",
    "Attack speed lambat, bukan marksman DPS cepat"
  ]
});

export default hero_lesley;
