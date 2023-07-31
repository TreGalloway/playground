import * as React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

const CustomLink = (props: any) => {
	const href = props.href;

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		);
	}

	if (href.startsWith('#')) {
		return <a {...props} />;
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: any) {
	return <NextImage alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props: any) {
	return (
		<div className="flex items-center p-1 px-4 py-3 mb-8 text-sm border rounded border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
			<div className="flex items-center w-4 mr-4">{props.emoji}</div>
			<div className="w-full callout">{props.children}</div>
		</div>
	);
}

const components = {
	Image: RoundedImage,
	a: CustomLink,
	Callout
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<article className="prose prose-quoteless prose-neutral dark:prose-invert">
			<Component components={components} />
		</article>
	);
}
