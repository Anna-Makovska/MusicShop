import styles from './TrendingNowCard.module.css'
import { player } from '../../player/player'

export default function TrendingNowCard({ item }) {
  function onPlay() { player.play(item) }
  return (
    <article className={styles.card}>
      <img className={styles.cover} src={item.cover} alt={`${item.artist} – ${item.title}`} />
      <div className={styles.info}>
        <h3 className={styles.name}>{item.title}</h3>
        <p className={styles.meta}>{item.artist} • {item.duration}</p>
        <button className={styles.btn} onClick={onPlay}>Play</button>
      </div>
    </article>
  )
}
