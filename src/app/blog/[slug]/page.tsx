import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx';
import { allPosts } from 'contentlayer/generated';

import Balancer from 'react-wrap-balancer';

interface PostProps {
	params: {
		slug: string[];
	};
}
async function getPostFromParams(params: PostProps['params']) {
	let slug;
	if (Array.isArray(params?.slug)) {
		slug = params?.slug?.join('/');
	}
	const post = allPosts.find((post) => post.slugAsParams === slug);

	if (!post) {
		null;
	}

	return post;
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
	const post = await getPostFromParams(params);

	if (!post) {
		return {};
	}

	return {
		title: post.title,
		description: post.description
	};
}

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

export default async function Blog({ params }: any) {
	const post = allPosts.find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<section>
			<h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
				<Balancer>{post.title}</Balancer>
			</h1>
			<div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
				<p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post.date)}</p>
			</div>
			<Mdx code={post.body.code} />
		</section>
	);
}
