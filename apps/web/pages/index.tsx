import { SEO } from '../SEO';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO title="단단" description="모의면접 커뮤니티" />
      <main className={styles.main}>
        <div className={styles.card}>
          <h2>모의면접 커뮤니티</h2>
          <p>heloo</p>
        </div>
      </main>
    </div>
  );
}
