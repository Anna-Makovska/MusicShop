import styles from './GenreBadge.module.css'

export default function GenreBadge({ item, size = 'md' }) {
  return (
    <article className={`${styles.badge} ${styles[size]}`}>
      <span
        className={styles.record}
        style={{ '--tone': item.tone, '--thumb': `url(${item.thumb})` }}
      />
      <div className={styles.text}>
        <h3 className={styles.name}>{item.title}</h3>
        <p className={styles.desc}>{item.desc}</p>
      </div>
    </article>
  )
}
