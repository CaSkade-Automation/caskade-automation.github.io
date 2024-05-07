/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_pages/**/*.{html,js}"],
  theme: {
		listStyleType: {
		  none: 'none',
		  disc: 'disc',
		  decimal: 'decimal',
		  square: 'square',
		  roman: 'upper-roman',
		},
    extend: {},
  },
  plugins: [
	require('@tailwindcss/typography'),
  ],
}

