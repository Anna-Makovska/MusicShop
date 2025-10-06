import styles from './PopularTurntables.module.css'
import { products } from '../../data/tracks'

export default function PopularTurntables() {
  return (
    <section id="turntables" className={styles.section}>
      <h2 className={styles.title}>Popular Turntables</h2>
      <div className={styles.row}>
        {products.map((item) => (
          <article key={item.id} className={styles.card}>
            <img
              src={item.cover}
              alt={item.title}
              className={styles.cover}
              loading="lazy"
            />
            <h3 className={styles.name}>{item.title}</h3>
            <p className={styles.price}>${item.price.toFixed(2)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
