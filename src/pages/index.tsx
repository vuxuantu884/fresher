import MainLayout from 'layouts/MainLayout';
import { useSelector } from 'react-redux';
import HomeScreen from './home/HomeScreen';

const HomePage = () => {

  return <HomeScreen />;
};

HomePage.Layout = MainLayout;

export default HomePage;
