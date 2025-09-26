import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.side}>
      <div className={styles.title}>Library</div>
      <ul className={styles.list}>
        <li>
          <a href="#">Playlists</a>
        </li>
        <li>
          <a href="#">Artists</a>
        </li>
        <li>
          <a href="#">Albums</a>
        </li>
        <li>
          <a href="#">Downloads</a>
        </li>
      </ul>
    </div>
  );
}
