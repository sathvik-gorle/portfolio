'use client';

import grainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * Reusable Card component with a subtle blue-ish gradient background,
 * outline, and a grain texture. Also includes a hover lift/shine effect.
 */
export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        // Dark background with blue-ish gradient
        "relative z-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d0f12] to-[#1a1e25] \
        shadow transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-xl \
        after:z-10 after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-blue-500/30 \
        after:pointer-events-none",
        className
      )}
      {...other}
    >
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: 'cover' }}
      />
      {children}
    </div>
  );
};
