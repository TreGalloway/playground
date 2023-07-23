export type ProjectItem = {
	title: string;
	href: string;
	description: string;
	github?: string;
	live?: string;
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
