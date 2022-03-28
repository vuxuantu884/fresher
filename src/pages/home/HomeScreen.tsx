import useHome from "handlers/home/home.hooks";
import HomeBrand from "./components/Brand";
import HomeFavoriteProduct from "./components/FavoriteProduct";
import HomeSearch from "./components/Search";
import { SearchByCategory } from "./components/SearchByCategory";
import { SearchRanking } from "./components/SearchRanking";
import HomeSignUp from "./components/SignUp";
import HomeViewedProduct from "./components/ViewedProducts";

function HomeScreen() {
  const {} = useHome();

  return (
    <>
      <HomeSearch />
      <HomeBrand />
      <HomeSignUp />
      <HomeViewedProduct />
      <HomeFavoriteProduct />
      <SearchRanking />
      <SearchByCategory />
    </>
  );
}

export default HomeScreen;
