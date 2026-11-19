/**
 * Buildspedia - Hero Roster File: Lylia (Little Witch)
 * Slug: /lylia
 */

import { buildHero } from '../utils/buildHero.js';

const hero_lylia = buildHero("Lylia", {
  "displayName": "Lylia",
  "title": "Little Witch",
  "role": "Mage",
  "sec": null,
  "lane": "Mid Lane",
  "tier": "S",
  "diff": "Medium",
  "winRate": "52.7%",
  "pickRate": "3.5%",
  "banRate": "9.6%",
  "summary": "Penyihir cilik Gloom bertopi runcing dengan ranjau ledakan beruntun dan tombol reset waktu Black Shoes pemulih seluruh darah dan mana.",
  "pros": [
    "Spam ledakan Shadow Energy beruntun dengan slow tebal",
    "Ultimate Black Shoes mengembalikan darah, mana, dan sepatu ke 4 detik sebelumnya",
    "Sangat dominan di early lane"
  ],
  "cons": [
    "Bergantung pada tumpukan cadangan sepatu hitam untuk survivabilitas",
    "Jangkauan skill menengah"
  ]
});

export default hero_lylia;
