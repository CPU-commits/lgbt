import adapter from '@sveltejs/adapter-auto'
import netlify from '@sveltejs/adapter-netlify'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify(),
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
				}
			},
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
