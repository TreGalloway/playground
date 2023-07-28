import Image from 'next/image';
import 'remixicon/fonts/remixicon.css';
import profile from '../../public/profile.jpg';
import { Badge } from '@/components/ui/badge';
import { PenLine, Sparkles, ChevronRightSquareIcon } from 'lucide-react';

export default function Home() {
	return (
		<section>
			<div className="flex mb-4">
				<div>
					<h1 className="mt-16 mb-8 text-2xl font-bold tracking-tighter">
						Hey I&apos;m Tre&apos; Galloway 👋🏾
					</h1>
					<div className="flex gap-2">
						<Badge>
							<PenLine size={16} className=" text-cyan-600" /> Writer
						</Badge>
						<Badge>
							<ChevronRightSquareIcon size={16} className="text-purple-600 " />
							Developer
						</Badge>
						<Badge>
							<Sparkles size={16} className=" text-amber-600" />
							Overly Curious
						</Badge>
					</div>
				</div>

				<div className=" pl-28">
					<Image src={profile} alt="picture of tre galloway" className="w-32 rounded-full " />
				</div>
			</div>
			<p>I&apos;m a frontend developer, writer, and a person who reads too much fiction.</p>
		</section>
	);
}
