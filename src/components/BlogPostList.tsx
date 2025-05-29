import React from "react";
import type { BlogPost } from "../types";

interface BlogPostListProps {
  posts: BlogPost[];
  selectedOccupation: string;
}

export default function BlogPostList({
  posts,
  selectedOccupation,
}: BlogPostListProps) {
  const filteredPosts = posts.filter((post) =>
    post.tags.includes(selectedOccupation),
  );

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="blog-section">
      <h2 className="blog-section-title">related reflections</h2>
      <div className="blog-list">
        {filteredPosts.map((post) => (
          <div key={post.slug}>
            <h3 className="blog-post-title">
              <a href={`/posts/${post.slug}`} className="blog-post-link">
                {post.title}
              </a>
            </h3>
            <p className="blog-post-date">{formatDate(post.date)}</p>
            <p className="blog-post-description">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
