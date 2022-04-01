import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { HeaderTitle } from "layouts/HeaderLayout/Title";
import { IPoint } from "types";
import { ComponentInformation } from "component";
import { FooterLayout } from "layouts";
import { PATH_ORDER_DETAILS } from "constant";

const dataPoint: IPoint[] = [
  {
    pointType: "Điểm phí vận chuyển",
    releaseDate: "28/03/2022",
    numberOfPointsReceived: 330,
    pointsUsed: 20,
    codeOrders: "28032022_ 213219038",
  },
  {
    pointType: "Điểm phí vận chuyển",
    releaseDate: "28/03/2022",
    numberOfPointsReceived: 330,
    pointsUsed: 20,
    codeOrders: "28032022_ 213219038",
  },
  {
    pointType: "Điểm phí vận chuyển",
    releaseDate: "28/03/2022",
    numberOfPointsReceived: 330,
    pointsUsed: 20,
    codeOrders: "28032022_ 213219038",
  },
  {
    pointType: "Điểm phí vận chuyển",
    releaseDate: "28/03/2022",
    numberOfPointsReceived: 330,
    pointsUsed: 20,
    codeOrders: "28032022_ 213219038",
  },
];

const PointScreen = () => {
  //page hooks
  const { t } = useTranslation();
  const route = useRouter();

  const handlePointDetail = () => {
    route.push(PATH_ORDER_DETAILS);
  };

  return (
    <>
      <HeaderTitle />
      <div className="p-4 mt-1 bg-white">
        {/* lich su diem */}
        <div className="f-bold text-base mb-4">
          {t("pointPage.scoreHistory")}
        </div>
        {dataPoint.map((data, index) => {
          return (
            <div
              className="py-3 border-t border-solid border-gray_4 flex cursor-pointer"
              key={index}
              onClick={handlePointDetail}
            >
              <div className="w-fit f-normal text-gray_1">
                <div className="flex justify-between w-full  mb-2">
                  <span>{t("pointPage.pointType")}</span>
                  <span className="inline-block ml-2">:</span>
                </div>
                <div className="flex justify-between w-full  mb-2">
                  <span>{t("pointPage.releaseDate")}</span>
                  <span className="inline-block ml-2">:</span>
                </div>
                <div className="flex justify-between w-full  mb-2">
                  <span>{t("pointPage.numberOfPointsReceived")}</span>
                  <span className="inline-block ml-2">:</span>
                </div>
                <div className="flex justify-between w-full  mb-2">
                  <span>{t("pointPage.pointsUsed")}</span>
                  <span className="inline-block ml-2">:</span>
                </div>
                <div className="flex justify-between w-full ">
                  <span>{t("pointPage.codeOrders")}</span>
                  <span className="inline-block ml-2">:</span>
                </div>
              </div>
              <div className="ml-2 f-normal">
                <div className=" mb-2">{data.pointType}</div>
                <div className=" mb-2">{data.releaseDate}</div>
                <div className=" mb-2">{data.numberOfPointsReceived}</div>
                <div className=" mb-2">{data.pointsUsed}</div>
                <div className="">{data.codeOrders}</div>
              </div>
            </div>
          );
        })}
        <div className="w-full center border-t pt-4 border-solid border-gray_4">
          <button className="btn btn-number-primary">1</button>
          <button className="btn btn-number-second">2</button>
        </div>
      </div>
      <ComponentInformation />
      <FooterLayout />
    </>
  );
};

export default PointScreen;
