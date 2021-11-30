import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    //className={styles.container}

    <>
      <Head>
        <title>Nextjs | Home</title>
        <link rel="shortcut icon" href="/download.png" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          quia ea quaerat, hic quam minus molestiae exercitationem deserunt
          nihil adipisci eius mollitia et quis doloremque facilis corrupti
          officiis sapiente velit fugit cum repellat eum magnam? Nemo animi
          earum non nobis? Quos minima libero excepturi veritatis, odit laborum
          magnam assumenda voluptatem?
        </p>
        <button className={styles.btn}>Hello Hi</button>
      </div>
    </>
  );
}
