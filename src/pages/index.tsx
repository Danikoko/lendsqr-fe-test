import AuthLayout from "@/layouts/auth";
import styles from '../styles/pages/index.module.scss';

export default function Home() {
  return (
    <AuthLayout>
      <main>
        <h1 id={styles.header}>If this shows, then the layouts installation was successful 💯🔥</h1>
      </main>
    </AuthLayout>
  )
}
