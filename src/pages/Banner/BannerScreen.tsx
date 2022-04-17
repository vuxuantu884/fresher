import { useRouter } from "next/router";
import { useState } from "react";

import { ComponentQualityProduct } from "component";
import { enumBanner } from "constant";
import BannerCategory from "./Category";
import BannerColor from "./Color";
import BannerProduct from "./Product";
import BannerSize from "./Size";

const BannerScreen = () => {
  //page state
  const [currentPage, setCurrentPage] = useState<enumBanner>(
    enumBanner.PRODUCT
  );
  //page hooks
  const route = useRouter();

  const handleSwitch = () => {
    switch (currentPage) {
      case enumBanner.PRODUCT:
        setCurrentPage(enumBanner.CATEGORY);
        break;
      case enumBanner.CATEGORY:
        setCurrentPage(enumBanner.SIZE);
        break;
      case enumBanner.SIZE:
        setCurrentPage(enumBanner.COLOR);
        break;
      case enumBanner.COLOR:
        break;
      default:
        break;
    }
  };

  const render = () => {
    switch (currentPage) {
      case enumBanner.PRODUCT:
        return <BannerProduct handleSwitch={handleSwitch} />;
      case enumBanner.CATEGORY:
        return <BannerCategory handleSwitch={handleSwitch} />;
      case enumBanner.SIZE:
        return <BannerSize handleSwitch={handleSwitch} />;
      case enumBanner.COLOR:
        return <BannerColor handleSwitch={handleSwitch} />;
      default:
        return <></>;
    }
  };

  const handleBack = () => {
    switch (currentPage) {
      case enumBanner.PRODUCT:
        route.back();
        break;
      case enumBanner.CATEGORY:
        setCurrentPage(enumBanner.PRODUCT);
        break;
      case enumBanner.SIZE:
        setCurrentPage(enumBanner.CATEGORY);
        break;
      case enumBanner.COLOR:
        setCurrentPage(enumBanner.SIZE);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ComponentQualityProduct number={169.599} handleBack={handleBack} />
      {render()}
    </>
  );
};

export default BannerScreen;
