/**
 * Buildspedia - Hero Roster File: Selena (Abyssal Witch)
 * Slug: /selena
 */

import { buildHero } from '../utils/buildHero.js';

const hero_selena = buildHero("Selena", {
  "displayName": "Selena",
  "title": "Abyssal Witch",
  "role": "Assassin",
  "sec": "Mage",
  "lane": "Mid Lane",
  "tier": "A",
  "diff": "Very High",
  "winRate": "50.9%",
  "pickRate": "2.1%",
  "banRate": "6.2%",
  "summary": "Penyihir jurang pembawa lele panah Abyssal Arrow dengan durasi stun terlama di game (hingga 3 detik) dan cakaran iblis mematikan.",
  "pros": [
    "Abyssal Arrow memberikan stun hingga 3 detik penuh dari jarak jauh",
    "Jebakan Abyssal Trap memberi penglihatan semak permanen",
    "Burst damage awal game mengerikan"
  ],
  "cons": [
    "Tingkat kesulitan bidikan panah sangat tinggi",
    "Efektivitas menurun drastis di late game pertempuran 5v5"
  ]
});

export default hero_selena;
