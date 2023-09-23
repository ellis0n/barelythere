import type { GetStaticPaths } from "astro";

export const getStaticPaths: GetStaticPaths = async () => {
	const authorsGlob = await Astro.glob("../../content/authors/*.json");

	const postsGlob = await Astro.glob("../../content/posts/**/*.md");

	const posts = postsGlob.map((post) => post.frontmatter);

	console.log(posts);

	// console.log(posts)
	const authorObject = authorsGlob.map((author) => ({
		author: author.default,
		posts: {},
	}));

	const getPostsByAuthor = (author, posts) => {
		//    console.log(author)
		//    console.log(posts)
		return null;
	};

	authorObject.forEach((author) => {
		getPostsByAuthor(author, posts);
		return null;
	});

	// const props =
	return authorsGlob.map((author) => ({
		params: { username: author.default.username },
		props: { author: author },
	}));
};
