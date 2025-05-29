export interface Occupation {
  title: string;
  content: string;
}

export interface BlogPost {
  title: string;
  date: Date;
  tags: string[];
  slug: string;
  excerpt: string;
}
