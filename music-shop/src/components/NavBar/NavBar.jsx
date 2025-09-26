import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.bar}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.brand}>MusicShop</div>
          <nav className={styles.nav}>
            <a href="#trending">Trending</a>
            <a href="#genres">Genres</a>
            <a href="#popular">Popular</a>
          </nav>
          <button className="btn">Sign In</button>
        </div>
      </div>
    </header>
  );
}
