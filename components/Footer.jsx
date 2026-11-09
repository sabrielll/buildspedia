import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-black text-amber-400 text-sm">
              BP
            </div>
            <div>
              <div className="font-bold text-slate-200">
                BUILDS<span className="text-amber-400">PEDIA</span>
              </div>
              <div className="text-xs text-slate-500">
                Panduan Komprehensif Mobile Legends: Bang Bang
              </div>
            </div>
          </div>

          <div className="text-xs text-center md:text-right text-slate-500 max-w-md">
            Dibangun dengan Next.js, Tailwind CSS, dan Framer Motion. Terinspirasi oleh arsitektur dan kejelasan WildRiftFire.
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Buildspedia. Mobile Legends: Bang Bang adalah merek dagang terdaftar milik Moonton Games. Aplikasi ini adalah proyek panduan independen.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Dark Mode MLBB</span>
            <span>•</span>
            <span className="text-amber-400/80 font-medium">Auto Fallback Protection Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
