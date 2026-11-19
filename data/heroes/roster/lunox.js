/**
 * Buildspedia - Hero Roster File: Lunox (Twilight Goddess)
 * Slug: /lunox
 */

import { buildHero } from '../utils/buildHero.js';

const hero_lunox = buildHero("Lunox", {
  "displayName": "Lunox",
  "title": "Twilight Goddess",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "High",
  "winRate": "53.2%",
  "pickRate": "3.6%",
  "banRate": "18.9%",
  "summary": "Dewi senja keseimbangan cahaya dan kegelapan yang menembus 100% Magic Penetration untuk mencairkan tank atau kebal total dengan Brilliance.",
  "pros": [
    "Menembus Magic Defense lawan hingga mendekati 100% PEN dengan Chaos",
    "Bentuk Brilliance kebal penuh dari segala jenis serangan dan CC",
    "Penghancur tank nomor satu"
  ],
  "cons": [
    "Membutuhkan pergantian mode cahaya dan kegelapan yang presisi",
    "Jarak serang menengah"
  ]
});

export default hero_lunox;
