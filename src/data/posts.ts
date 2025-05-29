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
    title: "career debt: a hidden cost of delivery-obsessed engineering teams",
    excerpt:
      "you plan for technical debt — but what about career debt? when engineers aren’t growing, you’re slowly losing them. here’s how to recognize and prevent it.",
    date: new Date("2025-05-30"),
    tags: ["software engineering leader"],
    slug: "career-debt",
  },
  {
    title: "the last tee time: how i played the old course at st. andrews",
    excerpt:
      "the story of how i stood in line, drank with canadians and almost didn't play the old course during my bachelor party.",
    date: new Date("2025-06-01"),
    tags: ["golfer"],
    slug: "the-old-course",
  },
];
