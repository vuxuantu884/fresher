/* eslint-disable @next/next/no-img-element */
import { CHECK_END, CHECK_START } from "constant";
import { useTranslation } from "next-i18next";

import { IBannerProduct } from "types";

const bannerCategory: IBannerProduct[] = [
  {
    title: "TOP SALE",
    image: "/images/banner/banner1.png",
  },
  {
    title: "Chân váy",
    image: "/images/banner/banner2.png",
  },
  {
    title: "Quần âu",
    image: "/images/banner/banner3.png",
  },
  {
    title: "Váy dài",
    image: "/images/banner/banner1.png",
  },
  {
    title: "Jacket",
    image: "/images/banner/banner2.png",
  },
  {
    title: "Set đồ",
    image: "/images/banner/banner3.png",
  },
  {
    title: "Vest",
    image: "/images/banner/banner1.png",
  },
  {
    title: "Đồ lót, đồ ngủ",
    image: "/images/banner/banner2.png",
  },
  {
    title: "Tất, legging",
    image: "/images/banner/banner3.png",
  },
  {
    title: "Phụ kiện thời trang",
    image: "/images/banner/banner1.png",
  },
  {
    title: "Đồ bơi",
    image: "/images/banner/banner2.png",
  },
];

interface IProps {
  handleSwitch: () => void;
}

const BannerCategory = (props: IProps) => {
  //page props
  const { handleSwitch } = props;
  //page hook
  const { t } = useTranslation();

  return (
    <div className="layout-primary bg-white mb-4">
      <div className="f-normal text-base text-center mb-4">
        {t("banner.selectProductCategory")}
      </div>
      <div className="w-full flex flex-wrap gap-y-2">
        {bannerCategory.map((data, index) => {
          //check phan tu dau va phan tu cuoi
          const check = (index + 1) % 3;
          return (
            <div
              className={`w-1/3 ${
                check === CHECK_START
                  ? "pr-1"
                  : check === CHECK_END
                  ? "pl-1"
                  : "px-0.5"
              } flex flex-wrap relative cursor-pointer`}
              key={index}
              onClick={handleSwitch}
            >
              <img
                className="w-full aspect-[2/1] object-cover"
                src={data.image}
                alt=""
              />
              <div
                className={`bg-popup ${
                  check === CHECK_START
                    ? "mr-1"
                    : check === CHECK_END
                    ? "ml-1"
                    : "mx-0.5"
                } center font-bold font-sans text-base not-italic text-white text-center leading-4`}
              >
                {data.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerCategory;
