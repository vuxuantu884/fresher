/* eslint-disable @next/next/no-img-element */
import { CHECK_END, CHECK_START } from "constant";
import { useTranslation } from "next-i18next";

import { IBannerProduct } from "types";

const bannerProducts: IBannerProduct[] = [
  {
    title: "Quần áo",
    images: [
      "/images/banner/banner1.png",
      "/images/banner/banner2.png",
      "/images/banner/banner3.png",
      "/images/banner/banner1.png",
    ],
  },
  {
    title: "Giày dép",
    images: [
      "/images/banner/banner1.png",
      "/images/banner/banner2.png",
      "/images/banner/banner3.png",
      "/images/banner/banner1.png",
    ],
  },
  {
    title: "Túi xách",
    images: [
      "/images/banner/banner1.png",
      "/images/banner/banner2.png",
      "/images/banner/banner3.png",
      "/images/banner/banner1.png",
    ],
  },
  {
    title: "Phụ kiện, trang sức",
    images: [
      "/images/banner/banner1.png",
      "/images/banner/banner2.png",
      "/images/banner/banner3.png",
      "/images/banner/banner1.png",
    ],
  },
  {
    title: "Ví, hộp",
    images: ["/images/banner/banner1.png", "/images/banner/banner2.png"],
  },
  {
    title: "Đồng hồ",
    images: ["/images/banner/banner1.png", "/images/banner/banner2.png"],
  },
  {
    title: "Nước hoa, tinh dầu",
    images: ["/images/banner/banner1.png", "/images/banner/banner2.png"],
  },
  {
    title: "Khác",
    images: ["/images/banner/banner1.png", "/images/banner/banner2.png"],
  },
];

const BannerProduct = () => {
  //page hook
  const { t } = useTranslation();

  return (
    <div className="layout-primary bg-white mb-4">
      <div className="f-normal text-base text-center mb-4">
        {t("banner.productLooking")}
      </div>
      <div className="w-full flex flex-wrap gap-y-2">
        {bannerProducts.map((data, index) => {
          //check phan tu dau va phan tu cuoi
          const check = (index + 1) % 2;
          return (
            <div
              className={`w-1/2 ${
                check === CHECK_START
                  ? "pr-1"
                  : check === CHECK_END
                  ? "pl-1"
                  : "px-0.5"
              } flex flex-wrap relative`}
              key={index}
            >
              {data.images &&
                data.images.map((item, index) => {
                  return (
                    <div className="w-1/2" key={index}>
                      <img
                        className="w-full aspect-square object-cover"
                        src={item}
                        alt=""
                      />
                    </div>
                  );
                })}

              <div
                className={`bg-popup ${
                  check === CHECK_START
                    ? "mr-1"
                    : check === CHECK_END
                    ? "ml-1"
                    : "mx-0.5"
                } center font-bold font-sans text-base not-italic text-white leading-4`}
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

export default BannerProduct;
