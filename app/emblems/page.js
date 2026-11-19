'use client';

import React, { useState } from 'react';
import EmblemBanner from '../../components/emblems/EmblemBanner';
import EmblemShowcaseCard from '../../components/emblems/EmblemShowcaseCard';
import { EMBLEM_SETS } from '../../data/emblems';

export default function EmblemsPage() {
  const [selectedEmblem, setSelectedEmblem] = useState(EMBLEM_SETS[0]);

  return (
    <div className="min-h-screen pb-24">
      <EmblemBanner
        emblemSets={EMBLEM_SETS}
        selectedEmblem={selectedEmblem}
        onSelectEmblem={setSelectedEmblem}
      />

      <EmblemShowcaseCard selectedEmblem={selectedEmblem} />
    </div>
  );
}
