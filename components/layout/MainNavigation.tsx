import React, { type PropsWithChildren } from 'react';
import Link, { type LinkProps } from 'next/link';
import Logo from './Logo';

function MainNavigation() {
  return (
    <header className="tw-w-full tw-h-20 tw-bg-grey-900 tw-flex tw-justify-between tw-items-center tw-px-[10%]">
      <Link href={'/'}>
        <Logo />
      </Link>
      <nav>
        <ul className="tw-list-none tw-flex tw-items-baseline tw-m-0 tw-p-0 lg:tw-gap-2">
          <NavItem href={'/posts'}>Posts</NavItem>
          <NavItem href={'/contact'}>Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

function NavItem({ href, children }: PropsWithChildren<LinkProps>) {
  return (
    <li className="tw-my-0 tw-mx-4">
      <Link
        className="tw-text-grey-500 tw-text-base hover:tw-text-grey-200 active:tw-text-grey-200 lg:tw-text-lg"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
