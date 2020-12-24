module.exports = {
	purge: {
		content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,mdx}"],
		layers: ["base", "utilities"],
	},
	variants: {},
	plugins: [require("./plugin"), require("latex-tailwind-syntax")],
};
