/**
 * Buildspedia - Hero Roster File: Terizla (Executioner)
 * Slug: /terizla
 */

import { buildHero } from '../utils/buildHero.js';

const hero_terizla = buildHero("Terizla", {
  "displayName": "Terizla",
  "title": "Executioner",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "S+",
  "diff": "Low",
  "winRate": "54.0%",
  "pickRate": "5.6%",
  "banRate": "27.4%",
  "summary": "Algojo palu raksasa terkeras di Land of Dawn dengan reduksi damage pasif hingga 35% dan rantai pengikat Penalty Zone penahan formasi war.",
  "pros": [
    "Body Guard pasif memberi reduksi damage hingga 35% saat darah sekarat",
    "Penalty Zone mengikat dan menarik seluruh musuh berulang kali",
    "Tebasan palu sangat sakit"
  ],
  "cons": [
    "Kecepatan ayunan palu lambat",
    "Rentan terkena kiting oleh hero berjarak serang jauh"
  ]
});

export default hero_terizla;
