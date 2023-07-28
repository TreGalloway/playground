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

export default function Skills() {
	return (
		<section>
			<h1 className="pl-3 mb-3 text-2xl font-bold ">
				<a className="bg-gradient-to-r from-sky-300  bg-[length:100%_1px] bg-no-repeat bg-bottom">
					Skills 👨🏾‍💻
				</a>
			</h1>
			<Tabs defaultValue="frontend" className="w-[400px]">
				<TabsList className=" dark:bg-zinc-800">
					<TabsTrigger value="frontend">frontend</TabsTrigger>
					<TabsTrigger value="backend">Backend</TabsTrigger>
					<TabsTrigger value="other">Other</TabsTrigger>
				</TabsList>
				<TabsContent value="frontend">
					<div className="grid grid-cols-3 mt-4 gap-x-24">
						<div className="grid grid-cols-2">
							<RiJavascriptFill size={44} className="text-yellow-400 " />
							<div className="pl-3 text-2xl">Javascript</div>
						</div>

						<div className="grid grid-cols-2">
							<SiTypescript size={32} className="text-blue-600 " />
							<div className="pl-3 text-2xl">Typescript</div>
						</div>

						<div className="grid grid-cols-2">
							<RiReactjsFill size={36} className="text-blue-400 " />{' '}
							<div className="pl-3 text-2xl">React</div>
						</div>

						<div className="grid grid-cols-2">
							<SiNextdotjs size={36} /> <div className="pl-3 text-2xl">Nextjs</div>
						</div>

						<div className="grid grid-cols-2">
							<SiSvelte size={36} className="text-orange-600 " />{' '}
							<div className="pl-3 text-2xl">Svelte</div>
						</div>

						<div className="grid grid-cols-2">
							<SiTailwindcss size={36} className="text-teal-400 " />{' '}
							<div className="pl-3 text-2xl">Tailwindcss</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="backend">
					<div className="grid grid-cols-3 mt-4 gap-x-24">
						<div className="grid grid-cols-2">
							<IoLogoNodejs size={32} className=" text-emerald-400" />
							<div className="pl-3 text-2xl">Nodejs</div>
						</div>

						<div className="grid grid-cols-2">
							<SiFirebase size={32} className=" text-amber-600" />
							<div className="pl-3 text-2xl">Firebase</div>
						</div>

						<div className="grid grid-cols-2">
							<RiSupabaseFill size={36} className=" text-emerald-600" />{' '}
							<div className="pl-3 text-2xl">Supabase</div>
						</div>

						<div className="grid grid-cols-2">
							<SiPostgresql size={36} className=" text-sky-700" />{' '}
							<div className="pl-3 text-2xl">Postgresql</div>
						</div>

						<div className="grid grid-cols-2">
							<SiPython size={36} className=" text-sky-600" />{' '}
							<div className="pl-3 text-2xl">Python</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="other">
					<div className="grid grid-cols-3 mt-4 gap-x-24">
						<div className="grid grid-cols-2">
							<RiGitBranchLine size={32} className=" text-rose-500" />
							<div className="pl-3 text-2xl">Git</div>
						</div>

						<div className="grid grid-cols-2">
							<RiGithubFill size={32} className="" />
							<div className="pl-3 text-2xl">Github</div>
						</div>

						<div className="grid grid-cols-2">
							<SiVisualstudiocode size={36} className=" text-sky-700" />
							<div className="pl-3 text-2xl">VScode</div>
						</div>

						<div className="grid grid-cols-2">
							<SiDocker size={36} className=" text-sky-500" />
							<div className="pl-3 text-2xl">Docker</div>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</section>
	);
}
