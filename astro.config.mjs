// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'ksawery.io',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/saveriocirillo' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/saverio-cirillo' },
			],
			sidebar: [
				{ label: 'Portfolio', link: '/portfolio/' },
				{ label: 'Blog', link: '/blog/' },
				{ label: 'Experience', link: '/experience/' },
				{ label: 'Running', link: '/running/' },
			],
		}),
	],
});
