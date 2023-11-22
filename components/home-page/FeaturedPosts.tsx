import React from 'react';
import PostsGrid from '../posts/PostsGrid';
import { type Post } from '../posts/types';

type FeaturedPostsProps = {
  posts: Post[];
};

function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={'tw-mx-auto tw-my-8 tw-w-11/12 tw-max-w-7xl'}>
      <h2 className="tw-my-8 tw-text-center tw-text-3xl tw-text-grey-800 md:tw-text-6xl">
        Featured Posts
      </h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
