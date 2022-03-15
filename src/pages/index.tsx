import MainLayout from 'layouts/MainLayout';
import { useSelector } from 'react-redux';
import HomeScreen from './home/HomeScreen';

const HomePage = () => {
  const user = useSelector((state: any) => state.user.user);
  console.log('user: ', user);

  return <HomeScreen />;
};

HomePage.Layout = MainLayout;

export default HomePage;
