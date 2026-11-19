/**
 * Buildspedia - Hero Roster File: Lapu-Lapu (Courageous Blade)
 * Slug: /lapu
 */

import { buildHero } from '../utils/buildHero.js';

const hero_lapu = buildHero("Lapu", {
  "displayName": "Lapu-Lapu",
  "title": "Courageous Blade",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.7%",
  "pickRate": "3.6%",
  "banRate": "9.8%",
  "summary": "Pahlawan suku pemberani dengan pedang kembar yang bertransformasi menjadi pedang raksasa pemotong pertempuran dengan imunitas CC penuh.",
  "pros": [
    "Kebal terhadap seluruh CC saat mengayunkan pedang raksasa Ultimate",
    "Reduksi damage tebal dan shield terus menerus saat war",
    "Mampu menjangkau backline musuh"
  ],
  "cons": [
    "Kurang lincah di luar mode pedang berat Ultimate",
    "Mudah di-kite jika Ultimate sudah selesai durasinya"
  ]
});

export default hero_lapu;
