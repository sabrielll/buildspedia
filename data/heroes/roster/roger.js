/**
 * Buildspedia - Hero Roster File: Roger (Dire Wolf Hunter)
 * Slug: /roger
 */

import { buildHero } from '../utils/buildHero.js';

const hero_roger = buildHero("Roger", {
  "displayName": "Roger",
  "title": "Dire Wolf Hunter",
  "role": "Fighter",
  "sec": "Marksman",
  "lane": "Gold Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "53.1%",
  "pickRate": "4.8%",
  "banRate": "18.9%",
  "summary": "Pemburu serigala bertransformasi ganda yang menembakkan senapan marksman untuk mencicil lalu berubah menjadi serigala buas pelompat mangsa.",
  "pros": [
    "Sangat fleksibel berganti wujud antara marksman jarak jauh dan serigala finisher",
    "Movement speed serigala sangat kencang mengejar musuh sekarat",
    "Sangat mematikan di Gold Lane"
  ],
  "cons": [
    "Bentuk serigala butuh masuk ke jarak dekat berisiko tinggi",
    "Rentan terkena hard CC saat melompat masuk"
  ]
});

export default hero_roger;
