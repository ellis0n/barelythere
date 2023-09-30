import { defineCollection, reference, z } from "astro:content";

const posts = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		username: reference("authors"),
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
		github: z.string().url().optional(),
		twitter: z.string().url(),
		instagram: z.string().url(),
		avatar: z.string(),
	}),
});

export const collections = { posts, authors };
