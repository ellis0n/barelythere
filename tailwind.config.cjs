const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["nunito", ...defaultTheme.fontFamily.sans],

				serif: ["young-serif", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
