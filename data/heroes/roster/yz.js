/**
 * Buildspedia - Hero Roster File: Yu Zhong (Black Dragon)
 * Slug: /yz
 */

import { buildHero } from '../utils/buildHero.js';

const hero_yz = buildHero("Yz", {
  "displayName": "Yu Zhong",
  "title": "Black Dragon",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "S+",
  "diff": "Medium",
  "winRate": "54.2%",
  "pickRate": "6.1%",
  "banRate": "31.5%",
  "summary": "Naga hitam penguasa langit yang terbang menjadi Black Dragon Form kebal CC, menabrak barisan belakang musuh, dan menghisap darah Sha Essence.",
  "pros": [
    "Terbang menjadi naga hitam raksasa kebal semua CC menembus langsung ke carry lawan",
    "Sha Essence pasif menyedot darah musuh dan memulihkan HP Yu Zhong",
    "Penguasa Exp Lane terkuat"
  ],
  "cons": [
    "Jeda sebelum naga mendarat memberi waktu bagi musuh bersiap",
    "Mudah terkena kiting di luar bentuk naga"
  ]
});

export default hero_yz;
