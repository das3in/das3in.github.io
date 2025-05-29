import React, { useState, useEffect } from "react";
import OccupationSelector from "./OccupationSelector";
import BlogPostList from "./BlogPostList";
import type { Occupation, BlogPost } from "../types";

interface HomePageProps {
  occupations: Occupation[];
  blogPosts: BlogPost[];
}

export default function HomePage({ occupations, blogPosts }: HomePageProps) {
  const [selectedOccupation, setSelectedOccupation] = useState(
    occupations[0].title,
  );

  return (
    <>
      <main>
        <OccupationSelector
          occupations={occupations}
          initialOccupation={selectedOccupation}
          onOccupationChange={setSelectedOccupation}
        />

        <BlogPostList
          posts={blogPosts}
          selectedOccupation={selectedOccupation}
        />
      </main>
    </>
  );
}
