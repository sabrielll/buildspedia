'use client';

import React from 'react';
import SafeImage from '../SafeImage';

function EmblemTalentNode({ talent }) {
  if (!talent) return null;
  const tPath = talent.assetPath || `/Assets/Emblem/${talent.category}/${talent.filename}`;

  return (
    <div
      className="group flex flex-col items-center text-center w-16"
      title={`${talent.name}: ${talent.effect}`}
    >
      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full p-1 bg-slate-900 border-2 border-slate-700 group-hover:border-cyan-400 transition-all overflow-hidden">
        <SafeImage
          src={tPath}
          alt={talent.name}
          fallbackType="emblem"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <span className="mt-1.5 text-[10px] font-medium text-slate-300 leading-tight truncate w-full">
        {talent.name}
      </span>
    </div>
  );
}

function BattleSpellPill({ spell, isPrimary }) {
  const spellCat = spell.category || 'Spells';
  const spellPath =
    spell.assetPath ||
    (spellCat === 'Boots'
      ? `/Assets/Build Icons/Boots/${spell.filename}`
      : `/Assets/Spells/${spell.filename}`);

  return (
    <div
      title={spell.description}
      className={`p-2.5 rounded-xl bg-slate-950/70 border flex items-center gap-3 ${
        isPrimary ? 'border-amber-500/40' : 'border-slate-800'
      }`}
    >
      <div className="w-11 h-11 rounded-full p-0.5 bg-slate-900 border border-slate-700 flex-shrink-0 overflow-hidden">
        <SafeImage
          src={spellPath}
          alt={spell.name}
          fallbackType="spell"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="min-w-0">
        <span className="block text-[9px] font-black uppercase text-amber-400 truncate">
          {isPrimary ? 'Utama' : 'Alternatif'}
        </span>
        <span className="block text-xs font-bold text-slate-100 truncate">
          {spell.name}
        </span>
      </div>
    </div>
  );
}

export default function HeroLoadoutSection({ hero }) {
  if (!hero) return null;

  const talents = [hero.emblem?.tier1, hero.emblem?.tier2, hero.emblem?.tier3];

  return (
    <div className="lg:col-span-5 bg-slate-900/85 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-between gap-5">
      {/* Emblem Connected Pipeline */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-5 rounded-full bg-purple-400" />
            <h2 className="text-sm sm:text-base font-black text-slate-100 uppercase tracking-wider">
              Emblem &amp; Talents
            </h2>
          </div>
          <span className="text-[11px] font-bold text-amber-400">
            {hero.emblem?.name?.replace('Custom ', '')}
          </span>
        </div>

        {hero.emblem && (
          <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-3.5">
            <div className="flex items-center justify-between gap-1">
              {/* Base Emblem */}
              <div className="flex flex-col items-center text-center w-16" title={hero.emblem.baseStats}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl p-1.5 bg-slate-900 border-2 border-amber-400 shadow-glow-gold flex items-center justify-center">
                  <SafeImage
                    src={hero.emblem.assetPath || `/Assets/Emblem/${hero.emblem.category}/Custom_Assassin_Emblem.png`}
                    alt={hero.emblem.name}
                    fallbackType="emblem"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-1.5 text-[10px] font-bold text-amber-300 leading-tight truncate w-full">
                  Utama
                </span>
              </div>

              <div className="h-0.5 flex-1 bg-slate-800 -mt-4" />

              {/* 3 Tier Talents */}
              {talents.map((talent, tIdx) => (
                <React.Fragment key={tIdx}>
                  <EmblemTalentNode talent={talent} />
                  {tIdx < 2 && <div className="h-0.5 flex-1 bg-slate-800 -mt-4" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Battle Spells Horizontal Pills */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-5 rounded-full bg-cyan-400" />
          <h2 className="text-sm sm:text-base font-black text-slate-100 uppercase tracking-wider">
            Battle Spells
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {hero.spells.slice(0, 2).map((spell, idx) => (
            <BattleSpellPill key={idx} spell={spell} isPrimary={idx === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}
