import { useRouter } from "next/router";

import { IConClose } from "./icon";
import productSaleImage from "../../public/images/Sale/product.png";
import Image from "next/image";

interface IProps {
  imageSrc: string;
  handleCloseSale: () => void;
}

export const ComponentSaleMobile = (props: IProps) => {
  // sale props
  const { handleCloseSale } = props;

  const handleCloseClick = () => {
    handleCloseSale();
  };

  return (
    <div className="bg-black/50 w-full h-full z-10 absolute overflow-auto pt-100px left-0 top-0">
      <div className="bg-black mt-14 mx-4 text-center relative rounded-lg w-[343px] h-[514px]">
        <IConClose
          className="w-[29px] h-[29px] absolute -top-2 -right-2 rounded-full bg-white"
          color={"black"}
          onClick={handleCloseClick}
        />

        <div className="">
          <div className="text-white uppercase text-base font-bold pt-5">Phiếu giảm giá hàng tuần</div>
          <div className="text-[#FF0000] text-xl font-medium mb-[14px]">
            Max <span className="font-extrabold">10,000</span> <span className="uppercase font-extrabold">OFF</span>
          </div>
          <button className="text-[13px] text-white font-normal border-[1px] border-solid rounded-lg border-white mb-[18px] px-1 pb-1 leading-[13px]">
            Xem tất cả
          </button>
        </div>
        <ProductSale imageSrc="./images/Sale/product_sale1.png" />
        <ProductSale imageSrc="./images/Sale/product_sale2.png" />
        <ProductSale imageSrc="./images/Sale/product_sale3.png" />
        <ProductSale imageSrc="./images/Sale/product_sale4.png" />
      </div>
    </div>
  );
};

const ProductSale = (props: IProps) => {
  const { imageSrc } = props;

  const route = useRouter();

  const handleProductClick = () => {
    route.push("/sale");
  };

  return (
    // 0.5px dashed #FFFFFF
    <div className="border-t-[0.5px] border-dashed border-white cursor-pointer" onClick={handleProductClick}>
      <div className="ml-[17px] mt-[15px] mb-[15px] flex justify-start">
        <div className="w-[64px] h-[64px] mr-2 text-center inline-block ">
          <img src={imageSrc} className="rounded-full" alt="" />
        </div>

        <div className="text-white flex flex-col items-start">
          <span className="text-[13px] font-normal uppercase mb-[3px]">sub title</span>
          <span className="text-[11px] font-normal text-gray_1">Lorem Ipsum</span>
          <div className="bg-[#F7E04A] text-bodyText text-[9px] h-[15px] px-[2px]">20% sale</div>
        </div>
      </div>
    </div>
  );
};
