import useHome from "handlers/home/home.hooks";
import HomeBrand from "./components/Brand";
import HomeSearch from "./components/Search";
import HomeSignUp from "./components/SignUp";
import HomeViewedProduct from "./components/ViewedProducts";

function HomeScreen() {
  const { } = useHome();

  return (
    <>
      <HomeSearch />
      <HomeBrand/>
      <HomeSignUp/>
      <HomeViewedProduct/>
    </>
  )
}

export default HomeScreen;