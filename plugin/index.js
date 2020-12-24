const plugin = require("tailwindcss/plugin");
const { base, utilities, components } = require("./default_styles");
const { fonts } = require("./fonts");
const { syntax_base, syntax_components } = require("./syntax");
function prefix(inobj, prefix) {
	let replacedItems = Object.keys(inobj).map((key) => {
		const newKey = prefix + key;
		return {
			[newKey]: inobj[key],
		};
	});

	return replacedItems.reduce((a, b) => Object.assign({}, a, b));
}

var base_output = {
	...fonts,
	...prefix(base, ".latex-style "),
};

const footnote_style = {
	".footnotes": {
		fontFamily: "Latin Modern",
		lineHeight: "1.8",
		maxWidth: "80ch",
		margin: "0 auto",
		padding: "2rem 1.25rem",
		counterReset: "theorem definition sidenote-counter lemma",
		color: "hsl(0, 5%, 10%)",
	},
	".footnotes ol::before": {
		content: "'References'",
		fontSize: "1.5rem",
		fontWeight: "bold",
	},
};

var components_output = {
	".latex-style": {
		fontFamily: "Latin Modern",
		lineHeight: "1.8",
		maxWidth: "80ch",
		margin: "0 auto",
		padding: "2rem 1.25rem",
		counterReset: "theorem definition sidenote-counter lemma",
		color: "hsl(0, 5%, 10%)",
	},
	...prefix(components, ".latex-style "),
};

module.exports = plugin(function ({
	addBase,
	addUtilities,
	addComponents,
	theme,
}) {
	const options = theme("latex", {});
	if (options["footnotes"]) {
		base_output = Object.assign(base_output, prefix(base, ".footnotes "));
		components_output = Object.assign(components_output, footnote_style);
	}
	if (options["syntax"]) {
		base_output = Object.assign(
			base_output,
			prefix(syntax_base, ".latex-style ")
		);
		components_output = Object.assign(
			components_output,
			prefix(syntax_components, ".latex-style ")
		);
	}

	addBase(base_output);
	addUtilities(prefix(utilities, ".latex-style "));
	addComponents(components_output);
});
