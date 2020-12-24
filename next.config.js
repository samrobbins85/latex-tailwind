const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const rehypePrism = require("@mapbox/rehype-prism");
var footnotes = require("remark-footnotes");
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkMath, footnotes],
		rehypePlugins: [rehypeKatex, rehypePrism],
	},
});
module.exports = withMDX({
	pageExtensions: ["js", "jsx", "md", "mdx"],
});
