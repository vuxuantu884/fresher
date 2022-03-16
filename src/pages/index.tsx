import MainLayout from 'layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeScreen from './home/HomeScreen';

const HomePage = () => {

  return <HomeScreen />;
};

HomePage.Layout = MainLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default HomePage;
