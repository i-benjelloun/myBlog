import Image from 'next/image';
import React from 'react';

type PostHeaderProps = {
  title: string;
  image: string;
};

function PostHeader({ title, image }: PostHeaderProps) {
  return (
    <header className="tw-mx-0 tw-my-4 tw-flex tw-flex-col-reverse tw-items-center tw-justify-between tw-gap-4 tw-border-b-8 tw-border-solid tw-border-primary-100 tw-pb-8 md:tw-my-7 md:tw-flex-row md:tw-items-end ">
      <h1 className="m-0 tw-text-center tw-text-3xl tw-text-primary-500 md:tw-text-left md:tw-text-6xl">
        {title}
      </h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={120}
        className="w-[200px] h-[120px] tw-object-cover"
      />
    </header>
  );
}

export default PostHeader;
