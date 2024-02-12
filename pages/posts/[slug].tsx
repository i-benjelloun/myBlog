import PostContent from '@/components/posts/post-detail/PostContent';
import type { Post } from '@/components/posts/types';
import { getPostData, getPostsFiles } from '@/lib/posts-util';
import type { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React, { Fragment } from 'react';

type PostDetailPageProps = {
  post: Post | null;
};

export default function PostDetailPage({ post }: PostDetailPageProps) {
  return (
    <Fragment>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.excerpt} />
      </Head>
      <PostContent post={post} />;
    </Fragment>
  );
}

export function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }>
) {
  const { params } = context;
  const slug = params?.slug;

  if (!slug || typeof slug !== 'string') {
    throw new Error('Invalid slug entered!');
  }

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    notFound: !postData,
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postsFiles = getPostsFiles();
  const slugs = postsFiles.map((fileName) => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
