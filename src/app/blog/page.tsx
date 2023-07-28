import type { Metadata } from 'next';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Read my thoughts on coding, personal life, and more.'
};
function formatDate(date: string) {
	const currentDate = new Date();
	const targetDate = new Date(date);

	const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
	const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
	const daysAgo = currentDate.getDate() - targetDate.getDate();

	let formattedDate = '';

	if (yearsAgo > 0) {
		formattedDate = `${yearsAgo}y ago`;
	} else if (monthsAgo > 0) {
		formattedDate = `${monthsAgo}mo ago`;
	} else if (daysAgo > 0) {
		formattedDate = `${daysAgo}d ago`;
	} else {
		formattedDate = 'Today';
	}

	const fullDate = targetDate.toLocaleString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});

	return `${fullDate} (${formattedDate})`;
}

export default async function BlogPage() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-bold tracking-tighter">Blog</h1>
			{allPosts
				.sort((a, b) => {
					if (new Date(a.date) > new Date(b.date)) {
						return -1;
					}
					return 1;
				})
				.map((post: any) => (
					<Link
						key={post.slug}
						className="flex flex-col mb-4 space-y-1"
						href={`/blog/${post.slug}`}
					>
						<div className="flex flex-col w-full">
							<p className="tracking-tight text-neutral-900 dark:text-neutral-100">{post.title}</p>
							<p className="text-sm text-neutral-600 dark:text-neutral-400">
								{formatDate(post.date)}
							</p>
						</div>
					</Link>
				))}
		</section>
	);
}
