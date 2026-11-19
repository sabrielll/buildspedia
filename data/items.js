/**
 * Buildspedia - Centralized Items & Equipment Data Repository (Aggregator / Bridge)
 * Mapped to /Assets/Build Icons/[Category]/[filename]
 */

import { ITEM_CATEGORIES } from './items/categories';
import { BOOTS_ITEMS } from './items/boots';
import { PHYSICAL_ITEMS } from './items/physical';
import { MAGICAL_ITEMS } from './items/magical';
import { DEFENSE_ITEMS } from './items/defense';

export {
  ITEM_CATEGORIES,
  BOOTS_ITEMS,
  PHYSICAL_ITEMS,
  MAGICAL_ITEMS,
  DEFENSE_ITEMS,
};

export const ITEMS_DATA = [
  ...BOOTS_ITEMS,
  ...PHYSICAL_ITEMS,
  ...MAGICAL_ITEMS,
  ...DEFENSE_ITEMS,
];

export function getAllItems() {
  return ITEMS_DATA;
}

export function getItemsByCategory(category) {
  if (!category || category === 'All') return ITEMS_DATA;
  return ITEMS_DATA.filter((item) => item.category === category);
}
