import { getCollection } from "astro:content";
import type { BlogPost } from "../types";

// Convert content collection entries to your BlogPost type
export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("posts");

  return posts.map((post) => ({
    title: post.data.title,
    excerpt: post.data.description,
    date: post.data.pubDate,
    tags: post.data.tags || [],
    slug: post.slug,
  }));
}

// For backwards compatibility, keep the static export but note it's deprecated
export const blogPosts: BlogPost[] = [
  {
    title: "Career Debt: A Hidden Cost of Delivery-Obsessed Engineering Teams",
    excerpt:
      "Career Debt: A Hidden Cost of Delivery-Obsessed Engineering Teams",
    date: new Date("2025-05-30"),
    tags: ["software engineering leader"],
    slug: "career-debt",
  },
];
