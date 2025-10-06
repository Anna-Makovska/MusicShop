import styles from './PopularGenres.module.css'
import { genres } from '../../data/tracks'
import GenreBadge from '../GenreBadge/GenreBadge'

export default function PopularGenres() {
  return (
    <section id="genres" className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>Popular Genres</h2>
        <p className={styles.lead}>Warm vintage moods for every taste</p>
      </div>

      <div className={styles.grid}>
        {genres.map((g) => (
          <GenreBadge key={g.id} item={g} size={ 'md'} />
        ))}
      </div>
    </section>
  )
}
