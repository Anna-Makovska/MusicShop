import styles from "./TrackCard.module.css";

export default function TrackCard({ item }) {
  return (
    <article className={`card ${styles.card}`}>
      <img className={styles.cover} src={item.cover} alt={item.title} />
      <div className={styles.info}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.meta}>{item.artist}</div>
        <div className={styles.time}>{item.duration}</div>
      </div>
    </article>
  );
}
