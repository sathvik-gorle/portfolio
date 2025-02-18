'use client';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20 bg-gray-900 text-white">
      <div className="container">
        <div
          className="relative overflow-hidden py-8 px-10 bg-gradient-to-r from-blue-600 to-sky-500
                     rounded-3xl shadow-xl text-center md:text-left"
        >
          {/* Subtle grain overlay */}
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
              backgroundSize: 'cover',
            }}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let’s build something remarkable
              </h2>
              <p className="text-sm mt-2 md:text-base text-white/90">
                Ready to bring your next idea to life? Let’s talk about how I can
                help you achieve your goals.
              </p>
            </div>
            <div>
              <button
                className="inline-flex items-center gap-2 px-6 h-12 rounded-xl
                           text-gray-900 bg-white hover:bg-gray-100 border border-transparent transition
                           font-semibold"
              >
                <span>Contact Me</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
