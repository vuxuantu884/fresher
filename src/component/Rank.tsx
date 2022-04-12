import { useTranslation } from "next-i18next";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import { setTogglePopup } from "store";
import { useOnClickOutside } from "utils";

import { IConCloseFullBg } from ".";

export const ComponentRank = () => {
  //page hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const handleCloseRank = () => {
    dispatch(setTogglePopup());
  };

  useOnClickOutside(ref, handleCloseRank);

  return (
    <div className="bg-popup flex justify-center">
      <div
        className="py-4 bg-[#C4C4CC] w-[90%] h-fit absolute top-[30vh] -translate-y-2/4 text-center rounded-lg"
        ref={ref}
      >
        {/* close */}
        <div
          className="absolute top-0 right-0 translate-x-2/4 -translate-y-2/4"
          onClick={handleCloseRank}
        >
          <IConCloseFullBg />
        </div>
        <div className="f-bold text-base mb-2">{t("silverLevel")}</div>
        <div className="f-bold text-[38px] text-white mb-[18px]">
          {t("silver")}
        </div>
        <div className="w-full py-3 bg-bodyText f-normal text-white font-semibold">
          {t("descCoupons")}
        </div>
        <div className="py-4">
          <div>{t("coupon'sBirthday")}</div>
          <div className="f-bold text-[32px] text-primary my-3">5%</div>
          <div>
            <span className="f-bold">15%</span> {t("platinumTier")}
          </div>
        </div>
        <div className="w-full py-3 bg-bodyText f-normal text-white font-semibold">
          {t("addLotteryPoints", {
            number: 3,
          })}
        </div>
        <div className="py-4">
          <div className="f-bold text-[32px] text-primary my-3">
            3 {t("point")}
          </div>
          <div>
            <span className="f-bold">5</span> {t("pointsForPlatinum")}
          </div>
        </div>
        <div className="px-4">
          <button className="btn btn-sub-primary-black">
            {" "}
            {t("seeDetails")}
          </button>
        </div>
      </div>
    </div>
  );
};
