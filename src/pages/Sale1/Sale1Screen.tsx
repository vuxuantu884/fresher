/* eslint-disable @next/next/no-img-element */
import resolveConfig from "tailwindcss/resolveConfig";
import { useTranslation } from "next-i18next";
import Select from "@atlaskit/select";

import {
  ComponentProduct,
  ComponentProductSale,
  IConArrowDow,
} from "component";
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
interface IProps {
  img: string;
  title: string;
  color: string;
}

const Sale1Screen = (props: IProps) => {
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
      <div className="bg-white px-4 pt-4 flex gap-x-3">
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
      <ComponentProductSale />

      <FooterLayout />
    </>
  );
};

export default Sale1Screen;
