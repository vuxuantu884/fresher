import { enumBreakPoint } from "constant";
import { MainLayout } from "layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useWindowDimensions } from "utils";
import HomeScreen from "./home/HomeScreen";
import HomeScreenWeb from "./home/HomeScreenWeb";

const HomePage = () => {
  const { width } = useWindowDimensions();
  console.log(1);
  return <>{width >= enumBreakPoint.md ? <HomeScreenWeb /> : <HomeScreen />}</>;
  // return <HomeScreenWeb />;
};

HomePage.Layout = MainLayout;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default HomePage;
