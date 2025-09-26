import styles from "./PopularGenres.module.css";
import { genres } from "../../data/tracks";
import GenreCard from "../GenreCard/GenreCard";

export default function PopularGenres() {
  return (
    <section id="genres" className="grid">
      <h2 className="sectionTitle">Popular Genres</h2>
      <div className={styles.row}>
        {genres.map((item) => (
          <GenreCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
