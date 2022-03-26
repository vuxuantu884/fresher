import { Row } from "antd";

import {
  IConHamburger,
  IConSearch,
  IConShoppingCart,
  IConHeart,
} from "component";
import { useTranslation } from "next-i18next";

export const HeaderTitle = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <Row gutter={24} className="header-title">
      <div className="mr-4">
        <IConHamburger />
      </div>
      <div className="">
        <IConSearch />
      </div>
      <div className="reikaFashion">{t("home.reikaFashion")}</div>
      <div className="mr-4">
        <IConHeart />
      </div>{" "}
      <div className="">
        <IConShoppingCart />
      </div>
    </Row>
  );
};
