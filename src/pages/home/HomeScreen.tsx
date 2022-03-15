import HomeBanner from "./components/HomeBanner";
import styles from './styles/home.module.scss';

function HomeScreen() {
  return (
    <div className={styles.homeContainer}>
      <HomeBanner />
    </div>
  )
}

export default HomeScreen;