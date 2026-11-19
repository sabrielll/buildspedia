/**
 * Buildspedia - Hero Roster File: Lolita (Steel Elf)
 * Slug: /lolita
 */

import { buildHero } from '../utils/buildHero.js';

const hero_lolita = buildHero("Lolita", {
  "displayName": "Lolita",
  "title": "Steel Elf",
  "role": "Support",
  "sec": "Tank",
  "lane": "Roamer",
  "tier": "S",
  "diff": "Medium",
  "winRate": "53.8%",
  "pickRate": "2.9%",
  "banRate": "12.4%",
  "summary": "Elf bertameng baja Guardian's Reflection yang memantulkan kembali seluruh proyektil peluru musuh (Chang'e, Beatrix, Cyclops, Harley).",
  "pros": [
    "Tameng memantulkan kembali 100% proyektil serangan musuh ke penembaknya",
    "Ultimate stun kerucut raksasa pembuka war",
    "Shield gratis bagi rekan di dekatnya"
  ],
  "cons": [
    "Channeling Ultimate dapat dibatalkan jika terkena stun di tengah jalan",
    "Kurang efektif melawan hero berbasis serangan fisik jarak dekat melee"
  ]
});

export default hero_lolita;
