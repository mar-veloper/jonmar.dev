/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				appDark: {
					...require('daisyui/src/theming/themes')['forest'],
					primary: '#39cccc',
					'.toggle.theme-controller': {
						'background-color': 'oklch(0.837682 0.001658 17.9116)'
					}
				}
			},
			{
				appLight: {
					...require('daisyui/src/theming/themes')['cupcake'],
					primary: '#39cccc',
					'.toggle.theme-controller': {
						'background-color': 'oklch(0.8471 0.199 83.87)'
					}
				}
			}
		]
	},
	theme: {},
	plugins: [require('daisyui')]
};
