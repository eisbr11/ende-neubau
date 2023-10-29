import Head from 'next/head';
import { getStoryblokApi, ISbStoryParams } from '@storyblok/react';
import styles from '@/app/page.module.css';
import { IStoryblokPageProps } from '@/interfaces/blok.interface';

export default function Home({ page }: IStoryblokPageProps) {
  return (
    <div className={styles.main}>
      <Head>
        <title>Ende Neubau</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>
          { page ? page.name : 'My Site' }
        </h1>
      </header>

      <main>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // load the draft version
  let sbParams: ISbStoryParams = {
    version: 'draft', // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/stories/home', sbParams);

  return {
    props: {
      page: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
