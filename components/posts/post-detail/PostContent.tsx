const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  content: '# This is a first post',
};

import React from 'react';
import PostHeader from './PostHeader';
import ReactMarkdown from 'react-markdown';

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className="tw-mx-auto tw-my-8 tw-w-11/12 tw-max-w-5xl tw-rounded-md tw-bg-grey-100 tw-p-4 tw-text-xl tw-leading-8 md:tw-p-8">
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
