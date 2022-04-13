/* eslint-disable @next/next/no-img-element */
import resolveConfig from "tailwindcss/resolveConfig";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { IConArrowLeft } from "component";
import tailwindConfig from "../../../tailwind.config";

const fullConfig: any = resolveConfig(tailwindConfig);

const OrderCanceledScreen = () => {
  //page hooks
  const { t } = useTranslation();
  const route = useRouter();

  const handleBack = () => {
    route.back();
  };

  return (
    <>
      <div className="p-4 bg-gray_4 flex">
        <IConArrowLeft
          color={fullConfig.theme.colors.primary}
          onClick={handleBack}
        />
        <div className="text-center f-bold flex-1 text-base">
          {t("orderCanceled")}
        </div>
      </div>
      {/* product 1 */}
      <div className="layout-primary bg-white mb-4">
        <div className="flex">
          <div className="w-1/4">
            <img
              className="w-full object-cover"
              alt=""
              src="/images/order/order2.png"
            />
          </div>
          <div className="ml-2">
            <div className="mb-1">
              <span className="f-bold text-primary">
                Siêu giảm giá - LACOSTE CROCO 2.0 (Trắng x Xanh)
              </span>
            </div>
            <div className="mb-1">
              <span className="inline-block mr-1">{t("size")}: </span>
              <span className="f-bold ml-1">44H (28.0cm)</span>
            </div>
          </div>
        </div>
        <div className="py-3 bg-white mt-2 border-y border-solid border-gray_4">
          <div className="flex justify-between">
            <div className="f-normal text-gray_2">1 {t("banner.product")}</div>
            <div className="f-normal">
              {t("total")}:{" "}
              <span className="text-primary font-bold">200.000 đ</span>
            </div>
          </div>
        </div>
        <div className="pt-3 bg-white">
          <div className="flex justify-between items-center">
            <div className="f-normal text-gray_2">{t("canceledByYou")}</div>
            <div>
              <button className="btn btn-repurchase">{t("repurchase")}</button>
            </div>
          </div>
        </div>
      </div>
      {/* product 2 */}
      <div className="layout-primary bg-white mb-4">
        <div className="flex">
          <div className="w-1/4">
            <img
              className="w-full object-cover"
              alt=""
              src="/images/order/order2.png"
            />
          </div>
          <div className="ml-2">
            <div className="mb-1">
              <span className="f-bold text-primary">
                Siêu giảm giá - LACOSTE CROCO 2.0 (Trắng x Xanh)
              </span>
            </div>
            <div className="mb-1">
              <span className="inline-block mr-1">{t("size")}: </span>
              <span className="f-bold ml-1">44H (28.0cm)</span>
            </div>
          </div>
        </div>
        {/* total */}
        <div className="py-3 bg-white mt-2 border-y border-solid border-gray_4">
          <div className="flex justify-between">
            <div className="f-normal text-gray_2">1 {t("banner.product")}</div>
            <div className="f-normal">
              {t("total")}:{" "}
              <span className="text-primary font-bold">200.000 đ</span>
            </div>
          </div>
        </div>
        {/* Đơn hàng không thể tiếp tục giao đến bạn do kho vận lỗi */}
        <div className="py-3 border-b border-solid border-gray_4 f-normal text-second">
          {t("productError")}
        </div>
        <div className="pt-3 bg-white">
          <div className="flex justify-between items-center">
            <div className="f-normal text-gray_2">{t("canceledByYou")}</div>
            <div>
              <button className="btn btn-repurchase">{t("repurchase")}</button>
            </div>
          </div>
        </div>
      </div>
      {/* product 3 */}
      <div className="layout-primary bg-white mb-4">
        <div className="flex mb-2">
          <div className="w-1/4">
            <img
              className="w-full object-cover"
              alt=""
              src="/images/order/order2.png"
            />
          </div>
          <div className="ml-2">
            <div className="mb-1">
              <span className="f-bold text-primary">
                Siêu giảm giá - LACOSTE CROCO 2.0 (Trắng x Xanh)
              </span>
            </div>
            <div className="mb-1">
              <span className="inline-block mr-1">{t("size")}: </span>
              <span className="f-bold ml-1">44H (28.0cm)</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4">
            <img
              className="w-full object-cover"
              alt=""
              src="/images/order/order2.png"
            />
          </div>
          <div className="ml-2">
            <div className="mb-1">
              <span className="f-bold text-primary">
                Siêu giảm giá - LACOSTE CROCO 2.0 (Trắng x Xanh)
              </span>
            </div>
            <div className="mb-1">
              <span className="inline-block mr-1">{t("size")}: </span>
              <span className="f-bold ml-1">44H (28.0cm)</span>
            </div>
          </div>
        </div>
        {/* xem them */}
        <div className="text-right mt-2 text-primary">{t("home.seeMore")}</div>
        {/* total */}
        <div className="py-3 bg-white mt-2 border-y border-solid border-gray_4">
          <div className="flex justify-between">
            <div className="f-normal text-gray_2">1 {t("banner.product")}</div>
            <div className="f-normal">
              {t("total")}:{" "}
              <span className="text-primary font-bold">200.000 đ</span>
            </div>
          </div>
        </div>
        {/* Đơn hàng không thể tiếp tục giao đến bạn do kho vận lỗi */}
        <div className="py-3 border-b border-solid border-gray_4 f-normal text-second">
          {t("productError")}
        </div>
        <div className="pt-3 bg-white">
          <div className="flex justify-between items-center">
            <div className="f-normal text-gray_2">{t("canceledByYou")}</div>
            <div>
              <button className="btn btn-repurchase">{t("repurchase")}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCanceledScreen;
