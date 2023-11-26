import React from 'react';
import PostHeader from './PostHeader';
import type { Components } from 'react-markdown';
import type { Post } from '../types';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type PostContentProps = { post: Post | null };

function PostContent({ post }: PostContentProps) {
  if (!post) {
    return <p>No post found!</p>;
  }
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customComponents: Partial<Components> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img(image: any) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code(props: any) {
      const match = /language-(\w+)/.exec(props.className || '');
      {
        return match ? (
          <SyntaxHighlighter PreTag="div" language={match[1]} style={atomDark}>
            {String(props.children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        ) : (
          <code className={props.className}>{props.children}</code>
        );
      }
    },
  };
  return (
    <article className="tw-mx-auto tw-my-8 tw-w-11/12 tw-max-w-5xl tw-rounded-md tw-bg-grey-100 tw-p-4 tw-leading-8 md:tw-p-8">
      <PostHeader title={post.title} image={imagePath} />
      <div className=" tw-prose-md tw-prose tw-prose-gray  prose-a:tw-text-blue-600">
        <ReactMarkdown components={customComponents}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

export default PostContent;
