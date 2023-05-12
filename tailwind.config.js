/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			gridTemplateColumns: {
				process: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
				smallBlogArticle: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
			},
			boxShadow: {
				goodcollect: '0 20px 30px -30px rgba(0, 0, 0, 0.25)',
			},
			backgroundImage: {
				'hero-pattern': "url('/images/landing-page.jpeg')",
				'hero-pattern-2': "url('/images/landing-page-2.jpeg')",
			},
			borderRadius: {
				soft: '10px',
			},
			colors: {
				teal: '#09B582',
				oceanblue: '#1C6FD0',
				midnightblue: '#0D294A',
				turquoise: '#D0EBEA',
				'light-turquoise': '#E2F2F1',
				'extra-light-turquoise': '#F3F8F8',
				'dark-iron': '#B0B0B0',
				iron: '#EEEEEE',
				'light-iron': '#F8F8F8',
				rouge: '#B40E0E',
				destructive: '#DB7D7D',
				progress: '#F4BA61',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/container-queries'),
	],
};
