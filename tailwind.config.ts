import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const constants = {
	purple: '#5F0F40',
	carmine: '#9A031E',
	yellow: '#FB8B24',
	orange: '#E36414',
	green: '#0F4C5C',
	gray: '#E3E3E3',
	black: '#222222',
	white: '#FFFFFF'
}

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors: {
			transparent: colors.transparent,
			...constants
		},
		extend: {
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem'
			}
		},
		fontFamily: {
			main: ['Roboto', 'sans-serif']
		}
	},
	plugins: []
}

export default config
