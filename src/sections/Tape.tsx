'use client';

import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';

const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip bg-gray-900">
      {/* Updated gradient from blue-500 to-blue-700 for consistency */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s] hover:[animation-play-state:paused] cursor-pointer">
            {[...new Array(2)].map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center px-2">
                    <span className="text-white uppercase font-extrabold text-sm tracking-wide">
                      {word}
                    </span>
                    <StarIcon className="w-6 h-6 text-white -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
