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
			<h1 className="font-bold text-2xl pl-3 mb-3  ">
				<a className="bg-gradient-to-r from-sky-300  bg-[length:100%_1px] bg-no-repeat bg-bottom">
					Skills 👨🏾‍💻
				</a>
			</h1>
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
				<TabsContent value="backend">
					<div className="grid grid-cols-3 gap-x-24 mt-4">
						<div className="grid grid-cols-2">
							<IoLogoNodejs size={32} className=" text-emerald-400" />
							<div className="text-2xl pl-3">Nodejs</div>
						</div>

						<div className="grid grid-cols-2">
							<SiFirebase size={32} className=" text-amber-600" />
							<div className="text-2xl pl-3">Firebase</div>
						</div>

						<div className="grid grid-cols-2">
							<RiSupabaseFill size={36} className=" text-emerald-600" />{' '}
							<div className="text-2xl pl-3">Supabase</div>
						</div>

						<div className="grid grid-cols-2">
							<SiPostgresql size={36} className=" text-sky-700" />{' '}
							<div className="text-2xl pl-3">Postgresql</div>
						</div>

						<div className="grid grid-cols-2">
							<SiPython size={36} className=" text-sky-600" />{' '}
							<div className="text-2xl pl-3">Python</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="other">
					<div className="grid grid-cols-3 gap-x-24 mt-4">
						<div className="grid grid-cols-2">
							<RiGitBranchLine size={32} className=" text-rose-500" />
							<div className="text-2xl pl-3">Git</div>
						</div>

						<div className="grid grid-cols-2">
							<RiGithubFill size={32} className=" " />
							<div className="text-2xl pl-3">Github</div>
						</div>

						<div className="grid grid-cols-2">
							<SiVisualstudiocode size={36} className=" text-sky-700" />
							<div className="text-2xl pl-3">VScode</div>
						</div>

						<div className="grid grid-cols-2">
							<SiDocker size={36} className=" text-sky-500" />
							<div className="text-2xl pl-3">Docker</div>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</section>
	);
}
