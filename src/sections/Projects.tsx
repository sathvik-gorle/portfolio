'use client';

import { useRef, useEffect, useState } from 'react';
import RADAR from '@/assets/images/radar.png';
import ABuilds from '@/assets/images/abuilds.png';
import SignHere from '@/assets/images/signherealt.png';
import ABuildsWeb from '@/assets/images/abuildsweb.png'

import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { motion } from 'framer-motion';

import ProjectRefugee from '@/assets/images/projectrefugee.png'
import Terrabite from '@/assets/images/terrabite.png'
import Robotics from '@/assets/images/yeti.png'

/**
 * Offsets for sticky featured projects (used in inline style).
 * This array is static, so no SSR mismatch here.
 */
const projectOffsets = [
  'calc(64px + 0px)',
  'calc(64px + 40px)',
  'calc(64px + 80px)',
];

/** 
 * FEATURED PROJECTS
 */
const portfolioProjects = [
  {
    company: "SmathHacks 2025 AI & ML Winner",
    year: "2025",
    title: "RADAR",
    results: [
      { title: "In Progress: AI CNN-powered satellite image detection for disaster relief" },
      { title: "Assesses damage from satellite data" },
      { title: "Developed front end & actively working on back-end" },
    ],
    link: "https://radar-web-flame.vercel.app",
    image: RADAR,
  },
  {
    company: "SignHere Inc",
    year: "2024",
    title: "SignHere",
    results: [
      { title: "ASL learning platform, Duolingo-like" },
      { title: "Won Congressional App Challenge" },
      { title: "Full-stack development" },
    ],
    link: "https://www.congressionalappchallenge.us/24-nc14/",
    image: SignHere,
  },
  {
    company: "ABuilds",
    year: "2024",
    title: "ABuilds Website",
    results: [
      { title: "$14,000 revenue in PC building business" },
      { title: "Optimized user experience" },
      { title: "Integrated e-commerce system" },
    ],
    link: "https://a-builds.com",
    image: ABuildsWeb,
  },
];

/**
 * ENTREPRENEURIAL VENTURES (Auto-scrolling)
 */
const entrepreneurialVentures = [
  {
    name: "ABuilds",
    description:
      "Innovative PC-building business driving revenue with custom, personalized systems.",
    link: "https://a-builds.com",
    image: ABuilds,
  },
  {
    name: "terrabite",
    description:
      "An upcoming venture focused on green biochar concrete.",
    link: "https://www.terrabitenc.com/",
    image: Terrabite,
  },
  {
    name: "FRC Robotics",
    description:
      "Worked on YETI and Valence Robotics to fundraise, market, develop a scouting site, and program our robot",
    link: "",
    image: Robotics,
  },
  {
    name: "Project Refugee: No Needs Left Behind",
    description:
      "Worked to fundraise & support over 125 refugee families through workships and aid",
    link: "",
    image: ProjectRefugee,
  },
];

export const ProjectsSection = () => {
  // Using a "hasMounted" flag ensures the code that relies on client-only
  // DOM measurements doesn't run during SSR, preventing hydration mismatch.
  const [hasMounted, setHasMounted] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && marqueeRef.current) {
      // The content is duplicated, so half the offsetWidth is one copy's width.
      setScrollDistance(marqueeRef.current.offsetWidth / 2);
    }
  }, [hasMounted]);

  return (
    <>
      {/* ---------- FEATURED PROJECTS (Sticky) ---------- */}
      <section className="pb-16 lg:py-24 bg-gray-900 text-white relative">
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{
            backgroundImage: `url(${grainImage.src})`,
            backgroundSize: 'cover',
          }}
        />
        <div className="container">
          <SectionHeader
            eyebrow="Real-World Results"
            title="Featured Projects"
            description="Explore the web solutions I’ve crafted to deliver exceptional user experiences."
          />
          <div className="flex flex-col mt-10 md:mt-20 gap-20">
            {portfolioProjects.map((project, idx) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{ top: projectOffsets[idx] }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  {/* Text Content */}
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-blue-400 to-sky-400 text-transparent bg-clip-text inline-flex gap-2 font-bold uppercase tracking-widest text-sm">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl leading-tight">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-gray-300/10 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm md:text-base text-gray-300 leading-relaxed"
                        >
                          <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-blue-500 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-blue-600 transition">
                        <span>Visit Live Site</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </a>
                  </div>
                  {/* Image Content */}
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ENTREPRENEURIAL VENTURES (Auto-scrolling Horizontal Row) ---------- */}
      <section className="pb-16 lg:pb-24 bg-gray-900 text-white relative">
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{
            backgroundImage: `url(${grainImage.src})`,
            backgroundSize: 'cover',
          }}
        />
        <div className="container">
          <SectionHeader
            eyebrow="Beyond the Code"
            title="Entrepreneurial Ventures"
            description="Discover the ventures I've launched or grown – each making a tangible impact."
          />
          <div className="mt-10 md:mt-16 overflow-hidden relative hide-scrollbar">
            {/* Only render the marquee once we know the client DOM measurement. */}
            {hasMounted && (
              <motion.div
                ref={marqueeRef}
                className="flex gap-8"
                // If scrollDistance is 0, there's no horizontal movement yet
                animate={{ x: scrollDistance ? -scrollDistance : 0 }}
                transition={{
                  duration: scrollDistance ? (scrollDistance / 50) : 20,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                {[...entrepreneurialVentures, ...entrepreneurialVentures].map(
                  (venture, index) => (
                    <div key={index} className="w-80 flex-shrink-0">
                      <Card className="p-5 flex flex-col h-full bg-gray-800 text-white hover:shadow-xl transition">
                        <div className="relative w-full h-44 mb-4">
                          <Image
                            src={venture.image}
                            alt={venture.name}
                            fill
                            className="object-cover rounded-xl"
                          />
                        </div>
                        <h4 className="text-lg font-bold mb-2 text-white">
                          {venture.name}
                        </h4>
                        <p className="text-sm text-gray-300 leading-relaxed flex-1">
                          {venture.description}
                        </p>
                        <div className="mt-4">
                          <a
                            href={venture.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-semibold"
                          >
                            <span>Learn More</span>
                            <ArrowRightIcon className="w-4 h-4" />
                          </a>
                        </div>
                      </Card>
                    </div>
                  )
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
