import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Guide Docs',
			social: {
				github: 'https://github.com/saurabhjaykar1603',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'TypeScript',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is TypeScript', link: '/typescript/typescript/' },
					],
				},
				
			],
		}),
	],
});
