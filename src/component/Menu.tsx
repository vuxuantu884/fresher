import { useTranslation } from "next-i18next";
import { useState } from "react";

export const ComponentMenuProduct = () => {
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
  );
};
