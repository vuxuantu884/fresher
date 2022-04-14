/* eslint-disable @next/next/no-img-element */
import Select from "@atlaskit/select";
import { useTranslation } from "next-i18next";

import { IProduct } from "types";
import { IConHeartPlusOutline, IConCloseFull } from ".";

interface IProps {
  data: IProduct;
  isHeart?: boolean;
  saleOne?: boolean;
  saleTwo?: boolean;
  close?: boolean;
  select?: boolean;
}

const options = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "5", value: "5" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
];

export const ComponentProduct = (props: IProps) => {
  //page props

  const { data, isHeart = true, saleOne, saleTwo, close, select } = props;

  return (
    <>
      <div className="w-full relative">
        <img
          src={data.img}
          className="w-full object-cover aspect-square"
          alt=""
        />
        <div className="absolute bottom-0 left-0 font-sans text-[9px] not-italic font-semibold">
          {saleOne && (
            <div className="text-bodyText p-1 bg-[#F7E04A] w-fit">20% sale</div>
          )}
          {saleTwo && (
            <div className="text-white p-1 bg-[#E54062] w-fit">30% off</div>
          )}
        </div>
        {close && (
          <div className="absolute top-1 right-1 ">
            <IConCloseFull />
          </div>
        )}
        {select && (
          <div className="absolute top-0 left-0 p-0.5 bg-gray_2 text-white font-sans font-normal not-italic text-[8px] cursor-pointer">
            SELECT
          </div>
        )}
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="w-2/6 pr-0.5 ">
          <div className="w-full bg-gray_4 aspect-square flex  items-center justify-center">
            Ic
          </div>
        </div>
        <div className="w-2/6 px-[1px]">
          <div className="w-full bg-gray_4 aspect-square flex items-center justify-center">
            Ic
          </div>
        </div>
        <div className="w-2/6 pl-0.5">
          <div className="w-full bg-gray_4 aspect-square flex items-center justify-center">
            Ic
          </div>
        </div>
      </div>
      <div className="font-sans not-italic text-bodyText text-sm font-bold mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
        {data.title}
      </div>
      <div className="font-sans not-itali text-gray_1 text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis">
        {data.desc}
      </div>
      <div className="flex justify-between items-end mt-0.5">
        <span className="font-sans font-bold text-xs not-italic text-bodyText">
          {data.price.toFixed(3)} đ
        </span>
        {isHeart && (
          <IConHeartPlusOutline className="inline-block relative top-[-2px] " />
        )}
      </div>
    </>
  );
};

export const ComponentProductSecond = (props: IProps) => {
  //page props

  const { data, isHeart = true, saleOne, saleTwo, close, select } = props;

  return (
    <>
      <div className="w-full relative">
        <img
          src={data.img}
          className="w-full object-cover aspect-square"
          alt=""
        />
        <div className="absolute bottom-0 left-0 font-sans text-[9px] not-italic font-semibold">
          {saleOne && (
            <div className="text-bodyText p-1 bg-[#F7E04A] w-fit">20% sale</div>
          )}
          {saleTwo && (
            <div className="text-white p-1 bg-[#E54062] w-fit">30% off</div>
          )}
        </div>
        {close && (
          <div className="absolute top-1 right-1 ">
            <IConCloseFull />
          </div>
        )}
        {select && (
          <div className="absolute top-0 left-0 p-0.5 bg-gray_2 text-white font-sans font-normal not-italic text-[8px] cursor-pointer">
            SELECT
          </div>
        )}
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="w-2/6 pr-0.5 ">
          <div className="w-full bg-gray_4 aspect-square flex  items-center justify-center">
            Ic
          </div>
        </div>
        <div className="w-2/6 px-[1px]">
          <div className="w-full bg-gray_4 aspect-square flex items-center justify-center">
            Ic
          </div>
        </div>
        <div className="w-2/6 pl-0.5">
          <div className="w-full bg-gray_4 aspect-square flex items-center justify-center">
            Ic
          </div>
        </div>
      </div>
      <div className="font-sans not-italic text-gray_1 text-sm font-bold mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
        {data.title}
      </div>
      <div className="font-sans not-itali text-gray_1 text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis">
        {data.desc}
      </div>
      <div className="flex justify-between items-end mt-0.5">
        <span className="font-sans font-bold text-xs not-italic text-primary">
          {data.price.toFixed(3)} đ
        </span>
        {isHeart && (
          <IConHeartPlusOutline className="inline-block relative top-[-2px] " />
        )}
      </div>
    </>
  );
};

export const ComponentProductCard = () => {
  //page hook
  const { t } = useTranslation();
  return (
    <div className="w-full border rounded-lg border-solid border-gray_3 p-3 flex">
      <div className="w-1/4">
        <img
          className="w-full object-cover"
          alt=""
          src="/images/order/order2.png"
        />
      </div>
      <div className="ml-3">
        <div className="f-bold">Áo thun</div>
        <div className="f-normal text-xs text-gray_1 mb-1">
          <span className="inline-block mr-2">Mô tả ngắn:</span>
          <span> Lorem Ipsum is simply dummy text of the printing</span>
        </div>
        <div className="f-normal text-xs text-gray_1 mb-1">
          <span className="inline-block mr-2">Kích thước:</span>
          <span> M</span>
        </div>
        <div className="f-normal text-xs text-gray_1 mb-1">
          <span className="inline-block mr-2">Màu sắc:</span>
          <span>White</span>
        </div>
        <div className="f-bold text-base text-primary mb-1">200.000 đ</div>
        <div className="flex justify-between items-start">
          <div className="f-normal text-xs text-gray_1 mb-1 flex">
            <span className="inline-block mr-2">Số lượng:</span>
            <span className="block">
              <Select
                inputId="single-select-example"
                className="single-select"
                classNamePrefix="react-select"
                options={options}
                value={{ label: "1", value: "1" }}
              />
            </span>
          </div>
          <div className="f-normal text-[#EE4848] cursor-pointer">
            {t("clear")}
          </div>
        </div>
      </div>
    </div>
  );
};
