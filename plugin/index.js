const plugin = require("tailwindcss/plugin");

function prefix(inobj, prefix) {
	let replacedItems = Object.keys(inobj).map((key) => {
		const newKey = prefix + key;
		return {
			[newKey]: inobj[key],
		};
	});

	return replacedItems.reduce((a, b) => Object.assign({}, a, b));
}

const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, "$1")
		.replace(/\.0$/, "");
const em = (px, base) => `${round(px / base)}em`;

const base = {
	p: {
		textAlign: "justify",
		hyphens: "none",
		marginTop: "1rem",
	},
	"a:not([class])": {
		textDecorationSkipInk: "auto",
	},
	a: {
		color: "#a00",
		"&:visited": { color: "#a00" },
		"&:focus": {
			outlineOffset: "2px",
			outline: "2px solid hsl(220, 90%, 52%)",
		},
	},
	img: {
		maxWidth: "100%",
		height: "auto",
		display: "block",
	},
	input: {
		font: "inherit",
	},
	button: {
		font: "inherit",
	},
	textarea: {
		font: "inherit",
		width: "100%",
	},
	select: {
		font: "inherit",
	},
	"article > * + * ": {
		marginTop: "1em",
	},
	code: {
		fontFamily: "CMU Typewriter Text !important",
	},
	pre: {
		fontSize: "85%",
		padding: "1rem 1.4rem",
		maxWidth: "100%",
		overflow: "auto",
		borderRadius: "4px",
		background: "hsl(210, 28%, 93%)",
		fontFamily: "CMU Typewriter Text !important",
	},
	"pre code": {
		position: "relative",
	},
	kbd: {
		background: "hsl(210, 5%, 100%)",
		border: "1px solid hsl(210, 5%, 70%)",
		borderRadius: "2px",
		padding: "2px 4px",
		fontSize: "75%",
	},
	table: {
		borderCollapse: "collapse",
		borderSpacing: "0",
		width: "auto",
		maxWidth: "100%",
		borderTop: "2.27px solid black",
		borderBottom: "2.27px solid black",
		counterIncrement: "caption",
	},
	"table tr > th[scope='col']": {
		borderBottom: "1.36px solid black",
	},
	"table tr > th[scope='row']": {
		borderRight: "1.36px solid black",
	},
	"table > tbody > tr:first-child > td": {
		borderTop: "1.36px solid black",
	},
	"table > tbody > tr:first-child > th": {
		borderBottom: "1.36px solid black",
	},
	"table > tbody > tr:last-child > td": {
		borderBottom: "1.36px solid black",
	},
	"table > tbody > tr:last-child > th": {
		borderBottom: "1.36px solid black",
	},
	th: {
		textAlign: "left",
		padding: "0.5rem",
		lineHeight: "1.1",
	},
	td: {
		textAlign: "left",
		padding: "0.5rem",
		lineHeight: "1.1",
	},
	caption: {
		textAlign: "left",
		fontSize: "0.923em",
		padding: "0 0.25em 0.25em",
		width: "100%",
		marginLeft: "0",
		"&::before": {
			content: "'Table ' counter(caption) '. '",
			fontWeight: "bold",
		},
	},
	h1: {
		fontSize: "2.5rem",
		lineHeight: "3.25rem",
		marginBottom: "1.625rem",
		"&:first-child": {
			textAlign: "center",
		},
		fontWeight: "800",
	},
	h2: {
		fontSize: "1.7rem",
		lineHeight: "2rem",
		marginTop: "3rem",
		marginBottom: "0.8rem",
		fontWeight: "700",
	},
	h3: {
		marginBottom: "0.8rem",
		lineHeight: "1.625rem",
		fontSize: "1.4rem",
		marginTop: "2.5rem",
		fontWeight: "600",
	},
	h4: {
		marginBottom: "0.8rem",
		lineHeight: "1.625rem",
		fontSize: "1.2rem",
		marginTop: "2rem",
		fontWeight: "600",
	},
	h5: {
		marginBottom: "0.8rem",
		lineHeight: "1.625rem",
		fontSize: "1rem",
		marginTop: "1.8rem",
		fontWeight: "600",
	},
	h6: {
		marginBottom: "0.8rem",
		lineHeight: "1.625rem",
		fontSize: "1rem",
		fontStyle: "italic",
		fontWeight: "normal",
		marginTop: "2.5rem",
	},
	"h1+h2": {
		marginTop: "1.625rem",
	},
	"h2+h3": {
		marginTop: "0.8rem",
	},
	"h3+h4": {
		marginTop: "0.8rem",
	},
	"h4+h5": {
		marginTop: "0.8rem",
	},
	"h5+h6": {
		marginTop: "-0.8rem",
	},
	"nav ol": {
		counterReset: "item",
		paddingLeft: "2rem",
	},
	"nav li": {
		display: "block",
		"&:before": {
			content: "counters(item, '.') ' '",
			counterIncrement: "item",
			paddingRight: "0.85rem",
		},
	},
	"dl dd": {
		textAlign: "center",
	},

	blockquote: {
		fontWeight: "500",
		paddingLeft: "2rem",
	},
	ol: {
		marginTop: em(20, 16),
		marginBottom: em(20, 16),
	},
	ul: {
		marginTop: em(20, 16),
		marginBottom: em(20, 16),
	},
	li: {
		marginTop: em(8, 16),
		marginBottom: em(8, 16),
	},
	"ol > li": {
		paddingLeft: em(28, 16),
		position: "relative",
	},
	"ol > li::before": {
		left: "0",
		content: 'counter(list-item) "."',
		position: "absolute",
		fontWeight: "400",
		color: "#000",
	},
	"ul > li": {
		position: "relative",
		paddingLeft: em(28, 16),
	},
	"ul > li::before": {
		width: em(6, 16),
		height: em(6, 16),
		top: `calc(${em(28 / 2, 16)} - ${em(3, 16)})`,
		left: em(4, 16),
		content: '""',
		position: "absolute",
		backgroundColor: "#000",
		borderRadius: "50%",
	},
	"> ul > li p": {
		marginTop: em(12, 16),
		marginBottom: em(12, 16),
	},
	"> ul > li > *:first-child": {
		marginTop: em(20, 16),
	},
	"> ul > li > *:last-child": {
		marginBottom: em(20, 16),
	},
	"> ol > li > *:first-child": {
		marginTop: em(20, 16),
	},
	"> ol > li > *:last-child": {
		marginBottom: em(20, 16),
	},
	"ul ul, ul ol, ol ul, ol ol": {
		marginTop: em(12, 16),
		marginBottom: em(12, 16),
	},
};

