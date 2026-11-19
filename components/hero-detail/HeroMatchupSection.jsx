'use client';

import React from 'react';
import Link from 'next/link';
import SafeImage from '../SafeImage';
import { getHeroBySlug } from '../../data/heroes';

function MatchupHeroPill({ item, borderClass }) {
  const matched = getHeroBySlug(item.slug || item.name);
  const mDir = matched?.dirName || item.name;
  const avatarPath = `/Assets/Hero Icons/${mDir}/${mDir}.png`;

  return (
    <Link
      href={`/${matched?.slug || item.name.toLowerCase()}`}
      title={item.reason}
      className={`bg-slate-950/80 border ${borderClass} rounded-xl p-1.5 flex items-center gap-2 transition-all`}
    >
      <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-900 flex-shrink-0">
        <SafeImage
          src={avatarPath}
          alt={item.name}
          fallbackType="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <span className="block text-xs font-bold text-slate-200 truncate">
          {item.name}
        </span>
        <span className="block text-[9px] text-slate-500 truncate">
          {item.role}
        </span>
      </div>
    </Link>
  );
}

export default function HeroMatchupSection({ hero }) {
  if (!hero) return null;

  const matchupGroups = [
    {
      title: 'Lemah Melawan (Countered By)',
      list: hero.counters?.weakAgainst,
      border: 'border-red-500/40 hover:border-red-400',
      dot: 'bg-red-400',
      labelColor: 'text-red-400'
    },
    {
      title: 'Kuat Melawan (Strong Against)',
      list: hero.counters?.strongAgainst,
      border: 'border-amber-500/40 hover:border-amber-400',
      dot: 'bg-amber-400',
      labelColor: 'text-amber-400'
    },
    {
      title: 'Partner Terbaik (Synergizes With)',
      list: hero.counters?.synergies,
      border: 'border-emerald-500/40 hover:border-emerald-400',
      dot: 'bg-emerald-400',
      labelColor: 'text-emerald-400'
    }
  ];

  return (
    <div className="lg:col-span-5 h-fit self-start bg-slate-900/85 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-4">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
        <span className="w-2 h-5 rounded-full bg-emerald-400" />
        <h2 className="text-sm sm:text-base font-black text-slate-100 uppercase tracking-wider">
          Peta Matchup &amp; Sinergi
        </h2>
      </div>

      {matchupGroups.map((group, gIdx) => (
        <div key={gIdx}>
          <div className="flex items-center gap-1.5 mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`} />
            <span className={`text-[10px] font-black uppercase tracking-wider ${group.labelColor}`}>
              {group.title}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {group.list?.slice(0, 3).map((item, idx) => (
              <MatchupHeroPill
                key={idx}
                item={item}
                borderClass={group.border}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
