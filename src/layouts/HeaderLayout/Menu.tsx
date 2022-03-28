import { useTranslation } from "next-i18next";
import { useState } from "react";

import { useHomeMenu } from "handlers";

export const HeaderMenu = () => {
  //page state
  const [currentMenu, setCurrentMenu] = useState<string>("");
  //page hooks
  const { t } = useTranslation();
  const { handleToggleMenu } = useHomeMenu(setCurrentMenu);
  //page variable
  const dataMenu: string[] = [
    t("home.women"),
    t("home.man"),
    t("home.kids"),
    t("home.sport"),
  ];

  return (
    <div className="bg-white px-2 py-4 flex">
      {dataMenu.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              currentMenu === item ? "text-primary" : "text-black"
            } w-[25%] text-center`}
            onClick={() => {
              handleToggleMenu(item);
            }}
          >
            <span className="cursor-pointer font-sans font-medium text-sm leading-5">
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
};
