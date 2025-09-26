import styles from "./TrendingNowCard.module.css";

export default function TrendingNowCard({ item }) {
  return (
    <article className={`card ${styles.card}`}>
      <img className={styles.cover} src={item.cover} alt={item.title} />
      <div className={styles.info}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.meta}>
          {item.artist} • {item.duration}
        </div>
        <button className="btn">Play</button>
      </div>
    </article>
  );
}
