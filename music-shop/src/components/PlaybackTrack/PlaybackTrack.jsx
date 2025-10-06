import { useEffect, useRef } from 'react'
import styles from './PlaybackTrack.module.css'
import { player } from '../../player/player'

export default function PlaybackTrack() {
  const imgRef = useRef(null)
  const titleRef = useRef(null)
  const artistRef = useRef(null)
  const timerRef = useRef(null)
  const playRef = useRef(null)

useEffect(() => {
  const render = ({ track, audio } = {}) => {
    const skipped = sessionStorage.getItem('moodSkip') === '1'
    const hasTrack = !!(track && track.audio)

    if (hasTrack && !skipped) {
      imgRef.current.style.background = `url(${track.cover}) center/cover`
    } else {
 
      imgRef.current.style.background =
        "radial-gradient(circle at 50% 50%, #1a1a1a 0 40%, #d9a441 41% 42%, #1a1a1a 43% 100%), \
         repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,.08) 0 1px, rgba(255,255,255,0) 1px 3px)"
    }

    titleRef.current.textContent = hasTrack && !skipped ? track.title : ''
    artistRef.current.textContent = hasTrack && !skipped ? track.artist : ''
    timerRef.current.textContent = player.timeLabel()
    playRef.current.textContent = !audio || audio.paused ? 'Play' : 'Pause'
  }

  const unsub = player.subscribe(render)
  render({ track: player.track, audio: player.audio })
  return unsub
}, [])

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.now}>
  <div ref={imgRef} className={styles.thumb} />
  <div className={styles.metaWrap}>
    <div ref={titleRef} className={styles.title}>Enjoy your music journey</div>
    <div ref={artistRef} className={styles.artist}></div>
  </div>
</div>


        <div className={styles.controls}>
          <button ref={playRef} className={styles.btn} onClick={() => player.toggle()}>Play</button>
        </div>

        <div ref={timerRef} className={styles.timer}>00:00 / 00:00</div>
      </div>
    </div>
  )
}
