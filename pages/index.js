import Head from "next/head";
export default function IndexPage() {
	return (
		<>
			<Head>
				<title>Next.js Template</title>
				<meta
					name="Description"
					content="A template Next.js application"
				/>
			</Head>
			<div>
				<h1 className="text-center">Hello, World </h1>
			</div>
			<div className="latex-style">
				<header>
					<h1>
						<span class="latex">
							L<span>a</span>T<span>e</span>X
						</span>
						.css
					</h1>
					<p class="author">
						Vincent Dörig <br />
						May 2020
					</p>
				</header>

				<div class="abstract">
					<h2>Abstract</h2>
					<p>
						This almost class-less CSS library turns your HTML
						document into a website that looks like a
						<span class="latex">
							L<span>a</span>T<span>e</span>X
						</span>
						document. Write semantic HTML, add
						<code class="language-html">
							&lt;link rel="stylesheet"
							href="https://latex.now.sh/style.css"&gt;
						</code>
						to the <code class="language-html">&lt;head&gt;</code>{" "}
						of your project and you are good to go. The source code
						can be found on GitHub at
						<a href="https://github.com/vincentdoerig/latex-css">
							https://github.com/vincentdoerig/latex-css
						</a>
						.
					</p>
				</div>

				<nav role="navigation" class="toc">
					<h2>Contents</h2>
					<ol>
						<li>
							<a href="#getting-started">Getting Started</a>
						</li>
						<li>
							<a href="#class-based-elements">
								Class-based Elements
							</a>
							<ol>
								<li>
									<a href="#author-abstract">
										Author and Abstract
									</a>
								</li>
								<li>
									<a href="#tdpl">
										Theorems, Definitions and Proofs
									</a>
									<ol>
										<li>
											<a href="#proofs-theorems">
												Proofs & Theorems
											</a>
										</li>
										<li>
											<a href="#lemmas">Lemmas</a>
										</li>
										<li>
											<a href="#definitions">
												Definitions
											</a>
										</li>
									</ol>
								</li>
							</ol>
						</li>
						<li>
							<a href="#language-support">Language Support</a>
						</li>
						<li>
							<a href="#sidenotes">Sidenotes</a>
						</li>
						<li>
							<a href="#alternative-typeface">
								Alternative Typeface
							</a>
						</li>
						<li>
							<a href="#html-elements">HTML Elements</a>
							<ol>
								<li>
									<a href="#text-formatting">
										Text Formatting
									</a>
								</li>
								<li>
									<a href="#blockquotes">Blockquotes</a>
								</li>
								<li>
									<a href="#definition-lists">
										Definition Lists
									</a>
								</li>
								<li>
									<a href="#tables">Tables</a>
								</li>
								<li>
									<a href="#images">Images</a>
								</li>
							</ol>
						</li>
						<li>
							<a href="#miscellaneous">Miscellaneous</a>
							<ol>
								<li>
									<a href="#scroll-overflow">
										Scroll Overflow
									</a>
								</li>
								<li>
									<a href="#syntax-highlighting">
										Syntax Highlighting
									</a>
								</li>
							</ol>
						</li>
					</ol>
				</nav>

				<main>
					<article>
						<h2 id="getting-started">Getting Started</h2>
						<ul>
							<li>
								Add
								<code class="language-html">
									&lt;link rel="stylesheet"
									href="https://latex.now.sh/style.css"&gt;
								</code>
								to the{" "}
								<code class="language-html">&lt;head&gt;</code>{" "}
								of your website or install the package using{" "}
								<code>npm install latex.css</code>.
							</li>
							<li>
								(optional) Add any classes to elements described
								in the
								<a href="#class-based-elements">next section</a>
								.
							</li>
							<li>
								(optional) If you need support for
								<span class="latex">
									L<span>a</span>T<span>e</span>X
								</span>{" "}
								math, add the following script to include
								<a href="https://www.mathjax.org/">MathJax</a>:
								<pre>
									<code class="language-html">
										&lt;script id="MathJax-script" async
										src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"&gt;&lt;/script&gt;
									</code>
								</pre>
							</li>
							<li>
								(optional) If you need syntax highlighting, add
								the following script to include
								<a href="https://prismjs.com/">Prism</a> and the
								Prism LaTeX stylesheet (or use any other):
								<pre>
									<code class="language-html">
										&lt;link rel="stylesheet"
										href="https://latex.now.sh/prism/prism.css"&gt;
										&lt;script
										src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"&gt;&lt;/script&gt;
									</code>
								</pre>
							</li>
							<li>Done.</li>
						</ul>

						<h2 id="class-based-elements">Class-based Elements</h2>
						<h3 id="author-abstract">Author and Abstract</h3>
						<p>
							Use the following code to add an author and abstract
							to your document. It will look like{" "}
							<a href="#top">this</a>.
						</p>
						<pre>
							<code class="language-html">
								&lt;p class="author"&gt;John Doe &lt;br&gt;
								December 7, 2020&lt;/p&gt; &lt;div
								class="abstract"&gt;
								&lt;h2&gt;Abstract&lt;/h2&gt;
								&lt;p&gt;...&lt;/p&gt; &lt;/div&gt;
							</code>
						</pre>

						<h3 id="tdpl">
							Theorems, Definitions, Lemmas and Proofs
						</h3>
						<p>
							Theorems, definitions, lemmas and proofs are
							supported. Just wrap your content in a div and add
							the corresponding class to the element like in the
							following example.
						</p>

						<pre>
							<code class="language-html">
								&lt;div class="theorem"&gt;...&lt;/div&gt;
								&lt;div class="definition"&gt;...&lt;/div&gt;
								&lt;div class="lemma"&gt;...&lt;/div&gt; &lt;div
								class="proof"&gt;...&lt;/div&gt;
							</code>
						</pre>
						<p>Below are some examples.</p>
						<h4 id="proofs-theorems">Proofs & Theorems</h4>
						<div className="theorem">
							The real numbers are uncountable.
						</div>
						<div class="proof">If</div>
						<div class="theorem">
							If $S$ is both countable and infinite, then there is
							a bijection between $S$ and itself.
							<sup>
								<a href="#fn1" id="ref1">
									1
								</a>
							</sup>
						</div>
						<div class="proof">
							For any $s \in S,$ we let $f(s)$ denote the value of
							$k$ such that $s$ is the $k$ the smallest element of
							$S .$ This map is well defined for any $s,$ because
							there are only finitely many natural numbers between
							1 and $s .$ It is impossible for two different
							elements of $S$ to both be the $k$ the smallest
							element of $S$. Hence $f$ is one-to-one. Also, since
							$S$ is infinite, $f$ is onto.
						</div>
						<h4 id="lemmas">Lemmas</h4>
						<div class="lemma">
							An even number plus an even number results in an
							even number.
						</div>
						<h4 id="definitions">Definitions</h4>
						<div class="definition">
							A definition is a a statement of the meaning of a
							word or word group or a sign or symbol.
							<sup>
								<a href="#fn2" id="ref2">
									2
								</a>
							</sup>
						</div>

						<h2 id="language-support">Language Support</h2>
						<p>
							The labels of theorems, definitions, lemmas and
							proofs can be changed to other
							<a href="https://github.com/vincentdoerig/latex-css/tree/master/lang">
								supported language
							</a>
							by including the following snippet, linking to the
							desired language in addition to the main CSS file.
						</p>
						<pre>
							<code class="language-html">
								&lt;link rel="stylesheet"
								href="https://latex.now.sh/lang/es.css" /&gt;
								... &lt;html lang="es"&gt;
							</code>
						</pre>
						<p>
							Take a peak at the{" "}
							<a href="/languages">language support demo</a> to
							see how the labels of the different languages
							change.
						</p>

						<h2 id="html-elements">HTML Elements</h2>
						<p>
							For a preview of all HTML elements with LaTeX.css,
							check out the
							<a href="/elements">HTML5 elements test page</a>.
						</p>

						<h3 id="text-formatting">Text Formatting</h3>
						<p>
							This sentence is <b>bold</b>. If you like semantics,
							you might go with
							<strong>strong</strong> or <em>emphasized</em> text.
							If not,
							<i>italic</i> is still around. <small>Small</small>{" "}
							text is for fine print. Your copy can also be{" "}
							<sub>subscripted</sub> and
							<sup>superscripted</sup>, <ins>inserted</ins>,{" "}
							<del>deleted</del>, or
							<mark>highlighted</mark>. You would use a
							<a href="#!">hyperlink</a> to go to a new page.
							Keyboard input elements like <kbd>Cmd</kbd> +{" "}
							<kbd>Shift</kbd>
							are used to display textual user input.
						</p>

						<h3 id="blockquotes">Blockquotes</h3>
						<blockquote>
							Give me six hours to chop down a tree and I will
							spend the first four sharpening the axe.
							<cite>— Abraham Lincoln</cite>
						</blockquote>

						<h3 id="definition-lists">Definition Lists</h3>
						<dl>
							<dt>Definition Title One</dt>
							<dd>First definition description</dd>
							<dt>Binomial theorem</dt>
							<dd>blagh</dd>
						</dl>

						<h3 id="tables">Tables</h3>
						<table>
							<caption>
								A sample table with a descriptive caption.
							</caption>
							<thead>
								<tr>
									<th>Header 1</th>
									<th>Header 2</th>
									<th>Header 3</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>Footer 1</th>
									<th>Footer 2</th>
									<th>Footer 3</th>
								</tr>
							</tfoot>
							<tbody>
								<tr>
									<td>Description 1</td>
									<td>Description 2</td>
									<td>Description 3</td>
								</tr>
								<tr>
									<td>Description 1</td>
									<td>Description 2</td>
									<td>Description 3</td>
								</tr>
								<tr>
									<td>Description 1</td>
									<td>Description 2</td>
									<td>Description 3</td>
								</tr>
							</tbody>
						</table>

						<table>
							<caption>
								Example table taken from{" "}
								<a href="https://texdoc.net/texmf-dist/doc/latex/booktabs/booktabs.pdf">
									this paper
								</a>{" "}
								on how to produce quality tables with LaTeX.
							</caption>
							<thead>
								<tr>
									<th colspan="2" scope="col">
										Item
									</th>
								</tr>
								<tr>
									<th>Animal</th>
									<th>Description</th>
									<th>Price ($)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Gnat</td>
									<td>per gram</td>
									<td>13.65</td>
								</tr>
								<tr>
									<td>Gnu</td>
									<td>stuffed</td>
									<td>92.50</td>
								</tr>
								<tr>
									<td>Emu</td>
									<td>stuffed</td>
									<td>33.33</td>
								</tr>
								<tr>
									<td>Armadillo</td>
									<td>frozen</td>
									<td>8.99</td>
								</tr>
							</tbody>
						</table>

						<div class="scroll-wrapper">
							<table>
								<caption>Color names and values.</caption>
								<tbody>
									<tr>
										<th scope="col">Name</th>
										<th scope="col">HEX</th>
										<th scope="col">HSL</th>
										<th scope="col">RGB</th>
									</tr>
									<tr>
										<th scope="row">Teal</th>
										<td>
											<code>#008080</code>
										</td>
										<td>
											<code>hsl(180, 100%, 25%)</code>
										</td>
										<td>
											<code>rgb(0, 128, 128)</code>
										</td>
									</tr>
									<tr>
										<th scope="row">Goldenrod</th>
										<td>
											<code>#daa520</code>
										</td>
										<td>
											<code>hsl(43, 74%, 49%)</code>
										</td>
										<td>
											<code>rgb(218, 165, 32)</code>
										</td>
									</tr>
									<tr>
										<th scope="row">Cornflowerblue</th>
										<td>
											<code>#6495ed</code>
										</td>
										<td>
											<code>hsl(219, 79%, 66%)</code>
										</td>
										<td>
											<code>rgb(100, 149, 237)</code>
										</td>
									</tr>
									<tr>
										<th scope="row">Lightcoral</th>
										<td>
											<code>#f08080</code>
										</td>
										<td>
											<code>hsl(0, 79%, 72%)</code>
										</td>
										<td>
											<code>rgb(240, 128, 128)</code>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<h3 id="images">Images</h3>
						<figure>
							<img
								src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=1000&q=80"
								loading="lazy"
								alt="Mountain landscape"
								width="600"
								height="400"
							/>
							<figcaption>
								Mountain landscape by
								<a href="https://unsplash.com/@heytowner">
									John Towner
								</a>
								.
							</figcaption>
						</figure>

						<h2 id="miscellaneous">Miscellaneous</h2>

						<h3 id="scroll-overflow">Scroll Overflow</h3>
						<p>
							It is best to break up long equations into smaller
							parts, but when this isn't possible, consider
							wrapping the overflowing element with a class of{" "}
							<code>scroll-overflow</code> to allow scrolling on
							the x-axis. Large tables should also be wrapped with
							this class.
						</p>
						<p>
							Below is an example of a long equation with overflow
							scroll.
						</p>

						<h3 id="syntax-highlighting">Syntax Highlighting</h3>
						<p>
							If you need syntax highlighting for code, LaTeX.css
							provides a{" "}
							<a href="https://prismjs.com/">PrismJS</a> theme
							that immitates the{" "}
							<a href="https://github.com/gpoore/minted">
								minted
							</a>{" "}
							package for LaTeX. Add the following stylesheet and
							script:
						</p>
						<pre>
							<code class="language-html">
								&lt;link rel="stylesheet"
								href="https://latex.now.sh/prism/prism.css"&gt;
								&lt;script
								src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"&gt;&lt;/script&gt;
							</code>
						</pre>
						<p>And use it like this:</p>
						<pre>
							<code class="language-html">
								&lt;pre&gt; &lt;code class="language-html"&gt;
								&lt;!-- your HTML code snippet --&gt;
								&lt;/code&gt; &lt;/pre&gt;
							</code>
						</pre>
						<p>
							Change which languages Prism highlights by
							customising the script{" "}
							<a href="https://prismjs.com/download.html">here</a>
							.
						</p>

						<div class="footnotes">
							<p id="fn1">
								1. From
								<a href="https://www.math.brown.edu/~res/MFS/handout8.pdf">
									https://www.math.brown.edu/~res/MFS/handout8.pdf
								</a>
								.
								<a
									href="#ref1"
									title="Jump back to footnote 1 in the text."
								>
									↩
								</a>
							</p>
							<p id="fn2">
								2. “Definition.” Merriam-Webster.com Dictionary,
								Merriam-Webster,
								<a href="https://www.merriam-webster.com/dictionary/definition">
									https://www.merriam-webster.com/dictionary/definition
								</a>
								. Accessed 18 May. 2020.
								<a
									href="#ref2"
									title="Jump back to footnote 2 in the text."
								>
									↩
								</a>
							</p>
						</div>
					</article>
				</main>
			</div>
		</>
	);
}
