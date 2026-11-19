'use client';

import React, { useState } from 'react';
import SafeImage from './SafeImage';

/**
 * ItemIcon - Komponen Reusable untuk Menampilkan Item MLBB
 * Mendukung bentuk lingkaran bersih ('circle') maupun kotak melengkung ('rounded')
 */
export default function ItemIcon({
  item,
  size = 'md', // 'xs' | 'sm' | 'md' | 'lg'
  shape = 'circle', // 'circle' | 'rounded'
  showTooltip = true,
  slotNumber = null,
  showLabel = false,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item) return null;

  const category = item.category || 'Physical';
  const filename = item.filename || `${item.name?.replace(/\s+/g, '_')}.png`;
  const imagePath = item.assetPath || `/Assets/Build Icons/${category}/${filename}`;

  const sizeClasses = {
    xs: 'w-9 h-9',
    sm: 'w-11 h-11',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  };

  const categoryColors = {
    Boots: 'border-amber-500/60 text-amber-400 bg-amber-500/10',
    Magical: 'border-cyan-400/60 text-cyan-400 bg-cyan-400/10',
    Physical: 'border-red-500/60 text-red-400 bg-red-500/10',
    Defense: 'border-emerald-500/60 text-emerald-400 bg-emerald-500/10',
  };

  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-xl';

  return (
    <div
      className={`relative inline-flex flex-col items-center group ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Wrapper Relatif (tanpa overflow-hidden agar badge nomor slot utuh) */}
      <div className="relative transition-transform duration-200 group-hover:scale-105">
        <div
          className={`relative ${sizeClasses[size] || sizeClasses.md} ${shapeClass} bg-slate-950 p-1 
            border-2 border-slate-700/80 transition-all duration-200 cursor-pointer
            group-hover:border-cyan-400 group-hover:shadow-glow-cyan overflow-hidden`}
        >
          <SafeImage
            src={imagePath}
            alt={item.name || 'Item'}
            fallbackType="item"
            className={`relative z-10 w-full h-full object-cover ${shapeClass}`}
          />
        </div>

        {/* Slot Number Badge */}
        {slotNumber !== null && (
          <span className="absolute -top-1 -left-1 z-20 w-5 h-5 bg-amber-500 text-slate-950 text-[10px] font-black rounded-full border-2 border-slate-900 flex items-center justify-center shadow-md pointer-events-none">
            {slotNumber}
          </span>
        )}
      </div>

      {/* Label Nama di bawah */}
      {showLabel && (
        <span className="mt-1.5 text-[11px] text-slate-300 group-hover:text-cyan-300 font-medium text-center leading-tight max-w-[78px] line-clamp-2 transition-colors">
          {item.name}
        </span>
      )}

      {/* Tooltip Hover Detail Statistik Item */}
      {showTooltip && isOpen && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 z-50 pointer-events-none">
          <div className="bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 rounded-xl p-3 shadow-2xl shadow-slate-950 text-left animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1.5">
              <div>
                <h4 className="text-xs font-bold text-slate-100 leading-tight">{item.name}</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className={`text-[9px] px-1.5 py-0.2 rounded font-semibold border ${categoryColors[category] || 'border-slate-600 text-slate-300'}`}>
                    {category}
                  </span>
                  {item.cost && (
                    <span className="text-[10px] text-amber-400 font-semibold">
                      🪙 {item.cost}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {item.stats && (
              <p className="text-[11px] text-cyan-300 font-medium mb-1 leading-snug">
                {item.stats}
              </p>
            )}

            {item.passive && (
              <div className="text-[10px] text-slate-300/90 leading-snug">
                <span className="text-amber-400 font-semibold">Pasif: </span>
                {item.passive}
              </div>
            )}

            {item.whyBuy && (
              <div className="text-[10px] text-slate-400 bg-slate-950/70 p-1.5 rounded border border-slate-800 mt-1.5">
                <span className="text-cyan-400 font-semibold">Tips: </span>
                {item.whyBuy}
              </div>
            )}

            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-2 h-2 bg-slate-900 border-r border-b border-cyan-500/40 rotate-45" />
          </div>
        </div>
      )}
    </div>
  );
}
