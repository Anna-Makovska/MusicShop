import styles from "./PlaybackTrack.module.css";

export default function PlaybackTrack() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.now}>Now Playing</div>
        <div className={styles.controls}>
          <button className={styles.btn}>Prev</button>
          <button className={styles.btn}>Play</button>
          <button className={styles.btn}>Next</button>
        </div>
        <div className={styles.timer}>00:00 / 00:00</div>
      </div>
    </div>
  );
}
