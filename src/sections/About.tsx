'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';

import mapImage from '@/assets/images/map.png';
// import smileMemoji from ''; // Optional: include if you have an image for your signature

import JavaScriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSS3Icon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';

const toolboxItems = [
	{ title: 'JavaScript', iconType: JavaScriptIcon },
	{ title: 'HTML5', iconType: HTMLIcon },
	{ title: 'CSS3', iconType: CSS3Icon },
	{ title: 'React', iconType: ReactIcon },
	{ title: 'Chrome', iconType: ChromeIcon },
	{ title: 'Github', iconType: GithubIcon },
];

// Draggable interests that reflect your passions.
const interests = [
	{ title: 'Coding', emoji: '💻', left: '5%', top: '5%' },
	{ title: 'Entrepreneurship', emoji: '🚀', left: '50%', top: '5%' },
	{ title: 'Robotics', emoji: '🤖', left: '35%', top: '40%' },
	{ title: 'Tutoring', emoji: '🎓', left: '10%', top: '35%' },
	{ title: 'Community Service', emoji: '🤝', left: '70%', top: '45%' },
	{ title: 'Martial Arts', emoji: '🥋', left: '5%', top: '65%' },
	{ title: 'Sustainability', emoji: '🌱', left: '45%', top: '70%' },
];

export const AboutSection = () => {
	const constraintRef = useRef(null);
	const [hasMounted, setHasMounted] = useState(false);

	// Set the mounted flag so that client-only features don't run during SSR.
	useEffect(() => {
		setHasMounted(true);
	}, []);

	return (
		<div className="py-20 lg:py-28">
			<div className="container">
				<SectionHeader
					eyebrow="About Me"
					title="A Glimpse Into My Journey"
					description="Hi, I'm Sathvik Gorle—a student from Charlotte, NC, passionate about coding, robotics, entrepreneurship, and community service. Here’s an inside look at what drives me."
				/>

				<div className="mt-20 flex flex-col gap-12">
					{/* Impact & Toolbox Section */}
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						{/* My Impact */}
						<Card className="h-[320px] md:col-span-2 lg:col-span-1">
							<CardHeader
								title="My Impact"
								description="From working on ABuilds, Project Refugee & empowering robotics teams, I combine tech and leadership to drive social change."
							/>
							<div className="w-40 mx-auto mt-2 md:mt-0">
								{/* Optionally include an image representing your impact */}
							</div>
						</Card>

						{/* My Toolbox */}
						<Card className="h-[320px] md:col-span-3 lg:col-span-2">
							<CardHeader
								title="My Toolbox"
								description="Explore the technologies and tools I use to craft innovative digital solutions."
							/>
							<ToolboxItems
								items={toolboxItems}
								className=""
								itemsWrapperClassName="animate-move-left [animation-duration:30s]"
							/>
							<ToolboxItems
								items={toolboxItems}
								className="mt-6"
								itemsWrapperClassName="animate-move-right [animation-duration:15s]"
							/>
						</Card>
					</div>

					{/* Beyond the Code Section */}
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
							<CardHeader
								title="Beyond the Code"
								description="When I’m not building apps or robots, you can find me exploring my other passions—like tutoring, martial arts, and sustainability."
								className="px-6 py-6"
							/>
							<div className="relative flex-1" ref={constraintRef}>
								{hasMounted &&
									interests.map((interest) => (
										<motion.div
											key={interest.title}
											className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer"
											style={{ left: interest.left, top: interest.top }}
											drag
											dragConstraints={constraintRef}
										>
											<span className="font-medium text-gray-950">{interest.title}</span>
											<span>{interest.emoji}</span>
										</motion.div>
									))}
							</div>
						</Card>

						{/* Map Card */}
						<Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
							<Image
								src={mapImage}
								alt="Map highlighting my journey from Charlotte, NC"
								className="w-full h-full object-cover object-left-top"
							/>
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-15 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
								{/* Optionally include a signature image */}
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
