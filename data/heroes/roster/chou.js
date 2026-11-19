/**
 * Buildspedia - Hero Roster File: Chou (Kung Fu Boy)
 * Slug: /chou
 */

import { buildHero } from '../utils/buildHero.js';

const hero_chou = buildHero("Chou", {
  "displayName": "Chou",
  "title": "Kung Fu Boy",
  "role": "Fighter",
  "sec": "Tank",
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "High",
  "winRate": "51.6%",
  "pickRate": "6.8%",
  "banRate": "9.4%",
  "summary": "Fighter legendaris serbaguna dengan imunitas Crowd Control, knockup beruntun, dan tendangan insec The Way of Dragon penculik nomor satu.",
  "pros": [
    "Imunitas CC penuh saat dash Shunpo",
    "Sangat fleksibel: full assassin atau full tank roam",
    "Penculik carry musuh paling mematikan"
  ],
  "cons": [
    "Mikro mekanik jari tingkat tinggi",
    "Salah kalkulasi tendangan bisa menyelamatkan musuh"
  ]
});

export default hero_chou;
