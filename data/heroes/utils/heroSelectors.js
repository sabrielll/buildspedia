/**
 * Buildspedia - Hero Query & Selector Utilities
 */

import { HEROES_DATA } from '../roster/index.js';

export function getAllHeroes() {
  return HEROES_DATA;
}

export function getHeroBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toString().toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  return HEROES_DATA.find((hero) => {
    const heroSlugNorm = hero.slug.replace(/[^a-z0-9]/g, '');
    const heroIdNorm = hero.id.replace(/[^a-z0-9]/g, '');
    const heroNameNorm = hero.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    return heroSlugNorm === normalized || heroIdNorm === normalized || heroNameNorm === normalized;
  }) || null;
}

export function getHeroesByRole(role) {
  if (!role || role === "All") return HEROES_DATA;
  return HEROES_DATA.filter((hero) => hero.role === role || hero.secondaryRole === role);
}
