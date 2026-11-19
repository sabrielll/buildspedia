/**
 * Buildspedia - Hero Roster File: Melissa (Cursed Needle)
 * Slug: /melissa
 */

import { buildHero } from '../utils/buildHero.js';

const hero_melissa = buildHero("Melissa", {
  "displayName": "Melissa",
  "title": "Cursed Needle",
  "role": "Marksman",
  "sec": null,
  "lane": "Gold Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.6%",
  "pickRate": "4.2%",
  "banRate": "11.0%",
  "summary": "Gadis penjahit boneka santet Muddles yang memantulkan seluruh damage ke musuh dan kubah pelindung Cuddles penolak hero melee.",
  "pros": [
    "Kubah Cuddles memantulkan dan melarang hero melee mendekat",
    "Boneka Muddles mentransfer seluruh pukulan jarum ke hero musuh di belakang minion",
    "Attack speed sangat kencang"
  ],
  "cons": [
    "Kubah tidak menghalau tembakan hero ranged musuh",
    "Sangat bergantung pada peletakan boneka Muddles"
  ]
});

export default hero_melissa;
