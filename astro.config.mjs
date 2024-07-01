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
						{ label: 'What is JavaScript', link: '/javascript/javascript_introduction/javascript_introduction' },
						{ label: 'Variables in JavaScript', link: '/javascript/javascript_variables/javascript_variables' },
						{ label: 'Datatypes in JavaScript', link: '/javascript/javascript_datatypes/javascript_datatypes' },
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
