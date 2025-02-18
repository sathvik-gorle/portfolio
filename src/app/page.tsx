'use client';

import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { useRef } from 'react';

export default function Home() {
	const homeRef = useRef(null);
	const projectsRef = useRef(null);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<div>
			<Header
				refs={{
					homeRef,
					projectsRef,
					aboutRef,
					contactRef,
				}}
			/>
			<section ref={homeRef} id="home">
				<HeroSection />
			</section>
			<section ref={projectsRef} id="projects">
				<ProjectsSection />
			</section>
			<TapeSection />
			
			<section ref={aboutRef} id="about">
				<AboutSection />
			</section>
			<section ref={contactRef} id="contact">
				<ContactSection />
			</section>
			<Footer />
		</div>
	);
}
