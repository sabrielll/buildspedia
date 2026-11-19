'use client';

import React, { useState, useMemo } from 'react';
import ItemsBanner from '../../components/items/ItemsBanner';
import ItemsCatalogSection from '../../components/items/ItemsCatalogSection';
import { ITEMS_DATA, ITEM_CATEGORIES } from '../../data/items';

export default function ItemsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');

  const filteredItems = useMemo(() => {
    return ITEMS_DATA.filter((item) => {
      const matchCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.stats.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.passive.toLowerCase().includes(searchQuery.toLowerCase());

      const matchRole =
        selectedRole === 'All' ||
        item.recommendedRoles.includes(selectedRole);

      return matchCategory && matchSearch && matchRole;
    });
  }, [selectedCategory, searchQuery, selectedRole]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedRole('All');
  };

  return (
    <div className="min-h-screen pb-24">
      <ItemsBanner
        categories={ITEM_CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ItemsCatalogSection
        items={filteredItems}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedRole={selectedRole}
        onSelectRole={setSelectedRole}
        selectedCategory={selectedCategory}
        onResetFilters={handleResetFilters}
      />
    </div>
  );
}
