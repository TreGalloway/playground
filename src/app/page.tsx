import Image from 'next/image';
import 'remixicon/fonts/remixicon.css';
import profile from '../../public/profile.jpg';

export default function Home() {
	return (
		<section>
			<div className="flex mb-4">
				<h1 className="font-bold text-2xl mb-8 tracking-tighter mt-16">Hey I'm Tre' Galloway👋🏾</h1>
				<div className=" pl-28">
					<Image src={profile} alt="picture of tre galloway" className="rounded-full w-32 " />
				</div>
			</div>
			<p>I'm a frontend developer, writer, and a person who reads too much fiction.</p>
		</section>
	);
}
