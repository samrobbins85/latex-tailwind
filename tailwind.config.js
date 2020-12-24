module.exports = {
	purge: {
		content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,mdx}"],
		layers: ["base", "utilities"],
	},
	theme: {
		latex: {
			footnotes: true,
			syntax: true,
		},
	},
	variants: {},
	plugins: [require("./plugin")],
};
