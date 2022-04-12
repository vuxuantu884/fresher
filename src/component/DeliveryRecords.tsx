import { useTranslation } from "next-i18next";
import resolveConfig from "tailwindcss/resolveConfig";

import { IConArrowLeft } from ".";
import tailwindConfig from "../../tailwind.config";

const fullConfig: any = resolveConfig(tailwindConfig);

interface IProps {
  handleToggleDeliveryRecords: () => void;
}

export const ComponentDeliveryRecords = (props: IProps) => {
  //page props
  const { handleToggleDeliveryRecords } = props;
  //page hooks
  const { t } = useTranslation();

  return (
    <>
      <div className="p-4 flex">
        <IConArrowLeft
          color={fullConfig.theme.colors.primary}
          onClick={handleToggleDeliveryRecords}
        />
        <div className="flex-1 text-center f-bold text-base">
          {t("deliveryRecords")}
        </div>
      </div>
      <div className="p-4 pb-0 bg-white">
        <div className="pb-4 w-full border-b border-solid border-gray_4">
          <div className="f-bold mb-2 text-primary">Lê Bách</div>
          <div className="f-normal mb-2">
            S3 Goldmark City, 136 Hồ Tùng Mậu, Phường Phú Diễn, Quận Bắc Từ
            Liêm, Hà Nội
          </div>
          <div className="f-normal mb-3">(+84) 392 523 006</div>
        </div>
      </div>
      <div className="p-4 text-right bg-white f-normal">
        2 ~ 2 {t("banner.product")}
      </div>
      {/* chi tiet ho so giao hang */}
      <div className="p-4 pt-0 bg-white">
        <div className="py-3 border-t border-solid border-gray_4 cursor-pointer">
          <div className="w-full f-normal text-gray_1">
            <div className="flex w-full mb-2">
              <div className="min-w-[27%]">
                <span>{t("shippingNumber")}</span>
                <span className="inline-block">:</span>
              </div>
              <div className="f-normal ml-2">2134901283401283</div>
            </div>
            <div className="flex w-full mb-2">
              <div className="min-w-[27%]">
                <span>{t("product'sName")}</span>
                <span className="inline-block">:</span>
              </div>
              <div className="f-normal ml-2">
                {" "}
                Siêu giảm giá - LACOSTE Men’s CROCO 2.0 (Trăng x Xanh) CROCO 2.0
                (Trăng x Xanh) CROCO 2.0 (Trăng x Xanh)
              </div>
            </div>
            <div className="flex w-full mb-2">
              <div className="min-w-[27%]">
                <span>{t("totalAmount")}</span>
                <span className="inline-block">:</span>
              </div>
              <div className="f-normal ml-2">3.000.000 đ</div>
            </div>
            <div className="flex w-full mb-2">
              <div className="min-w-[27%]">
                <span>{t("orderDate")}</span>
                <span className="inline-block">:</span>
              </div>
              <div className="f-normal ml-2">04/04/2022 12:12:12</div>
            </div>
            <div className="flex w-full">
              <div className="min-w-[27%]">
                <span>{t("deliveryDate")}</span>
                <span className="inline-block">:</span>
              </div>
              <div className="f-normal ml-2">04/04/2022</div>
            </div>
          </div>
        </div>
        <div className="py-3 border-y border-solid border-gray_4 cursor-pointer">
          <div className="w-full f-normal text-gray_1">
            <div className="flex w-full mb-2">
              <div className="min-w-[27%]">
                <span>{t("shippingNumber")}</span>
                <span className="inline-block">:</span>
              </div>
              <div className="f-normal ml-2">2134901283401283</div>
            </div>
            <div className="flex w-full mb-2">
              <div className="min-w-[27%]">
                <span>{t("product'sName")}</span>
                <span className="inline-block">:</span>
              </div>
              <div className="f-normal ml-2">
                {" "}
                Siêu giảm giá - LACOSTE Men’s CROCO 2.0 (Trăng x Xanh) CROCO 2.0
                (Trăng x Xanh) CROCO 2.0 (Trăng x Xanh)
              </div>
            </div>
            <div className="flex w-full mb-2">
              <div className="min-w-[27%]">
                <span>{t("totalAmount")}</span>
                <span className="inline-block">:</span>
              </div>
              <div className="f-normal ml-2">3.000.000 đ</div>
            </div>
            <div className="flex w-full mb-2">
              <div className="min-w-[27%]">
                <span>{t("orderDate")}</span>
                <span className="inline-block">:</span>
              </div>
              <div className="f-normal ml-2">04/04/2022 12:12:12</div>
            </div>
            <div className="flex w-full">
              <div className="min-w-[27%]">
                <span>{t("deliveryDate")}</span>
                <span className="inline-block">:</span>
              </div>
              <div className="f-normal ml-2">04/04/2022</div>
            </div>
          </div>
        </div>
      </div>
      <div className="center bg-white pb-4">
        <button className="btn btn-number-primary">1</button>
        <button className="btn btn-number-second">2</button>
      </div>
    </>
  );
};
