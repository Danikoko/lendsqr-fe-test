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
          <div className={`${styles.mainSection} w-4/5`}>
            <h1 id={styles.header}>Home page</h1>
            <h2>Hi</h2>
          </div>
      </DashboardLayout>
    </>
  )
}

export default Home;
