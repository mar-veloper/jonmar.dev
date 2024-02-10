/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				appLight: {
					...require('daisyui/src/theming/themes')['cupcake'],
					success: '#39cccc'
				}
			},
			{
				appDark: {
					...require('daisyui/src/theming/themes')['forest'],
					success: '#39cccc'
				}
			}
		]
	},
	theme: {},
	plugins: [require('daisyui')]
};
