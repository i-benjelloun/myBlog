import React from 'react';
import PostsGrid from './PostsGrid';
import type { AllPostsProps } from './types';

function AllPosts({ posts }: AllPostsProps) {
  return (
    <section className="tw-mx-auto tw-my-8 tw-w-11/12 tw-max-w-4xl">
      <h1 className="tw-mb-8 tw-text-center tw-text-4xl tw-text-grey-800 md:tw-text-7xl">
        All Posts
      </h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
