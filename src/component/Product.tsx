import { IProduct } from "types";
import { IConHeartPlusOutline } from ".";

interface IProps {
  data: IProduct;
  isHeart?: boolean;
}

export const ComponentProduct = (props: IProps) => {
  //page props

  const { data, isHeart = true } = props;

  return (
    <>
      <div className="w-full relative">
        <img src={data.img} className="w-full object-cover aspect-square" />
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="w-2/6 pr-0.5">
          <div className="w-full bg-gray_4 aspect-square flex align-middle justify-center">
            Ic
          </div>
        </div>
        <div className="w-2/6 px-[1px]">
          <div className="w-full bg-gray_4 aspect-square flex align-middle justify-center">
            Ic
          </div>
        </div>
        <div className="w-2/6 pl-0.5">
          <div className="w-full bg-gray_4 aspect-square flex align-middle justify-center">
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
