'use client';

import React, { useState } from 'react';
import SafeImage from './SafeImage';

/**
 * ItemIcon - Komponen Reusable untuk Menampilkan Item MLBB
 * Mendukung kategori: Boots, Defense, Magical, Physical
 * Path dinamis: /Assets/Build Icons/[Kategori_Item]/[Nama_Item].png
 */
export default function ItemIcon({
  item,
  size = 'md', // 'sm' | 'md' | 'lg'
  showTooltip = true,
  slotNumber = null,
  showLabel = false,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item) return null;

  // Resolusi path gambar: gunakan item.assetPath atau susun dari category & filename
  const category = item.category || 'Physical';
  const filename = item.filename || `${item.name?.replace(/\s+/g, '_')}.png`;
  const imagePath = item.assetPath || `/Assets/Build Icons/${category}/${filename}`;

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  };

  const categoryColors = {
    Boots: 'border-amber-500/60 text-amber-400 bg-amber-500/10',
    Magical: 'border-cyan-400/60 text-cyan-400 bg-cyan-400/10',
    Physical: 'border-red-500/60 text-red-400 bg-red-500/10',
    Defense: 'border-emerald-500/60 text-emerald-400 bg-emerald-500/10',
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center group ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Container Item Icon */}
      <div
        className={`relative ${sizeClasses[size] || sizeClasses.md} rounded-xl bg-slate-900/90 p-1.5 
          border-2 border-slate-700/80 transition-all duration-300 cursor-pointer
          group-hover:border-cyan-400 group-hover:shadow-glow-cyan group-hover:scale-105 overflow-hidden`}
      >
        {/* Glow Background Radial */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-80" />

        {/* Gambar Item */}
        <SafeImage
          src={imagePath}
          alt={item.name || 'Item'}
          fallbackType="item"
          className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        />

        {/* Slot Number Badge jika disediakan */}
        {slotNumber !== null && (
          <span className="absolute -top-1 -left-1 z-20 w-4 h-4 bg-amber-500 text-slate-950 text-[10px] font-black rounded-full flex items-center justify-center shadow">
            {slotNumber}
          </span>
        )}
      </div>

      {/* Label Nama di bawah jika diminta */}
      {showLabel && (
        <span className="mt-1.5 text-xs text-slate-300 font-medium text-center truncate max-w-[80px]">
          {item.name}
        </span>
      )}

      {/* Tooltip Hover Kaya Data (WildRiftFire Style) */}
      {showTooltip && isOpen && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 z-50 pointer-events-none">
          <div className="bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 rounded-xl p-3 shadow-2xl shadow-cyan-950/60 text-left animate-fadeIn">
            {/* Header Tooltip */}
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-2 mb-2">
              <div>
                <h4 className="text-sm font-bold text-slate-100 leading-tight">{item.name}</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold border ${categoryColors[category] || 'border-slate-600 text-slate-300'}`}>
                    {category}
                  </span>
                  {item.cost && (
                    <span className="text-[10px] text-amber-400 font-semibold flex items-center gap-0.5">
                      🪙 {item.cost}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Stats */}
            {item.stats && (
              <p className="text-xs text-cyan-300 font-medium mb-1.5 leading-relaxed">
                {item.stats}
              </p>
            )}

            {/* Passive */}
            {item.passive && (
              <div className="text-[11px] text-slate-300/90 mb-1.5 leading-relaxed">
                <span className="text-amber-400 font-semibold">Pasif: </span>
                {item.passive}
              </div>
            )}

            {/* Why Buy Reason */}
            {item.whyBuy && (
              <div className="text-[11px] text-slate-400 bg-slate-800/80 p-1.5 rounded border border-slate-700/50 mt-1">
                <span className="text-cyan-400 font-semibold">Alasan Build: </span>
                {item.whyBuy}
              </div>
            )}

            {/* Arrow Tooltip */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-2.5 h-2.5 bg-slate-900 border-r border-b border-cyan-500/40 rotate-45" />
          </div>
        </div>
      )}
    </div>
  );
}
