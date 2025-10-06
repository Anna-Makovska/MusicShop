import styles from "./GenreCard.module.css";

export default function GenreCard({ item }) {
  return (
    <article className={`card ${styles.card}`}>
      <img className={styles.cover} src={item.cover} alt={item.name} />
      <div className={styles.name}>{item.name}</div>
    </article>
  );
}
