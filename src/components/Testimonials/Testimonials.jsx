import styles from './Testimonials.module.css'
import { testimonials } from '../../data/tracks'

export default function Testimonials() {
  const items = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>What Listeners Say</h2>
        <p className={styles.lead}>Real voices from our vinyl community</p>
      </div>

      <div className={styles.viewport}>
        <div className={styles.fadeL} />
        <div className={styles.fadeR} />
        <div className={styles.track}>
          {items.map((r, idx) => (
            <article key={`${r.id}-${idx}`} className={styles.card}>
              <img className={styles.avatar} src={r.photo} alt={r.name} loading="lazy" />
              <div className={styles.body}>
                <div className={styles.name}>{r.name}</div>
                <div className={styles.role}>{r.role}</div>
                <p className={styles.text}>{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
