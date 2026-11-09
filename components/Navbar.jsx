'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-0.5 shadow-glow-gold flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="text-amber-400 font-black text-lg tracking-tighter">B</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1 font-black tracking-wider text-lg text-slate-100">
              BUILDS<span className="text-amber-400">PEDIA</span>
            </div>
            <div className="text-[10px] font-semibold tracking-widest text-cyan-400 uppercase -mt-1">
              MLBB Meta Hub
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              pathname === '/'
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-glow-cyan'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Daftar Hero & Build
          </Link>
          <a
            href="#meta-tier"
            className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
          >
            Tier List
          </a>
          <a
            href="#emblems"
            className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
          >
            Emblem Talents
          </a>
        </nav>

        {/* Patch Version Badge */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-700/80 px-3 py-1 rounded-full text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">Patch:</span>
            <span className="font-bold text-amber-400">1.8.92 Season Meta</span>
          </div>
        </div>
      </div>
    </header>
  );
}
