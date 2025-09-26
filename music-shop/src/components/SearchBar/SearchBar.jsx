export default function SearchBar() {
  return (
    <div className={styles.wrap}>
      <input
        className={styles.input}
        placeholder="Search songs, artists, albums"
      />
      <button className={styles.btn}>Search</button>
    </div>
  );
}
import styles from "./SearchBar.module.css";