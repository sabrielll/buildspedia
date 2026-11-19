'use client';

import React, { useState, useEffect, useRef } from 'react';
import SafeImage from '../SafeImage';

function ComboStepIcon({ stepKey, matchedSkill, heroIconPath }) {
  const isAA = stepKey === 'AA';

  return (
    <div className="flex flex-col items-center">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-900 border border-slate-700 overflow-hidden flex items-center justify-center shadow">
        {isAA ? (
          <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2M9.5 17.5L21 6V3h-3L6.5 14.5M11 19l-6-6M8 16l-4 4M5 21l-2-2" />
          </svg>
        ) : (
          <SafeImage
            src={matchedSkill?.icon}
            fallbackSrc={heroIconPath}
            alt={stepKey}
            fallbackType="spell"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <span className="mt-1 text-[10px] font-black text-cyan-400">
        {stepKey === '3' ? 'ULT' : stepKey === 'AA' ? 'AA' : `S${stepKey}`}
      </span>
    </div>
  );
}

function VideoHudOverlay({ isPaused, isSlowMo, onToggleSlowMo, onTogglePlayPause }) {
  return (
    <div className="absolute top-2.5 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
      {/* Left Badge: Live Auto-Loop Status */}
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/70">
        <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-200">
          {isPaused ? 'Paused' : 'Auto-Loop'} • {isSlowMo ? '0.5x Slow-Mo' : '1.0x Speed'}
        </span>
      </div>

      {/* Right Controls: Slow-Mo Toggle & Play/Pause */}
      <div className="flex items-center gap-1.5 pointer-events-auto">
        <button
          type="button"
          onClick={onToggleSlowMo}
          className={`px-2.5 py-1 rounded-full text-[10px] font-black backdrop-blur-md border transition-all cursor-pointer ${
            isSlowMo
              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-glow-gold'
              : 'bg-slate-950/75 text-slate-300 border-slate-700/70 hover:border-cyan-400 hover:text-cyan-300'
          }`}
          title="Perlambat video 0.5x untuk melihat detail kombo"
        >
          {isSlowMo ? '⚡ 0.5x Slow-Mo' : '1.0x Normal'}
        </button>

        <button
          type="button"
          onClick={onTogglePlayPause}
          className="w-7 h-7 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/70 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 flex items-center justify-center transition-all cursor-pointer"
          title={isPaused ? 'Play' : 'Pause'}
        >
          {isPaused ? (
            <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default function HeroComboVideo({ hero, activeSkills }) {
  const [activeComboIdx, setActiveComboIdx] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isSlowMo, setIsSlowMo] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = isSlowMo ? 0.5 : 1.0;
    }
  }, [isSlowMo, activeComboIdx, videoFailed]);

  if (!hero) return null;

  const dirName = hero.dirName || hero.name;
  const heroIconPath = hero.assets?.heroIcon || `/Assets/Hero Icons/${dirName}/${dirName}.png`;
  const heroPortraitPath = hero.assets?.heroPortrait || `/Assets/Hero Icons/${dirName}/${dirName}_rec.png`;

  const getSkillByKey = (key) => {
    if (key === '1') return activeSkills?.[0];
    if (key === '2') return activeSkills?.[1];
    if (key === '3' || key === 'ULT') return activeSkills?.[2];
    return null;
  };

  const comboList = hero.comboVideos || [
    {
      id: 'poke',
      title: 'Early Poke (Minim Skill)',
      sequence: ['1', 'AA', '2'],
      videoPath: `/Assets/Videos/${dirName}/${dirName}_poke.mp4`,
    },
    {
      id: 'full',
      title: 'Full Skill Combo',
      sequence: hero.visualCombo || ['2', 'AA', '1', 'AA', '3'],
      videoPath: `/Assets/Videos/${dirName}/${dirName}_full.mp4`,
    },
  ];
  const currentCombo = comboList[activeComboIdx] || comboList[0];

  const togglePlayPause = () => {
    if (videoRef.current && !videoFailed) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    } else {
      setIsPaused((p) => !p);
    }
  };

  return (
    <div className="pt-4 border-t border-slate-800/80 space-y-3.5">
      {/* Top Row: Title & Mode Switcher Tabs (Early Poke vs Full Skill) */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-4 rounded-full bg-indigo-400" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-200">
            Urutan Kombo &amp; Video Tutorial
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          {comboList.map((cItem, cIdx) => {
            const isSelected = activeComboIdx === cIdx;
            return (
              <button
                key={cItem.id}
                onClick={() => {
                  setActiveComboIdx(cIdx);
                  setVideoFailed(false);
                  setIsPaused(false);
                  setVideoProgress(0);
                }}
                className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cItem.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Middle Row: Static Visual Combo Icons Bar */}
      {currentCombo.sequence && (
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 flex items-center justify-center gap-2.5 sm:gap-4">
          {currentCombo.sequence.map((stepKey, idx) => (
            <React.Fragment key={idx}>
              <ComboStepIcon
                stepKey={stepKey}
                matchedSkill={getSkillByKey(stepKey)}
                heroIconPath={heroIconPath}
              />
              {idx < currentCombo.sequence.length - 1 && (
                <span className="text-slate-500 font-black text-xs -mt-3.5">
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Auto-Play Loop Video Canvas with Floating Glassmorphism HUD & Bottom Progress Bar */}
      <div className="relative w-full aspect-video max-h-[270px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/90 shadow-xl group">
        <VideoHudOverlay
          isPaused={isPaused}
          isSlowMo={isSlowMo}
          onToggleSlowMo={() => setIsSlowMo((s) => !s)}
          onTogglePlayPause={togglePlayPause}
        />

        {!videoFailed ? (
          <video
            ref={videoRef}
            key={currentCombo.videoPath}
            src={encodeURI(currentCombo.videoPath)}
            className="w-full h-full object-cover cursor-pointer"
            autoPlay
            loop
            muted
            playsInline
            onClick={togglePlayPause}
            onTimeUpdate={(e) => {
              const vid = e.currentTarget;
              if (vid.duration) {
                setVideoProgress((vid.currentTime / vid.duration) * 100);
              }
            }}
            onError={() => setVideoFailed(true)}
          />
        ) : (
          /* Clean Video Preview Placeholder saat file .mp4 belum ditaruh */
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-center select-none">
            <SafeImage
              src={heroPortraitPath}
              fallbackSrc={heroIconPath}
              alt={hero.name}
              fallbackType="hero"
              className="absolute inset-0 w-full h-full object-cover object-[center_15%] opacity-20 blur-[2px] scale-105 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-sm mt-2">
              <div className="w-10 h-10 rounded-full bg-cyan-500/15 border border-cyan-400/50 flex items-center justify-center text-cyan-400 mb-2 shadow-glow-cyan">
                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-xs font-black text-slate-200">
                Video Preview: {currentCombo.title}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">
                Taruh file video pendek Anda di path berikut:
              </span>
              <code className="mt-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-amber-400">
                public{currentCombo.videoPath}
              </code>
            </div>
          </div>
        )}

        {/* Bottom Glowing Loop Progress Bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-slate-900 z-20">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-amber-400 transition-all duration-150"
            style={{
              width: !videoFailed ? `${videoProgress}%` : '0%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
