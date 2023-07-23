import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { RiGithubFill, RiArrowRightUpLine, RiPagesLine } from 'react-icons/ri';
import Skills from '../../components/skills';
import { Button } from '@/components/ui/button';

import { projectItem } from '@/config/projects'; // replace with real path

export default function Portfolio() {
	return (
		<section>
			<Skills />
			<h1 className="font-bold text-2xl pl-3 mb-3 mt-6 ">
				<a className="bg-gradient-to-r from-sky-300 bg-[length:100%_1px] bg-no-repeat bg-bottom">
					Projects 💻
				</a>
			</h1>
			{/* Map through project data */}
			{projectItem.map((proj, idx) => (
				<Card key={idx} className="dark:bg-zinc-800">
					<CardHeader>
						<CardTitle>{proj.title}</CardTitle>
						<CardDescription>Project Stack</CardDescription>
					</CardHeader>
					<CardContent>
						<p>{proj.description}</p>
					</CardContent>
					<CardFooter className="flex">
						<Button variant="link" className="mr-3 ">
							<a href={proj.href} className="pr-2">
								<RiPagesLine size={24} />
							</a>
							Project Page
						</Button>
						<Button variant="link" className="mr-3">
							<a href={proj.github} className="pr-2">
								<RiGithubFill size={24} />
							</a>
							Github
						</Button>
						<Button variant="link" className="">
							<a href={proj.live} className="pr-2">
								<RiArrowRightUpLine size={18} />
							</a>
							Live
						</Button>
					</CardFooter>
				</Card>
			))}
		</section>
	);
}