utilities = {
	".scroll-wrapper": { overflowX: "auto" },
	".scroll-wrapper > table td": { whiteSpace: "nowrap" },
};

components = {
	".theorem": {
		counterIncrement: "theorem",
		display: "block",
		margin: "12px 0",
		fontStyle: "italic",
	},
	".theorem::before": {
		content: "'Theorem ' counter(theorem) '. '",
		fontWeight: "bold",
		fontStyle: "normal",
	},
	".theorem p": {
		display: "unset",
	},
	".lemma": {
		counterIncrement: "lemma",
		display: "block",
		margin: "12px 0",
		fontStyle: "italic",
		"&::before": {
			content: "'Lemma ' counter(lemma) '. '",
			fontWeight: "bold",
			fontStyle: "normal",
		},
	},
	".lemma p": {
		display: "unset",
	},
	".proof": {
		display: "block",
		margin: "12px 0",
		fontStyle: "normal",
		position: "relative",
		"&::before": {
			content: "'Proof. ' attr(title)",
			fontStyle: "italic",
		},
		"&::after": {
			content: "◾️",
			position: "absolute",
			right: "-12px",
			bottom: "-2px",
		},
	},
	".proof p": {
		display: "unset",
	},
	".definition": {
		counterIncrement: "definition",
		display: "block",
		margin: "12px 0",
		fontStyle: "normal",
		"&::before": {
			content: "'Definition ' counter(definition) '. '",
			fontWeight: "bold",
			fontStyle: "normal",
		},
	},
	".definition p": {
		display: "unset",
	},
	".author": {
		margin: "0.85rem 0",
		fontVariantCaps: "small-caps",
		textAlign: "center",
	},
	".footnotes": {
		borderTop: "1px solid hsl(0, 0%, 39%)",
	},
	".footnotes p": {
		textAlign: "left",
		lineHeight: "1.5",
		fontSize: "85%",
		marginBottom: "0.4rem",
	},
	".abstract": {
		textAlign: "center",
		marginTop: "0",
		margin: "2.25rem 0",
	},
	".abstract p": {
		textAlign: "center",
		marginTop: "0",
	},
	".abstract > h2": {
		fontSize: "1rem",
		marginBottom: "-0.2rem",
	},
	".latex span": {
		textTransform: "uppercase",
		lineHeight: "1ex",
		"&:nth-child(1)": {
			fontSize: "0.75em",
			verticalAlign: "0.28em",
			marginLeft: "-0.48em",
			marginRight: "-0.15em",
		},
		"&:nth-child(2)": {
			verticalAlign: "-0.5ex",
			marginLeft: "-0.1667em",
			marginRight: "-0.125em",
		},
	},
};

