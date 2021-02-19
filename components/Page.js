/* eslint-disable react/prop-types */
import Head from 'next/head';
import LeftSidebar from './LeftSidebar';

export default function Page({ children }) {
  return (
    <div>
      <Head>
        <title>Tailwind Article Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
