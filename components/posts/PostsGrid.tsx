import React from 'react';
import PostItem from './PostItem';
import type { Posts } from './types';

type PostsGridProps = { posts: Posts };

function PostsGrid({ posts }: PostsGridProps) {
  return (
    <ul className="tw-grid tw-list-none tw-grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] tw-content-center tw-gap-6">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
