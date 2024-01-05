const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["VT323", ...defaultTheme.fontFamily.sans],

				serif: ["Young Serif", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins:
		[
			plugin(function ({ addVariant }) {
				addVariant('scroll', ':merge(.scroll) &');
				addVariant('is-checked', ':merge(:checked +) &');
			}), 
			require("@tailwindcss/typography")
		]
};
