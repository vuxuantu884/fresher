import { IConArrowDow } from "./icon";

export const ComponentSale = () => {
  return (
    <div className="h-10 border-[1px] border-solid border-black flex items-center justify-between">
      <span className="text-[13px] ml-[13px] text-bodyText font-normal">Có tất cả 23342 sản phẩm</span>
      <div className="mr-5">
        <IConArrowDow color="#B61E42" />
      </div>
    </div>
  );
};
