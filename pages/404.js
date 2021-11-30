import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, [])
  return (
    <>
    <Head>
      <title>Nextjs | Not Found</title>
      <link rel="shortcut icon" href="/download.png" />
    </Head>
    <div className="not-found">
      <h3>Oppsss......</h3>
      <h5>There is no such page with shit name</h5>
      <p>
        Go back, where you belong{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
    </>
  );
};

export default NotFound;
