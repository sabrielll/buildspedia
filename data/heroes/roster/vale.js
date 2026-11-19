/**
 * Buildspedia - Hero Roster File: Vale (Windtalker)
 * Slug: /vale
 */

import { buildHero } from '../utils/buildHero.js';

const hero_vale = buildHero("Vale", {
  "displayName": "Vale",
  "title": "Windtalker",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.5%",
  "pickRate": "3.6%",
  "banRate": "4.2%",
  "summary": "Pengendali badai angin yang skillnya berevolusi setiap naik level dengan pusaran angin topan Windstorm penarik dan pelontar musuh.",
  "pros": [
    "Pusaran angin topan menarik dan melambungkan musuh dalam area luas",
    "Movement speed pasif bertambah setiap assist atau kill",
    "Burst damage angin masif"
  ],
  "cons": [
    "Skill membutuhkan akurasi prediksi arah gerak lawan",
    "Sangat empuk jika didekati assassin lincah"
  ]
});

export default hero_vale;
