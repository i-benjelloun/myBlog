import FeaturedPosts from '@/components/home-page/FeaturedPosts';
import Hero from '@/components/home-page/Hero';
import type { Posts } from '@/components/posts/types';
import { getFeaturedPosts } from '@/lib/posts-util';
import React, { Fragment } from 'react';

type HomePageProps = {
  posts: Posts;
};

function HomePage({ posts }: HomePageProps) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
