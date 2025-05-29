import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  posts: postsCollection,
};
