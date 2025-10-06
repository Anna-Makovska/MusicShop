import styles from './Landing.module.css'
import NavBar from "../../components/NavBar/NavBar";
import TrendingNow from "../../components/TrendingNow/TrendingNow";
import PlaybackTrack from "../../components/PlaybackTrack/PlaybackTrack";
import PopularGenres from "../../components/PopularGenres/PopularGenres";
import Legend from "../../components/Legend/Legend";
import Footer from "../../components/Footer/Footer";
import MoodModal from "../../components/MoodModal/MoodModal";
import WhyUs from "../../components/WhyUs/WhyUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import PopularTurntables from "../../components/PopularTurntables/PopularTurntables";


export default function App() {
  return (
    <div className={styles.shell}>
      <MoodModal />
      <NavBar />
      <Legend />   
      <main>
          <TrendingNow />
          <PopularGenres />
          <PopularTurntables />
<WhyUs />
<Testimonials />
      </main>
      <PlaybackTrack />
      <Footer />
    </div>
  );
}
