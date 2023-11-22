export type Post = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
  isFeatured: boolean;
};

export type Posts = Post[];
