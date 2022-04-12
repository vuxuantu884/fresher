import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  ComponentEditAddress,
  ComponentInformation,
  ComponentDeliveryRecords,
} from "component";
import {
  resetApp,
  selectApp,
  setToggleDeliveryRecords,
  setToggleEditAddress,
} from "store";

const AddressScreen = () => {
  //page hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  //redux state
  const { deliveryRecords, editAddress } = useSelector(selectApp);

  useEffect(() => {
    return () => {
      dispatch(resetApp());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleDeliveryRecords = () => {
    dispatch(setToggleDeliveryRecords());
  };

  const handleToggleEditAddress = () => {
    dispatch(setToggleEditAddress());
  };

  return (
    <>
      {" "}
      {deliveryRecords ? (
        <ComponentDeliveryRecords
          handleToggleDeliveryRecords={handleToggleDeliveryRecords}
        />
      ) : editAddress ? (
        <ComponentEditAddress
          handleToggleEditAddress={handleToggleEditAddress}
        />
      ) : (
        <>
          <div className="p-4 f-bold text-base text-primary bg-white border-t border-solid border-gray_4">
            {t("deliveryAddress")}
          </div>
          {/* defaultAddress */}
          <div className="layout-primary f-normal font-semibold">
            {" "}
            {t("defaultAddress")}
          </div>
          {/* chi tiet address */}
          <div className="p-4 pb-0 bg-white">
            <div className="pb-4 w-full border-b border-solid border-gray_4">
              <div className="f-bold mb-2">Lê Bách</div>
              <div className="f-normal mb-2">
                S3 Goldmark City, 136 Hồ Tùng Mậu, Phường Phú Diễn, Quận Bắc Từ
                Liêm, Hà Nội
              </div>
              <div className="f-normal mb-3">(+84) 392 523 006</div>
              <div className="flex justify-between">
                <div className="flex f-normal text-xs">
                  <button
                    className="btn btn-address mr-2"
                    onClick={handleToggleDeliveryRecords}
                  >
                    {" "}
                    {t("deliveryHistory")}
                  </button>
                  <button
                    className="btn btn-address "
                    onClick={handleToggleEditAddress}
                  >
                    {" "}
                    {t("editAddress")}
                  </button>
                </div>
                <button className="f-normal text-primary btn-address">
                  {t("clear")}
                </button>
              </div>
            </div>
          </div>
          {/* otherAddress */}
          <div className="layout-primary f-normal font-semibold">
            {" "}
            {t("otherAddress")}
          </div>
          {/* otherAddress */}
          <div className="p-4 bg-white">
            <button className="btn-address-full f-normal mb-4">
              {t("addShippingAddress")}
            </button>
            <div className="pb-4 w-full border-b border-solid border-gray_4">
              <div className="f-bold mb-2">Lê Bách</div>
              <div className="f-normal mb-2">
                S3 Goldmark City, 136 Hồ Tùng Mậu, Phường Phú Diễn, Quận Bắc Từ
                Liêm, Hà Nội
              </div>
              <div className="f-normal mb-3">(+84) 392 523 006</div>
              <div className="flex justify-between">
                <div className="flex f-normal text-xs">
                  <button className="btn btn-address mr-2">
                    {" "}
                    {t("deliveryHistory")}
                  </button>
                  <button className="btn btn-address ">
                    {" "}
                    {t("editAddress")}
                  </button>
                </div>
                <button className="f-normal text-primary btn-address">
                  {t("clear")}
                </button>
              </div>
            </div>
            <div className="pb-4 w-full border-b border-solid border-gray_4">
              <div className="f-bold mb-2">Lê Bách</div>
              <div className="f-normal mb-2">
                S3 Goldmark City, 136 Hồ Tùng Mậu, Phường Phú Diễn, Quận Bắc Từ
                Liêm, Hà Nội
              </div>
              <div className="f-normal mb-3">(+84) 392 523 006</div>
              <div className="flex justify-between">
                <div className="flex f-normal text-xs">
                  <button className="btn btn-address mr-2">
                    {" "}
                    {t("deliveryHistory")}
                  </button>
                  <button className="btn btn-address ">
                    {" "}
                    {t("editAddress")}
                  </button>
                </div>
                <button className="f-normal text-primary btn-address">
                  {t("clear")}
                </button>
              </div>
            </div>
            <div className="pb-4 w-full ">
              <div className="f-bold mb-2">Lê Bách</div>
              <div className="f-normal mb-2">
                S3 Goldmark City, 136 Hồ Tùng Mậu, Phường Phú Diễn, Quận Bắc Từ
                Liêm, Hà Nội
              </div>
              <div className="f-normal mb-3">(+84) 392 523 006</div>
              <div className="flex justify-between">
                <div className="flex f-normal text-xs">
                  <button className="btn btn-address mr-2">
                    {" "}
                    {t("deliveryHistory")}
                  </button>
                  <button className="btn btn-address ">
                    {" "}
                    {t("editAddress")}
                  </button>
                </div>
                <button className="f-normal text-primary btn-address">
                  {t("clear")}
                </button>
              </div>
            </div>
          </div>
          <ComponentInformation />
        </>
      )}
    </>
  );
};

export default AddressScreen;
