
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import styles from "./Legend.module.css"

export default function Legend() {
  const controls = useAnimation()

  useEffect(() => {
    if (sessionStorage.getItem('moodSeen') === '1') {
      controls.start({ x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } })
      return
    }

    const onOpened = () => {
      controls.start({ x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } })
    }
    window.addEventListener('mood-modal:opened', onOpened, { once: true })
    return () => window.removeEventListener('mood-modal:opened', onOpened)
  }, [controls])

  return (
    <section className={styles.legend}>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src="/video/vinyl-turntable.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.grain} />
      <motion.div
        className={styles.caption}
        initial={{ x: -80, opacity: 0 }}
        animate={controls}
      >
        <p className={styles.eyebrow}>Discover</p>
        <h1 className={styles.heading}>Music that perfectly fits your soul</h1>
        <ul className={styles.tags}>
          <li className={styles.chip}>Vinyl</li>
          <li className={styles.chip}>Jazz</li>
          <li className={styles.chip}>Chill</li>
        </ul>
        <a href="#trending" className={styles.cta}>Explore</a>
      </motion.div>
      <motion.button
        className={styles.scrollHint}
        onClick={() => {
          const el = document.querySelector("#trending")
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
        }}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 0.8, duration: 1.8, repeat: Infinity }}
      >
        ↓
      </motion.button>
    </section>
  )
}
