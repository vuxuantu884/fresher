import { useTranslation } from "next-i18next";
import { IConArrowRight } from ".";

export const ComponentInformation = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-4 not-italic font-sans font-normal text-sm text-bodyText">
      <div className="py-3 px-4 flex justify-between bg-[#4F4F4F] items-center">
        <div className="text-white">{t("info.myPersonalPage")}</div>
        <IConArrowRight />
      </div>

      <div className="py-3 px-4 flex justify-between bg-gray_4 items-center">
        <div className="">{t("info.orderHistory")}</div>
      </div>
      <div className="py-3 px-4 flex justify-between bg-white items-center">
        <div className="">{t("info.shipmentHistoryAndStatus")}</div>
      </div>
      <div className="py-3 px-4 flex justify-between bg-white items-center border-b border-solid border-gray_4">
        <div className="">{t("info.favoritesFolder")}</div>
      </div>
      <div className="py-3 px-4 flex justify-between bg-white items-center border-b border-solid border-gray_4">
        <div className="">{t("info.customerInformation")}</div>
      </div>
      <div className="py-3 px-4 flex justify-between bg-white items-center border-b border-solid border-gray_4">
        <div className="">{t("info.shippingAddress")}</div>
      </div>
    </div>
  );
};
