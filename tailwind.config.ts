/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // Enable dark mode
	theme: {
		extend: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '1024px',
			},
			fontFamily: {
				manropeRegular: ['manropeRegular'],
				manropeBold: ['manropeBold'],
				manropeSemiBold: ['manropeSemiBold'],
				manropeMedium: ['manropeMedium'],
				manropeLight: ['manropeLight'],
				manropeExtraBold: ['manropeExtraBold'],
				manropeExtraLight: ['manropeExtraLight'],
				geistSemiBold: ['geistSemiBold'],
			},
			colors: {
				blue: '#017ADF',
				gray: '#A0A0A0',
				lightGray: '#F2F2F2',
			},
		},
	},
	plugins: [],
};
