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
					label: 'HTML',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is HTML', link: '/html/html/' },
					],
				},
				{
					label: 'TypeScript',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is TypeScript', link: '/typescript/typescript/' },
					],
				},
				{
					label: 'JavaScript',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is JavaScript', link: '/javascript/01_js_intro/01_js_intro' },
						{ label: 'Variables in JavaScript', link: '/javascript/02_js_variables/02_js_variables' },
					],
				},
				{
					label: 'Node',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is Node', link: '/node/node/' },
					],
				},
				
			],
		}),
	],
});
