/**
 * Buildspedia - Hero Roster File: Gloo (Swamp Spirits)
 * Slug: /gloo
 */

import { buildHero } from '../utils/buildHero.js';

const hero_gloo = buildHero("Gloo", {
  "displayName": "Gloo",
  "title": "Swamp Spirits",
  "role": "Tank",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "A",
  "diff": "Medium",
  "winRate": "51.8%",
  "pickRate": "1.4%",
  "banRate": "3.9%",
  "summary": "Makhluk lendir rawa yang mampu membelah diri menjadi puluhan tetesan dan menempel di tubuh hero musuh untuk mengendalikan gerak mereka.",
  "pros": [
    "Menempel di tubuh hero musuh dan mengalihkan 80% damage ke target tersebut",
    "Regenerasi darah sangat deras saat membelah diri",
    "Immobilize beruntun"
  ],
  "cons": [
    "Counter mutlak oleh hero dengan spell vamp/lifesteal splash seperti Faramis, Ruby, dan Vexana",
    "Mudah dibunuh saat belum menempel"
  ]
});

export default hero_gloo;
