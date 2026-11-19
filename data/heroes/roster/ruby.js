/**
 * Buildspedia - Hero Roster File: Ruby (Little Red Hood)
 * Slug: /ruby
 */

import { buildHero } from '../utils/buildHero.js';

const hero_ruby = buildHero("Ruby", {
  "displayName": "Ruby",
  "title": "Little Red Hood",
  "role": "Fighter",
  "sec": "Tank",
  "lane": "Exp Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "53.4%",
  "pickRate": "5.2%",
  "banRate": "17.6%",
  "summary": "Gadis bertudung merah pembawa sabit raksasa penguasa lifesteal tiada henti dengan lompatan dash pasif dan tarikan sabit I'm Offended!.",
  "pros": [
    "Spell vamp lifesteal luar biasa deras dari setiap tebasan skill",
    "Seluruh skill memberikan efek Crowd Control (slow, stun, hook)",
    "Dash lincah setelah setiap skill"
  ],
  "cons": [
    "Sangat terganggu jika musuh membuat item anti-heal Dominance Ice dan Sea Halberd",
    "Damage burst tidak setinggi assassin murni"
  ]
});

export default hero_ruby;
