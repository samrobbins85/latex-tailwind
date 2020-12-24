exports.syntax_base = {
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

exports.syntax_components = {
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
