import AuthLayout from "@/layouts/auth";
import styles from '../styles/layouts/auth.module.scss';
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
          <title>Home</title>
      </Head>
      <main>
          <h1 id={styles.header}>Home page</h1>
          <h2 className="text-white">Hi</h2>
      </main>
    </>
  )
}

export default Home;
