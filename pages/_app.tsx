import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
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
