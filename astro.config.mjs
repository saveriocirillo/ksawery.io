// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'ksawery.io',
			customCss: ['./src/styles/custom.css'],
			// Preview image for links shared on LinkedIn, Slack, and similar. Built by scripts/make-og-image.mjs.
			head: [
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://saverio-cirillo.com/og.png' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:alt', content: 'Saverio Cirillo, Senior Technical Writer' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://saverio-cirillo.com/og.png' } },
			],
			components: {
				Header: './src/components/CustomHeader.astro',
				Hero: './src/components/CustomHero.astro',
				Footer: './src/components/CustomFooter.astro',
				PageTitle: './src/components/PageTitle.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/saveriocirillo' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/saverio-cirillo' },
			],
			sidebar: [
				{ label: 'Work', link: '/work/' },
				{ label: 'Portfolio', link: '/portfolio/' },
				{ label: 'Tennis & Trails', link: '/running/' },
				{ label: 'Places & Books', link: '/books/' },
			],
		}),
	],
});
