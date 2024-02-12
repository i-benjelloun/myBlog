import AllPosts from '@/components/posts/AllPosts';
import type { Posts } from '@/components/posts/types';
import { getAllPosts } from '@/lib/posts-util';
import Head from 'next/head';
import React, { Fragment } from 'react';

type AllPostsPageProps = {
  posts: Posts;
};

function AllPostsPage({ posts }: AllPostsPageProps) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
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
