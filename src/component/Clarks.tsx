import { useTranslation } from "next-i18next";
import { IConArrowRight } from "./icon";

export const ComponentClarks = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="px-4 py2 flex h-7 items-center">
        <span className="font-bold text-gray_2 text-base">{t("home.home")}</span>
        <IConArrowRight />
        <span className="font-bold font-sans text-bodyText">Clarks</span>
      </div>
      <div className="p-4">
        <div className="p-3 font-bold text-base">{t("notFoundProduct")}</div>
      </div>
    </div>
  );
};
