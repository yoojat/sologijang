import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import { NextSeo } from 'next-seo';

import * as gtag from '@libs/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <NextSeo
        title='솔로 기장'
        description='진정한 인연을 간질히 원하는 솔로남녀의 2박 3일간의 여정'
        canonical='https://sologijang.vercel.app'
        openGraph={{
          url: 'https://sologijang.vercel.app',
          title: '솔로 기장',
          description:
            '진정한 인연을 간질히 원하는 솔로남녀의 2박 3일간의 여정',
          images: [
            {
              url: 'https://sologijang.vercel.app/logo_sns.jpg',
              width: 800,
              height: 600,
              alt: '솔로 기장',
              type: 'image/jpeg',
            },
          ],
          site_name: '솔로 기장',
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
