import {
	RiReactjsFill,
	RiSupabaseFill,
	RiJavascriptFill,
	RiGitBranchLine,
	RiGithubFill
} from 'react-icons/ri';
import {
	SiFirebase,
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiVisualstudiocode,
	SiPostgresql,
	SiDocker,
	SiPython,
	SiSvelte
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

export default function Skills() {
	return (
		<section>
			<h1 className="font-bold text-2xl pl-3">Skills 👨🏾‍💻</h1>
			<Tabs defaultValue="frontend" className="w-[400px]">
				<TabsList>
					<TabsTrigger value="frontend">frontend</TabsTrigger>
					<TabsTrigger value="backend">Backend</TabsTrigger>
					<TabsTrigger value="other">Other</TabsTrigger>
				</TabsList>
				<TabsContent value="frontend">
					<div className="grid grid-cols-3 gap-x-24 mt-4">
						<div className="grid grid-cols-2">
							<RiJavascriptFill size={44} className=" text-yellow-400" />
							<div className="text-2xl pl-3">Javascript</div>
						</div>

						<div className="grid grid-cols-2">
							<SiTypescript size={32} className=" text-blue-600" />
							<div className="text-2xl pl-3">Typescript</div>
						</div>

						<div className="grid grid-cols-2">
							<RiReactjsFill size={36} className=" text-blue-400" />{' '}
							<div className="text-2xl pl-3">React</div>
						</div>

						<div className="grid grid-cols-2">
							<SiNextdotjs size={36} /> <div className="text-2xl pl-3">Nextjs</div>
						</div>

						<div className="grid grid-cols-2">
							<SiSvelte size={36} className=" text-orange-600" />{' '}
							<div className="text-2xl pl-3">Svelte</div>
						</div>

						<div className="grid grid-cols-2">
							<SiTailwindcss size={36} className=" text-teal-400" />{' '}
							<div className="text-2xl pl-3">Tailwindcss</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="backend">Change your backend here.</TabsContent>
				<TabsContent value="other">Change your backend here.</TabsContent>
			</Tabs>
		</section>
	);
}
