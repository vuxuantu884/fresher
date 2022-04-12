import { useTranslation } from "next-i18next";

/* eslint-disable @next/next/no-img-element */
export const ComponentProductDetail = () => {
  //page hooks
  const { t } = useTranslation();

  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <img
          className="w-full object-cover"
          alt=""
          src="/images/order/order2.png"
        />
      </div>
      <div className="ml-2">
        <div className="mb-1">
          <span className="inline-block mr-1">{t("product'sName")}: </span>
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
  );
};
