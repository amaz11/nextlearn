import Head from "next/head";
import Link from "next/link"
import styles from "../../styles/Home.module.css";

export const getStaticProps =async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: {users:data}
    }
}
const Hello = ({users}) => {
  return (
    <>
      <Head>
        <title>Nextjs | Hello</title>
        <link rel="shortcut icon" href="/download.png" />
      </Head>
      <div>
        <h1>Hello There</h1>
        {
            users.map(user=>(
                <Link href={`/comp/${user.id}`} key={user.id}>
                   <a className={styles.single}><p>{user.name}</p></a>
                </Link>
            ))
        }
      </div>
    </>
  );
};

export default Hello;
