export type ProjectItem = {
	title: string;
	image?: string;
	href: string;
	description: string;
	github?: string;
	live?: string;
	stack: string;
};

export type SiteConfig = {
	name: string;
	description: string;
	url: string;
	ogImage: string;
	links: {
		twitter: string;
		github: string;
	};
};
