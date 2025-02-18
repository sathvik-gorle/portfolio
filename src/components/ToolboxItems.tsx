'use client';

import { twMerge } from 'tailwind-merge';
import { TechIcon } from './TechIcon';
import { Fragment } from 'react';

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] overflow-hidden',
        className
      )}
    >
      {/* The scrolling wrapper for repeating items */}
      <div
        className={twMerge(
          'flex flex-none py-1 gap-6 pr-6',
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-3 py-2 px-4 rounded-lg
                           outline outline-2 outline-white/10 bg-white/5
                           hover:bg-white/10 hover:outline-white/20 transition"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold text-gray-100">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
