/**
 * Buildspedia - Centralized Hero & Build Configuration (Bridge / Barrel Export)
 * Complete Catalog of all 121 Mobile Legends: Bang Bang Heroes
 */

import { CURRENT_PATCH } from './constants/patch.js';
import { ROLE_LIST } from './constants/roles.js';
import { TIER_CONFIG } from './constants/tiers.js';
import { ARCHETYPES } from './archetypes/index.js';
import { HEROES_DATA } from './heroes/roster/index.js';
import { buildHero } from './heroes/utils/buildHero.js';
import {
  getAllHeroes,
  getHeroBySlug,
  getHeroesByRole,
} from './heroes/utils/heroSelectors.js';

export {
  CURRENT_PATCH,
  ROLE_LIST,
  TIER_CONFIG,
  ARCHETYPES,
  HEROES_DATA,
  buildHero,
  getAllHeroes,
  getHeroBySlug,
  getHeroesByRole,
};
