'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroNotFound({ heroNameParam }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-black text-slate-100">Hero Tidak Ditemukan</h1>
      <p className="text-slate-400 text-sm mt-1">
        Hero &quot;{heroNameParam}&quot; belum terdaftar.
      </p>
      <Link
        href="/"
        className="mt-5 px-5 py-2.5 bg-cyan-500 text-slate-950 text-xs font-black rounded-xl"
      >
        Kembali ke Daftar Hero
      </Link>
    </div>
  );
}
