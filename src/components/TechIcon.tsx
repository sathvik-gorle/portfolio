'use client';

import React from 'react';

/**
 * Wraps a provided SVG icon in a linear gradient fill,
 * updated to use a blue gradient.
 */
export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="w-8 h-8 fill-[url(#tech-icon-gradient)]" />
      {/* Defining a custom gradient for the icon fill */}
      <svg className="w-0 h-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(59 130 246)" /> {/* Tailwind's blue-500 */}
          <stop offset="100%" stopColor="rgb(14 165 233)" /> {/* Tailwind's sky-400 */}
        </linearGradient>
      </svg>
    </>
  );
};
