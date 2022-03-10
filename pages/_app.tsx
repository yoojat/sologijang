import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='솔로 기장'
        description='인연을 찾는 곳'
        canonical='https://sologijang.vercel.app'
        openGraph={{
          url: 'https://sologijang.vercel.app',
          title: '솔로 기장',
          description: '인연을 찾는 곳',
          images: [
            {
              url: 'https://sologijang.vercel.app/logo.jpg',
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
