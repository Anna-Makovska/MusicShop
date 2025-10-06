import styles from './TrendingNow.module.css'
import { trending } from '../../data/tracks'
import TrendingNowCard from '../TrendingNowCard/TrendingNowCard'

export default function TrendingNow() {
  return (
    <section id="trending" className={styles.section}>
      <h2 className={styles.title}>Trending Now</h2>
      <div className={styles.row}>
        {trending.map(item => (
          <TrendingNowCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
