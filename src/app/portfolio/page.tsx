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

const components: { title: string; href: string; description: string; github: string; }[] = [
	{
	  title: "Alert Dialog",
	  href: "/docs/primitives/alert-dialog",
	  description:
		"A modal dialog that interrupts the user with important content and expects a response.",
	  github:
	},
	{
	  title: "Hover Card",
	  href: "/docs/primitives/hover-card",
	  description:
		"For sighted users to preview content available behind a link.",
	  github:
	},
	{
	  title: "Progress",
	  href: "/docs/primitives/progress",
	  description:
		"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
		github:

	},
	{
	  title: "Scroll-area",
	  href: "/docs/primitives/scroll-area",
	  description: "Visually or semantically separates content.",
	  github:

	},
	{
	  title: "Tabs",
	  href: "/docs/primitives/tabs",
	  description:
		"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
		github:

	},
	{
	  title: "Tooltip",
	  href: "/docs/primitives/tooltip",
	  description:
		"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
		github:

	},
  ]
  
export default function Portfolio() {
	return (
		<section>
			<Skills />
			<h1 className="font-bold text-2xl pl-3 mb-3 mt-6 ">
				<a className="bg-gradient-to-r from-sky-300  bg-[length:100%_1px] bg-no-repeat bg-bottom">
					Projects 💻
				</a>
			</h1>
			<Card className="dark:bg-zinc-800">
				<CardHeader>
					<CardTitle>Project Title</CardTitle>
					<CardDescription>Project Stack</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Project Content</p>
				</CardContent>
				<CardFooter className="flex">
					<Button variant="link" className="mr-3 ">
						<a className="pr-2">
							<RiPagesLine size={24} />
						</a>
						Project Page
					</Button>
					<Button variant="link" className="mr-3">
						<a className="pr-2">
							<RiGithubFill size={24} />
						</a>
						Github
					</Button>
					<Button variant="link" className="">
						<a className="pr-2">
							<RiArrowRightUpLine size={18} />
						</a>
						Live
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
}
