import { ProjectItem } from '@/types';

export const projectItem: ProjectItem[] = [
	{
		title: 'MyDocs',
		image:
			'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
		stack: 'Nextjs, TailwindCSS, Supabase',
		href: '/docs/primitives/alert-dialog',
		description:
			'A little passion project aimed to take personal notaking and help you use it for current projects. Follow along as we figure this out together.',
		github: 'github.com',
		live: 'https://my-docs-rosy.vercel.app/'
	},
	{
		title: 'Hover Card',
		image:
			'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
		stack: '.',
		href: '/docs/primitives/hover-card',
		description: 'For sighted users to preview content available behind a link.',
		github: 'github.com',
		live: 'live.com'
	}
];
