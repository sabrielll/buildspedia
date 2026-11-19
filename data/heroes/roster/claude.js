/**
 * Buildspedia - Hero Roster File: Claude (Master Thief)
 * Slug: /claude
 */

import { buildHero } from '../utils/buildHero.js';

const hero_claude = buildHero("Claude", {
  "displayName": "Claude",
  "title": "Master Thief",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "53.1%",
  "pickRate": "4.7%",
  "banRate": "16.8%",
  "summary": "Pencuri ulung bersama monyet Dexter yang mampu teleportasi Battle Mirror Image dan menyapu bersih pertempuran dengan Blazing Duet.",
  "pros": [
    "Mobilitas bertukar posisi paling licin di antara semua marksman",
    "Blazing Duet membersihkan pertempuran tim dalam sekejap",
    "Scaling attack speed gila"
  ],
  "cons": [
    "Sangat bergantung pada akumulasi 10 stack Art of Thievery",
    "Rentan di-burst saat baru masuk memutar Blazing Duet"
  ]
});

export default hero_claude;
