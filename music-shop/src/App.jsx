import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import SearchBar from "./components/SearchBar/SearchBar";
import PopularGenres from "./components/PopularGenres/PopularGenres";
import PopularTracks from "./components/PopularTracks/PopularTracks";
import TrendingNow from "./components/TrendingNow/TrendingNow";
import PlaybackTrack from "./components/PlaybackTrack/PlaybackTrack";
import Legend from "./components/Legend/Legend";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className={styles.shell}>
      <NavBar />
      <Legend />
      <main className={styles.main}>
        <aside className={styles.side}>
          <SideBar />
        </aside>
        <section className={styles.content}>
          <SearchBar />
          <TrendingNow />
          <PopularGenres />
          <PopularTracks />
        </section>
      </main>
      <PlaybackTrack />
      <Footer />
    </div>
  );
}
