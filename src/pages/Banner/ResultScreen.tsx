/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import resolveConfig from "tailwindcss/resolveConfig";
import { useState } from "react";

import { ComponentProductSale, IConArrowDow } from "component";
import tailwindConfig from "../../../tailwind.config";

const fullConfig: any = resolveConfig(tailwindConfig);

const ResultBannerScreen = () => {
  //page hook
  const { t } = useTranslation();
  //page variable
  const menu: string[] = [
    t("favourite"),
    t("expensive"),
    t("lowPrice"),
    t("choose") + "%",
  ];
  //page state
  const [currentMenu, setCurrentMenu] = useState<string>(menu[0]);

  const handleToggleMenu = (value: string) => {
    setCurrentMenu(value);
  };

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
      <div className="flex w-full bg-white border-b border-solid border-gray_4">
        {menu.map((data, index) => {
          return (
            <div
              className={`w-1/4 text-center f-normal py-4 ${
                currentMenu === data
                  ? "text-primary border-b border-solid border-primary"
                  : "text-gray_2"
              }`}
              key={index}
            >
              <span
                className="cursor-pointer"
                onClick={() => {
                  handleToggleMenu(data);
                }}
              >
                {data}
              </span>
            </div>
          );
        })}
      </div>
      <ComponentProductSale />
    </>
  );
};

export default ResultBannerScreen;
