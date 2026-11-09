'use client';

import React from 'react';
import SafeImage from './SafeImage';
import { ROLE_LIST } from '../data/heroes';

export default function RoleFilter({ activeRole, onSelectRole }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {ROLE_LIST.map((role) => {
        const isActive = activeRole === role.id;

        return (
          <button
            key={role.id}
            onClick={() => onSelectRole(role.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${
              isActive
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-glow-cyan border border-cyan-400'
                : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {role.icon && (
              <div className="w-4 h-4 flex items-center justify-center">
                <SafeImage
                  src={role.icon}
                  alt={role.name}
                  fallbackType="role"
                  className={`w-full h-full object-contain filter ${isActive ? 'brightness-125' : 'brightness-90'}`}
                />
              </div>
            )}
            <span>{role.name}</span>
          </button>
        );
      })}
    </div>
  );
}
