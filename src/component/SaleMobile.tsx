/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { setToggleShowSale } from "store";
import { PATH_COUPON } from "constant";
import { IConCloseCoupon } from ".";

interface IProps {
  handleToggleSale: () => void;
}
// eslint-disable-next-line react/display-name
export const ComponentSaleMobile = React.forwardRef<HTMLDivElement, IProps>(
  (props, ref) => {
    const { handleToggleSale } = props;

    return (
      <div className="bg-black/50 inset-0 z-10 absolute center">
        <div
          className="bg-black absolute top-[35vh] w-[90%] -translate-y-2/4 py-3 rounded-lg"
          ref={ref}
        >
          <div className="absolute right-0 top-0 -translate-y-2/4 translate-x-2/4">
            <IConCloseCoupon onClick={handleToggleSale} />
          </div>

          <div className="text-center">
            <div className="text-white uppercase text-base font-bold mb-1">
              Phiếu giảm giá hàng tuần
            </div>
            <div className="text-[#FF0000] text-xl font-medium mb-3">
              Max <span className="font-extrabold">10,000</span>{" "}
              <span className="uppercase font-extrabold">OFF</span>
            </div>
            <button className="f-normal text-base text-white border border-solid rounded-full border-white mb-4 py-0.5 px-2">
              Xem tất cả
            </button>
          </div>
          <ProductSale imageSrc="./images/Sale/product_sale1.png" />
          <ProductSale imageSrc="./images/Sale/product_sale1.png" />
          <ProductSale imageSrc="./images/Sale/product_sale1.png" />
          <ProductSale imageSrc="./images/Sale/product_sale1.png" />
        </div>
      </div>
    );
  }
);

interface IPropsProductSale {
  imageSrc: string;
}

const ProductSale = (props: IPropsProductSale) => {
  //page props
  const { imageSrc } = props;
  //page hooks
  const route = useRouter();
  const dispatch = useDispatch();

  const handleProductClick = () => {
    route.push(PATH_COUPON);
    dispatch(setToggleShowSale());
  };

  return (
    // 0.5px dashed #FFFFFF
    <div
      className="border-t-[0.5px] border-dashed border-white cursor-pointer"
      onClick={handleProductClick}
    >
      <div className="p-4 flex">
        <div className="w-16 h-16 mr-2 text-center">
          <img src={imageSrc} className="rounded-full" alt="" />
        </div>

        <div className="text-white flex flex-col items-start f-normal">
          <span className="uppercase">sub title</span>
          <span className="text-xs text-gray_1 mb-1">Lorem Ipsum</span>
          <button className="text-bodyText p-1 bg-[#F7E04A] w-fit text-[8px] font-semibold h-4 center">
            20% sale
          </button>
        </div>
      </div>
    </div>
  );
};
