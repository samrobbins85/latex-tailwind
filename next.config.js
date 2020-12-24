const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const rehypePrism = require("@mapbox/rehype-prism");
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex, rehypePrism],
	},
});
module.exports = withMDX({
	pageExtensions: ["js", "jsx", "md", "mdx"],
});
