'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
	'/': {
		name: 'Home'
	},
	'/blog': {
		name: 'Blog'
	},
	'/portfolio': {
		name: 'Portfolio'
	},

	'/resume': {
		name: 'Resume'
	}
};

export default function Navbar() {
	let pathname = usePathname() || '/';
	if (pathname.includes('/blog/')) {
		pathname = '/blog';
	}

	return (
		<aside className="-ml-[8px] mb-16 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<LayoutGroup>
					<nav
						className="relative flex flex-row items-start px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
						id="nav"
					>
						<div className="flex flex-row pr-10 space-x-0">
							{Object.entries(navItems).map(([path, { name }]) => {
								const isActive = path === pathname;
								return (
									<Link
										key={path}
										href={path}
										className={clsx(
											'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
											{
												'text-neutral-500': !isActive
											}
										)}
									>
										<span className="relative px-2 py-1">
											{name}
											{path === pathname ? (
												<motion.div
													className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
													layoutId="sidebar"
													transition={{
														type: 'spring',
														stiffness: 350,
														damping: 30
													}}
												/>
											) : null}
										</span>
									</Link>
								);
							})}
						</div>
					</nav>
				</LayoutGroup>
			</div>
		</aside>
	);
}
