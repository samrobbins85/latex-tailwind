This is designed with a similar idea to [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography), but following the design proposed by [Latex.css](https://latex.now.sh/).

To use it, add `latex-style` to a HTML element, in the same way as you would use `prose` with Tailwind CSS Typography.

You can see an example of how this works [here](https://latex-tailwind.vercel.app/)

This provides two options under the `theme` key,

```js
module.exports = {
	//...
	theme: {
		latex: {
			footnotes: true,
			syntax: true,
		},
	},
	plugins: [require("latex-tailwind")],
};
```

`footnotes` will enable the styling for footnotes, this works based on the `footnotes` class, so will be applied across your site

`syntax` enables syntax highlighting, this is designed for `prism.js`
