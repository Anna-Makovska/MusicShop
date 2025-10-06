import styles from './TurntableCard.module.css'

export default function TurntableCard({ item }) {
  return (
    <article className={styles.card}>
      <img className={styles.cover} src={item.img} alt={item.model} />
      <div className={styles.body}>
        <h3 className={styles.model}>{item.model}</h3>
        <p className={styles.desc}>{item.desc}</p>
        <div className={styles.price}>{item.price}</div>
      </div>
    </article>
  )
}
