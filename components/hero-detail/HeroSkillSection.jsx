'use client';

import React from 'react';
import SafeImage from '../SafeImage';
import HeroComboVideo from './HeroComboVideo';

const FIFTEEN_LEVELS = Array.from({ length: 15 }, (_, i) => i + 1);

function QuickPriorityChain({ passiveSkill, activeSkills, heroIconPath }) {
  return (
    <div className="flex items-center gap-1.5 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-xl">
      {passiveSkill && (
        <div className="flex items-center gap-1 pr-2 mr-1 border-r border-slate-800" title={`Pasif: ${passiveSkill.name}`}>
          <div className="w-5 h-5 rounded overflow-hidden border border-amber-500/50">
            <SafeImage src={passiveSkill.icon} fallbackSrc={heroIconPath} alt={passiveSkill.name} fallbackType="spell" className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] font-bold text-amber-400">Pasif</span>
        </div>
      )}
      <span className="text-[10px] font-bold text-slate-400">Max:</span>
      {activeSkills.map((sk, idx) => (
        <React.Fragment key={idx}>
          <div className="flex items-center gap-1" title={sk.name}>
            <div className="w-5 h-5 rounded overflow-hidden border border-cyan-500/50">
              <SafeImage src={sk.icon} fallbackSrc={heroIconPath} alt={sk.name} fallbackType="spell" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-black text-slate-200">
              {idx === 2 ? 'ULT' : `S${idx + 1}`}
            </span>
          </div>
          {idx < activeSkills.length - 1 && <span className="text-xs text-cyan-400 font-black">›</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function SkillTimelineRow({ skill, sIdx, heroIconPath }) {
  const defaultLevels =
    sIdx === 0
      ? [1, 3, 5, 7, 9, 11]
      : sIdx === 1
      ? [2, 6, 10, 13, 14, 15]
      : [4, 8, 12];
  const activeLvls = skill.levels || defaultLevels;

  return (
    <div className="w-full">
      {/* Nama Skill diletakkan di atas baris agar ke-15 kotak level leluasa penuh di layar HP */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-black uppercase text-cyan-400">
            {skill.type}
          </span>
          <span className="text-slate-600 text-[10px]">•</span>
          <span className="text-xs font-bold text-slate-200">
            {skill.name}
          </span>
        </div>
        <span className="text-[10px] text-slate-500 font-medium">
          CD: {skill.cooldown}
        </span>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Ikon Skill */}
        <div
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-950 border border-slate-700 overflow-hidden flex-shrink-0"
          title={skill.name}
        >
          <SafeImage
            src={skill.icon}
            fallbackSrc={heroIconPath}
            alt={skill.name}
            fallbackType="spell"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 15 Kotak Level Responsif Penuh (Tanpa Perlu Scroll Samping) */}
        <div
          className="flex-1 grid gap-0.5 sm:gap-1"
          style={{ gridTemplateColumns: 'repeat(15, minmax(0, 1fr))' }}
        >
          {FIFTEEN_LEVELS.map((lvl) => {
            const isUpgraded = activeLvls.includes(lvl);
            return (
              <div
                key={lvl}
                className={`h-7 sm:h-8 rounded flex items-center justify-center text-[10px] sm:text-xs font-black transition-all ${
                  isUpgraded
                    ? sIdx === 2
                      ? 'bg-amber-500 text-slate-950 shadow-glow-gold'
                      : 'bg-cyan-500/25 text-cyan-300 border border-cyan-400/70'
                    : 'bg-slate-950/70 text-slate-700 border border-slate-800/60'
                }`}
              >
                {isUpgraded ? lvl : ''}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function HeroSkillSection({ hero }) {
  if (!hero) return null;

  const dirName = hero.dirName || hero.name;
  const heroIconPath = hero.assets?.heroIcon || `/Assets/Hero Icons/${dirName}/${dirName}.png`;
  const passiveSkill = hero.skills?.find((s) => s.key === 'P' || s.type === 'Passive') || hero.skills?.[0];
  const activeSkills = hero.skills?.filter((s) => s.key !== 'P' && s.type !== 'Passive') || [];

  return (
    <div className="lg:col-span-7 bg-slate-900/85 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-between space-y-5">
      <div>
        {/* Header Bar: Title + Passive Badge + Quick Order */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-5 rounded-full bg-cyan-400" />
            <h2 className="text-sm sm:text-base font-black text-slate-100 uppercase tracking-wider">
              Prioritas Skill (Lv 1 – 15)
            </h2>
          </div>

          <QuickPriorityChain
            passiveSkill={passiveSkill}
            activeSkills={activeSkills}
            heroIconPath={heroIconPath}
          />
        </div>

        {/* 3 Active Skills Timeline Rows */}
        <div className="space-y-3.5">
          {activeSkills.map((skill, sIdx) => (
            <SkillTimelineRow
              key={sIdx}
              skill={skill}
              sIdx={sIdx}
              heroIconPath={heroIconPath}
            />
          ))}
        </div>
      </div>

      {/* Bagian Kombo & Auto-Play Video Tutorial */}
      <HeroComboVideo hero={hero} activeSkills={activeSkills} />
    </div>
  );
}
