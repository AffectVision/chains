const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,scss}',
		'./app/components/**/*.{js,ts,jsx,tsx,scss}'
	],
	theme: {
		extend: {
			fontFamily: {
				alpha: ['ALPHA']
			},
			// colors: {
			// 	primary: '#5F3DF7'
			// },
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '350ms'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				},
				'.flex-center-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}
			})
		})
	]
}
