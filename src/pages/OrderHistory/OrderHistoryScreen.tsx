/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import {
  ComponentCancellation,
  ComponentInformation,
  ComponentMessage,
  ComponentProductDetail,
  ComponentSelectTheQuestionProblem,
} from "component";
import { enumStatusTransfer, PATH_ORDER_CANCELED } from "constant";
import {
  selectApp,
  setTogglePopupCancellation,
  setToggleSelectTheQuestionProblem,
} from "store";

const OrderHistoryScreen = () => {
  //page hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  //redux sate
  const { popupCancellation, popupSelectTheQuestionProblem } =
    useSelector(selectApp);
  ///page variable
  const dataTransfer = Object.values(enumStatusTransfer);
  //page state
  const [statusTransfer, setStatusTransfer] = useState<enumStatusTransfer>(
    dataTransfer[0]
  );

  const handleChangeStatus = (status: enumStatusTransfer) => {
    setStatusTransfer(status);
  };

  const handleCancellation = () => {
    dispatch(setTogglePopupCancellation());
  };

  const handleSelectTheQuestionProblem = () => {
    dispatch(setToggleSelectTheQuestionProblem());
  };

  return (
    <>
      {" "}
      {popupCancellation && <ComponentCancellation />}
      {popupSelectTheQuestionProblem && (
        <ComponentSelectTheQuestionProblem
          handleSelectTheQuestionProblem={handleSelectTheQuestionProblem}
        />
      )}
      <div className="bg-white border-t border-solid border-gray_4">
        <div className="p-4 pb-3 f-bold text-base ">
          {t("info.orderHistory")}
        </div>
        {/* menu */}
        <div className="flex w-full">
          {dataTransfer.map((data, index) => {
            return (
              <div
                className={`w-1/2 py-3 border-b-2 border-solid border-gray_4 text-center f-normal text-gray_2 cursor-pointer ${
                  data === statusTransfer && "border-primary text-primary"
                }`}
                key={index}
                onClick={() => {
                  handleChangeStatus(data);
                }}
              >
                {data}
              </div>
            );
          })}
        </div>
        <div className="text-right f-normal text-black m-4">
          1 ~ 1 {t("banner.product")}
        </div>
        {/* Product */}
        <div className="w-full px-4">
          <div className="w-full pt-[9px] border-t border-solid border-gray_4">
            <div className="pb-[18px] rounded border border-solid border-gray_3">
              {/* status transfer */}
              <div className="w-full py-2 px-3 bg-gray_4 border-b border-solid border-gray_3">
                <div className="f-normal mb-1">
                  <span className="inline-block mr-1">{t("orderStatus")}:</span>
                  <span className="f-bold ">Thành công</span>
                </div>
                <div className="f-normal mb-1">
                  <span className="inline-block mr-1">
                    {t("deliveryMethod")}:{" "}
                  </span>
                  <span className="f-bold ml-1">
                    Giao hàng thường (Yamato transpot) vận chuyển chuyên nghiệp
                  </span>
                </div>
              </div>
              {/* product */}
              <div className="p-3">
                <ComponentProductDetail />
                <div className="py-3 border-y border-solid border-gray_4 text-right">
                  <div className="f-normal">
                    <span className="inline-block mr-1">
                      {t("totalAmount")}:
                    </span>
                    <span className="f-bold text-primary">4.508.000 đ</span>
                  </div>
                </div>
                <div className="py-3 ">
                  <div className="f-normal mb-1">
                    <span className="inline-block mr-1">
                      {t("bookingDate")}:
                    </span>
                    <span className="f-bold">31/03/2022</span>
                  </div>
                  <div className="f-normal">
                    <span className="inline-block mr-1">
                      {t("orderNumber")}:
                    </span>
                    <span className="f-bold">31032022_28131278937</span>
                  </div>
                </div>
                <button
                  className="btn btn-sub-primary mb-2"
                  onClick={handleCancellation}
                >
                  {t("cancellation")}
                </button>
                <button
                  className="btn btn-sub-primary"
                  onClick={handleSelectTheQuestionProblem}
                >
                  {t("askAboutApplication")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="center py-4">
          <button className="btn btn-number-primary"> 1</button>
          <button className="btn btn-number-second"> 2</button>
        </div>
        <div className="px-4 text-right pb-4 f-bold underline">
          <Link href={PATH_ORDER_CANCELED} passHref>
            <span className="cursor-pointer">{t("historyCanceled")}</span>
          </Link>
        </div>
      </div>
      <ComponentInformation />
    </>
  );
};

export default OrderHistoryScreen;
