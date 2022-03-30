/* eslint-disable @next/next/no-img-element */
import resolveConfig from "tailwindcss/resolveConfig";
import { TailwindConfig } from "tailwindcss/tailwind-config";
import { useTranslation } from "next-i18next";
import Select from "@atlaskit/select";

import { ComponentProduct, IConArrowDow } from "component";
import { CHECK_END, CHECK_START } from "constant";
import { FooterLayout, HeaderLayout } from "layouts";
import tailwindConfig from "../../../tailwind.config";
import { IProduct } from "types";
import styles from "./styles/sale.module.scss";

const fullConfig: any = resolveConfig(tailwindConfig);

interface IData {
  img: string;
  name: string;
}
const products: IProduct[] = [
  {
    img: "/images/product/product1.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    status: true,
    saleOne: true,
  },
  {
    img: "/images/product/product2.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    status: true,
  },
  {
    img: "/images/product/product3.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    saleOne: true,
  },
  {
    img: "/images/product/product4.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
  },
  {
    img: "/images/product/product1.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    status: true,
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
    status: true,
  },
  {
    img: "/images/product/product4.png",
    title: "ReZARD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iure numquam eligendi, autem odio cupiditate quos quisquam minus nulla accusantium dolores deleniti nam molestiae doloribus recusandae ipsa quod mollitia eveniet.",
    price: 200.0,
    saleTwo: true,
  },
];

const data: IData[] = [
  {
    img: "/images/sale/product.png",
    name: "Giày bệt mềm",
  },
  {
    img: "/images/sale/product.png",
    name: "Sneaker",
  },
  {
    img: "/images/sale/product.png",
    name: "Giày lười",
  },
  {
    img: "/images/sale/product.png",
    name: "TOP (bảng xếp hạng",
  },
  {
    img: "/images/sale/product.png",
    name: "Váy liền, váy dài",
  },
  {
    img: "/images/sale/product.png",
    name: "Túi xách",
  },
];

const options = [
  { label: "Adelaide", value: "adelaide" },
  { label: "Brisbane", value: "brisbane" },
  { label: "Canberra", value: "canberra" },
  { label: "Darwin", value: "darwin" },
  { label: "Hobart", value: "hobart" },
  { label: "Melbourne", value: "melbourne" },
  { label: "Perth", value: "perth" },
  { label: "Sydney", value: "sydney" },
];

interface IProps {
  img: string;
  title: string;
  color: string;
}

export const Sale1Screen = (props: IProps) => {
  //page props
  const { img, title, color } = props;
  //page hooks
  const { t } = useTranslation();

  return (
    <>
      <HeaderLayout />
      <div className="w-full">
        <img src={img} className="w-full object-cover" alt="" />
      </div>
      <div className={`${color} p-4`}>
        <div className="text-center text-bodyText font-bold not-italic text-base mb-4">
          {title}
        </div>
        <div className="flex gap-y-4 flex-wrap">
          {data.map((data, index) => {
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
                <img
                  src={data.img}
                  className="w-full aspect-square object-cover"
                  alt=""
                />
                <div className="mt-1 text-center max-w-[78%] mx-auto">
                  {data.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex px-4 py-3 justify-between items-center bg-gray_4">
        <span className="font-sans font-normal text-sm not-italic text-bodyText">
          Tìm kiếm nâng cao , (185.549 sản phẩm)
        </span>
        <IConArrowDow color={fullConfig.theme.colors.primary} />
      </div>
      <div className="flex border-b border-solid border-gray_4 bg-white">
        <div className="w-1/4 text-center not-italic font-sans text-sm text-bodyText font-normal py-3 cursor-pointer border-b border-solid border-[#C4C4C4]">
          SP yêu thích
        </div>
        <div className="w-1/4 text-center not-italic font-sans text-sm text-gray_2 font-normal py-3 cursor-pointer">
          Bộ sưu tập mới
        </div>
        <div className="w-1/4 text-center not-italic font-sans text-sm text-gray_2 font-normal py-3 cursor-pointer">
          SP giá rẻ
        </div>
        <div className="w-1/4 text-center not-italic font-sans text-sm text-gray_2 font-normal py-3 cursor-pointer">
          SP giá cao
        </div>
      </div>
      <div className="bg-white p-4 flex gap-x-3">
        <button className="w-1/2 flex justify-center items-center h-[58px] flex-col bg-gray_4 rounded font-sans font-normal">
          <div className="text-bodyText text-sm"> {t("sale.trademark")}</div>
          <div className="text-gray_1 text-xs">{t("mine")}</div>
        </button>
        <button className="w-1/2 flex justify-center items-center h-[58px] flex-col bg-white rounded font-sans font-normal border border-solid border-primary">
          <div className="text-bodyText  text-sm">{t("topSale")}</div>
          <div className="text-gray_1 text-xs">
            {t("sale.applyDiscountCode")}
          </div>
        </button>
      </div>
      <div className="w-full flex gap-y-6 flex-wrap px-4 bg-white  pb-4">
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
                select
                saleOne={data.saleOne}
                saleTwo={data.saleTwo}
              />
            </div>
          );
        })}
      </div>
      <div className="layout-primary bg-white border-y border-gray_4 border-solid flex justify-between w-full items-center">
        <div className="flex flex-1 items-center">
          <span className="f-normal inline-block mr-1">{t("classify")}</span>
          <Select
            inputId="single-select-example"
            className={`single-select ${styles.customSelect}`}
            classNamePrefix="react-select"
            options={options}
            placeholder={t("mostPopular")}
          />
        </div>
        <div className="ml-4">1~120 {t("product")}</div>
      </div>
      <div className="layout-primary flex bg-white justify-center mb-6">
        <button className="btn btn-number-primary ">1</button>
        <button className="btn btn-number-second ">2</button>
        <button className="btn btn-number-second ">3</button>
        <button className="btn btn-number-second ">4</button>
        <button className="btn btn-number-second ">...</button>
        <button className="btn btn-number-second ">500</button>
      </div>
      <FooterLayout />
    </>
  );
};