var base_output = {
	"@font-face": [
		{
			"font-family": "'Latin Modern'",
			"font-style": "normal",
			"font-weight": "normal",
			"font-display": "swap",
			src:
				'url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-regular.ttf") format("truetype") , url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-regular.woff") format("woff"), url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-regular.woff2") format("woff2")',
		},
		{
			"font-family": "'Latin Modern'",
			"font-style": "italic",
			"font-weight": "normal",
			"font-display": "swap",
			src:
				'url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-italic.ttf") format("truetype"), url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-italic.woff") format("woff"), url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-italic.woff2") format("woff2")',
		},
		{
			"font-family": "'Latin Modern'",
			"font-style": "normal",
			"font-weight": "bold",
			"font-display": "swap",
			src:
				'url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-bold.ttf") format("truetype"), url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-bold.woff") format("woff"), url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-bold.woff2") format("woff2")',
		},
		{
			"font-family": "'Latin Modern'",
			"font-style": "italic",
			"font-weight": "bold",
			"font-display": "swap",
			src:
				'url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-bold-italic.ttf") format("truetype"), url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-bold-italic.woff") format("woff"), url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-bold-italic.woff2") format("woff2")',
		},
		{
			"font-family": "'CMU Typewriter Text'",
			"font-style": "normal",
			"font-weight": "500",
			"font-display": "swap",
			src:
				'url("https://fonts.cdnfonts.com/s/18083/cmuntt.woff") format("woff")',
		},
	],
	".latex-style": {
		fontFamily: "Latin Modern",
		lineHeight: "1.8",
		maxWidth: "80ch",
		margin: "0 auto",
		padding: "2rem 1.25rem",
		counterReset: "theorem definition sidenote-counter lemma",
		color: "hsl(0, 5%, 10%)",
	},
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

const syntax_base = {
	"code[class*='language-'],pre[class*='language-']": {
		color: "black",
		textAlign: "left",
		whiteSpace: "pre",
		wordSpacing: "normal",
		wordBreak: "normal",
		wordWrap: "normal",
		lineHeight: "1.5",
		tabSize: "4",
		hyphens: "none",
	},
};

const syntax_components = {
	".token.comment": {
		color: "#407f80",
	},
	".token.prolog": {
		color: "#407f80",
	},
	".token.doctype": {
		color: "#407f80",
	},
	".token.cdata": {
		color: "#407f80",
	},
	".token.punctuation": {
		color: "#000000",
	},
	".token.constant": {
		color: "#000000",
	},
	".token.punctuation.attr-equals": {
		color: "#666666",
	},
	".token.number": {
		color: "#666666",
	},
	".token.operator": {
		color: "#666666",
	},
	".token.namespace": {
		opacity: "0.7",
	},
	".token.property": {
		color: "#007f00",
	},
	".token.tag": {
		color: "#007f00",
	},
	".token.boolean": {
		color: "#007f00",
	},
	".token.symbol": {
		color: "#007f00",
	},
	".token.deleted": {
		color: "#007f00",
	},
	".token.keyword": {
		color: "#007f00",
	},
	".token.selector": {
		color: "#7d8f29",
	},
	".token.attr-name": {
		color: "#7d8f29",
	},
	".token.char": {
		color: "#7d8f29",
	},
	".token.builtin": {
		color: "#7d8f29",
	},
	".token.inserted": {
		color: "#7d8f29",
	},
	".token.entity": {
		color: "#9a6e3a",
	},
	".token.url": {
		color: "#9a6e3a",
	},
	".language-css .token.string": {
		color: "#9a6e3a",
	},
	".style .token.string": {
		color: "#9a6e3a",
	},
	".token.atrule": {
		color: "#ba2121",
	},
	".token.attr-value": {
		color: "#ba2121",
	},
	".token.string": {
		color: "#ba2121",
	},
	".token.attr-value .punctuation:not(.attr-equals)": {
		color: "#ba2121",
	},
	".token.class-name": {
		color: "#dd4a68",
	},
	".token.important": {
		color: "#e90",
		fontWeight: "bold",
	},
	".token.regex": {
		color: "#BA6687",
	},
	".token.bold": {
		fontWeight: "bold",
	},
	".token.entity": {
		fontStyle: "italic",
	},
};

var components_output = prefix(components, ".latex-style ");

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
