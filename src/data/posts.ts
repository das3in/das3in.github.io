import { getCollection } from "astro:content";
import type { BlogPost } from "../types";

// Convert content collection entries to your BlogPost type
export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("posts");

  return posts.map((post: BlogPost) => ({
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    tags: post.tags || [],
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
  {
    title: "The Last Tee Time: How I Played The Old Course at St. Andrews",
    excerpt:
      "The story of how I stood in line, drank with Canadians and almost didn't play The Old Course during my bachelor party.",
    date: new Date("2025-06-01"),
    tags: ["golfer"],
    slug: "the-old-course",
  },
];
