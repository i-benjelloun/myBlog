import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import type { Post } from './types';

type PostItemProps = { post: Post };

function PostItem({ post }: PostItemProps) {
  const { title, image, excerpt, date, slug } = post;
  const formatted = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className="tw-overflow-hidden tw-rounded-xl tw-bg-grey-800 tw-text-center tw-text-grey-100 tw-shadow">
      <Link href={linkPath}>
        <div className="tw-relative tw-h-80 tw-max-h-80 tw-w-full">
          <Image src={imagePath} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="tw-flex tw-flex-col tw-space-y-4 tw-p-4">
          <h3 className="tw-text-2xl">{title}</h3>
          <time className="tw-mt-0 tw-text-xl tw-italic tw-text-grey-300">
            {formatted}
          </time>
          <p className="tw-text-lg tw-leading-6">{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
