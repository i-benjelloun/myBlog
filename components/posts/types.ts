export type Post = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
};

export type PostItemProps = { post: Post };

export type PostsGridProps = { posts: Post[] };
