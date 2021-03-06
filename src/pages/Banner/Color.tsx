import { useTranslation } from "next-i18next";

import {
  CHECK_END,
  CHECK_START,
  COLORS,
  eumColors,
  PATH_RESULT_BANNER,
} from "constant";
import Link from "next/link";
interface IProps {
  handleSwitch: () => void;
}

const BannerColor = (props: IProps) => {
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
        {COLORS.map((color, index) => {
          //check phan tu dau va phan tu cuoi
          const check = (index + 1) % 3;

          const bgColor =
            "btn center btn-color" +
            " " +
            color.bgColor +
            (color.name === eumColors.WHITE
              ? " border border-solid border-gray_3"
              : " ");

          return (
            <div
              key={index}
              className={`w-1/3 ${
                check === CHECK_START
                  ? "pr-1"
                  : check === CHECK_END
                  ? "pl-1"
                  : "px-0.5"
              }`}
            >
              <div className=" flex items-center p-1.5 w-full border border-solid border-gray_3 rounded">
                <button className={bgColor} onClick={handleSwitch}>
                  {color.name === eumColors.ALL && (
                    <div className="bg-white w-[50%] h-[2px] rounded-full"></div>
                  )}
                </button>
                <div className="text-long f-normal text-base text-black ml-2">
                  {color.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full py-4 text-center f-normal text-base">
        {t("banner.searchResults")}
      </div>
      <Link href={PATH_RESULT_BANNER} passHref>
        <button className="btn btn-sub-full">
          {t("banner.searchProduct")}
        </button>
      </Link>
    </div>
  );
};

export default BannerColor;
