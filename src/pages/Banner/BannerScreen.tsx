import { ComponentQualityProduct } from "component";
import BannerCategory from "./Category";
import BannerColor from "./Color";
import BannerProduct from "./Product";
import BannerSize from "./Size";

const BannerScreen = () => {
  return (
    <>
      <ComponentQualityProduct number={169.599} />
      <BannerProduct />
      <BannerCategory />
      <BannerSize />
      <BannerColor />
    </>
  );
};

export default BannerScreen;
