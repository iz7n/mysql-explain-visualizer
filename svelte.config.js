import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
	},
};
