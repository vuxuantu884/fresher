import { useTranslation } from "next-i18next";
import resolveConfig from "tailwindcss/resolveConfig";
import Link from "next/link";

import { CHECK_END, CHECK_START, PATH_PAYMENT } from "constant";
import { IProduct } from "types";
import {
  IConArrowDoubleLeft,
  ComponentProductSecond,
  ComponentProductCard,
  ComponentProduct,
  IConPerson,
  IConArrowRight,
} from ".";
import tailwindConfig from "../../tailwind.config";

const fullConfig: any = resolveConfig(tailwindConfig);

const products: IProduct[] = [
  {
    img: "/images/product/product1.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    saleOne: true,
    saleTwo: true,
  },
  {
    img: "/images/product/product2.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    saleOne: true,
    saleTwo: true,
  },
  {
    img: "/images/product/product3.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    saleOne: true,
    saleTwo: true,
  },
  {
    img: "/images/product/product4.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    saleOne: true,
    saleTwo: true,
  },
  {
    img: "/images/product/product1.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    saleOne: true,
    saleTwo: true,
  },
  {
    img: "/images/product/product2.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
  },
  {
    img: "/images/product/product3.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
  },
  {
    img: "/images/product/product4.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
  },
];

export const ComponentCartEmpty = () => {
  //page hook
  const { t } = useTranslation();

  return (
    <>
      <div className="p-4  bg-[#FEF1F4] f-normal text-base">
        {t("currentlyNoProducts")}
      </div>
      <div className="p-4  bg-white f-bold flex justify-between">
        <div>{t("recentlyViewedProducts")}</div>
        <div className="text-primary flex items-center cursor-pointer">
          <span className="inline-block mr-1">{t("home.seeMore")}</span>
          <IConArrowDoubleLeft className="relative top-0.5" />
        </div>
      </div>
      <div className="p-4 bg-white mb-4">
        <div className="w-full flex gap-y-6 flex-wrap">
          {products.map((data, index) => {
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
                }`}
                key={index}
              >
                <ComponentProductSecond
                  data={data}
                  saleOne={data.saleOne}
                  saleTwo={data.saleTwo}
                  select={false}
                />
              </div>
            );
          })}
        </div>
        <button className="btn btn-sub-primary mt-4">{t("shopping")}</button>
      </div>
    </>
  );
};

export const ComponentCart = () => {
  //page hook
  const { t } = useTranslation();

  return (
    <>
      <div className="p-4 pt-0 bg-white">
        <div className="pb-4 border-b border-solid border_gray_3">
          <ComponentProductCard />
        </div>
        <div className="py-4">
          <ComponentProductCard />
        </div>
        {/* payment */}
        <div className="w-full px-4 border rounded-lg border-solid border-gray_3">
          <div className="py-4 flex justify-between f-bold  border-b border-solid border_gray_3">
            <span>{t("totalProduct")}</span>
            <span className="text-primary">400.000 đ</span>
          </div>
          <div className="py-4 flex justify-between f-bold">
            <span>{t("provisional")}</span>
            <span className="text-primary">400.000 đ</span>
          </div>
        </div>
      </div>
      <div className="px-10 bg-white pb-5">
        <Link href={PATH_PAYMENT} passHref>
          <button className="btn btn-sub-full">{t("payment")}</button>
        </Link>
      </div>
      {/* Đã thêm vào yêu thích */}
      <div className="p-4  bg-white f-bold flex justify-between">
        <div>{t("addedToFavorites")}</div>
        <div className="text-primary flex items-center cursor-pointer">
          <span className="inline-block mr-1">{t("home.seeMore")}</span>
          <IConArrowDoubleLeft className="relative top-0.5" />
        </div>
      </div>
      <div className="p-4 bg-white">
        <div className="w-full flex gap-y-6 flex-wrap">
          {products.map((data, index) => {
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
                }`}
                key={index}
              >
                <ComponentProduct
                  data={data}
                  saleOne={data.saleOne}
                  saleTwo={data.saleTwo}
                  select={false}
                />
                <div className="mt-2">
                  <button className="btn btn-primary-full py-2 text-[11px]">
                    {t("addToCart")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Sản phẩm đã xem gần đây */}
      <div className="px-4  bg-white f-bold flex justify-between">
        <div>{t("addedToFavorites")}</div>
        <div className="text-primary flex items-center cursor-pointer">
          <span className="inline-block mr-1">{t("home.seeMore")}</span>
          <IConArrowDoubleLeft className="relative top-0.5" />
        </div>
      </div>
      <div className="p-4 bg-white">
        <div className="w-full flex gap-y-6 flex-wrap">
          {products.map((data, index) => {
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
                }`}
                key={index}
              >
                <ComponentProductSecond data={data} />
              </div>
            );
          })}
          <div className="w-full">
            <button className="btn btn-address-full text-primary f-bold">
              {t("addToCart")}
            </button>
          </div>
          <div className="mt-4 py-4 px-3 bg-gray_3 w-full flex justify-between">
            <div className="flex items-center">
              <IConPerson />
              <span> {t("silverMember")}</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block mr-3">998 {t("point")}</span>
              <IConArrowRight color={fullConfig.theme.colors.primary} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
