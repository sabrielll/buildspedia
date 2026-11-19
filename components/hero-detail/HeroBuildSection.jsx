'use client';

import React from 'react';
import ItemIcon from '../ItemIcon';

function BuildSlotCard({ item, idx }) {
  const isCoreTrio = idx >= 1 && idx <= 3;
  const phaseLabel = idx === 0 ? 'BOOTS' : isCoreTrio ? 'CORE' : 'LATE';
  const phaseColor =
    idx === 0
      ? 'text-slate-400 border-slate-800 bg-slate-950/40'
      : isCoreTrio
      ? 'text-amber-400 border-amber-500/30 bg-amber-500/5'
      : 'text-cyan-400 border-cyan-500/25 bg-cyan-500/5';

  return (
    <div className={`rounded-xl p-2.5 border flex flex-col items-center justify-between ${phaseColor}`}>
      <span className="text-[9px] font-black uppercase tracking-widest mb-2">
        {phaseLabel} #{item.slot}
      </span>
      <ItemIcon
        item={item}
        size="md"
        shape="rounded"
        slotNumber={item.slot}
        showLabel={true}
        showTooltip={true}
      />
    </div>
  );
}

function SituationalSwapPill({ sitItem, defaultReplaceItem }) {
  const replaced = sitItem.replaceItem || defaultReplaceItem;

  return (
    <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl px-3 py-2 flex items-center justify-between gap-2">
      <div className="min-w-0">
        <span className="block text-[10px] font-bold text-indigo-300 truncate">
          {sitItem.badge || 'Situational'}
        </span>
        <span className="block text-[11px] font-bold text-slate-200 truncate">
          {sitItem.name}
        </span>
      </div>

      <div className="flex items-center gap-1 flex-shrink-0">
        <ItemIcon item={replaced} size="xs" shape="circle" showTooltip={true} />
        <span className="text-xs font-black text-indigo-400">→</span>
        <ItemIcon item={sitItem} size="sm" shape="circle" showTooltip={true} />
      </div>
    </div>
  );
}

export default function HeroBuildSection({ hero }) {
  if (!hero) return null;

  return (
    <div className="lg:col-span-7 bg-slate-900/85 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-5 rounded-full bg-amber-400" />
          <h2 className="text-sm sm:text-base font-black text-slate-100 uppercase tracking-wider">
            Urutan Final Build (Slot 1 → 6)
          </h2>
        </div>
        <span className="text-[11px] text-slate-400 hidden sm:inline">Hover/Tap ikon untuk detail</span>
      </div>

      {/* 6 Items Categorized Visually in One Row */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3 pt-1">
        {hero.coreBuild.map((item, idx) => (
          <BuildSlotCard key={idx} item={item} idx={idx} />
        ))}
      </div>

      {/* Situational Swaps Strip */}
      <div className="mt-5 pt-4 border-t border-slate-800/80">
        <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2.5">
          Opsi Situasional (Ganti Slot Terakhir)
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {hero.situationalBuild.slice(0, 3).map((sitItem, idx) => (
            <SituationalSwapPill
              key={idx}
              sitItem={sitItem}
              defaultReplaceItem={hero.coreBuild[5]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
