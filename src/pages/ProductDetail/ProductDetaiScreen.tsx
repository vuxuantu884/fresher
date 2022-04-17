/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import {
  ComponentPopUpCoupon,
  ComponentPopUpCouponAdd,
  ComponentPopUpCouponFavorite,
  ComponentProduct,
  IConCardPlus,
  IConFacebook,
  IConHeart,
  IConHeartOutline,
  IConInstagram,
  IConMessage,
  IConRectangle,
  IConTimeLine,
  IConTwitter,
  IConYoutube,
} from "component";

import "swiper/css";
import "swiper/css/pagination";
import { CHECK_END, CHECK_START, PATH_ALL_PRODUCT, PATH_CARD } from "constant";
import { IProduct } from "types";
import {
  selectApp,
  setToggleAddCoupon,
  setToggleMessage,
  setToggleSelectTheQuestionProblem,
} from "store";

const images: Array<string> = [
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
  "/images/product/productDetail.png",
];

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

const ProductDetailScreen = () => {
  //page hook
  const dispatch = useDispatch();
  //page state
  const [currentImage, setCurrentImage] = useState<number>(1);
  //redux state
  const { popupSelectTheQuestionProblem, message, popupAddCoupon } =
    useSelector(selectApp);

  const handleCloseSelectTheQuestionProblem = () => {
    dispatch(setToggleSelectTheQuestionProblem());
  };

  const handleToggleMessage = () => {
    dispatch(setToggleMessage());
  };

  const handleAddCoupon = () => {
    dispatch(setToggleAddCoupon());
  };

  const handleChangSwiper = (swiper: any) => {
    const { activeIndex } = swiper;
    setCurrentImage(+activeIndex + 1);
  };

  return (
    <>
      {popupSelectTheQuestionProblem && <ComponentPopUpCoupon />}
      {message && <ComponentPopUpCouponFavorite />}
      {popupAddCoupon && <ComponentPopUpCouponAdd />}
      <div className="bg-[#47817E] f-normal text-xs text-white p-4">
        <div className="mb-2">
          Sản phẩm này được giảm <b>10% nhờ Coupon</b>{" "}
        </div>
        <div className="underline  underline-offset-1">
          Xem tất cả các sản phẩm được giảm 10%
        </div>
      </div>
      {/* slide */}
      <div className="w-full relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={handleChangSwiper}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index} className="cursor-pointer">
                <img className="w-full object-cover" src={image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute bottom-3 center z-10 px-4 justify-between w-full">
          <Link href={PATH_ALL_PRODUCT} passHref>
            <IConRectangle />
          </Link>
          <div className="py-0.5 p-3 rounded-full bg-[#4F4F4F] f-bold text-[10px] text-white">
            {currentImage} / {images.length}
          </div>
          <div className="w-10 h-10 bg-white rounded-full center flex-col">
            <IConHeartOutline onClick={handleCloseSelectTheQuestionProblem} />
            <div className="text-[8px] font-bold text-bodyText">120</div>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 pb-4">
        <div className="flex justify-center py-2">
          <img
            className="p-1 cursor-pointer"
            src="./images/product/productDetail2.png"
            alt=""
          />
          <img
            className="p-1 cursor-pointer"
            src="./images/product/productDetail3.png"
            alt=""
          />
          <img
            className="p-1 cursor-pointer"
            src="./images/product/productDetail4.png"
            alt=""
          />
        </div>
        <div className="f-bold text-base mb-3">
          Giày thể thao nữ, giày sneaker chữ M hoa cúc, thông hơi đế cao su siêu
          mềm
        </div>
        <div className="mb-3 flex">
          <div className="text-primary text-5 font-bold mr-2">2.599.000 đ</div>
          <div className="text-gray_2 text-[13px] font-semibold mr-2 line-through">
            3.599.000 đ
          </div>
          <div className="text-bodyText text-[11px] font-normal">
            (Đã bao gồm thuế)
          </div>
        </div>
        {/* Mã giảm giá */}
        <div className="f-normal font-semibold">Mã giảm giá</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex mb-4">
              <div className="text-bodyText p-1 px-3 bg-[#F7E04A] w-fit mr-4">
                20% sale
              </div>
              <div className="text-white p-1 px-3 bg-[#E54062] w-fit">
                30% off
              </div>
            </div>
            {/* IConTimeLine */}
            <div className="flex items-center f-normal text-xs mb-4">
              <IConTimeLine width={15} height={15} className="mr-1.5" />
              <span>Giảm giá sẽ hết sau 13 giờ 20 phút 02 giây</span>
            </div>
          </div>
          <IConMessage onClick={handleToggleMessage} />
        </div>
        {/*  */}
        <button className="btn btn-sub-primary f-normal text-bodyText mb-4">
          Sản phẩm này được{" "}
          <span className="text-primary inline-block mx-1"> đổi trả </span>{" "}
          trong vòng 7 ngày
        </button>
        <div className="f-normal font-semibold mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu non
          ornare urna, a auctor. In sed cursus felis in accumsan, hendrerit
          penatibus. Sed gravida molestie aliquet consectetur a pharetra duis
          mi. Eu gravida vitae risus enim ut. Nunc vestibulum vel scelerisque
          placerat sit faucibus sit id sagittis. <br />
          Feugiat risus diam massa viverra augue non, commodo risus urna. Enim
          et non lacus, integer sit vestibulum. Egestas tortor, vel pellentesque
          venenatis aliquam. Enim lorem.
        </div>
        <button
          className="btn btn-primary-full py-3 f-bold text-white mb-4"
          onClick={handleAddCoupon}
        >
          <IConCardPlus className="mr-3" /> Thêm vào giỏ hàng
        </button>
        <div className="w-full h-[42px] flex mb-3 border-b border-gray_4 border-solid">
          <div className="w-1/2 text-primary f-normal font-semibold center border-b border-primary border-solid">
            Thông tin
          </div>
          <div className="w-1/2 text-gray_2 f-normal font-semibold center ">
            Kích thước
          </div>
        </div>
        <div className="f-normal font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu non
          ornare urna, a auctor. In sed cursus felis in accumsan, hendrerit
          penatibus. Sed gravida molestie aliquet consectetur a pharetra duis
          mi. Eu gravida vitae risus enim ut. Nunc vestibulum vel scelerisque
          placerat sit faucibus sit id sagittis.
        </div>
        <div className="text-primary text-[14px] flex justify-end font-medium my-3">
          Xem thêm
        </div>
        {/* media */}
        <div className="flex justify-between mb-2 gap-x-2">
          <div className="w-1/4 py-3 center rounded bg-gray_4">
            <IConTwitter />
          </div>
          <div className="w-1/4 py-3 center rounded bg-gray_4">
            <IConFacebook />
          </div>
          <div className="w-1/4 py-3 center rounded bg-gray_4">
            <IConYoutube />
          </div>
          <div className="w-1/4 py-3 center rounded bg-gray_4">
            <IConInstagram />
          </div>
        </div>
        <div className="w-full flex justify-between gap-2 text-xs">
          <div className="p-2 text-gray_1 rounded border boder-gray_4 flex-1">
            https://www.locondo.jp/shop/commodity
          </div>
          <div className="py-2 px-4 rounded bg-gray_1 text-white ">
            Copy URL
          </div>
        </div>
      </div>
      {/* Các sản phẩm được mua cùng */}
      <div className="my-4 p-4 bg-white">
        <div className="f-bold text-base mb-4">Các sản phẩm được mua cùng</div>
        <div className="w-full flex gap-y-6 flex-wrap bg-white">
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
      </div>
    </>
  );
};

export default ProductDetailScreen;
