/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				appLight: {
					...require('daisyui/src/theming/themes')['cupcake'],
					primary: '#39cccc'
				}
			},
			{
				appDark: {
					...require('daisyui/src/theming/themes')['forest'],
					primary: '#39cccc'
				}
			}
		]
	},
	theme: {},
	plugins: [require('daisyui')]
};
