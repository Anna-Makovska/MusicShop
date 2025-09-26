import SearchBar from "../SearchBar/SearchBar";
import styles from "./Legend.module.css";

export default function Legend() {
  return (
    <section className={styles.legend}>
      <span className={`${styles.bg} ${styles.bg1}`} />
      <span className={`${styles.bg} ${styles.bg2}`} />
      <span className={`${styles.bg} ${styles.bg3}`} />
      <span className={`${styles.bg} ${styles.bg4}`} />
      <span className={`${styles.bg} ${styles.bg5}`} />
      <div className="container">
        <h1 className={styles.title}>Find perfect sound that fits your soul</h1>
        <SearchBar />
      </div>
    </section>
  );
}
