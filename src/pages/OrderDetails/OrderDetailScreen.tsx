/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import resolveConfig from "tailwindcss/resolveConfig";

import {
  ComponentInformation,
  ComponentProductDetail,
  IConArrowLeft,
} from "component";
import tailwindConfig from "../../../tailwind.config";
import Link from "next/link";
import { PATH_ORDER_HISTORY } from "constant";

const fullConfig: any = resolveConfig(tailwindConfig);

const OrderDetailScreen = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <>
      <div className="p-4 bg-white border-t border-solid border-gray_4">
        {/* Chi tiết đơn hàng */}
        <div className="f-bold text-base mb-1">{t("orderDetail")}</div>
        <div className="f-normal mb-4">(28032022_ 2901381)</div>
        <div className="p-3 bg-gray_4 ">
          <div className="f-normal mb-1">
            <span className="inline-block mr-1">{t("orderStatus")}:</span>
            <span className="f-bold ">Thành công</span>
          </div>
          <div className="f-normal mb-1">
            <span className="inline-block mr-1">{t("deliveryMethod")}: </span>
            <span className="f-bold ml-1">
              Giao hàng thường (Yamato transpot) vận chuyển chuyên nghiệp
            </span>
          </div>
          <div className="f-normal mb-1">
            <span className="inline-block mr-1">{t("votes")}:</span>
            <span className="f-bold ">Thành công</span>
          </div>
        </div>
        <div className="mt-4">
          <span className="inline-block mr-1">
            {t("deliveryinformation")}:{" "}
          </span>
          <span className="f-bold ml-1">Lorem Ipsum</span>
        </div>
        <div className="mt-0.5 mb-4">
          <span className="inline-block mr-1">{t("receivedDate")}: </span>
          <span className="f-bold ml-1">28/03/2022</span>
        </div>
        {/* Thông tin đơn hàng */}
        <div className="py-4 border-t border-solid border-gray_4">
          <div className="f-bold text-base mb-4">
            {t("deliveryinformation")}
          </div>
          <ComponentProductDetail />
          <div className="flex mt-4">
            <div className="w-1/4">
              <img
                className="w-full object-cover"
                alt=""
                src="/images/order/order2.png"
              />
            </div>
            <div className="ml-2">
              <div className="mb-1">
                <span className="inline-block mr-1">
                  {t("product'sName")}:{" "}
                </span>
                <span className="f-bold ml-1 text-primary">
                  Siêu giảm giá - LACOSTE Men’s CROCO 2.0 (Trăng x Xanh)
                </span>
              </div>
              <div className="mb-1">
                <span className="inline-block mr-1">{t("size")}: </span>
                <span className="f-bold ml-1">44H (28.0cm)</span>
              </div>
              <div className="mb-1">
                <span className="inline-block mr-1">{t("price")}: </span>
                <span className="f-bold ml-1">2.000.000 đ</span>
              </div>
              <div className="mb-1">
                <span className="inline-block mr-1">{t("present")}: </span>
                <span className="f-bold ml-1">Không có</span>
              </div>
              <div className="mb-1">
                <span className="inline-block mr-1">{t("total")}: </span>
                <span className="f-bold ml-1">2.100.000 đ</span>
              </div>
              <div className="mb-1">
                <span className="inline-block mr-1">{t("amount")}: </span>
                <span className="f-bold ml-1">1</span>
              </div>
            </div>
          </div>
        </div>
        {/* Thanh toán */}
        <div className="p-3 bg-gray_4 mb-4">
          <div className="flex justify-between mb-2">
            <span className="f-font">{t("deliveryinformation")}</span>
            <span className="f-bold">4.200.000 đ</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="f-font">{t("postage")}</span>
            <span className="f-bold">330.000 đ</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="f-font">{t("paymentFees")}</span>
            <span className="f-bold">0 đ</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="f-font">{t("usePoints")}</span>
            <span className="f-bold">-20.000 đ</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="f-font">{t("useCoupons")}</span>
            <span className="f-bold">-2.000 đ</span>
          </div>
          <div className="flex justify-between">
            <span className="f-font">{t("totalPayment")}</span>
            <span className="f-bold text-primary">4.508.000 đ</span>
          </div>
        </div>
        {/* thông tin đặt hàng */}
        <div className="py-4 border-t border-solid border-gray_4">
          <div className="f-bold text-base mb-2">
            {t("info.customerInformation")}
          </div>
          <div className="mb-1">
            <span className="inline-block mr-1">{t("name")}: </span>
            <span className="f-bold ml-1">Lê Bách</span>
          </div>
          <div className="mb-1">
            <span className="inline-block mr-1">{t("address")}: </span>
            <span className="f-bold ml-1">
              2-32-161 Nomiyama-cho, Toyota, Aichi 471-0813
            </span>
          </div>
          <div className="mb-1">
            <span className="inline-block mr-1">{t("telephone")}: </span>
            <span className="f-bold ml-1">090-1823-7050</span>
          </div>
        </div>
        {/* Phương pháp chi trả */}
        <div className="py-4 border-t border-solid border-gray_4">
          <div className="f-bold text-base mb-2">{t("paymentMethod_pay")}</div>
          <div className="mb-1">
            <span className="inline-block mr-1">{t("credit")}: </span>
            <span className="f-bold ml-1">(Phí thanh toán: 0đ)</span>
          </div>
          <div className="mb-1">
            <span className="inline-block mr-1">{t("sentDate")}: </span>
            <span className="f-bold ml-1">28/03/2022</span>
          </div>
          <div className="mb-1">
            <span className="inline-block mr-1">{t("vouchersUsed")}: </span>
            <span className="f-bold ml-1">SCYH-0832_D02324JKH</span>
          </div>
        </div>
        {/* Xuất hàng */}
        <div className="py-4 border-y border-solid border-gray_4">
          <div className="f-bold text-base mb-2">{t("release")}</div>
          <div className="mb-1">
            <span className="inline-block mr-1">{t("transport")}: </span>
            <span className="f-bold ml-1">300.000 đ</span>
          </div>
          <div className="mb-1">
            <span className="inline-block mr-1">{t("shippingNumber")}: </span>
            <span className="f-bold ml-1">1209183LC</span>
          </div>
          <div className="mb-1">
            <span className="inline-block mr-1">{t("dayShipping")}: </span>
            <span className="f-bold ml-1">30/03/2022</span>
          </div>
        </div>
        <div className="my-4">
          <span className="inline-block mr-1">{t("deliveryMethod")}: </span>
          <span className="f-bold ml-1">Giao hàng nhanh (Reika express)</span>
        </div>
        <Link href={PATH_ORDER_HISTORY} passHref>
          <div className="flex cursor-pointer">
            <IConArrowLeft color={fullConfig.theme.colors.primary} />
            <span className="f-bold text-primary inline-block ml-1">
              {t("returnHistory")}
            </span>
          </div>
        </Link>
      </div>
      <ComponentInformation />
    </>
  );
};

export default OrderDetailScreen;
