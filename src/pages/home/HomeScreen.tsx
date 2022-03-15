import useHome from "handlers/home/home.hooks";
import HomeBanner from "./components/HomeBanner";
import styles from './styles/home.module.scss';

function HomeScreen() {
  const {} = useHome();

  return (
    <div className={styles.homeContainer}>
      <HomeBanner />
    </div>
  )
}

export default HomeScreen;