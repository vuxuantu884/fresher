/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";

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
          <div className="flex mb-4">
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
          <div className="flex mb-4">
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
      </div>
    </>
  );
};

export default OrderDetailScreen;
