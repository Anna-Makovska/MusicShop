import { useEffect, useRef } from "react"
import styles from "./MoodModal.module.css"
import { player } from "../../player/player"
import { moodTracks } from "../../data/tracks"

export default function MoodModal() {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (sessionStorage.getItem("moodSeen") === "1") return
    overlayRef.current?.classList.add(styles.show)
    document.documentElement.style.overflow = "hidden"
    window.dispatchEvent(new Event("mood-modal:opened"))

    const onKey = (e) => { if (e.key === "Escape") close() }
    document.addEventListener("keydown", onKey)

    return () => {
      document.removeEventListener("keydown", onKey)
      document.documentElement.style.overflow = ""
    }
  }, [])

  function close() {
    overlayRef.current?.classList.remove(styles.show)
    sessionStorage.setItem("moodSeen", "1")
    document.documentElement.style.overflow = ""
    window.dispatchEvent(new Event("mood-modal:closed"))
  }

  function pick(moodKey) {
    const track = moodTracks[moodKey]
    if (track) player.play(track)
    close()
  }

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      aria-modal="true"
      role="dialog"
      onClick={(e) => { if (e.target === overlayRef.current) close() }}
    >
      <div className={styles.modal}>
        <h3 className={styles.title}>Choose your mood</h3>
        <p className={styles.subtitle}>We will put a sound that guides you through the website</p>
        <div className={styles.grid}>
          <button className={styles.card} onClick={() => pick("chill")}>
            <span className={`${styles.icon} ${styles.chill}`} /> Chill
          </button>
          <button className={styles.card} onClick={() => pick("jazz")}>
            <span className={`${styles.icon} ${styles.jazz}`} /> Jazz
          </button>
          <button className={styles.card} onClick={() => pick("lofi")}>
            <span className={`${styles.icon} ${styles.lofi}`} /> Lo-Fi
          </button>
          <button className={styles.card} onClick={() => pick("upbeat")}>
            <span className={`${styles.icon} ${styles.upbeat}`} /> Upbeat
          </button>
        </div>
        <button className={styles.skip} onClick={close}>Пропустити</button>
      </div>
    </div>
  )
}
