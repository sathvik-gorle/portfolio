'use client';

import StarIcon from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';

/**
 * CardHeader displays a small star icon, a title, and a description.
 * Updated for a more subtle, blue-accent look.
 */
export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        'flex flex-col p-6 md:py-8 md:px-10 text-gray-100',
        className
      )}
    >
      <div className="inline-flex items-center gap-2">
        <StarIcon className="w-6 h-6 text-blue-400" />
        <h3 className="font-serif text-3xl text-gray-50">{title}</h3>
      </div>
      <p className="text-sm lg:text-base text-gray-300 mt-2 lg:max-w-xs">
        {description}
      </p>
    </div>
  );
};
