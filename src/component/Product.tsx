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

export const ComponentProduct = (props: IProps) => {
  //page props

  const { data, isHeart = true, saleOne, saleTwo, close, select } = props;

  return (
    <>
      <div className="w-full relative">
        <img src={data.img} className="w-full object-cover aspect-square" />
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
