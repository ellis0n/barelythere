import { defineCollection, reference, z } from "astro:content";

const posts = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		// Reference a single author from the `authors` collection by `id`
		author: reference("authors"),
		// Reference an array of related posts from the `blog` collection by `slug`
		relatedPosts: z.array(reference("posts")),
		draft: z.boolean().optional(),
	}),
});

const authors = defineCollection({
	type: "data",
	schema: z.object({
		username: z.string(),
		firstname: z.string(),
		lastname: z.string(),
		email: z.string(),
		github: z.string().url(),
		twitter: z.string().url(),
		instagram: z.string().url(),
	}),
});

export const collections = { posts, authors };
