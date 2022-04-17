/* eslint-disable @next/next/no-img-element */
import { PATH_WAREHOUSE } from "constant";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import {
  resetApp,
  setToggleAddCoupon,
  setToggleMessage,
  setToggleSelectTheQuestionProblem,
} from "store";
import { useOnClickOutside } from "utils";
import { IConClose, IConHearFull, IConHearEmpty } from ".";

export const ComponentPopUpCoupon = () => {
  //page ref
  const ref = useRef<HTMLDivElement>(null);
  //page hooks
  const dispatch = useDispatch();

  const handleCloseSelectTheQuestionProblem = () => {
    dispatch(setToggleSelectTheQuestionProblem());
  };

  useOnClickOutside(ref, handleCloseSelectTheQuestionProblem);

  return (
    <div className="bg-popup flex justify-center z-20">
      <div
        className="py-4 bg-white w-[90%] h-fit absolute top-[40vh] -translate-y-2/4 rounded"
        ref={ref}
      >
        <div className="absolute top-3 right-3">
          <IConClose onClick={handleCloseSelectTheQuestionProblem} />
        </div>

        <div className="f-bold text-base pl-4">Thêm sản phẩm vào yêu thích</div>
        <div className="p-4 pb-0">
          <div className="flex">
            <img
              src="/images/product/coupon.png"
              alt=""
              className="aspect-square object-cover"
            />
            <div className="p-3">
              <div className="f-bold font-semibold text-black mb-1">
                Sub Title
              </div>
              <div className="f-normal text-xs text-gray_1 mb-3">
                Lorem Ipsum Lorem Ipsum
              </div>
              <div className="f-bold text-primary">200.000 đ</div>
            </div>
          </div>
          <ProductItem like currentProduct />
          <ProductItem />
          <ProductItem />
          <ProductItem like />
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export const ComponentPopUpCouponFavorite = () => {
  //page ref
  const ref = useRef<HTMLDivElement>(null);
  //page hooks
  const dispatch = useDispatch();

  const handleCloseMessage = () => {
    dispatch(setToggleMessage());
  };

  useOnClickOutside(ref, handleCloseMessage);
  return (
    <>
      <div className="bg-popup flex justify-center z-20">
        <div
          className="py-4 bg-white w-[90%] h-fit absolute top-[40vh] -translate-y-2/4 rounded"
          ref={ref}
        >
          <div className="absolute top-3 right-3">
            <IConClose onClick={handleCloseMessage} />
          </div>
          <div className="f-bold text-center mb-4">
            Chọn một danh mục yêu cầu
          </div>
          <div className="px-3">
            <button className="btn btn-sub-primary mb-3">Về kích thước</button>
            <button className="btn btn-sub-primary mb-3">Về chất liệu</button>
            <button className="btn btn-sub-primary mb-3">Về âm thanh</button>
            <button className="btn btn-sub-primary">
              Về các sản phẩm khác
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const ComponentPopUpCouponAdd = () => {
  //page ref
  const ref = useRef<HTMLDivElement>(null);
  //page hooks
  const dispatch = useDispatch();

  const handleAddCoupon = () => {
    dispatch(setToggleAddCoupon());
  };

  useOnClickOutside(ref, handleAddCoupon);

  return (
    <div className="bg-popup flex justify-center z-20">
      <div
        className="py-4 bg-white w-[90%] h-fit absolute top-[40vh] -translate-y-2/4 rounded"
        ref={ref}
      >
        <div className="absolute top-3 right-3">
          <IConClose onClick={handleAddCoupon} />
        </div>

        <div className="f-bold text-base pl-4">Thêm sản phẩm vào yêu thích</div>

        <div className="p-4 pb-0">
          <div className="flex">
            <img
              src="/images/product/coupon.png"
              alt=""
              className="aspect-square object-cover"
            />
            <div className="p-3">
              <div className="f-bold font-semibold text-black mb-1">
                Sub Title
              </div>
              <div className="f-normal text-xs text-gray_1 mb-3">
                Lorem Ipsum Lorem Ipsum
              </div>
              <div className="f-bold text-primary">200.000 đ</div>
            </div>
          </div>
          <ProductItemAdd />
          <ProductItemAdd />
          <ProductItemAdd />
        </div>
      </div>
    </div>
  );
};
interface IPropsProductItem {
  like?: boolean;
  currentProduct?: boolean;
}

const ProductItem = (props: IPropsProductItem) => {
  //page hook
  const dispatch = useDispatch();
  //page props
  const { like, currentProduct } = props;
  const [likeState, setLike] = useState(like);

  const handleToggleLike = () => {
    setLike(!likeState);
  };

  const handleResetApp = () => {
    dispatch(resetApp());
  };

  return (
    <>
      <div className="py-3 flex justify-between border-b border-solid border-gray_4 items-center">
        <div>
          <div className="f-normal text-xs font-semibold mb-1">22.0</div>
          <div className="f-normal text-xs text-gray_1">Còn ít</div>
        </div>
        {likeState ? (
          <IConHearFull onClick={handleToggleLike} />
        ) : (
          <IConHearEmpty onClick={handleToggleLike} />
        )}
      </div>
      {likeState && currentProduct && (
        <div className="py-3 text-center  border-b border-solid border-gray_4 items-center">
          <div className="f-normal text-xs font-semibold mb-3">
            Sản phẩm được thêm vào yêu thích
          </div>
          <div className="px-6">
            <Link href={PATH_WAREHOUSE} passHref>
              <button
                onClick={handleResetApp}
                className="btn btn-primary-full py-3"
              >
                Đến Thư Mục Yêu Thích
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

const ProductItemAdd = (props: IPropsProductItem) => {
  //page hook
  const dispatch = useDispatch();
  const { t } = useTranslation();
  //page props
  const { like, currentProduct } = props;
  const [likeState, setLike] = useState(like);

  const handleToggleLike = () => {
    setLike(!likeState);
  };

  const handleResetApp = () => {
    dispatch(resetApp());
  };

  return (
    <>
      <div className="py-3 flex justify-between border-b border-solid border-gray_4 items-center">
        <div className="flex-1">
          <div className="f-normal text-xs font-semibold mb-1">22.0</div>
          <div className="f-normal text-xs text-gray_1">Còn ít</div>
        </div>
        <div className="flex items-center w-fit">
          <button className="btn btn-sub-full px-3 mr-4">
            {" "}
            {t("addToCart")}
          </button>
          {likeState ? (
            <IConHearFull onClick={handleToggleLike} />
          ) : (
            <IConHearEmpty onClick={handleToggleLike} />
          )}
        </div>
      </div>
      {likeState && currentProduct && (
        <div className="py-3 text-center  border-b border-solid border-gray_4 items-center">
          <div className="f-normal text-xs font-semibold mb-3">
            Sản phẩm được thêm vào yêu thích
          </div>
          <div className="px-6">
            <Link href={PATH_WAREHOUSE} passHref>
              <button
                onClick={handleResetApp}
                className="btn btn-primary-full py-3"
              >
                Đến Thư Mục Yêu Thích
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
