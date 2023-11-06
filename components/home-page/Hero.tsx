import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <section className="tw-bg-gradient-to-b tw-from-grey-900 tw-to-grey-800 tw-py-8 tw-text-center">
      <div className="tw-m-auto tw-h-[300px] tw-w-[300px] tw-overflow-hidden tw-rounded-full tw-bg-grey-700 tw-shadow">
        <Image
          src="/images/ibrahim.jpg"
          alt="An image of Ibrahim"
          height={300}
          width={300}
        />
      </div>
      <h1 className="tw-mx-4 tw-text-6xl tw-text-grey-300">Hi, I'm Ibrahim</h1>
      <p className="tw-m-auto tw-w-11/12 tw-max-w-2xl tw-text-2xl tw-text-grey-200">
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
}

export default Hero;
