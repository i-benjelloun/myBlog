import Layout from '@/components/layout/Layout';
import MainNavigation from '@/components/layout/MainNavigation';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MainNavigation />
      <Component {...pageProps} />
    </Layout>
  );
}
