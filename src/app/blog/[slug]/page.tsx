import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { Mdx } from '../../../../lib/mdx';
import Balancer from 'react-wrap-balancer';

export const generateStaticParams = async () =>
	allPosts.map((post: any) => ({ slug: post._raw.flattenedPath }));
export const generateMetadata = ({ params }: any) => {
	const post = allPosts.find((post: any) => post._raw.flattenedPath === params.slug);
	return { title: post?.title, description: post?.description };
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

const PostLayout = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

	let MDXContent;

	if (!post) {
		return <div>404</div>;
	} else {
		MDXContent = getMDXComponent(post!.body.code);
	}

	return (
		<div>
			<h1 className="font-bold text-4xl tracking-tighter max-w-[650px]">
				<Balancer>{post.title}</Balancer>
			</h1>
			<div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
				<p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post.date)}</p>
			</div>
			<article>
				<Mdx code={post.body.code} />
			</article>
		</div>
	);
};

export default PostLayout;
