'use client';

import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <section className="relative z-0 overflow-x-clip py-32 md:py-48 lg:py-40 bg-gray-900 text-white">
      {/* Background Orbits / Decorations */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        {/* Hero rings or orbits */}
        <div className="size-[620px] hero-ring border-blue-800/50" />
        <div className="size-[820px] hero-ring border-blue-700/50" />
        <div className="size-[1020px] hero-ring border-blue-600/50" />
        <div className="size-[1220px] hero-ring border-blue-500/50" />

        {/* Blue-themed Orbits */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="w-8 h-8 text-blue-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="w-5 h-5 text-blue-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="w-2 h-2 rounded-full bg-blue-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="w-10 h-10 text-blue-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="12s"
        >
          <StarIcon className="w-12 h-12 text-blue-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="w-8 h-8 text-blue-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="52s">
          <div className="w-2 h-2 rounded-full bg-blue-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="w-14 h-14 text-blue-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="66s">
          <div className="w-3 h-3 rounded-full bg-blue-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="88s"
          shouldSpin
          spinDuration="24s"
        >
          <StarIcon className="w-28 h-28 text-blue-300" />
        </HeroOrbit>
      </div>

      <div className="container relative">
        {/* Memoji + Status */}
        <div className="flex flex-col items-center">
          {/* <Image
            src={memojiImage}
            alt="Memoji behind laptop"
            className="w-24 h-24 md:w-[100px] md:h-[100px]"
          /> */}
          <div className="bg-gray-800 border border-gray-700 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="relative w-2.5 h-2.5 rounded-full bg-blue-500">
              <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping-large" />
            </div>
            <span className="text-sm font-medium text-gray-100">Open for New Ventures</span>
          </div>
        </div>

        <div className="max-w-xl mx-auto mt-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-white">
            {/* Building &amp; Scaling Businesses */}
			Hi, I am Sathvik Gorle.
          </h1>
          <p className="mt-4 text-white/70 md:text-lg">
            I’m an entrepreneur and developer on a mission to create impactful ventures
            and great web experiences. Let's explore together.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <button
            className="inline-flex items-center gap-2 border border-white/20 px-6 h-12 rounded-xl
                       text-gray-100 hover:bg-white/10 transition"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900
                       h-12 px-6 rounded-xl hover:bg-gray-50 transition"
          >
            <span>👋</span>
            <span className="font-semibold">Let’s Talk</span>
          </button>
        </div>
      </div>
    </section>
  );
};
