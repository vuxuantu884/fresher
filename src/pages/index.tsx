import MainLayout from 'layouts/MainLayout';
// import { withTranslations } from 'middleware/withSSTranslations';
import HomeScreen from './home/HomeScreen';

const HomePage = () => {

  return <HomeScreen />;
};

HomePage.Layout = MainLayout;

// export const getServerSideProps = withTranslations();

export default HomePage;
