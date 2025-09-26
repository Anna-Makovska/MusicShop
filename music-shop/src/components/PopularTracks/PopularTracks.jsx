import styles from "./PopularTracks.module.css";
import { popular } from "../../data/tracks";
import TrackCard from "../TrackCard/TrackCard";

export default function PopularTracks() {
  return (
    <section id="popular" className="grid">
      <h2 className="sectionTitle">Popular Tracks</h2>
      <div className={styles.list}>
        {popular.map((item) => (
          <TrackCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
