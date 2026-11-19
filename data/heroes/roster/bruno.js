/**
 * Buildspedia - Hero Roster File: Bruno (The Protector)
 * Slug: /bruno
 */

import { buildHero } from '../utils/buildHero.js';

const hero_bruno = buildHero("Bruno", {
  "displayName": "Bruno",
  "title": "The Protector",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "S",
  "diff": "Low",
  "winRate": "52.3%",
  "pickRate": "4.1%",
  "banRate": "9.0%",
  "summary": "Pesepak bola berenergi tinggi dengan tendangan Volley Shot berkekuatan Critical masif yang meremukkan lawan hanya dalam 2 tendangan bola.",
  "pros": [
    "Critical chance pasif alami sangat tinggi sejak level 1",
    "Tendangan bola memantul menghasilkan damage burst instan",
    "Skill dash stun lincah"
  ],
  "cons": [
    "Harus memungut pantulan bola terus-menerus untuk menjaga buff",
    "Jarak serang menengah, rentan di-burst assassin"
  ]
});

export default hero_bruno;
