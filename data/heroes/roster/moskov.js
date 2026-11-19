/**
 * Buildspedia - Hero Roster File: Moskov (Spear of Quiescence)
 * Slug: /moskov
 */

import { buildHero } from '../utils/buildHero.js';

const hero_moskov = buildHero("Moskov", {
  "displayName": "Moskov",
  "title": "Spear of Quiescence",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "S+",
  "diff": "Medium",
  "winRate": "53.7%",
  "pickRate": "6.2%",
  "banRate": "28.9%",
  "summary": "Penombak bayangan penembus formasi dengan pasif tombak tembus ke belakang, pin dinding stun maut, dan tombak global Spear of Destruction.",
  "pros": [
    "Serangan tombak menembus musuh ke belakang (DPS area tertinggi)",
    "Abyss Fissure stun ke dinding hingga 1.5 detik",
    "Tombak Ultimate menjangkau ujung map dan bisa teleportasi langsung ke target"
  ],
  "cons": [
    "Jarak tembak dasar pendek dibandingkan marksman lain",
    "Sangat boros mana di early game"
  ]
});

export default hero_moskov;
