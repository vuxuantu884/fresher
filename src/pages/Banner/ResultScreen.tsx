/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import resolveConfig from "tailwindcss/resolveConfig";
import { useState } from "react";

import {
  ComponentMenuProduct,
  ComponentProductSale,
  IConArrowDow,
} from "component";
import tailwindConfig from "../../../tailwind.config";

const fullConfig: any = resolveConfig(tailwindConfig);

const ResultBannerScreen = () => {
  //page hook
  const { t } = useTranslation();

  return (
    <>
      <div className="flex bg-white mt-0.5 f-normal text-xs items-center">
        <span className="text-gray_2 inline-block  ml-3 mr-2">
          {t("home.home")}
        </span>
        <img
          src="/images/arrowLeft.png"
          alt=""
          className="h-full object-cover"
        />
        <span className="inline-block ml-2">{t("searchResults")}</span>
      </div>
      <div className="layout-primary bg-gray_4 f-normal flex justify-between">
        <span>
          <span>{t("resultSearch")}</span>
          <br />
          <span>(18 {t("product")})</span>
        </span>
        <IConArrowDow color={fullConfig.theme.colors.primary} />
      </div>
      <ComponentMenuProduct />
      <ComponentProductSale />
    </>
  );
};

export default ResultBannerScreen;
