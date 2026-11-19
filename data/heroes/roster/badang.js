/**
 * Buildspedia - Hero Roster File: Badang (Tribal Warrior)
 * Slug: /badang
 */

import { buildHero } from '../utils/buildHero.js';

const hero_badang = buildHero("Badang", {
  "displayName": "Badang",
  "title": "Tribal Warrior",
  "role": "Fighter",
  "sec": null,
  "lane": "Exp Lane",
  "tier": "B",
  "diff": "Low",
  "winRate": "50.2%",
  "pickRate": "1.4%",
  "banRate": "1.0%",
  "summary": "Prajurit kepalan batu yang mampu menciptakan kurungan dinding jebakan dan melepaskan ratusan tinju Fist Crack bertubi-tubi.",
  "pros": [
    "Mampu mengurung musuh dengan dinding batu skill 2",
    "Ultimate pukulan beruntun memberikan kekebalan CC sementara",
    "Knockback stun ke dinding"
  ],
  "cons": [
    "Musuh dengan skill blink/flicker mudah melompati dindingnya",
    "Arah pukulan Ultimate bersifat statis"
  ]
});

export default hero_badang;
