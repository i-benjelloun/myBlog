import AllPosts from '@/components/posts/AllPosts';
import type { Posts } from '@/components/posts/types';
import { getAllPosts } from '@/lib/posts-util';
import React from 'react';

type AllPostsPageProps = {
  posts: Posts;
};

function AllPostsPage({ posts }: AllPostsPageProps) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
