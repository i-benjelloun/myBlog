import { Oswald, Roboto } from 'next/font/google';
import React, { Fragment, type PropsWithChildren } from 'react';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  fallback: ['sans-serif'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  weight: '100',
  fallback: ['sans-serif'],
  display: 'swap',
  subsets: ['latin'],
});

function Layout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <main className={`${roboto.variable} ${oswald.variable}`}>
        {children}
      </main>
    </Fragment>
  );
}

export default Layout;
