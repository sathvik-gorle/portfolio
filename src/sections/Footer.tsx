'use client';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  { title: 'YouTube', href: '#' },
  { title: 'Twitter', href: '#' },
  { title: 'Instagram', href: '#' },
  { title: 'LinkedIn', href: '#' },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip bg-gray-900 text-white">
      {/* Blue ring or accent at bottom (optional) */}
      <div className="absolute h-[300px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-blue-700/30 
                      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" 
      />

      <div className="container border-t border-white/10 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="text-white/40">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
        <nav className="flex flex-col md:flex-row items-center gap-8">
          {footerLinks.map((link) => (
            <a
              href={link.href}
              key={link.title}
              className="inline-flex items-center gap-1.5 text-white hover:text-blue-300 transition"
            >
              <span className="font-semibold">{link.title}</span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
