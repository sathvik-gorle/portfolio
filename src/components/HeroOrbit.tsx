'use client';

import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * HeroOrbit applies rotating/spinning animations for decorative elements.
 * Updated for clarity; still allows custom durations, rotation, etc.
 */
export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  orbitDuration?: string;
  shouldSpin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Outer orbit container */}
      <div
        className={twMerge(shouldOrbit && 'animate-spin')}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        {/* Rotation wrapper */}
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          {/* Inner spin container */}
          <div
            className={twMerge(shouldSpin && 'animate-spin')}
            style={{
              animationDuration: spinDuration,
            }}
          >
            {/* Correct the child rotation */}
            <div
              className="inline-flex"
              style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
