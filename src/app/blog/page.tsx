import type { Metadata } from 'next';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Read my thoughts on coding, personal life, and more.'
};

export default async function BlogPage() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-bold tracking-tighter">Blog In Progress</h1>
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
						</div>
					</Link>
				))}
		</section>
	);
}
