/**
 * Buildspedia - Hero Roster File: Rafaela (Wings of Healing)
 * Slug: /rafaela
 */

import { buildHero } from '../utils/buildHero.js';

const hero_rafaela = buildHero("Rafaela", {
  "displayName": "Rafaela",
  "title": "Wings of Healing",
  "role": "Support",
  "sec": null,
  "lane": "Roamer",
  "tier": "A",
  "diff": "Low",
  "winRate": "51.8%",
  "pickRate": "2.4%",
  "banRate": "2.5%",
  "summary": "Bidadari penyembuh pembawa berkat Holy Healing yang memberikan tambahan kecepatan gerak konstan bagi seluruh tim dan mendeteksi semak.",
  "pros": [
    "Holy Healing memberi boost movement speed kencang bagi tim terus menerus",
    "Light of Retribution mendeteksi musuh di semak tanpa meleset",
    "Holy Baptism stun lurus"
  ],
  "cons": [
    "Jumlah heal per detik lebih kecil dibandingkan Estes atau Floryn",
    "Sangat rapuh jika terisolasi"
  ]
});

export default hero_rafaela;
