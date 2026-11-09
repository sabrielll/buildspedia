'use client';

import React, { useState } from 'react';

/**
 * SafeImage - Komponen gambar dengan proteksi fallback otomatis
 * Menangani dynamic path, encoding spasi pada folder (misal "Hero Icons"),
 * dan menampilkan fallback SVG MLBB-themed jika file gagal dimuat.
 */
export default function SafeImage({
  src,
  alt = 'Image',
  className = '',
  fallbackType = 'default', // 'hero' | 'item' | 'emblem' | 'spell' | 'role' | 'default'
  width,
  height,
  ...props
}) {
  const [hasError, setHasError] = useState(false);

  // Encode URL path jika mengandung spasi seperti "Hero Icons", "Build Icons"
  const formattedSrc = React.useMemo(() => {
    if (!src) return '';
    try {
      // Decode dulu untuk cegah double encoding, lalu encode URI
      return encodeURI(decodeURI(src));
    } catch (e) {
      return src;
    }
  }, [src]);

  if (!src || hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-800/90 border border-slate-700/60 rounded text-slate-400 select-none overflow-hidden ${className}`}
        style={{ width: width ? `${width}px` : undefined, height: height ? `${height}px` : undefined }}
        title={`${alt} (Placeholder)`}
      >
        {fallbackType === 'hero' && (
          <div className="flex flex-col items-center justify-center p-1 text-center">
            <svg className="w-6 h-6 text-amber-400/80 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px] font-bold text-slate-300 truncate max-w-full px-1">{alt}</span>
          </div>
        )}

        {fallbackType === 'item' && (
          <div className="flex flex-col items-center justify-center p-1 text-center">
            <svg className="w-5 h-5 text-cyan-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[9px] font-semibold text-slate-400 truncate max-w-full">{alt}</span>
          </div>
        )}

        {fallbackType === 'emblem' && (
          <div className="flex flex-col items-center justify-center p-1 text-center">
            <svg className="w-5 h-5 text-amber-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        )}

        {fallbackType === 'spell' && (
          <div className="flex flex-col items-center justify-center p-1 text-center">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
          </div>
        )}

        {(fallbackType === 'role' || fallbackType === 'default') && (
          <div className="flex items-center justify-center">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={formattedSrc}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      width={width}
      height={height}
      {...props}
    />
  );
}
