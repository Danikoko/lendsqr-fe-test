import DashboardLayout from "@/layouts/dashboard";
import styles from '../styles/layouts/dashboard.module.scss';
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
          <title>Home</title>
      </Head>
      <DashboardLayout>
          <h1 id={styles.header}>Home page</h1>
          <h2>Hi</h2>
      </DashboardLayout>
    </>
  )
}

export default Home;
