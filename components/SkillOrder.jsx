'use client';

import React from 'react';

export default function SkillOrder({ skillOrder }) {
  if (!skillOrder || !skillOrder.levels) return null;

  const skillColor = (skillName) => {
    if (skillName.includes('Ultimate')) return 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-black';
    if (skillName.includes('Skill 1')) return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold';
    if (skillName.includes('Skill 2')) return 'bg-purple-500/20 text-purple-300 border-purple-500/40 font-bold';
    return 'bg-slate-800 text-slate-300 border-slate-700';
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
        <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          Urutan Prioritas Leveling Skill
        </h3>
        {skillOrder.priority && (
          <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            {skillOrder.priority}
          </span>
        )}
      </div>

      {/* Grid Leveling Steps */}
      <div className="overflow-x-auto pb-2 scrollbar-none">
        <div className="min-w-[600px] grid grid-cols-12 gap-1.5 text-center">
          {skillOrder.levels.map((item) => (
            <div key={item.level} className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold text-slate-500">
                Lv {item.level}
              </span>
              <div
                className={`py-2 px-1 text-[11px] rounded-lg border transition-all ${skillColor(item.skill)}`}
                title={`Level ${item.level}: Tingkatkan ${item.skill}`}
              >
                {item.skill.replace('Skill ', 'S').replace('Ultimate', 'ULT')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
