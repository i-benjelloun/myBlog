import React from 'react';
import PostHeader from './PostHeader';
import ReactMarkdown from 'react-markdown';
import type { Post } from '../types';

type PostContentProps = { post: Post | null };

function PostContent({ post }: PostContentProps) {
  if (!post) {
    return <p>No post found!</p>;
  }
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className="tw-mx-auto tw-my-8 tw-w-11/12 tw-max-w-5xl tw-rounded-md tw-bg-grey-100 tw-p-4 tw-leading-8 md:tw-p-8">
      <PostHeader title={post.title} image={imagePath} />
      <div className="tw-prose-md md:tw-prose prose-a:tw-text-blue-600">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}

export default PostContent;
