import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from '../components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://tregalloway.com'),
	title: {
		default: 'Tre Galloway',
		template: '%s | Tre Galloway'
	},
	description: 'Developer, writer, and creator.',
	openGraph: {
		title: 'Tre Galloway',
		description: 'Developer, writer, and creator.',
		url: 'https://tregalloway.com',
		siteName: 'Tre Galloway',
		locale: 'en-US',
		type: 'website'
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	twitter: {
		title: 'Tre Galloway',
		card: 'summary_large_image'
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}
