import Head from 'next/head';
import Link from 'next/link';

import { getSortedPostsData } from '../utils/posts';

import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';

import utilStyles from '../styles/utils.module.css';

import type { GetStaticProps } from 'next';

export default function Home(props: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  const { allPostsData } = props;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, My name is Cotton Han. I'm a frontend developer. Thank you.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};