import { IConFacebook, IConHeart, IConInstagram, IConTwitter, IConYoutube } from "./icon";

export const ComponentProductDetail2 = () => {
  return (
    <div>
      <div className="bg-[#47817E] text-[11px] text-white flex flex-col pl-4">
        <span className="mb-[7px] mt-3">
          Sản phẩm này được giảm <b>10% nhờ Coupon</b>{" "}
        </span>
        <span className="mb-3 underline  underline-offset-1">Xem tất cả các sản phẩm được giảm 10%</span>
      </div>
      <div className="relative">
        <div className="max-h-4/5">
          <img className="h-4/5" src="./images/productDetail/productDetail1.png" alt="" />
        </div>
        <div className="absolute left-7 bottom-[92px] w-10 h-10 bg-gray_2 rounded-2 flex flex-wrap p-1">
          <div className="w-2 h-2 bg-white m-[1px]"></div>
          <div className="w-2 h-2 bg-white m-[1px]"></div>
          <div className="w-2 h-2 bg-white m-[1px]"></div>
          <div className="w-2 h-2 bg-white m-[1px]"></div>
          <div className="w-2 h-2 bg-white m-[1px]"></div>
          <div className="w-2 h-2 bg-white m-[1px]"></div>
          <div className="w-2 h-2 bg-white m-[1px]"></div>
          <div className="w-2 h-2 bg-white m-[1px]"></div>
          <div className="w-2 h-2 bg-white m-[1px]"></div>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] bottom-[92px] w-10 h-4 bg-[#4F4F4F] rounded-[25px] text-white flex items-center justify-center text-[10px]">
          1/9
        </div>
        <div className="absolute right-7 bottom-[92px] w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center">
          <IConHeart color="#B61E42" width="12px" height="12px" />
          <span className="text-[8px] font-bold">120</span>
        </div>
      </div>
      <div className="bg-white px-4">
        <div className="flex justify-center my-2">
          <img className="p-1" src="./images/productDetail/productDetail2.png" alt="" />
          <img className="p-1" src="./images/productDetail/productDetail3.png" alt="" />
          <img className="p-1" src="./images/productDetail/productDetail4.png" alt="" />
        </div>
        <span className="text-bodyText text-4 font-bold leading-[19px] mb-4">
          Giày thể thao nữ, giày sneaker chữ M hoa cúc, thông hơi đế cao su siêu mềm
        </span>
        <div className="mb-4">
          <span className="text-primary text-5 font-bold mr-2">2.599.000 đ</span>
          <span className="text-gray_2 text-[13px] font-semibold mr-2 line-through">3.599.000 đ</span>
          <span className="text-bodyText text-[11px] font-normal">(Đã bao gồm thuế)</span>
        </div>
        <div className="text-bodyText text-[13px] font-semibold mb-4 leading-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu non ornare urna, a auctor. In sed cursus
          felis in accumsan, hendrerit penatibus. Sed gravida molestie aliquet consectetur a pharetra duis mi. Eu
          gravida vitae risus enim ut. Nunc vestibulum vel scelerisque placerat sit faucibus sit id sagittis. <br />
          Feugiat risus diam massa viverra augue non, commodo risus urna. Enim et non lacus, integer sit vestibulum.
          Egestas tortor, vel pellentesque venenatis aliquam. Enim lorem.
        </div>
        <div className="w-full h-10 uppercase text-white bg-primary flex items-center justify-center rounded border-transparent font-bold text-[14px] mb-[10px]">
          Thêm vào giỏ hàng
        </div>
        <div className="w-full h-[42px] flex mb-3">
          <div className="w-1/2 text-primary font-semibold text-[13px] flex items-center justify-center leading-4 border-b-4 border-primary">
            Thông tin
          </div>
          <div className="w-1/2 text-gray_2 font-semibold text-[13px] flex items-center justify-center leading-4 border-b-4 border-gray_4">
            Kích thước
          </div>
        </div>
        <div className="text-bodyText text-[13px] font-semibold leading-4 mb-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu non ornare urna, a auctor. In sed cursus
          felis in accumsan, hendrerit penatibus. Sed gravida molestie aliquet consectetur a pharetra duis mi. Eu
          gravida vitae risus enim ut. Nunc vestibulum vel scelerisque placerat sit faucibus sit id sagittis.
        </div>
        <div className="text-primary text-[14px] flex justify-end font-medium mb-4">Xem thêm</div>
        <div className="flex justify-between mb-2">
          <div className="w-20 h-10 flex justify-center items-center rounded bg-gray_4">
            <IConTwitter />
          </div>
          <div className="w-20 h-10 flex justify-center items-center rounded bg-gray_4">
            <IConFacebook />
          </div>
          <div className="w-20 h-10 flex justify-center items-center rounded bg-gray_4">
            <IConYoutube />
          </div>
          <div className="w-20 h-10 flex justify-center items-center rounded bg-gray_4">
            <IConInstagram />
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="h-[30px] text-gray_1 text-[11px] rounded border-[1px] boder-gray_4 flex items-center justify-center p-2">
            https://www.locondo.jp/shop/commodity/SMAM
          </div>
          <div className="w-20 h-[30px] rounded bg-gray_1 text-[11px] text-white flex items-center justify-center">Copy URL</div>
        </div>
      </div>
    </div>
  );
};
