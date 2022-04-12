/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { ComponentRank, IConFileText } from "component";
import { PATH_POINT } from "constant";
import { selectApp, setTogglePopup } from "store";

const ProfileScreen = () => {
  //page hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  //redux state
  const { popup } = useSelector(selectApp);

  const handleRank = () => {
    dispatch(setTogglePopup());
  };

  return (
    <>
      {popup && <ComponentRank />}
      <div className="p-4 bg-white border-t border-solid border-gray_4 f-normal font-semibold">
        {t("personalPage")}
      </div>
      {/* Rank */}
      <div className="w-full relative cursor-pointer" onClick={handleRank}>
        <img className="w-full object-cover" alt="" src="/images/bgRank.png" />
        <div className="absolute inset-0 flex flex-col justify-between items-center p-2">
          <div className="f-normal text-base font-bold text-black">
            {t("newreiClubMember")}
          </div>
          <div className="f-normal text-[38px] font-bold text-white">
            {t("silver")}
          </div>
          <div className="f-normal ">
            Bạn đang có <span className="font-semibold">123</span> điểm, còn 100
            điểm để đạt cấp độ vàng
          </div>
        </div>
      </div>
      {/* diem*/}
      <div className="p-4 bg-white mt-4">
        <div className="w-full flex justify-center mb-4">
          <Link href={PATH_POINT || ""} passHref>
            <button className="btn btn-sub">{t("point")}</button>
          </Link>
        </div>
        <div className="w-full flex justify-center f-normal font-bold text-[32px]">
          728
        </div>
        <div className="w-full flex justify-center f-normal mt-2">
          {t("dueDate")}:{" "}
          <span className="font-semibold inline-block ml-1"> 26/09/2022</span>
        </div>
      </div>
      {/* menu*/}
      <div className="p-4 bg-white mt-4">
        <div className="w-full flex justify-center mb-4">
          <button className="btn btn-sub">{t("menu")}</button>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-1/2 center flex-col justify-start">
            <IConFileText />
            <span className="f-normal font-semibold inline-block mt-4 mb-6">
              {t("info.orderHistory")}
            </span>
          </div>
          <div className="w-1/2 center flex-col justify-start">
            <IConFileText />
            <span className="f-normal font-semibold inline-block mt-4 mb-6">
              {t("info.orderHistory")}
            </span>
          </div>
          <div className="w-1/2 center flex-col justify-start">
            <IConFileText />
            <span className="f-normal font-semibold inline-block mt-4">
              {t("info.orderHistory")}
            </span>
          </div>
          <div className="w-1/2 center flex-col justify-start">
            <IConFileText />
            <span className="f-normal font-semibold inline-block mt-4">
              {t("info.orderHistory")}
            </span>
          </div>
        </div>
      </div>
      {/* thong tin dang ky */}
      <div className="p-4 bg-white my-4 ">
        {" "}
        <div className="w-full flex justify-center mb-4">
          <button className="btn btn-sub">
            {t("registrationInformation")}
          </button>
        </div>
        <div className="p-2 bg-gray_4 mb-2">
          <div className="f-normal mb-1.5">
            {t("orderStatus")}: <span className="f-bold">Đang vận chuyển</span>
          </div>
          <div className="f-normal">
            {t("paymentMethod")}: <span className="f-bold">Thẻ Visa</span>
          </div>
        </div>
        <div className="w-full flex">
          <img
            src="/images/order/order1.png"
            className="w-1/5 object-cover aspect-square"
          />
          <div className="ml-2">
            <div className="f-normal text-black">
              Giảm giá thời trang
              <span className="f-bold inline-block mx-1">
                {" "}
                Adidas BASEBALL CAP
              </span>
              (Đen)
            </div>
            <div className="f-normal">
              <span className="f-bold inline-block mr-1">200.000 đ</span> /1 sản
              phẩm
            </div>
            <div className="f-normal">Kho: N/A</div>
          </div>
        </div>
        <div className="py-2 bg-white mt-2 border-y border-solid border-gray_4">
          <div className="text-right f-normal">
            {t("total")}:{" "}
            <span className="text-primary font-bold">200.000 đ</span>
          </div>
        </div>
        <div className="w-full my-2 f-normal mb-4">
          <div className="">
            {t("bookingDate")}:
            <span className="f-bold inline-block ml-1">28/03/2022</span>
          </div>{" "}
          <div className="">
            {t("codeOrders")}:
            <span className="f-bold inline-block ml-1">
              20222803_21930821093
            </span>
          </div>{" "}
        </div>
        <div className="w-full center f-normal py-3 bg-gray_4 rounded border-solid border border-primary mb-2">
          <button className="btn w-[70%]">{t("orderDetails")}</button>
        </div>
        <button className="btn btn-sub-primary">{t("aboutOrder")}</button>
      </div>
    </>
  );
};

export default ProfileScreen;
