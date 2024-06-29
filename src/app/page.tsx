import Script from 'next/script';
import Head from 'next/head';

export default function MyPage() {
  return (
    <>
      <Head>
        <p></p>
      </Head>
      <main>
        <div>
          <h1>My Component</h1>
          <Script src="src/app/index.js"/>
        </div>
      </main>
    </>
  );
}
