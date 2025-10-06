import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.foot}>
      © {new Date().getFullYear()} MusicShop
    </footer>
  )
}
