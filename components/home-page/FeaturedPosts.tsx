import React from 'react';
import PostsGrid from '../posts/PostsGrid';
import { type Post } from '../posts/types';

function FeaturedPosts({ posts }: { posts: Post[] }) {
  return (
    <section className={'tw-mx-auto tw-my-8 tw-w-11/12 tw-max-w-7xl'}>
      <h2 className="tw-text-center tw-text-3xl tw-text-grey-800 md:tw-text-6xl">
        <PostsGrid posts={posts} />
      </h2>
    </section>
  );
}

export default FeaturedPosts;
