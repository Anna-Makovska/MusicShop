import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <header className={styles.bar}>
      <div className={styles.border} />
      <div className={styles.container}>
        <div className={styles.row}>
          <a href="/" className={styles.brand}>
  <span className={styles.record} /> MusicShop
</a>

          <nav className={styles.nav}>
            <a href="#trending" className={styles.link}>Trending</a>
            <a href="#genres" className={styles.link}>Genres</a>
            <a href="#turntables" className={styles.link}>Turntables</a>
          </nav>

          <Link to="/login" className={styles.btn}>Sign In</Link>

          <details className={styles.menu}>
            <summary className={styles.burger} aria-label="Menu" />
            <div className={styles.drawer}>
              <a href="#trending" className={styles.drawerLink}>Trending</a>
              <a href="#genres" className={styles.drawerLink}>Genres</a>
              <a href="#popular" className={styles.drawerLink}>Popular</a>
              <a href="#signin" className={styles.drawerBtn}>Sign In</a>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
