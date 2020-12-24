module.exports = {
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
	],
	variants: {},
	plugins: [require("./plugin"), require("latex-tailwind-syntax")],
};
