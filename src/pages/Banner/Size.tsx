import { useTranslation } from "next-i18next";

import { CHECK_END, CHECK_START, enumSizeBanner } from "constant";
import { IBannerSize } from "types";

const bannerSize: IBannerSize[] = [
  {
    size: enumSizeBanner.S,
    status: true,
  },
  {
    size: enumSizeBanner.SS,
    status: true,
    choose: true,
  },
  {
    size: enumSizeBanner._3S,
    status: true,
  },
  {
    size: enumSizeBanner.M,
  },
  {
    size: enumSizeBanner.FREE,
  },
  {
    size: enumSizeBanner.L,
  },
  {
    size: enumSizeBanner.LL,
  },
  {
    size: enumSizeBanner._3L,
  },
  {
    size: enumSizeBanner._4L,
  },
];

interface IProps {
  handleSwitch: () => void;
}

const BannerSize = (props: IProps) => {
  //page props
  const { handleSwitch } = props;
  //page hook
  const { t } = useTranslation();

  return (
    <div className="layout-primary bg-white mb-4">
      <div className="f-normal text-base text-center mb-4">
        {t("banner.chooseSize")}
      </div>
      <div className="w-full flex flex-wrap gap-y-2">
        {bannerSize.map((data, index) => {
          //check phan tu dau va phan tu cuoi
          const check = (index + 1) % 3;

          return (
            <div
              key={index}
              className={`w-1/3 ${
                check === CHECK_START
                  ? "pr-1"
                  : check === CHECK_END
                  ? "pl-1"
                  : "px-0.5"
              } flex flex-wrap cursor-pointer`}
              onClick={handleSwitch}
            >
              <button
                className={`btn w-full aspect-[2/1] f-normal text-base bg-gray_4 rounded  ${
                  data.status ? "text-black" : "text-gray_3"
                } ${data.choose && "border border-solid border-primary"}`}
              >
                {data.size}
              </button>
            </div>
          );
        })}
        <button className="btn btn-sub-full mt-2">{t("next")}</button>
      </div>
    </div>
  );
};

export default BannerSize;
